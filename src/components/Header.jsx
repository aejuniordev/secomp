import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Sobre o Evento', href: '#sobre' },
    { name: 'Programação', href: '#programacao' },
    { name: 'Maratona', href: '#maratona' },
    { name: 'Contato', href: '#contato' },
    { name: 'Localização', href: '#localizacao' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-secomp-dark/95 backdrop-blur-sm border-b border-secomp-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 text-white font-bold text-xl">
            <span className="text-secomp-cyan">&lt;/&gt;</span>
            <span>SECOMP</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-secomp-text-light hover:text-secomp-cyan transition-colors duration-200 text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-secomp-border">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-3 text-secomp-text-light hover:text-secomp-cyan transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header
