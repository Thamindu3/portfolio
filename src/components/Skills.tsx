import './Skills.css'

const categories = [
  {
    label: 'Frontend',
    color: '#4f8ef7',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Three.js',
      'React Three Fiber',
    ],
  },
  {
    label: 'Backend & APIs',
    color: '#a78bfa',
    skills: ['Python', 'FastAPI', 'Node.js', 'REST APIs', 'PostgreSQL', 'SQLite', 'Firebase', 'Firestore'],
  },
  {
    label: 'ML / Data',
    color: '#34d399',
    skills: [
      'Machine Learning',
      'scikit-learn',
      'NumPy',
      'Pandas',
      'Apache Spark',
      'Spark SQL',
      'Matplotlib',
    ],
  },
  {
    label: 'Tools & DevOps',
    color: '#fb923c',
    skills: ['Git', 'GitHub', 'Docker', 'Databricks', 'VS Code', 'Figma', 'Postman'],
  },
  {
    label: 'Mobile & Embedded',
    color: '#f43f5e',
    skills: ['Flutter', 'Capacitor', 'ESP32', 'Firebase', 'Mobile Development'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <span className="section-eyebrow">Skills</span>
        <h2 className="section-title">What I work with</h2>
        <p className="section-sub">
          My current toolkit — built through coursework, side projects, and industry internship.
        </p>

        <div className="skills-grid">
          {categories.map(cat => (
            <div key={cat.label} className="skills-cat" style={{ '--cat-color': cat.color } as React.CSSProperties}>
              <div className="skills-cat-header">
                <span className="skills-cat-dot" />
                <h3 className="skills-cat-label">{cat.label}</h3>
              </div>
              <div className="skills-tags">
                {cat.skills.map(s => (
                  <span key={s} className="skills-tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
