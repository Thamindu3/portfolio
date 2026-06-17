import './About.css'

const stats = [
  { value: '3+', label: 'Projects Built' },
  { value: '1', label: 'Industry Internship' },
  { value: '4th', label: 'Year of Study' },
  { value: '2', label: 'Tech Clubs' },
]

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-layout">
          <div className="about-left">
            <span className="section-eyebrow">About Me</span>
            <h2 className="section-title">Turning ideas into<br />working software</h2>
            <p className="about-para">
              I'm a final-year Computer Science student at NSBM Green University, affiliated with
              the University of Plymouth (UK). I'm passionate about building clean, performant
              web applications and exploring the intersection of software engineering and machine
              learning.
            </p>
            <p className="about-para">
              I completed a Software Engineering internship at <strong>IPTP Networks</strong>,
              gaining real-world exposure to production systems, Agile workflows, and API
              integration. Outside of code I co-organise NSBM faculty tech events and compete
              for the university chess team.
            </p>
            <p className="about-para">
              I'm actively looking for graduate roles and internship opportunities where I can
              contribute to real products and grow alongside talented engineers.
            </p>
            <div className="about-actions">
              <a className="btn btn-primary" href="/cv.pdf" target="_blank" rel="noreferrer">Download CV</a>
              <a className="btn btn-outline" href="#contact">Get in Touch</a>
            </div>
          </div>

          <div className="about-right">
            <div className="about-info-card">
              <div className="about-info-row">
                <span className="about-info-label">University</span>
                <span className="about-info-val">NSBM Green University</span>
              </div>
              <div className="about-info-row">
                <span className="about-info-label">Affiliated</span>
                <span className="about-info-val">University of Plymouth, UK</span>
              </div>
              <div className="about-info-row">
                <span className="about-info-label">Degree</span>
                <span className="about-info-val">BSc (Hons) Computer Science</span>
              </div>
              <div className="about-info-row">
                <span className="about-info-label">Status</span>
                <span className="about-info-val about-status">
                  <span className="about-status-dot" /> Final Year
                </span>
              </div>
              <div className="about-info-row">
                <span className="about-info-label">Focus</span>
                <span className="about-info-val">Full-Stack · ML/AI</span>
              </div>
              <div className="about-info-row">
                <span className="about-info-label">Location</span>
                <span className="about-info-val">Sri Lanka 🇱🇰</span>
              </div>
            </div>

            <div className="about-stats">
              {stats.map(s => (
                <div key={s.label} className="about-stat">
                  <span className="about-stat-value">{s.value}</span>
                  <span className="about-stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
