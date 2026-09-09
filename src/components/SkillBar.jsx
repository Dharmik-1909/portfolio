function SkillBar({ name, percentage, icon }) {
  return (
    <div className="mb-4">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <span className="fw-semibold">
          <i className={`bi ${icon} me-2 text-primary`} aria-hidden="true"></i>
          {name}
        </span>
        <span className="text-muted">{percentage}%</span>
      </div>
      <div
        className="progress"
        role="progressbar"
        aria-label={`${name} proficiency`}
        aria-valuenow={percentage}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div className="progress-bar bg-primary" style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  )
}

export default SkillBar