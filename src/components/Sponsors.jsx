import { useReveal } from "../hooks/useReveal";
import "./Sponsors.css";

import logoMirtesCTB from "../assets/sponsors/logo-mirtes-ctb.png";
import logoTechlead from "../assets/sponsors/logo-techlead.png";
import logoVibe from "../assets/sponsors/logo-vibe.png";
import logoSucesu from "../assets/sponsors/logo-sucesu.png";
import logoEquilibriumWeb from "../assets/sponsors/logo-equilibriumweb.png";
import logoItProtect from "../assets/sponsors/logo-itprotect.png";
import logoInteceleri from "../assets/sponsors/logo-inteceleri.png";
import logoCitiAmazon from "../assets/sponsors/logo-cityamazon.png";
import logoiSaci from "../assets/sponsors/logo-isaci.webp";
import logoFundacaoGuama from "../assets/sponsors/logo-fundacaoguama.jpeg";
import logoCeAmazon from "../assets/sponsors/logo-ceamazon-preta.png";
import logoParatic from "../assets/sponsors/logo-paratic.png";

import logoUFPA from "../assets/hosted/logo-ufpa-sf.png";
import logoFacomp from "../assets/hosted/logo-facomp.png";
import logoComputacao from "../assets/hosted/logo-computacao.png";
import logoPPGComp from "../assets/hosted/logo-ppgcomp.png";

// import medalhaDiamante from "../assets/medals/icone_diamante-300x300_1.png";
import medalhaOuro from "../assets/medals/icone_medalhas_ouro-192x300_1.png";
import medalhaPrata from "../assets/medals/icone_medalhas_prata-198x300_1.png";
import medalhaBronze from "../assets/medals/icone_medalhas_bronze-199x300_1.png";

const categorias = [
    // {
    //     chave: "diamante",
    //     nome: "Diamante",
    //     medalha: medalhaDiamante,
    //     patrocinadores: [],
    // },
    {
        chave: "ouro",
        nome: "Ouro",
        medalha: medalhaOuro,
        patrocinadores: [
            { nome: "Techlead", logo: logoTechlead, site: null, altura: 80 },
            { nome: "Vibe", logo: logoVibe, site: null, altura: 84 },
            {
                nome: "Inteceleri",
                logo: logoInteceleri,
                site: null,
                altura: 210,
            },
            { nome: "ITProtect", logo: logoItProtect, site: null, altura: 55 },

        ],
    },
    {
        chave: "prata",
        nome: "Prata",
        medalha: medalhaPrata,
        patrocinadores: [
            { nome: "Sucesu", logo: logoSucesu, site: null, altura: 78 },
            { nome: "iSaci", logo: logoiSaci, site: null, altura: 48 },
        ],
    },
    {
        chave: "bronze",
        nome: "Bronze",
        medalha: medalhaBronze,
        patrocinadores: [
            {
                nome: "Fundação Guamá",
                logo: logoFundacaoGuama,
                site: null,
                altura: 140,
            }, {
              nome: "ParaTic",
              logo: logoParatic,
              site: null,
              altura: 100,
          },
            {
                nome: "EquilibriumWeb",
                logo: logoEquilibriumWeb,
                site: null,
                altura: 44,
            },
            {
                nome: "CitiAmazon",
                logo: logoCitiAmazon,
                site: null,
                altura: 48,
            },
            {
                nome: "Mirtes CTB",
                logo: logoMirtesCTB,
                site: null,
                altura: 100,
            },
            {
                nome: "CEAmazon",
                logo: logoCeAmazon,
                site: null,
                altura: 75,
            },
        ],
    },
];

const realizacao = [
    { nome: "UFPA", logo: logoUFPA, site: null, altura: 130 },
    {
        nome: "Curso de Ciência da Computação",
        logo: logoComputacao,
        site: null,
        altura: 100,
    },
    // { nome: "PPGCOMP", logo: logoPPGComp, site: null, altura: 110 },
    // { nome: "FACOMP", logo: logoFacomp, site: null, altura: 110 },
];

function computeCols(n, maxPerRow = 3) {
    if (n <= 0) return 1;
    if (n <= maxPerRow) return n;
    const rows = Math.ceil(n / maxPerRow);
    return Math.ceil(n / rows);
}

function LogoSlot({ s, className = "spon" }) {
    const content = (
        <img
            src={s.logo}
            alt={s.nome}
            style={{ height: s.altura, maxWidth: "100%", objectFit: "contain" }}
        />
    );
    return s.site ? (
        <a
            className={className}
            href={s.site}
            target="_blank"
            rel="noopener noreferrer"
        >
            {content}
        </a>
    ) : (
        <div className={className}>{content}</div>
    );
}

function CategoryBlock({ categoria }) {
    const ref = useReveal();

    return (
        <div className="categoria-bloco reveal" ref={ref}>
            <div className="categoria-head">
                <img
                    src={categoria.medalha}
                    alt={`Medalha ${categoria.nome}`}
                    className="categoria-medalha"
                />
                <span className="categoria-nome">{categoria.nome}</span>
            </div>
            <div
                className="spons"
                style={{ "--cols": computeCols(categoria.patrocinadores.length) }}
            >
                {categoria.patrocinadores.length > 0 ? (
                    categoria.patrocinadores.map((s) => (
                        <LogoSlot key={s.nome} s={s} />
                    ))
                ) : (
                    <div className="spon spon-pending">Aguardando</div>
                )}
            </div>
        </div>
    );
}

export default function Sponsors() {
    const refHead = useReveal();
    const refReal = useReveal();
    const refRealList = useReveal();
    const refText = useReveal();

    return (
        <section className="band" id="apoio" style={{ background: "#fff" }}>
            <div className="wrap">
                <div
                    className="sechead reveal"
                    style={{ textAlign: "center", margin: "0 auto 44px" }}
                    ref={refHead}
                >
                    <span
                        className="eyebrow"
                        style={{ justifyContent: "center", display: "flex" }}
                    >
                        Apoio &amp; Patrocínio
                    </span>
                    <h2>Quem rema com a gente</h2>
                </div>

                {categorias.map((c) => (
                    <CategoryBlock key={c.chave} categoria={c} />
                ))}

                <div className="realizacao-head reveal" ref={refReal}>
                    <span
                        className="eyebrow"
                        style={{ justifyContent: "center", display: "flex" }}
                    >
                        Realização
                    </span>
                </div>

                <div
                    className="spons reveal"
                    ref={refRealList}
                    style={{ "--cols": computeCols(realizacao.length) }}
                >
                    {realizacao.map((s) => (
                        <LogoSlot key={s.nome} s={s} />
                    ))}
                </div>

                <p className="spons-cta reveal" ref={refText}>
                    Quer apoiar o maior encontro de tecnologia do Norte?{" "}
                    <a href="mailto:secompufpa@gmail.com">
                        Fale com a organização →
                    </a>
                </p>
            </div>
        </section>
    );
}
