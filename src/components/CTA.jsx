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
                <p>
                    Garanta seu lugar na maior semana de computação da Amazônia.
                    Vagas limitadas para minicursos e maratona.
                </p>
                <div className="hero-cta">
                    <a href="mailto:secompufpa@gmail.com" className="btn btn-disabled" aria-disabled="true" tabIndex={-1}>
                        Quero me inscrever →
                    </a>
                    <a href="#faq" className="btn ghost">
                        Tenho dúvidas
                    </a>
                </div>
            </div>
        </section>
    );
}
