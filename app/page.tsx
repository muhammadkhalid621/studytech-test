import { CertificationStructure } from "@/components/CertificationStructure";
import { Flashcards } from "@/components/Flashcards";
import { Header } from "@/components/Header";
import { HeroSummary } from "@/components/HeroSummary";
import { QuizPlan } from "@/components/QuizPlan";
import { RecentAttempts } from "@/components/RecentAttempts";
import { StudySessionCard } from "@/components/StudySessionCard";
import { WeakestSkills } from "@/components/WeakestSkills";
import {
  attempts,
  certification,
  currentUser,
  domains,
  skillSets,
  skills,
} from "@/lib/data";
import {
  createStudySession,
  getOverallAccuracy,
  getRecentAttempts,
  getSkillPerformance,
} from "@/lib/study-utils";

export default function Home() {
  const recentAttempts = getRecentAttempts(currentUser.id);
  const skillPerformance = getSkillPerformance(currentUser.id);
  const session = createStudySession(currentUser.id);
  const accuracy = getOverallAccuracy(attempts);

  return (
    <main className="page">
      <Header certification={certification} user={currentUser} />
      <HeroSummary
        certification={certification}
        domainCount={domains.length}
        skillCount={skills.length}
        attemptCount={attempts.length}
        accuracy={accuracy}
        session={session}
      />

      <section className="grid">
        <div className="stack">
          <CertificationStructure domains={domains} skillSets={skillSets} skills={skills} />
          <RecentAttempts attempts={recentAttempts} />
        </div>

        <div className="stack">
          <StudySessionCard session={session} />
          <Flashcards flashcards={session.flashcards} />
          <QuizPlan items={session.quizPlan} />
          <WeakestSkills skills={skillPerformance} />
        </div>
      </section>
    </main>
  );
}
