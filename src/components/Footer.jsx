import React from 'react'

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-secomp-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 text-white font-bold">
            <span className="text-secomp-cyan">&lt;/&gt;</span>
            <span>SECOMP 2026</span>
          </div>

          {/* University Info */}
          <p className="text-secomp-text text-sm text-center">
            Universidade Federal do Pará (UFPA) • Belém, Pará
          </p>

          {/* Copyright */}
          <p className="text-secomp-text text-sm">© 2026 SECOMP</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
