import React from "react";

const TIPO = {
  PALESTRA: "palestra",
  OFICINA: "oficina",
  COFFEE: "coffee",
  ESPECIAL: "especial",
  MARATONA: "maratona",
};

const tipoConfig = {
  palestra: {
    label: "Palestra",
    classes: "bg-cyan-500/15 text-cyan-300 border border-cyan-500/30",
  },
  oficina: {
    label: "Oficina",
    classes: "bg-violet-500/15 text-violet-300 border border-violet-500/30",
  },
  coffee: {
    label: "Coffee",
    classes: "bg-amber-500/15 text-amber-300 border border-amber-500/30",
  },
  especial: {
    label: "Evento",
    classes: "bg-emerald-500/15 text-emerald-300 border border-emerald-500/30",
  },
  maratona: {
    label: "Maratona",
    classes: "bg-orange-500/15 text-orange-300 border border-orange-500/30",
  },
};

const P = (label) => ({ label, tipo: TIPO.PALESTRA });
const O = (label) => ({ label, tipo: TIPO.OFICINA });
const C = (label) => ({ label, tipo: TIPO.COFFEE });
const E = (label) => ({ label, tipo: TIPO.ESPECIAL });
const M = (label) => ({ label, tipo: TIPO.MARATONA });

const dias = ["26/08/2026", "27/08/2026", "28/08/2026", "29/08/2026"];

const programacao = [
  {
    horario: "09h",
    celulas: [null, null, null, [M("Chegada dos times e entrega do material")]],
  },
  {
    horario: "10h",
    celulas: [null, null, null, [M("Sessão de aquecimento")]],
  },
  {
    horario: "12h",
    celulas: [null, null, null, [E("Almoço")]],
  },
  {
    horario: "14h – 14:50h",
    celulas: [
      [E("Abertura oficial (auditório)")],
      [P("Palestra 4 (auditório)")],
      [O("Oficina 3"), E("Feira de recrutamento")],
      [O("Oficina 5"), M("Início da competição")],
    ],
  },
  {
    horario: "15h – 15:50h",
    celulas: [
      [P("Palestra 1 (auditório)")],
      [O("Oficina 1"), P("Palestra 5 (auditório)")],
      [E("Feira de recrutamento")],
      null,
    ],
  },
  {
    horario: "16h",
    celulas: [
      [P("Palestra 2 (auditório)")],
      [O("Oficina 1 (continuação)"), P("Palestra 6 (auditório)")],
      [O("Oficina 4")],
      [O("Oficina 6")],
    ],
  },
  {
    horario: "16:30h – 16:50h",
    celulas: [
      null,
      [O("Oficina 2")],
      [O("Oficina 4 (continuação)")],
      [O("Oficina 6 (continuação)")],
    ],
  },
  {
    horario: "17h – 17:50h",
    celulas: [
      [P("Palestra 3 (auditório)")],
      [O("Oficina 2 (continuação)"), P("Palestra 7 (auditório)")],
      null,
      null,
    ],
  },
  {
    horario: "18h",
    celulas: [
      [C("Coffee break")],
      [C("Coffee break")],
      [C("Coffee break")],
      [C("Coffee break")],
    ],
  },
  {
    horario: "19:30h",
    celulas: [
      null,
      null,
      null,
      [E("Encerramento, divulgação dos resultados e premiações")],
    ],
  },
];

const oficinas = [
  "Curso GitHub avançado",
  "Curso básico de Overleaf",
  "Como desenvolver jogos com Scratch",
  "Curso desenvolvedor de aplicativo para mobile",
  "Aplicação de LLM para tratamento de dados",
  "Técnicas de IA em séries temporais para modelos de previsão",
];

const palestras = [
  "Laboratório de Cibersegurança",
  "Mercado Tech e estimativa de salários considerando desigualdades regionais, trabalho remoto e oportunidades globais",
  "IA aplicada à engenharia de software",
  "Transformando ideias em produtos digitais de alto impacto",
  "Apresentação dos laboratórios de pesquisa",
  "QuilombApp Play",
  "Sinergias tecnológicas e inovação amazônica",
];

const Badge = ({ tipo, children }) => {
  const { classes } = tipoConfig[tipo];
  return (
    <span
      className={`flex-shrink-0 text-[10px] font-semibold uppercase tracking-wide px-1.5 py-0.5 rounded ${classes}`}
    >
      {children}
    </span>
  );
};

const Atividade = ({ atividade }) => (
  <div className="flex items-start gap-2">
    <Badge tipo={atividade.tipo} className="mt-0.5">
      {tipoConfig[atividade.tipo].label}
    </Badge>
    <span className="text-secomp-text text-sm leading-snug">
      {atividade.label}
    </span>
  </div>
);

const Celula = ({ celula }) => {
  if (celula === null) {
    return (
      <span className="text-secomp-text/35 text-sm italic">A definir</span>
    );
  }
  return (
    <div className="space-y-2">
      {celula.map((atividade, i) => (
        <Atividade key={i} atividade={atividade} />
      ))}
    </div>
  );
};

const Programacao = () => (
  <section id="programacao" className="py-24 px-4 bg-secomp-darker/50">
    <div className="max-w-7xl mx-auto">
      {/* Cabeçalho da seção */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Programação
        </h2>
        <div className="w-16 h-1 bg-secomp-cyan mx-auto mb-6"></div>
        <p className="text-secomp-text max-w-2xl mx-auto">
          Quadro completo da programação com palestras, oficinas e atividades
          para os quatro dias do evento.
        </p>
      </div>

      {/* Legenda de tipos */}
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {Object.entries(tipoConfig).map(([tipo, { label, classes }]) => (
          <span
            key={tipo}
            className={`text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded ${classes}`}
          >
            {label}
          </span>
        ))}
      </div>

      {/* Tabela */}
      <div className="overflow-x-auto rounded-3xl border border-secomp-border bg-secomp-card shadow-sm">
        <table className="min-w-full divide-y divide-secomp-border text-left">
          <thead className="bg-secomp-darker">
            <tr>
              <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-secomp-text/60 w-36">
                Horário
              </th>
              {dias.map((dia) => (
                <th
                  key={dia}
                  className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-secomp-text/60"
                >
                  {dia}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-secomp-border">
            {programacao.map((linha, i) => (
              <tr
                key={i}
                className={
                  i % 2 === 0 ? "bg-secomp-card" : "bg-secomp-darker/60"
                }
              >
                <td className="px-5 py-4 text-sm font-semibold text-white whitespace-nowrap align-top">
                  {linha.horario}
                </td>
                {linha.celulas.map((celula, j) => (
                  <td key={j} className="px-5 py-4 align-top">
                    <Celula celula={celula} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Listas de oficinas e palestras */}
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-secomp-border bg-secomp-card p-6">
          <h3 className="text-xl font-semibold text-white mb-4">
            Mapeamento das Oficinas
          </h3>
          <ul className="space-y-3">
            {oficinas.map((nome, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-secomp-text"
              >
                <Badge tipo={TIPO.OFICINA}>{i + 1}</Badge>
                <span className="mt-0.5">{nome}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-secomp-border bg-secomp-card p-6">
          <h3 className="text-xl font-semibold text-white mb-4">
            Mapeamento das Palestras
          </h3>
          <ul className="space-y-3">
            {palestras.map((nome, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-secomp-text"
              >
                <Badge tipo={TIPO.PALESTRA}>{i + 1}</Badge>
                <span className="mt-0.5">{nome}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default Programacao;
