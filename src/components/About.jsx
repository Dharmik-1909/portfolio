import StatsCard from './StatsCard.jsx'

function About({ profile }) {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container py-5">
        <div className="row align-items-center gy-5">
          <div className="col-lg-6">
            <p className="text-primary fw-semibold small mb-2">ABOUT ME</p>
            <h2 className="fw-bold mb-3">A little about my work</h2>
            <p className="text-muted fs-5">{profile.bio}</p>
            <a href="#contact" className="btn btn-outline-primary px-4 py-2 mt-2">
              Learn More About Me
            </a>
          </div>
          <div className="col-lg-6">
            <div className="row g-3">
              {profile.stats.map((stat) => (
                <div className="col-6" key={stat.label}>
                  <StatsCard value={stat.value} label={stat.label} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
