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
                            A maior semana de computação do Norte do país. Aqui,
                            a floresta não é cenário — é{" "}
                            <em>ponto de partida</em>.
                        </p>
                        <p className="about-body">
                            <p>
                                Em 2026, realiza-se a primeira edição da{" "}
                                <strong class="text-white">
                                    Semana da Computação da UFPA (SECOMP)
                                </strong>
                                , organizada por professores e estudantes dos
                                cursos de graduação em Ciência da Computação,
                                Sistemas de Informação e Inteligência
                                Artificial, bem como do Programa de
                                Pós-Graduação em Computação (PPGCC).
                            </p>
                            <br />
                            <p>
                                A programação contempla palestras, oficinas e a
                                fase regional da{" "}
                                <strong class="text-white">
                                    Maratona de Programação
                                </strong>{" "}
                                promovida pela Sociedade Brasileira de
                                Computação (SBC).
                            </p>
                            <br />
                            <p>
                                A SECOMP representa uma iniciativa estratégica
                                para o fortalecimento do ecossistema de
                                Computação na cidade de Belém, gerando impactos
                                diretos na qualificação e valorização dos
                                profissionais envolvidos.
                            </p>
                            <br />
                            <p>
                                Ao reunir diferentes atores do ecossistema
                                tecnológico paraense, o evento também estimula o
                                desenvolvimento de soluções alinhadas às
                                demandas locais, contribuindo para o{" "}
                                <strong class="text-white">
                                    desenvolvimento sustentável da Amazônia
                                </strong>{" "}
                                por meio da tecnologia.
                            </p>

                            {/* A SECOMP reúne quem programa, pesquisa e constrói tecnologia em
              Belém. São quatro dias de palestras, minicursos, maratona e muita
              troca — do igarapé à nuvem. Um espaço para conectar a comunidade
              de computação da Amazônia com o que há de mais novo no mundo da
              tecnologia.*/}
                        </p>
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
