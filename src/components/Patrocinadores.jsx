import React from "react";
import logoMirtesCTB from "../../logo-mirtes-ctb.png";
// import logoPatrocinador2 from "../../logo-patrocinador2.png";
// import logoPatrocinador3 from "../../logo-patrocinador3.png";
// import logoPatrocinador4 from "../../logo-patrocinador4.png";
// import logoPatrocinador5 from "../../logo-patrocinador5.png";
// import logoPatrocinador6 from "../../logo-patrocinador6.png";

const TOTAL_SLOTS = 6;

const patrocinadores = [
  { nome: "Mirtes CTB", logo: logoMirtesCTB, site: null },
  // { nome: "Patrocinador 2", logo: logoPatrocinador2, site: null },
  // { nome: "Patrocinador 3", logo: logoPatrocinador3, site: null },
  // { nome: "Patrocinador 4", logo: logoPatrocinador4, site: null },
  // { nome: "Patrocinador 5", logo: logoPatrocinador5, site: null },
  // { nome: "Patrocinador 6", logo: logoPatrocinador6, site: null },
];

const Placeholder = () => (
  <div className="flex-shrink-0 h-24 md:h-32 w-32 md:w-40 rounded-xl border border-dashed border-secomp-border flex flex-col items-center justify-center gap-1">
    <span className="text-secomp-text/40 text-xs font-medium uppercase tracking-widest">
      Aguardando
    </span>
  </div>
);

const Patrocinadores = () => {
  const vazios = Math.max(0, TOTAL_SLOTS - patrocinadores.length);

  return (
    <section id="patrocinadores" className="py-24 px-4 bg-secomp-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Patrocinadores
          </h2>
          <div className="w-16 h-1 bg-secomp-cyan mx-auto mb-6"></div>
          <p className="text-secomp-text max-w-2xl mx-auto">
            Conheça os apoiadores e parceiros que tornam este evento possível.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {patrocinadores.map((p) => {
            const img = (
              <img
                src={p.logo}
                alt={`Logo ${p.nome}`}
                className="h-24 md:h-32 w-auto object-contain rounded-xl"
              />
            );

            return p.site ? (
              <a
                key={p.nome}
                href={p.site}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0"
              >
                {img}
              </a>
            ) : (
              <div key={p.nome} className="flex-shrink-0">
                {img}
              </div>
            );
          })}

          {Array.from({ length: vazios }).map((_, i) => (
            <Placeholder key={`placeholder-${i}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Patrocinadores;
