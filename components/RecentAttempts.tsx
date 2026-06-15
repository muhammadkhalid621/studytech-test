import { formatDateTime } from "@/lib/format";
import type { RecentAttempt } from "@/types/study";

type RecentAttemptsProps = {
  attempts: RecentAttempt[];
};

export function RecentAttempts({ attempts }: RecentAttemptsProps) {
  return (
    <section className="panel">
      <div className="panel-header">
        <div>
          <span className="eyebrow">Recent Attempts</span>
          <h2>Latest quiz history</h2>
        </div>
        <span className="chip">{attempts.length} attempts</span>
      </div>

      <div className="attempt-list">
        {attempts.slice(0, 8).map((attempt) => (
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
