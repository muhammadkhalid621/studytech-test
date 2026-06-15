export type Certification = {
  id: string;
  name: string;
  code: string;
};

export type Domain = {
  id: string;
  certificationId: string;
  name: string;
  examWeight: number;
};

export type SkillSet = {
  id: string;
  domainId: string;
  name: string;
};

export type Skill = {
  id: string;
  skillSetId: string;
  name: string;
};

export type Question = {
  id: string;
  certificationId: string;
  domainId: string;
  skillSetId: string;
  skillId: string;
  question: string;
  options: string[];
  correctAnswer: string;
};

export type QuizAttempt = {
  id: string;
  userId: string;
  questionId: string;
  selectedAnswer: string;
  isCorrect: boolean;
  answeredAt: string;
};

export type CurrentUser = {
  id: string;
  name: string;
};

export type SkillPerformance = {
  skill: Skill;
  skillSetName: string;
  domainName: string;
  attempts: number;
  correct: number;
  accuracy: number;
  weaknessScore: number;
};

export type RecentAttempt = QuizAttempt & {
  question: Question;
  skill?: Skill;
};

export type StudySession = {
  weakestSkill?: SkillPerformance;
  explanation: string;
  lessonSummary: string;
  flashcards: Flashcard[];
  quizPlan: string[];
};

export type Flashcard = {
  front: string;
  back: string;
};
