import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <footer>
        <p>
          Built with React &amp; TypeScript by{' '}
          <a href="https://github.com/Thamindu3" target="_blank" rel="noreferrer">
            Thamindu Samarathunga
          </a>{' '}
          · {new Date().getFullYear()}
        </p>
      </footer>
    </>
  )
}

export default App
