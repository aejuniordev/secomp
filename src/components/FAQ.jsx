import { useState } from "react";
import { useReveal } from "../hooks/useReveal";
import "./FAQ.css";

const ITEMS = [
    {
        q: "Devo ser aluno da universidade para participar?",
        a: "<strong>Não!</strong> O evento é aberto a toda a comunidade. Qualquer pessoa interessada pode participar, mesmo que não seja aluno da universidade — basta realizar a inscrição e garantir sua vaga.",
    },
    {
        q: "Como entrar em contato com a organização do evento?",
        a: 'Você pode entrar em contato com a organização enviando um e-mail para <a href="mailto:secompufpa@gmail.com"><strong>secompufpa@gmail.com</strong></a>.',
    },
    {
        q: "Vou ganhar certificado ao final do evento?",
        a: "<strong>Com certeza!</strong> Ao final do evento, você receberá um certificado oficial — uma forma de registrar sua presença e o conhecimento compartilhado nessa jornada.",
    },
    {
        q: "O evento é aberto ao público?",
        a: "<strong>Sim!</strong> O evento é aberto ao público e recebe tanto alunos quanto profissionais e entusiastas da área. A participação é garantida mediante a inscrição.",
    },
    {
        q: "Haverá palestrantes de outros estados?",
        a: "<strong>Sim!</strong> Há palestrantes de outros estados. Estamos preparando um evento incrível, com diversos convidados trazendo experiências únicas e conhecimentos que vão enriquecer ainda mais a programação.",
    },
];

export default function FAQ() {
    const [open, setOpen] = useState(0);
    const refHead = useReveal();
    const refList = useReveal();

    return (
        <section className="band alt" id="faq">
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
                        Dúvidas
                    </span>
                    <h2>Perguntas Frequentes</h2>
                </div>

                <div className="faq-list reveal" ref={refList}>
                    {ITEMS.map((item, i) => {
                        const isOpen = open === i;
                        return (
                            <div key={i} className="faq-group">
                                <div
                                    className={`faq-item${isOpen ? " faq-open" : ""}`}
                                >
                                    <button
                                        className="faq-question"
                                        onClick={() =>
                                            setOpen(isOpen ? null : i)
                                        }
                                        aria-expanded={isOpen}
                                    >
                                        <span>{item.q}</span>
                                        <svg
                                            className="faq-chevron"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            aria-hidden="true"
                                        >
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                    </button>
                                </div>

                                <div
                                    className={`faq-answer${isOpen ? " faq-answer-open" : ""}`}
                                >
                                    <div className="faq-answer-inner">
                                        <p
                                            dangerouslySetInnerHTML={{
                                                __html: item.a,
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
