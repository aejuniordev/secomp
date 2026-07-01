import { useReveal } from "../hooks/useReveal";
import "./Local.css";

const MAPS_URL = "https://maps.app.goo.gl/ZxpGa42hc3F3VPus7";

export default function Local() {
    const refCard = useReveal();
    const refFeats = useReveal();
    const refPanel = useReveal();
    const refMap = useReveal();

    return (
        <section className="band alt" id="local">
            <div className="wrap">
                {/* ── Bloco original ── */}
                <div className="local-grid">
                    <div className="local-card reveal" ref={refCard}>
                        <span className="eyebrow">Onde acontece</span>
                        <h3>Belém do Pará</h3>
                        <p>
                            A porta de entrada da Amazônia, onde o rio encontra
                            o oceano. Em 2025 o mundo olhou para cá — agora é a
                            vez da computação. O evento acontece no Campus do
                            Guamá, da Universidade Federal do Pará.
                        </p>
                        <div className="pin">
                            ◎ UFPA · Campus Guamá · Belém/PA
                        </div>
                        <svg
                            className="local-net"
                            viewBox="0 0 200 200"
                            aria-hidden="true"
                        >
                            <path
                                d="M10 100h40c20 0 24-30 50-30s30 30 50 30h40"
                                fill="none"
                                stroke="#2FD3AE"
                                strokeWidth="2"
                            />
                            <path
                                d="M10 140h60c20 0 20-20 40-20"
                                fill="none"
                                stroke="#2FD3AE"
                                strokeWidth="1.4"
                                opacity="0.6"
                            />
                            <circle cx="50" cy="100" r="4" fill="#2FD3AE" />
                            <circle cx="150" cy="100" r="4" fill="#2FD3AE" />
                        </svg>
                    </div>

                    <div className="local-feats reveal" ref={refFeats}>
                        <div className="feat">
                            <span className="d" />
                            <div>
                                <h4>Fácil de chegar</h4>
                                <p>
                                    Campus universitário com acesso por
                                    transporte público e estacionamento na
                                    região.
                                </p>
                            </div>
                        </div>
                        <div className="feat">
                            <span className="d" />
                            <div>
                                <h4>Estrutura completa</h4>
                                <p>
                                    Auditórios, laboratórios e espaços de
                                    convivência para todas as atividades.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Endereço + Mapa ── */}
                <div className="local-layout">
                    <div className="local-panel reveal" ref={refPanel}>
                        <div className="local-info-block">
                            <div className="local-icon">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden="true"
                                >
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                                    <circle cx="12" cy="9" r="2.5" />
                                </svg>
                            </div>
                            <div>
                                <h4>Endereço</h4>
                                <address>
                                    <span>
                                        Instituto de Ciências Exatas e Naturais
                                        — ICEN/UFPA
                                    </span>
                                    <span>R. Augusto Corrêa, 01 — Guamá</span>
                                    <span>Belém — PA, 66075-110</span>
                                </address>
                            </div>
                        </div>

                        <div className="local-info-block">
                            <div className="local-icon">
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    aria-hidden="true"
                                >
                                    <line x1="22" y1="2" x2="11" y2="13" />
                                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                </svg>
                            </div>
                            <div>
                                <h4>Como chegar</h4>
                                <p>
                                    Acesso pela Av. Perimetral ou Av. Augusto
                                    Montenegro. O campus possui estacionamento
                                    próprio para visitantes.
                                </p>
                            </div>
                        </div>

                        <a
                            className="local-maps-btn"
                            href={MAPS_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Abrir no Google Maps
                        </a>
                    </div>

                    <div className="local-map reveal" ref={refMap}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.4971901321173!2d-48.456158699999996!3d-1.4745036999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48d950a724ca7%3A0x94f37c74f24e488!2sInstituto%20de%20Ci%C3%AAncias%20Exatas%20e%20Naturais%20-%20UFPA!5e0!3m2!1spt-BR!2sbr!4v1782732951561!5m2!1spt-BR!2sbr"
                            title="Instituto de Ciências Exatas e Naturais – UFPA"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
