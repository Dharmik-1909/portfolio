function StatsCard({ value, label }) {
  return (
    <div className="card border text-center h-100">
      <div className="card-body">
        <div className="fw-bold fs-3 text-primary">{value}</div>
        <div className="text-muted small">{label}</div>
      </div>
    </div>
  )
}

export default StatsCard
