import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Skills } from "./components/Skills/Skills";
import { Footer } from './components/Footer/Footer';
import { Contact } from './components/Contact/Contact';
import { Projects } from './components/Projects/Projects';
import { Title } from "./components/Title/Title";
import { Certification } from "./components/Certification/Certification";

function App() {
  return (
    <div className={styles.App}>
      <Title />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certification />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;