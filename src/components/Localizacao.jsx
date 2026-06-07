import React from 'react'
import { MapPin, Navigation } from 'lucide-react'

const Localizacao = () => {
  return (
    <section id="localizacao" className="py-24 px-4 bg-secomp-darker/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Localização</h2>
          <div className="w-16 h-1 bg-secomp-cyan mx-auto mb-6"></div>
          <p className="text-secomp-text max-w-2xl mx-auto">
            O evento será realizado no Instituto de Ciências Exatas e Naturais da UFPA, em Belém do Pará.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Info Card */}
          <div className="rounded-3xl border border-secomp-border bg-secomp-card p-6 space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secomp-cyan/10 border border-secomp-cyan/30 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-secomp-cyan" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Endereço</h3>
                <p className="text-secomp-text text-sm leading-relaxed">
                  Instituto de Ciências Exatas e Naturais — ICEN/UFPA
                  <br />
                  R. Augusto Corrêa, 01 — Guamá
                  <br />
                  Belém — PA, 66075-110
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secomp-cyan/10 border border-secomp-cyan/30 flex items-center justify-center">
                <Navigation className="w-5 h-5 text-secomp-cyan" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Como chegar</h3>
                <p className="text-secomp-text text-sm leading-relaxed">
                  Acesso pela Av. Perimetral ou Av. Augusto Montenegro. O campus possui estacionamento próprio para visitantes.
                </p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Instituto+de+Ciências+Exatas+e+Naturais+UFPA"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-3 px-4 rounded-xl border border-secomp-cyan text-secomp-cyan text-sm font-medium hover:bg-secomp-cyan hover:text-secomp-dark transition-colors duration-200"
            >
              Abrir no Google Maps
            </a>
          </div>

          {/* Map */}
          <div className="lg:col-span-2 rounded-3xl overflow-hidden border border-secomp-border shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.4971901321173!2d-48.456158699999996!3d-1.4745036999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48d950a724ca7%3A0x94f37c74f24e488!2sInstituto%20de%20Ci%C3%AAncias%20Exatas%20e%20Naturais%20-%20UFPA!5e0!3m2!1spt-BR!2sbr!4v1780680893662!5m2!1spt-BR!2sbr"
              width="100%"
              height="420"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Instituto de Ciências Exatas e Naturais - UFPA"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Localizacao
