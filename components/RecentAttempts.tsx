import { EmptyState } from "@/components/EmptyState";
import { PanelHeader } from "@/components/PanelHeader";
import { formatDateTime } from "@/lib/format";
import type { RecentAttempt } from "@/types/study";

type RecentAttemptsProps = {
  attempts: RecentAttempt[];
};

export function RecentAttempts({ attempts }: RecentAttemptsProps) {
  return (
    <section className="panel">
      <PanelHeader
        eyebrow="Recent Attempts"
        title="Latest quiz history"
        action={<span className="chip">{attempts.length} attempts</span>}
      />

      <div className="attempt-list">
        {attempts.length === 0 ? (
          <EmptyState
            title="No quiz attempts yet"
            message="Once a student answers questions, their latest attempts will appear here."
          />
        ) : attempts.slice(0, 8).map((attempt) => (
          <article className="attempt-row" key={attempt.id}>
            <div>
              <span>{formatDateTime(attempt.answeredAt)}</span>
              <strong>{attempt.question.question}</strong>
              <p className="muted">
                Selected: {attempt.selectedAnswer} | Skill: {attempt.skill?.name}
              </p>
            </div>
            <div className={`status ${attempt.isCorrect ? "correct" : "incorrect"}`}>
              {attempt.isCorrect ? "Correct" : "Missed"}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
