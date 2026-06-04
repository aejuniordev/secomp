import React from 'react'
import logoUfpa from '../../logo_ufpa.jpg'
import computacao from '../../computacao.jpeg'
import whatsappImage from '../../WhatsApp Image 2026-05-07 at 11.20.40.jpeg'

const Realizacao = () => {
  return (
    <section id="realizacao" className="py-24 px-4 bg-secomp-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Realização</h2>
          <div className="w-16 h-1 bg-secomp-cyan mx-auto mb-6"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          <div className="flex-shrink-0">
            <img
              src={logoUfpa}
              alt="Logo UFPA"
              className="h-24 md:h-32 w-auto object-contain"
            />
          </div>
          <div className="flex-shrink-0">
            <img
              src={computacao}
              alt="Logo Computação"
              className="h-24 md:h-32 w-auto object-contain"
            />
          </div>
          <div className="flex-shrink-0">
            <img
              src={whatsappImage}
              alt="Logo PPGCOMP"
              className="h-24 md:h-32 w-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Realizacao