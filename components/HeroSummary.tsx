import type { Certification, StudySession } from "@/types/study";
import { formatPercent } from "@/lib/format";

type HeroSummaryProps = {
  certification: Certification;
  domainCount: number;
  skillCount: number;
  attemptCount: number;
  accuracy: number;
  session: StudySession;
};

export function HeroSummary({
  certification,
  domainCount,
  skillCount,
  attemptCount,
  accuracy,
  session,
}: HeroSummaryProps) {
  return (
    <section className="hero">
      <div className="hero-copy">
        <div className="stack">
          <span className="eyebrow">AWS Cloud Practitioner</span>
          <h1>{certification.name}</h1>
        </div>
        <p>
          A compact study engine that maps certification structure to quiz attempts,
          identifies weak skills, and produces a focused study session for today.
        </p>
      </div>

      <aside className="cert-panel" aria-label="Certification summary">
        <div className="stack">
          <span className="eyebrow">Current Readiness</span>
          <h2>{accuracy}% quiz accuracy</h2>
          <p className="muted">
            Based on {attemptCount} mocked quiz attempts across {domainCount} exam domains.
          </p>
        </div>

        <div className="metric-grid">
          <div className="metric">
            <span>Domains</span>
            <strong>{domainCount}</strong>
          </div>
          <div className="metric">
            <span>Skills</span>
            <strong>{skillCount}</strong>
          </div>
          <div className="metric">
            <span>Weakest</span>
            <strong>{session.weakestSkill ? formatPercent(session.weakestSkill.accuracy) : "N/A"}</strong>
          </div>
          <div className="metric">
            <span>Next Quiz</span>
            <strong>5 Qs</strong>
          </div>
        </div>
      </aside>
    </section>
  );
}
