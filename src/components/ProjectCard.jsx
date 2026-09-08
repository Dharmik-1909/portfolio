function ProjectCard({ project }) {
  return (
    <div className="card border h-100">
      <img
        src={project.image}
        alt={`Screenshot of the ${project.title} project`}
        className="card-img-top project-card-img"
        loading="lazy"
      />
      <div className="card-body">
        <p className="text-primary text-uppercase small fw-semibold mb-1">
          {project.category}
        </p>
        <h3 className="h5 fw-bold mb-2">{project.title}</h3>
        <p className="text-muted mb-3">{project.description}</p>
        {project.technologies?.length > 0 && (
          <div className="mb-3">
            {project.technologies.map((tech) => (
              <span className="badge bg-secondary me-1 mb-1" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        )}
        <div className="d-flex gap-3">
          {project.liveUrl && (
            <a href={project.liveUrl} className="btn btn-primary btn-sm px-3">
              Live Demo
            </a>
          )}
          {project.sourceUrl && (
            <a href={project.sourceUrl} className="btn btn-outline-secondary btn-sm px-3">
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
