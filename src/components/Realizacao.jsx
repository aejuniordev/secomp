import logoUfpa from "../../logo_ufpa.jpg";
import computacao from "../../computacao.jpeg";
import whatsappImage from "../../WhatsApp Image 2026-05-07 at 11.20.40.jpeg";

const realizadores = [
  { nome: "UFPA", logo: logoUfpa, site: null },
  { nome: "Computação UFPA", logo: computacao, site: null },
  { nome: "PPGCOMP", logo: whatsappImage, site: null, rounded: true },
];

const Realizacao = () => (
  <section id="realizacao" className="py-24 px-4 bg-secomp-card">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Realização
        </h2>
        <div className="w-16 h-1 bg-secomp-cyan mx-auto mb-6"></div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        {realizadores.map((r) => {
          const img = (
            <img
              src={r.logo}
              alt={`Logo ${r.nome}`}
              className={`h-24 md:h-32 w-auto object-contain${r.rounded ? " rounded-lg" : ""}`}
            />
          );

          return r.site ? (
            <a
              key={r.nome}
              href={r.site}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              {img}
            </a>
          ) : (
            <div key={r.nome} className="flex-shrink-0">
              {img}
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Realizacao;
