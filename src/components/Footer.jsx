function Footer({ profile }) {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        <p className="mb-0">
          &copy; 2026 {profile.name}. All rights reserved.
        </p>
        <div className="d-flex gap-3">
          {profile.socialLinks.map((social) => (
            <a key={social.name} href={social.url} className="text-white" aria-label={social.name}>
              <i className={`bi ${social.icon}`} aria-hidden="true"></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer