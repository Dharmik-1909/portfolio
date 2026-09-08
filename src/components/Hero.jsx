function Hero({ profile }) {
  return (
    <section id="home" className="py-5">
      <div className="container py-5">
        <div className="row align-items-center gy-5">
          <div className="col-lg-6 order-2 order-lg-1">
            <p className="text-primary fw-semibold small mb-3">{profile.eyebrow}</p>
            <h1 className="display-4 fw-bold mb-3">
              Hi, I'm {profile.name}.
              <br />A {profile.role}.
            </h1>
            <p className="text-muted fs-5 mb-4">{profile.tagline}</p>
            <div className="d-flex flex-wrap gap-3">
              <a href="#projects" className="btn btn-primary px-4 py-2">
                View My Work
              </a>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <img
              src={profile.profileImage}
              alt={`Portrait of ${profile.name}, ${profile.role}`}
              className="hero-photo img-fluid rounded border mx-auto d-block"
              style={{ maxWidth: '420px' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
