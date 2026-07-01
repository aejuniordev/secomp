import { useReveal } from "../hooks/useReveal";
import "./Sponsors.css";

import logoMirtesCTB from "../assets/sponsors/logo-mirtes-ctb.png";
import logoTechlead from "../assets/sponsors/logo-techlead.png";
import logoVibe from "../assets/sponsors/logo-vibe.png";
import logoSucesu from "../assets/sponsors/logo-sucesu.png";
import logoEquilibriumWeb from "../assets/sponsors/logo-equilibriumweb.png";

import logoUFPA from "../assets/hosted/logo-ufpa-sf.png";
import logoComputacao from "../assets/hosted/logo-computacao.png";
import logoPPGComp from "../assets/hosted/logo-ppgcomp.png";

const TOTAL_SLOTS = 6;

const patrocinadores = [
    { nome: "Mirtes CTB", logo: logoMirtesCTB, site: null, altura: 120 },
    { nome: "Techlead", logo: logoTechlead, site: null, altura: 78 },
    { nome: "Vibe", logo: logoVibe, site: null, altura: 78 },
    { nome: "Sucesu", logo: logoSucesu, site: null, altura: 84 },
    {
        nome: "EquilibriumWeb",
        logo: logoEquilibriumWeb,
        site: null,
        altura: 54,
    },
    // { nome: "Patrocinador 6", logo: null, site: null, altura: 64 },
];

const realizacao = [
    { nome: "UFPA", logo: logoUFPA, site: null, altura: 104 },
    {
        nome: "Curso de Ciência da Computação",
        logo: logoComputacao,
        site: null,
        altura: 80,
    },
    { nome: "PPGCOMP", logo: logoPPGComp, site: null, altura: 90 },
];

const pendentes = TOTAL_SLOTS - patrocinadores.length;

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

export default function Sponsors() {
    const refHead = useReveal();
    const refList = useReveal();
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

                <div className="spons reveal" ref={refList}>
                    {patrocinadores.map((s) => (
                        <LogoSlot key={s.nome} s={s} />
                    ))}
                    {Array.from({ length: pendentes }).map((_, i) => (
                        <div key={`pending-${i}`} className="spon spon-pending">
                            Aguardando
                        </div>
                    ))}
                </div>

                <div className="realizacao-head reveal" ref={refReal}>
                    <span
                        className="eyebrow"
                        style={{ justifyContent: "center", display: "flex" }}
                    >
                        Realização
                    </span>
                </div>

                <div className="spons reveal" ref={refRealList}>
                    {realizacao.map((s) => (
                        <LogoSlot key={s.nome} s={s} />
                    ))}
                </div>

                <p className="spons-cta reveal" ref={refText}>
                    Quer apoiar o maior encontro de tecnologia do Norte?{" "}
                    <a href="#">Fale com a organização →</a>
                </p>
            </div>
        </section>
    );
}
