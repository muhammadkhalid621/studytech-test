import { PanelHeader } from "@/components/PanelHeader";
import { formatPercent } from "@/lib/format";
import type { SkillPerformance } from "@/types/study";

type WeakestSkillsProps = {
  skills: SkillPerformance[];
};

export function WeakestSkills({ skills }: WeakestSkillsProps) {
  return (
    <section className="panel">
      <PanelHeader eyebrow="Weakest Skills" title="Ranked by misses and exam weight" />

      <div className="skill-list">
        {skills.length === 0 ? (
          <article className="skill-row">
            <div>
              <span>No attempts yet</span>
              <strong>Complete a quiz to calculate weak skills</strong>
              <p className="muted">
                Once attempts exist, this list will rank skills by missed answers and exam weight.
              </p>
            </div>
            <div className="score">N/A</div>
          </article>
        ) : skills.slice(0, 6).map((performance) => (
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
