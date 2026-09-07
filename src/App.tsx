import './App.css';
import Header from '@/components/header/Header';
import ScrollHeader from '@/components/header/ScrollHeader';
import Hero from '@/components/hero/Hero';
import VueSkill from './components/skill-section/VueSkill';
import { ThemeProvider } from '@/contexts/ThemeContext';
import OtherSkills from './components/other-skills-section/OtherSkills';
import ExperiencesList from './components/experiences-section/ExperiencesList';
import GraphicPortfolio from './components/portfolio-section/GraphicPortfolio';
// import FaqSection from './components/faq-section/FaqSection';
import Projects from './components/projects/Projects';
import ContactMe from './components/contact/ContactMe';
import Footer from './components/common/Footer';

function App() {
  return (
    <ThemeProvider>
      <header>
        <Header />
        <ScrollHeader />
      </header>
      <main>
        <Hero />
        <VueSkill />
        <OtherSkills />
        <ExperiencesList />
        <Projects />
        <GraphicPortfolio />
        {/* <FaqSection /> */}
        <ContactMe />
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;
