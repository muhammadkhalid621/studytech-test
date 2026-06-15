import { EmptyState } from "@/components/EmptyState";
import { PanelHeader } from "@/components/PanelHeader";
import type { Domain, Skill, SkillSet } from "@/types/study";

type CertificationStructureProps = {
  domains: Domain[];
  skillSets: SkillSet[];
  skills: Skill[];
};

export function CertificationStructure({ domains, skillSets, skills }: CertificationStructureProps) {
  return (
    <section className="panel">
      <PanelHeader eyebrow="Certification Structure" title="Domains, skill sets, and skills" />

      <div className="domain-list">
        {domains.length === 0 ? (
          <EmptyState
            title="No certification structure available"
            message="Add domains, skill sets, and skills to show the exam map."
          />
        ) : domains.map((domain) => {
          const domainSkillSets = skillSets.filter((skillSet) => skillSet.domainId === domain.id);

          return (
            <article className="domain" key={domain.id}>
              <div className="domain-title">
                <h3>{domain.name}</h3>
                <span className="weight">{domain.examWeight}%</span>
              </div>

              {domainSkillSets.length === 0 ? (
                <EmptyState
                  compact
                  title="No skill sets mapped yet"
                  message="This domain is present, but no skill sets are attached."
                />
              ) : domainSkillSets.map((skillSet) => {
                const skillSetSkills = skills.filter((skill) => skill.skillSetId === skillSet.id);

                return (
                  <div className="skillset" key={skillSet.id}>
                    <strong>{skillSet.name}</strong>
                    {skillSetSkills.length === 0 ? (
                      <p className="muted">No skills mapped yet.</p>
                    ) : (
                      <ul>
                        {skillSetSkills.map((skill) => (
                          <li className="chip" key={skill.id}>
                            {skill.name}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </article>
          );
        })}
      </div>
    </section>
  );
}
