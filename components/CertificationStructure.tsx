import type { Domain, Skill, SkillSet } from "@/types/study";

type CertificationStructureProps = {
  domains: Domain[];
  skillSets: SkillSet[];
  skills: Skill[];
};

export function CertificationStructure({ domains, skillSets, skills }: CertificationStructureProps) {
  return (
    <section className="panel">
      <div className="panel-header">
        <div>
          <span className="eyebrow">Certification Structure</span>
          <h2>Domains, skill sets, and skills</h2>
        </div>
      </div>

      <div className="domain-list">
        {domains.length === 0 ? (
          <div className="empty-state">
            <strong>No certification structure available</strong>
            <p>Add domains, skill sets, and skills to show the exam map.</p>
          </div>
        ) : domains.map((domain) => {
          const domainSkillSets = skillSets.filter((skillSet) => skillSet.domainId === domain.id);

          return (
            <article className="domain" key={domain.id}>
              <div className="domain-title">
                <h3>{domain.name}</h3>
                <span className="weight">{domain.examWeight}%</span>
              </div>

              {domainSkillSets.length === 0 ? (
                <div className="empty-state compact">
                  <strong>No skill sets mapped yet</strong>
                  <p>This domain is present, but no skill sets are attached.</p>
                </div>
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
