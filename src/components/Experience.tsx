import './Experience.css'

interface Item {
  role: string
  org: string
  period: string
  type: 'work' | 'activity'
  bullets: string[]
  tags?: string[]
}

const items: Item[] = [
  {
    role: 'Software Engineering Workshop (IPTP Networks)',
    org: 'IPTP Networks',
    period: '2024',
    type: 'activity',
    bullets: [
      'Gained hands-on exposure to enterprise software workflows and deployment pipelines.',
      'Collaborated with the engineering team on internal tooling and API integrations.',
      'Improved understanding of production systems, code reviews, and Agile practices.',
    ],
    tags: ['Python', 'APIs', 'Agile'],
  },
  {
    role: 'Member',
    org: 'Music Club of NSBM',
    period: 'May 2025 – Present',
    type: 'activity',
    bullets: [
      'Participate in club rehearsals and campus performances.',
      'Collaborate on event productions and sound coordination.',
    ],
    tags: ['Teamwork', 'Music'],
  },
  {
    role: 'Event Organizer',
    org: 'NSBM Chess Club',
    period: '2022 – Present',
    type: 'activity',
    bullets: [
      'Represent NSBM in inter-university chess competitions.',
      'Participate in strategy sessions that sharpen analytical and decision-making skills.',
    ],
    tags: ['Strategy', 'Problem Solving'],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <span className="section-eyebrow">Experience</span>
        <h2 className="section-title">Where I've been</h2>
        <p className="section-sub">
          Professional experience and extracurricular activities that have shaped how I think and work.
        </p>

        <div className="exp-list">
          {items.map((item, i) => (
            <div key={i} className={`exp-item ${item.type}`}>
              <div className="exp-aside">
                <div className="exp-dot-wrap">
                  <div className="exp-dot" />
                  {i < items.length - 1 && <div className="exp-line" />}
                </div>
                <span className="exp-period">{item.period}</span>
              </div>
              <div className="exp-card">
                <div className="exp-card-top">
                  <div>
                    <h3 className="exp-role">{item.role}</h3>
                    <p className="exp-org">{item.org}</p>
                  </div>
                  {item.type === 'work' && <span className="exp-badge">Work</span>}
                </div>
                <ul className="exp-bullets">
                  {item.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
                {item.tags && (
                  <div className="exp-tags">
                    {item.tags.map(t => <span key={t} className="exp-tag">{t}</span>)}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
