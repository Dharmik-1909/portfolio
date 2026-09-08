import SkillBar from './SkillBar.jsx'

function Skills({ skills }) {
  return (
    <section id="skills" className="py-5">
      <div className="container py-5">
        <div className="text-center mb-5">
          <p className="text-primary fw-semibold small mb-2">MY SKILLS</p>
          <h2 className="fw-bold">Technologies I work with</h2>
        </div>
        <div className="row g-4">
          {skills.map((skill) => (
            <div className="col-md-6 col-lg-4" key={skill.name}>
              <SkillBar name={skill.name} percentage={skill.percentage} icon={skill.icon} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
