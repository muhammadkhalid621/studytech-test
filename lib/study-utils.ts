import {
  attempts,
  domains,
  questions,
  skills,
  skillSets,
} from "@/lib/data";
import { defaultQuizPlan, studyContentBySkill } from "@/lib/study-content";
import type {
  Question,
  QuizAttempt,
  RecentAttempt,
  Skill,
  SkillPerformance,
  StudySession,
} from "@/types/study";

export function getQuestionById(questionId: string) {
  return questions.find((question) => question.id === questionId);
}

export function getSkillContext(skill: Skill) {
  const skillSet = skillSets.find((item) => item.id === skill.skillSetId);
  const domain = domains.find((item) => item.id === skillSet?.domainId);

  return {
    skillSetName: skillSet?.name ?? "Unknown skill set",
    domainName: domain?.name ?? "Unknown domain",
    examWeight: domain?.examWeight ?? 0,
  };
}

export function getSkillPerformance(userId: string): SkillPerformance[] {
  const userAttempts = attempts.filter((attempt) => attempt.userId === userId);

  return skills
    .map((skill) => {
      const matchingAttempts = userAttempts.filter((attempt) => {
        const question = getQuestionById(attempt.questionId);
        return question?.skillId === skill.id;
      });

      const validAttempts = matchingAttempts.filter((attempt) => getQuestionById(attempt.questionId));
      const correct = validAttempts.filter((attempt) => attempt.isCorrect).length;
      const attemptCount = validAttempts.length;
      const accuracy = attemptCount > 0 ? correct / attemptCount : 1;
      const context = getSkillContext(skill);
      const missedAttemptScore = attemptCount * (1 - accuracy);
      const examWeightScore = context.examWeight / 100;
      const weaknessScore = missedAttemptScore + examWeightScore;

      return {
        skill,
        skillSetName: context.skillSetName,
        domainName: context.domainName,
        attempts: attemptCount,
        correct,
        accuracy,
        weaknessScore,
      };
    })
    .filter((performance) => performance.attempts > 0)
    .sort((a, b) => {
      if (b.weaknessScore !== a.weaknessScore) {
        return b.weaknessScore - a.weaknessScore;
      }

      return a.accuracy - b.accuracy;
    });
}

export function getRecentAttempts(userId: string): RecentAttempt[] {
  return attempts
    .filter((attempt) => attempt.userId === userId)
    .flatMap((attempt) => {
      const question = getQuestionById(attempt.questionId);
      const skill = skills.find((item) => item.id === question?.skillId);

      if (!question) {
        return [];
      }

      return [{
        ...attempt,
        question: question as Question,
        skill,
      }];
    })
    .sort((a, b) => new Date(b.answeredAt).getTime() - new Date(a.answeredAt).getTime());
}

export function createStudySession(userId: string): StudySession {
  const [weakestSkill] = getSkillPerformance(userId);

  if (!weakestSkill) {
    return {
      explanation:
        "No quiz attempts are available yet. Complete a short diagnostic quiz first so the app can identify the best skill to study next.",
      lessonSummary:
        "Start with a broad review of the AWS Cloud Practitioner domains: Cloud Concepts, Security and Compliance, Cloud Technology and Services, and Billing, Pricing, and Support. After the first quiz attempt, this section will focus on the weakest measured skill.",
      flashcards: [
        {
          front: "What should a first study session establish?",
          back: "A baseline across the main exam domains so weak areas can be detected accurately.",
        },
        {
          front: "Why map questions to skills?",
          back: "It turns quiz results into specific study recommendations instead of a generic score.",
        },
        {
          front: "What happens after the first quiz?",
          back: "The app ranks attempted skills and recommends the weakest one for focused practice.",
        },
      ],
      quizPlan: defaultQuizPlan,
    };
  }

  const content = studyContentBySkill[weakestSkill.skill.id] ?? {
    lessonSummary:
      "Review the core definition of this AWS concept, then connect it to a real exam scenario. Focus on when the service or model is used, what problem it solves, and which distractor answers sound similar but are wrong.",
    flashcards: [
      {
        front: `What does ${weakestSkill.skill.name} help you understand?`,
        back: `It explains an important part of ${weakestSkill.domainName} for the ${weakestSkill.skillSetName} skill set.`,
      },
      {
        front: "How should you study a missed AWS concept question?",
        back: "Map the missed answer to the domain, learn the core service responsibility, then retry a similar question.",
      },
      {
        front: "What makes a study session effective?",
        back: "It focuses on one weak skill, gives a concise explanation, and ends with targeted retrieval practice.",
      },
    ],
    quizPlan: defaultQuizPlan,
  };

  return {
    weakestSkill,
    explanation: `${weakestSkill.skill.name} was selected because ${weakestSkill.correct} of ${weakestSkill.attempts} related attempts were correct. The topic is part of ${weakestSkill.domainName}, so improving it should help exam readiness.`,
    lessonSummary: content.lessonSummary,
    flashcards: content.flashcards,
    quizPlan: content.quizPlan,
  };
}

export function getOverallAccuracy(userAttempts: QuizAttempt[]) {
  const validAttempts = userAttempts.filter((attempt) => getQuestionById(attempt.questionId));

  if (validAttempts.length === 0) {
    return 0;
  }

  const correct = validAttempts.filter((attempt) => attempt.isCorrect).length;
  return Math.round((correct / validAttempts.length) * 100);
}
