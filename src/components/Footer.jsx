import "./Footer.css";

export default function Footer() {
    return (
        <footer>
            <div className="wrap">
                <div className="foot-grid">
                    <div>
                        <span className="brand">
                            <svg
                                viewBox="0 0 32 32"
                                fill="none"
                                aria-hidden="true"
                            >
                                <path
                                    d="M3 16h6c3 0 4-4 7-4s4 4 7 4h6"
                                    stroke="#2FD3AE"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                                <circle cx="9" cy="16" r="2.4" fill="#2FD3AE" />
                                <circle cx="23" cy="16" r="2.4" fill="#fff" />
                            </svg>
                            SECOMP 2026
                        </span>
                        <p>
                            Semana da Computação da Universidade Federal do
                            Pará. Tecnologia que nasce na floresta.
                        </p>
                    </div>
                    <div className="foot-col">
                        <h4>Navegar</h4>
                        <a href="#sobre">Sobre</a>
                        <a href="#trilhas">Trilhas</a>
                        <a href="#programacao">Programação</a>
                        <a href="#local">Local</a>
                    </div>
                    <div className="foot-col">
                        <h4>Contato</h4>
                        <a href="#">Instagram</a>
                        <a href="mailto:secompufpa@gmail.com">
                            E-mail da organização
                        </a>
                        <span className="link-disabled">Seja patrocinador</span>
                        <span className="link-disabled">Inscreva-se</span>
                        {/* <a href="#inscricao"></a>*/}
                    </div>
                </div>
                <div className="foot-bot">
                    <span>© 2026 SECOMP · UFPA · Belém / Pará</span>
                    <span>26–29.08.2026</span>
                </div>
            </div>
        </footer>
    );
}
