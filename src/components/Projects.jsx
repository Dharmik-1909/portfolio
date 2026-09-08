import ProjectCard from './ProjectCard.jsx'

function Projects({ projects }) {
  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container py-5">
        <div className="text-center mb-5">
          <p className="text-primary fw-semibold small mb-2">MY WORK</p>
          <h2 className="fw-bold">Selected Projects</h2>
        </div>
        <div className="row g-4">
          {projects.map((project) => (
            <div className="col-md-6 col-lg-4" key={project.id}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
