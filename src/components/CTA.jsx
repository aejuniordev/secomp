import { useReveal } from "../hooks/useReveal";
import "./CTA.css";

export default function CTA() {
    const ref = useReveal();

    return (
        <section className="cta-band" id="inscricao">
            <div
                className="hero-glow g1"
                style={{ opacity: 0.35, top: "-180px" }}
            />
            <div
                className="wrap reveal"
                ref={ref}
                style={{ position: "relative", zIndex: 2 }}
            >
                <span
                    className="eyebrow"
                    style={{ justifyContent: "center", display: "flex" }}
                >
                    Inscrições abertas
                </span>
                <h2 style={{ marginTop: "18px" }}>
                    Sua vaga na <em>rede</em> começa aqui
                </h2>

                <div className="cta-grid">
                    <div className="cta-side">
                        <div className="cta-prices">
                            <div className="cta-price-card">
                                <span className="cta-price-label">
                                    Estudante
                                </span>
                                <span className="cta-price-value">
                                    R$ 30,00
                                </span>
                            </div>
                            <div className="cta-price-card">
                                <span className="cta-price-label">
                                    Professores e demais profissionais
                                </span>
                                <span className="cta-price-value">
                                    R$ 100,00
                                </span>
                            </div>
                        </div>

                        <div className="cta-text-col">
                            <p className="cta-lead">
                                Garanta seu lugar na maior semana de
                                computação da Amazônia. Vagas limitadas para
                                palestras e minicursos.
                            </p>

                            <p className="cta-highlight">
                                Não perca a oportunidade de viver essa
                                jornada de aprendizado e tecnologia!
                            </p>

                            <p className="cta-dates">
                                Inscrição de 30 de julho a 25 de agosto de
                                2026, enquanto houver vagas.
                            </p>

                            <p className="cta-oficinas-alert">
                                As inscrições para as oficinas já estão abertas!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="hero-cta">

                    <a
                      className="btn"
                      href="https://sigeventos.ufpa.br/evento/SSC2026/pagina/inscricao"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Quero me inscrever →
                    </a>
                    {/* <a href="" className="btn" aria-disabled="true" tabIndex={-1}>

                    </a>*/}
                    <a href="#faq" className="btn ghost">
                        Tenho dúvidas
                    </a>
                </div>
            </div>
        </section>
    );
}
