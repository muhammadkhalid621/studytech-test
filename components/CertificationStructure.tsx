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
        {domains.map((domain) => {
          const domainSkillSets = skillSets.filter((skillSet) => skillSet.domainId === domain.id);

          return (
            <article className="domain" key={domain.id}>
              <div className="domain-title">
                <h3>{domain.name}</h3>
                <span className="weight">{domain.examWeight}%</span>
              </div>

              {domainSkillSets.map((skillSet) => (
                <div className="skillset" key={skillSet.id}>
                  <strong>{skillSet.name}</strong>
                  <ul>
                    {skills
                      .filter((skill) => skill.skillSetId === skillSet.id)
                      .map((skill) => (
                        <li className="chip" key={skill.id}>
                          {skill.name}
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </article>
          );
        })}
      </div>
    </section>
  );
}
