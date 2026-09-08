import { useState } from 'react'

function Contact({ profile }) {
  const [validated, setValidated] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    const form = event.currentTarget
    event.preventDefault()
    if (form.checkValidity() === false) {
      event.stopPropagation()
      setValidated(true)
      setSubmitted(false)
      return
    }
    setValidated(true)
    setSubmitted(true)
    form.reset()
    setValidated(false)
  }

  return (
    <section id="contact" className="py-5">
      <div className="container py-5">
        <div className="text-center mb-5">
          <p className="text-primary fw-semibold small mb-2">GET IN TOUCH</p>
          <h2 className="fw-bold">Let's Work Together</h2>
          <p className="text-muted">Have a project in mind? I'd love to hear about it.</p>
        </div>

        <div className="row g-5">
          <div className="col-lg-5">
            <ul className="list-unstyled d-flex flex-column gap-4">
              <li className="d-flex align-items-start gap-3">
                <i className="bi bi-envelope text-primary fs-5" aria-hidden="true"></i>
                <div>
                  <div className="fw-semibold">Email</div>
                  <a href={`mailto:${profile.email}`} className="text-muted">
                    {profile.email}
                  </a>
                </div>
              </li>
              <li className="d-flex align-items-start gap-3">
                <i className="bi bi-telephone text-primary fs-5" aria-hidden="true"></i>
                <div>
                  <div className="fw-semibold">Phone</div>
                  <a href={`tel:${profile.phone}`} className="text-muted">
                    {profile.phone}
                  </a>
                </div>
              </li>
              <li className="d-flex align-items-start gap-3">
                <i className="bi bi-geo-alt text-primary fs-5" aria-hidden="true"></i>
                <div>
                  <div className="fw-semibold">Location</div>
                  <span className="text-muted">{profile.location}</span>
                </div>
              </li>
            </ul>

            <div className="d-flex gap-3 mt-4">
              {profile.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  aria-label={social.name}
                  className="btn btn-outline-primary btn-sm px-3"
                >
                  <i className={`bi ${social.icon}`} aria-hidden="true"></i>
                </a>
              ))}
            </div>

            <a href={`mailto:${profile.email}`} className="btn btn-primary px-4 py-2 mt-4">
              Contact Me
            </a>
          </div>

          <div className="col-lg-7">
            <form
              noValidate
              className={`row g-3 ${validated ? 'was-validated' : ''}`}
              onSubmit={handleSubmit}
            >
              <div className="col-md-6">
                <label htmlFor="contactName" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" id="contactName" required />
                <div className="invalid-feedback">Please enter your name.</div>
              </div>
              <div className="col-md-6">
                <label htmlFor="contactEmail" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="contactEmail" required />
                <div className="invalid-feedback">Please enter a valid email.</div>
              </div>
              <div className="col-12">
                <label htmlFor="contactSubject" className="form-label">
                  Subject
                </label>
                <input type="text" className="form-control" id="contactSubject" required />
                <div className="invalid-feedback">Please enter a subject.</div>
              </div>
              <div className="col-12">
                <label htmlFor="contactMessage" className="form-label">
                  Message
                </label>
                <textarea className="form-control" id="contactMessage" rows="5" required></textarea>
                <div className="invalid-feedback">Please enter a message.</div>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-primary px-4 py-2">
                  Send Message
                </button>
                {submitted && (
                  <p className="text-muted mt-3 mb-0" role="status">
                    Thanks! Your message has been prepared. (Backend delivery is out of scope for V1.)
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
