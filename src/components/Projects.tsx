import './Projects.css'

interface Project {
  title: string
  description: string
  tags: string[]
  github?: string
  live?: string
  role?: string
  accent: string
}

const projects: Project[] = [
  {
    title: 'TOP LABLE',
    description:
      'Final-year campus project — a full-stack platform built with Python on the backend and TypeScript on the frontend. Covers end-to-end product labelling workflows with a clean REST API layer.',
    tags: ['Python', 'TypeScript', 'FastAPI', 'HTML/CSS'],
    github: 'https://github.com/Thamindu3/Final-Year-Project--TOPLABLE-',
    accent: '#6366f1',
  },
  {
    title: 'Game',
    description:
      'A browser-based game built with vanilla JavaScript, HTML, and CSS, packaged as a native Android app using Capacitor. Playable on both web and mobile from a single codebase.',
    tags: ['JavaScript', 'HTML', 'CSS', 'Capacitor', 'Android'],
    github: 'https://github.com/Thamindu3/Game',
    accent: '#10b981',
  },
  {
    title: 'Flood Sense',
    description:
      'Contributed to an IoT-powered flood early-warning system that aggregates sensor data and delivers real-time alerts. Worked on the data pipeline and dashboard visualisations.',
    tags: ['Python', 'IoT', 'Data Processing', 'React'],
    role: 'Contributor',
    accent: '#f59e0b',
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <span className="section-eyebrow">Projects</span>
        <h2 className="section-title">Things I've built</h2>
        <p className="section-sub">
          A selection of projects — personal, collaborative, and open-source contributions.
        </p>

        <div className="projects-grid">
          {projects.map(p => (
            <div key={p.title} className="project-card" style={{ '--card-accent': p.accent } as React.CSSProperties}>
              <div className="project-card-glow" />
              <div className="project-card-inner">
                <div className="project-top">
                  <div className="project-icon-wrap">
                    <CodeIcon />
                  </div>
                  <div className="project-links">
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="project-link-btn">
                        <GithubIcon />
                        <span>Code</span>
                      </a>
                    )}
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noreferrer" aria-label="Live site" className="project-link-btn">
                        <ExternalIcon />
                        <span>Live</span>
                      </a>
                    )}
                  </div>
                </div>

                <div className="project-body">
                  <div className="project-title-row">
                    <h3 className="project-title">{p.title}</h3>
                    {p.role && <span className="project-role">{p.role}</span>}
                  </div>
                  <p className="project-desc">{p.description}</p>
                </div>

                <div className="project-footer">
                  <ul className="project-tags">
                    {p.tags.map(t => <li key={t}>{t}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CodeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}
