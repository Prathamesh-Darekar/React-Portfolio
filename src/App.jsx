import './App.css';
import Nav from './components/nav';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Education from './components/Education';
import Certification from './components/Certification';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div id="scroller">
    <div id="body">
    <Nav />
      <Hero />
      <Projects />
      <Education />
      <Certification />
      <div id="space">
      </div>
      <Resume />
    </div>
      <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App
