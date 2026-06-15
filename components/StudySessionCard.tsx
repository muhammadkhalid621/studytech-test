import type { StudySession } from "@/types/study";

type StudySessionCardProps = {
  session: StudySession;
};

export function StudySessionCard({ session }: StudySessionCardProps) {
  return (
    <section className="recommendation">
      <span className="eyebrow">Today&apos;s Study Session</span>
      <h2>{session.weakestSkill?.skill.name ?? "Start with a diagnostic quiz"}</h2>
      <p className="muted">{session.explanation}</p>

      <div className="lesson">
        <span className="eyebrow">Lesson summary</span>
        <p>{session.lessonSummary}</p>
      </div>
    </section>
  );
}
