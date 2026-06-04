import React from 'react'

const Programacao = () => {
  return (
    <section id="programacao" className="py-24 px-4 bg-secomp-darker/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Programação</h2>
          <div className="w-16 h-1 bg-secomp-cyan mx-auto mb-6"></div>
          <p className="text-secomp-text max-w-2xl mx-auto">
            Quadro completo da programação com palestras, oficinas e atividades para os quatro dias do evento.
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-secomp-border bg-secomp-card shadow-sm">
          <table className="min-w-full divide-y divide-secomp-border text-left">
            <thead className="bg-secomp-darker">
              <tr>
                <th className="px-6 py-4 text-sm font-semibold uppercase text-secomp-text/80">Horário</th>
                <th className="px-6 py-4 text-sm font-semibold uppercase text-secomp-text/80">26/08/2026</th>
                <th className="px-6 py-4 text-sm font-semibold uppercase text-secomp-text/80">27/08/2026</th>
                <th className="px-6 py-4 text-sm font-semibold uppercase text-secomp-text/80">28/08/2026</th>
                <th className="px-6 py-4 text-sm font-semibold uppercase text-secomp-text/80">29/08/2026</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-secomp-border">
              <tr className="bg-secomp-card">
                <td className="px-6 py-4 text-sm font-medium text-white">09h</td>
                <td className="px-6 py-4 text-sm text-secomp-text">A definir</td>
                <td className="px-6 py-4 text-sm text-secomp-text">A definir</td>
                <td className="px-6 py-4 text-sm text-secomp-text">A definir</td>
                <td className="px-6 py-4 text-sm text-secomp-text">Chegada dos times e entrega do material</td>
              </tr>
              <tr className="bg-secomp-darker">
                <td className="px-6 py-4 text-sm font-medium text-white">10h</td>
                <td className="px-6 py-4 text-sm text-secomp-text">A definir</td>
                <td className="px-6 py-4 text-sm text-secomp-text">A definir</td>
                <td className="px-6 py-4 text-sm text-secomp-text">A definir</td>
                <td className="px-6 py-4 text-sm text-secomp-text">Sessão de aquecimento</td>
              </tr>
              <tr className="bg-secomp-card">
                <td className="px-6 py-4 text-sm font-medium text-white">12h</td>
                <td className="px-6 py-4 text-sm text-secomp-text">A definir</td>
                <td className="px-6 py-4 text-sm text-secomp-text">A definir</td>
                <td className="px-6 py-4 text-sm text-secomp-text">A definir</td>
                <td className="px-6 py-4 text-sm text-secomp-text">Almoço</td>
              </tr>
              <tr className="bg-secomp-darker">
                <td className="px-6 py-4 text-sm font-medium text-white">14h – 14:50h</td>
                <td className="px-6 py-4 text-sm text-secomp-text">Abertura oficial (auditório)</td>
                <td className="px-6 py-4 text-sm text-secomp-text">Palestra 4 (auditório)</td>
                <td className="px-6 py-4 text-sm text-secomp-text">Oficina 3 / Feira de recrutamento</td>
                <td className="px-6 py-4 text-sm text-secomp-text">Oficina 5 / Início da competição</td>
              </tr>
              <tr className="bg-secomp-card">
                <td className="px-6 py-4 text-sm font-medium text-white">15h – 15:50h</td>
                <td className="px-6 py-4 text-sm text-secomp-text">Palestra 1 (auditório)</td>
                <td className="px-6 py-4 text-sm text-secomp-text">Oficina 1 / Palestra 5 (auditório)</td>
                <td className="px-6 py-4 text-sm text-secomp-text">Feira de recrutamento</td>
                <td className="px-6 py-4 text-sm text-secomp-text">A definir</td>
              </tr>
              <tr className="bg-secomp-darker">
                <td className="px-6 py-4 text-sm font-medium text-white">16h</td>
                <td className="px-6 py-4 text-sm text-secomp-text">Palestra 2 (auditório)</td>
                <td className="px-6 py-4 text-sm text-secomp-text">Oficina 1 (continuação) / Palestra 6 (auditório)</td>
                <td className="px-6 py-4 text-sm text-secomp-text">Oficina 4</td>
                <td className="px-6 py-4 text-sm text-secomp-text">Oficina 6</td>
              </tr>
              <tr className="bg-secomp-card">
                <td className="px-6 py-4 text-sm font-medium text-white">16:30h–16:50h</td>
                <td className="px-6 py-4 text-sm text-secomp-text">A definir</td>
                <td className="px-6 py-4 text-sm text-secomp-text">Oficina 2</td>
                <td className="px-6 py-4 text-sm text-secomp-text">Oficina 4 (continuação)</td>
                <td className="px-6 py-4 text-sm text-secomp-text">Oficina 6 (continuação)</td>
              </tr>
              <tr className="bg-secomp-darker">
                <td className="px-6 py-4 text-sm font-medium text-white">17h – 17:50h</td>
                <td className="px-6 py-4 text-sm text-secomp-text">Palestra 3 (auditório)</td>
                <td className="px-6 py-4 text-sm text-secomp-text">Oficina 2 (continuação) / Palestra 7 (auditório)</td>
                <td className="px-6 py-4 text-sm text-secomp-text">A definir</td>
                <td className="px-6 py-4 text-sm text-secomp-text">A definir</td>
              </tr>
              <tr className="bg-secomp-card">
                <td className="px-6 py-4 text-sm font-medium text-white">18h</td>
                <td className="px-6 py-4 text-sm text-secomp-text">Coffee break</td>
                <td className="px-6 py-4 text-sm text-secomp-text">Coffee break</td>
                <td className="px-6 py-4 text-sm text-secomp-text">Coffee break</td>
                <td className="px-6 py-4 text-sm text-secomp-text">Coffee break</td>
              </tr>
              <tr className="bg-secomp-darker">
                <td className="px-6 py-4 text-sm font-medium text-white">19:30h</td>
                <td className="px-6 py-4 text-sm text-secomp-text">A definir</td>
                <td className="px-6 py-4 text-sm text-secomp-text">A definir</td>
                <td className="px-6 py-4 text-sm text-secomp-text">A definir</td>
                <td className="px-6 py-4 text-sm text-secomp-text">Encerramento, divulgação dos resultados e premiações</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-secomp-border bg-secomp-card p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Mapeamento das Oficinas</h3>
            <ul className="space-y-3 text-secomp-text text-sm">
              <li>1 - Curso GitHub avançado</li>
              <li>2 - Curso básico de Overleaf</li>
              <li>3 - Como desenvolver jogos com Scratch</li>
              <li>4 - Curso desenvolvedor de aplicativo para mobile</li>
              <li>5 - Aplicação de LLM para tratamento de dados</li>
              <li>6 - Técnicas de IA em séries temporais para modelos de previsão</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-secomp-border bg-secomp-card p-6">
            <h3 className="text-xl font-semibold text-white mb-4">Mapeamento das Palestras</h3>
            <ul className="space-y-3 text-secomp-text text-sm">
              <li>Palestra 1: Laboratório de Cibersegurança</li>
              <li>Palestra 2: Mercado Tech e estimativa de salários considerando desigualdades regionais, trabalho remoto e oportunidades globais</li>
              <li>Palestra 3: IA aplicada à engenharia de software</li>
              <li>Palestra 4: Transformando ideias em produtos digitais de alto impacto</li>
              <li>Palestra 5: Apresentação dos laboratórios de pesquisa</li>
              <li>Palestra 6: QuilombApp Play</li>
              <li>Palestra 7: Sinergias tecnológicas e inovação amazônica</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Programacao
