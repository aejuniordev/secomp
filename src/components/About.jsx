import { useReveal } from "../hooks/useReveal";
import "./About.css";

const STATS = [
    { n: "+10", l: "Atividades entre palestras e minicursos" },
    { n: "4", l: "Dias intensos de programação" },
    { n: "+100", l: "Participantes esperados" },
    { n: "1", l: "Maratona de Programação" },
];

export default function About() {
    const refText = useReveal();
    const refStats = useReveal();

    return (
        <section className="band" id="sobre">
            <div className="wrap">
                <div className="about-grid">
                    <div className="reveal" ref={refText}>
                        <span className="eyebrow">O Evento</span>
                        <p className="about-lead" style={{ marginTop: "18px" }}>
                            Um dos principais encontros de computação do Norte do país.
                        </p>
                        <div className="about-body">
                            <p>
                                Em 2026, a Faculdade de Computação promove a{" "}
                                <strong className="text-white">
                                    Semana da Computação da UFPA (SECOMP)
                                </strong>
                                , evento presencial organizado por professores e
                                estudantes dos cursos de graduação em Ciência da
                                Computação, Sistemas de Informação e
                                Inteligência Artificial, além do Programa de
                                Pós-Graduação em Computação. A realização conta
                                também com o apoio de profissionais de
                                tecnologia atuantes no mercado, que participam
                                como palestrantes e convidados.
                            </p>
                            <br />
                            <p>
                                O evento acontecerá entre os dias 26 e 29 de agosto de 2026, no auditório do Espaço Inovação do PCT Guamá. A
                                programação inclui palestras, oficinas práticas
                                e a fase regional da{" "}
                                <strong className="text-white">
                                    Maratona de Programação
                                </strong>
                                , promovida pela Sociedade Brasileira de
                                Computação.
                            </p>
                            <br />
                            <p>
                                Ao reunir estudantes, pesquisadores e
                                profissionais do setor, a SECOMP fortalece o
                                ecossistema de tecnologia em Belém e contribui
                                para a formação e a atualização de quem
                                participa.
                            </p>
                            <br />
                            <p>
                                Confira como foi a{" "}
                                <a
                                    href="https://computacao40anos.ufpa.br/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    edição anterior
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                    <div className="stats reveal" ref={refStats}>
                        {STATS.map((s, i) => (
                            <div className="stat" key={i}>
                                <div className="n">{s.n}</div>
                                <div className="l">{s.l}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
