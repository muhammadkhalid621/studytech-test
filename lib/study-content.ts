import type { Flashcard } from "@/types/study";

export type StudyContent = {
  lessonSummary: string;
  flashcards: Flashcard[];
  quizPlan: string[];
};

export const defaultQuizPlan = [
  "Identify the AWS service or model being tested.",
  "Eliminate two distractors that belong to a different domain.",
  "Choose the answer that best matches the responsibility or use case.",
  "Explain why the correct answer is better than the selected wrong answer.",
  "Retry a similar question without looking at notes.",
];

export const studyContentBySkill: Record<string, StudyContent> = {
  skill_iam_users_roles: {
    lessonSummary:
      "IAM roles are the preferred way to delegate temporary permissions in AWS. Unlike long-lived access keys, a role can be assumed by users, applications, or AWS services and receives short-term credentials. For the Cloud Practitioner exam, remember that the root user should be protected, day-to-day access should use least privilege, and roles are safer than sharing permanent credentials.",
    flashcards: [
      {
        front: "What is the best AWS identity mechanism for temporary access?",
        back: "An IAM role, because it provides short-term credentials for a trusted principal.",
      },
      {
        front: "Why avoid hard-coded access keys?",
        back: "They are long-lived secrets that can leak and are harder to rotate safely.",
      },
      {
        front: "What principle should IAM permissions follow?",
        back: "Least privilege: grant only the actions and resources needed.",
      },
    ],
    quizPlan: [
      "Identify when to use an IAM role instead of an IAM user.",
      "Choose the safest answer for temporary cross-account access.",
      "Spot risky credential patterns such as embedded access keys.",
      "Apply least privilege to a simple user permission scenario.",
      "Explain why the root user should not be used for everyday tasks.",
    ],
  },
};
