import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMobileOpen(false);

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <a href="#topo" className="brand">
        <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <path d="M3 16h6c3 0 4-4 7-4s4 4 7 4h6" stroke="#0E7C80" strokeWidth="2" strokeLinecap="round" />
          <circle cx="9" cy="16" r="2.4" fill="#2FD3AE" />
          <circle cx="23" cy="16" r="2.4" fill="#176B45" />
        </svg>
        SECOMP<span>26</span>
      </a>

      <div className={`navlinks${mobileOpen ? ' open' : ''}`}>
        <a href="#sobre" onClick={closeMenu}>Sobre</a>
        <a href="#trilhas" onClick={closeMenu}>Trilhas</a>
        <a href="#programacao" onClick={closeMenu}>Programação</a>
        <a href="#local" onClick={closeMenu}>Local</a>
        <span className="btn btn-disabled">Inscreva-se</span>
      </div>

      <button
        className="navtoggle"
        aria-label="Abrir menu"
        onClick={() => setMobileOpen(v => !v)}
      >
        <span className={mobileOpen ? 'open' : ''} />
        <span className={mobileOpen ? 'open' : ''} />
        <span className={mobileOpen ? 'open' : ''} />
      </button>
    </nav>
  );
}
