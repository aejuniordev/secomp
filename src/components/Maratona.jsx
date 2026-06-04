import React from 'react'
import { Trophy, Calendar, Clock, ExternalLink } from 'lucide-react'

const Maratona = () => {
  const timeline = [
    {
      date: 'Até 11/05/2026',
      description: 'Inscrição para sediar a primeira fase',
      isEvent: false,
    },
    {
      date: 'Início de junho',
      description: 'Abertura das inscrições',
      isEvent: false,
    },
    {
      date: 'Até 19/07/2026',
      description: 'Inscrição com desconto',
      isEvent: false,
    },
    {
      date: 'Até 10/08/2026',
      description: 'Inscrição de times deve estar completa',
      isEvent: false,
    },
    {
      date: 'Até 22/08/2026',
      description: 'Inscrição de café com leite',
      isEvent: false,
    },
    {
      date: '29/08/2026',
      description: 'Primeira Fase',
      isEvent: true,
    },
    {
      date: 'Até 09/09/2026',
      description: 'Definição dos classificados para a Final Brasileira',
      isEvent: false,
    },
  ]

  return (
    <section id="maratona" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-secomp-card border border-secomp-cyan rounded-full flex items-center justify-center">
            <Trophy className="w-8 h-8 text-secomp-cyan" />
          </div>
        </div>

        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Maratona de Programação
          </h2>
          <div className="w-16 h-1 bg-secomp-cyan mx-auto mb-6"></div>
          <p className="text-secomp-text max-w-2xl mx-auto">
            Fase regional da Maratona de Programação promovida pela Sociedade Brasileira de
            Computação (SBC).
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Calendar Card */}
          <div className="lg:col-span-2 bg-secomp-card border border-secomp-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-5 h-5 text-secomp-cyan" />
              <h3 className="text-white font-semibold">Calendário</h3>
            </div>

            <div className="space-y-4">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 p-3 rounded-lg ${
                    item.isEvent
                      ? 'bg-secomp-cyan/10 border border-secomp-cyan/30'
                      : 'hover:bg-secomp-darker/50'
                  } transition-colors`}
                >
                  <Clock
                    className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                      item.isEvent ? 'text-secomp-cyan' : 'text-secomp-text'
                    }`}
                  />
                  <div className="flex-1">
                    <span
                      className={`font-semibold ${
                        item.isEvent ? 'text-secomp-cyan' : 'text-white'
                      }`}
                    >
                      {item.date}
                    </span>
                    <p className="text-secomp-text text-sm">{item.description}</p>
                  </div>
                  {item.isEvent && (
                    <span className="bg-secomp-cyan text-secomp-dark text-xs font-semibold px-2 py-1 rounded">
                      Evento
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* More Info Button */}
            <a
              href="https://maratona.sbc.org.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full mt-6 py-3 border border-secomp-border rounded-lg text-white hover:bg-secomp-border/30 transition-colors"
            >
              Mais Informações
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Side Cards */}
          <div className="space-y-6">
            {/* Inscricoes Card */}
            <div className="bg-secomp-card border border-secomp-border rounded-xl p-6">
              <h3 className="text-white font-semibold mb-4">Inscrições</h3>
              <div className="bg-secomp-darker/50 rounded-lg p-4 text-center">
                <span className="text-secomp-text">Em breve</span>
              </div>
            </div>

            {/* FAQ Card */}
            <div className="bg-secomp-card border border-secomp-border rounded-xl p-6">
              <h3 className="text-white font-semibold mb-4">Perguntas Frequentes</h3>
              <div className="bg-secomp-darker/50 rounded-lg p-4 text-center">
                <span className="text-secomp-text">Em breve</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Maratona
