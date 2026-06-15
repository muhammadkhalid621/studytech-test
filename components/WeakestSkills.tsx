import { formatPercent } from "@/lib/format";
import type { SkillPerformance } from "@/types/study";

type WeakestSkillsProps = {
  skills: SkillPerformance[];
};

export function WeakestSkills({ skills }: WeakestSkillsProps) {
  return (
    <section className="panel">
      <div className="panel-header">
        <div>
          <span className="eyebrow">Weakest Skills</span>
          <h2>Ranked by misses and exam weight</h2>
        </div>
      </div>

      <div className="skill-list">
        {skills.slice(0, 6).map((performance) => (
          <article className="skill-row" key={performance.skill.id}>
            <div>
              <span>{performance.domainName}</span>
              <strong>{performance.skill.name}</strong>
              <p className="muted">
                {performance.correct}/{performance.attempts} correct in {performance.skillSetName}
              </p>
              <div className="bar" aria-hidden="true">
                <span style={{ width: `${Math.max(8, (1 - performance.accuracy) * 100)}%` }} />
              </div>
            </div>
            <div className="score">{formatPercent(performance.accuracy)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
