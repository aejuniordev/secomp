import './styles/global.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Branch from './components/Branch';
import Tracks from './components/Tracks';
import Schedule from './components/Schedule';
import Local from './components/Local';
import CTA from './components/CTA';
import FAQ from './components/FAQ';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Branch />
      <Tracks />
      <Schedule />
      <Local />
      <CTA />
      <FAQ />
      <Sponsors />
      <Footer />
    </>
  );
}
