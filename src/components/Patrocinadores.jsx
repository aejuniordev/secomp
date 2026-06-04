import React from 'react'

const Patrocinadores = () => {
  return (
    <section id="patrocinadores" className="py-24 px-4 bg-secomp-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Patrocinadores</h2>
          <div className="w-16 h-1 bg-secomp-cyan mx-auto mb-6"></div>
          <p className="text-secomp-text max-w-2xl mx-auto">
            Em breve, conheceremos nossos apoiadores e parceiros que tornam este evento possível.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-50">
          {/* Placeholder para logos de patrocinadores */}
          <div className="w-24 h-24 md:w-32 md:h-32 bg-secomp-border rounded-lg flex items-center justify-center">
            <span className="text-secomp-text text-xs text-center">Logo</span>
          </div>
          <div className="w-24 h-24 md:w-32 md:h-32 bg-secomp-border rounded-lg flex items-center justify-center">
            <span className="text-secomp-text text-xs text-center">Logo</span>
          </div>
          <div className="w-24 h-24 md:w-32 md:h-32 bg-secomp-border rounded-lg flex items-center justify-center">
            <span className="text-secomp-text text-xs text-center">Logo</span>
          </div>
          <div className="w-24 h-24 md:w-32 md:h-32 bg-secomp-border rounded-lg flex items-center justify-center">
            <span className="text-secomp-text text-xs text-center">Logo</span>
          </div>
          <div className="w-24 h-24 md:w-32 md:h-32 bg-secomp-border rounded-lg flex items-center justify-center md:col-span-2 lg:col-span-1">
            <span className="text-secomp-text text-xs text-center">Logo</span>
          </div>
          <div className="w-24 h-24 md:w-32 md:h-32 bg-secomp-border rounded-lg flex items-center justify-center md:col-span-2 lg:col-span-1">
            <span className="text-secomp-text text-xs text-center">Logo</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Patrocinadores