import { useEffect, useRef } from "react";
import { useReveal } from "../hooks/useReveal";
import logoSecomp from "../assets/principal/logo-secomp-colorido-sf.png";
import "./Hero.css";

const NET_PATHS = [
    "M-40 360 C 200 360 300 350 380 340",
    "M380 340 C 470 330 540 250 660 210 C 760 178 850 150 980 120 C 1080 98 1160 96 1260 96",
    "M660 210 C 760 200 840 220 980 210 C 1080 202 1170 220 1260 230",
    "M380 340 C 480 348 600 350 720 352 C 850 354 960 336 1100 326 C 1170 320 1220 320 1260 318",
    "M380 340 C 470 352 560 420 680 470 C 780 512 870 560 1000 600 C 1080 624 1160 632 1260 636",
    "M680 470 C 780 452 880 470 1010 460 C 1110 452 1180 470 1260 478",
    "M-40 540 C 160 530 260 480 360 458 C 430 442 500 430 560 432",
    "M560 432 C 660 436 700 360 720 352",
];

const NET_NODES = [
    [380, 340],
    [660, 210],
    [720, 352],
    [680, 470],
    [560, 432],
    [980, 120],
    [1000, 600],
    [1100, 326],
];

export default function Hero() {
    const ref = useReveal();

    return (
        <header className="hero" id="topo">
            <div className="hero-glow g1" />
            <div className="hero-glow g2" />

            <svg
                className="hero-net"
                viewBox="0 0 1200 720"
                preserveAspectRatio="xMidYMid slice"
                aria-hidden="true"
            >
                {NET_PATHS.map((d, i) => (
                    <path key={`base-${i}`} className="net-base" d={d} />
                ))}
                {NET_PATHS.map((d, i) => (
                    <path
                        key={`pulse-${i}`}
                        className="net-pulse"
                        d={d}
                        style={{
                            animationDuration: `${7 + i * 1.3}s`,
                            animationDelay: `${i * -1.1}s`,
                        }}
                    />
                ))}
                {NET_NODES.map(([cx, cy], i) => (
                    <g key={`node-${i}`}>
                        <circle className="node" cx={cx} cy={cy} r="5" />
                        <circle
                            className="node-core"
                            cx={cx}
                            cy={cy}
                            r="3"
                            style={{ animationDelay: `${i * -0.5}s` }}
                        />
                    </g>
                ))}
            </svg>

            <div className="wrap hero-inner reveal" ref={ref}>
                <span className="eyebrow">26–29 AGO 2026 · BELÉM · PARÁ</span>
                <div className="hero-logo-wrap">
                    <img
                        src={logoSecomp}
                        alt="SECOMP 2026"
                        className="hero-logo"
                    />
                </div>
                <div className="hero-theme">
                    <span className="hero-theme-label">Tema 2026</span>
                    <p>
                        Tecnologia e sociedade diante das
                        <br />
                        novas fronteiras da inteligência artificial
                    </p>
                </div>
                <p className="hero-tag">
                    Quatro dias de tecnologia no coração da Amazônia.{" "}
                    <b>Onde os igarapés viram redes.</b>
                </p>
                <div className="hero-cta">
                    {/* <a href="#inscricao"></a>*/}
                    <span className="btn btn-disabled">
                        Garantir minha vaga →
                    </span>
                    <a href="#programacao" className="btn ghost">
                        Ver programação
                    </a>
                </div>
                <div className="hero-meta">
                    <div>
                        <span className="k">Quando</span>
                        <span className="v">26–29 Ago</span>
                    </div>
                    <div>
                        <span className="k">Onde</span>
                        <span className="v">UFPA · Belém</span>
                    </div>
                    <div>
                        <span className="k">Formato</span>
                        <span className="v">Presencial</span>
                    </div>
                </div>
            </div>
        </header>
    );
}
