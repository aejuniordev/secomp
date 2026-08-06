import { useState, useEffect } from 'react';
import { useReveal } from '../hooks/useReveal';
import logoMaratona from '../assets/hosted/logo-maratona-programacao.jpg';
import './Marathon.css';

const UNIVERSITIES = [
  {
    nome: 'UFPA - Belém',
    sigla: 'UFPA - Belém',
    tecnicos: [
      {
        tecnico: { nome: 'Paula Cardoso', genero: 'F' },
        equipes: [
          [
            { nome: 'Giuliana Pinheiro', genero: 'F' },
            { nome: 'Yulle Silva', genero: 'F' },
            { nome: 'Maria Campos', genero: 'F' },
          ],
          [
            { nome: 'Ladielma Teixeira', genero: 'F'  },
            { nome: 'Carlos Silva', genero: 'M' },
            { nome: 'João Pedro Souza Arruda', genero: 'M' },
          ],
          [
            { nome: "Thiago Sant'Anna", genero: 'M' },
            { nome: 'João Lima', genero: 'M' },
            { nome: 'Virgilio Neto', genero: 'M' },
          ],
          [
            { nome: 'Daniel Santos', genero: 'M' },
            { nome: 'Ian Vitória', genero: 'M' },
            { nome: 'Eduardo Duda', genero: 'M' },
          ],
          [
            { nome: 'Anamaya Oliveira', genero: 'F'  },
            { nome: 'Sophia Miyazaki', genero: 'F'  },
            { nome: 'Vitor Moraes', genero: 'M' },
          ],
        ],
      },
      {
        tecnico: { nome: 'Ana Müller', genero: 'F' },
        equipes: [
          [
            { nome: 'Yamim Sarmento da Poça', genero: 'F' },
            { nome: 'Giovana Nascimento da Silva', genero: 'F' },
            { nome: 'Ana Silva', genero: 'F' },
          ],
        ],
      },
      {
        tecnico: { nome: 'Renato Hidaka', genero: 'M' },
        equipes: [
          [
            { nome: 'Isaque Costa', genero: 'M' },
            { nome: 'Edivaldo Pinheiro', genero: 'M' },
            { nome: 'Hiago Anjos', genero: 'M' },
          ],
          [
            { nome: 'Maria Pinheiro', genero: 'F' },
            { nome: 'Kamila Sarmanho', genero: 'F' },
            { nome: 'Nathielly Castro', genero: 'F' },
          ],
          [
            { nome: 'Murillo Santos', genero: 'M' },
            { nome: 'Vinícius Oliveira', genero: 'M' },
            { nome: 'Matheus Santos', genero: 'M' },
          ],
          [
            { nome: 'Rafael Puget', genero: 'M' },
            { nome: 'Bernardo Pantoja', genero: 'M' },
            { nome: 'Alexandre Filho', genero: 'M' },
          ],
        ],
      },
      {
        tecnico: { nome: 'Francisco Muller', genero: 'M' },
        equipes: [
          [
            { nome: 'Davison Costa', genero: 'M' },
            { nome: 'Vinicius Santos', genero: 'M' },
            { nome: 'Gabriel Sousa', genero: 'M' },
          ],
        ],
      },
    ],
  },
  {
    nome: 'UFPA - Castanhal',
    sigla: 'UFPA - Castanhal',
    tecnicos: [
      {
        tecnico: { nome: 'Maria da Penha Harb', genero: 'F' },
        equipes: [
          [
            { nome: 'Anna Vitória Silva Ribeiro', genero: 'F' },
            { nome: 'Nilson Filho', genero: 'M' },
            { nome: 'Leandro Penha', genero: 'M' },
          ],
          [
            { nome: 'Barbara Angelin', genero: 'F' },
            { nome: 'Luana Freitas', genero: 'F' },
            { nome: 'Sara Geovana Palheta Ferreira', genero: 'F' },
          ],
          [
            { nome: 'Ian Pimentel', genero: 'M' },
            { nome: 'Railton Azevedo', genero: 'M' },
            { nome: 'Anthony Ribeiro', genero: 'M' },
          ],
          [
            { nome: 'Lucas Correa Marinheiro', genero: 'M' },
            { nome: 'Raffael Thauã da Silva Lima', genero: 'M' },
            { nome: 'Glauber Willer da Silva e Silva', genero: 'M' },
          ],
          [
            { nome: 'Anderson Souza', genero: 'M' },
            { nome: 'Henderson da Silva Ferreira', genero: 'M' },
            { nome: 'Douglas Hemerson Moraes Reis Reis', genero: 'M' },
          ],
          [
            { nome: 'Pablo Oliveira', genero: 'M' },
            { nome: 'Mikael Nascimento', genero: 'M' },
            { nome: 'Edson Mamede', genero: 'M' },
          ],
          [
            { nome: 'Alicia Oliveira', genero: 'F' },
            { nome: 'Henrique Miranda', genero: 'M' },
            { nome: 'Thomaz Cunha', genero: 'M' },
          ],
        ],
      },
    ],
  },
  {
    nome: 'Faci Wyden',
    sigla: 'Faci Wyden',
    tecnicos: [
      {
        tecnico: { nome: 'Paulo Melo', genero: 'M' },
        equipes: [
          [
            { nome: 'Alexsandro Carlos de Sousa Silva', genero: 'M' },
            { nome: 'Kauã Barreto Mourão', genero: 'M' },
            { nome: 'Filipe Lima Oliveira', genero: 'M' },
          ],
        ],
      },
    ],
  },
  {
    nome: 'Unama - Belém',
    sigla: 'Unama - Belém',
    tecnicos: [
      {
        tecnico: { nome: 'Samara Souza', genero: 'F' },
        equipes: [
          [
            { nome: 'Daniel Luiz Quaresma Lima Varela da Câmara', genero: 'M' },
            { nome: 'Israel Siqueira Miranda', genero: 'M' },
            { nome: 'Vinicius Lozano de Oliveira', genero: 'M' },
          ],
          [
            { nome: 'Hanna de Melo Mustafa', genero: 'F' },
            { nome: 'Leticia Monteiro Alves da Silva', genero: 'F' },
            { nome: 'Lorena Gama Neiva', genero: 'F' },
          ],
        ],
      },
    ],
  },
];

function PersonIcon({ genero }) {
  if (genero === 'F') {
    return (
      <svg viewBox="0 0 24 24" className="person-icon person-icon-f" aria-hidden="true">
        <path
          d="M12 3c1.7 0 3 1.5 3 3.3 0 1.4-.4 2.6-1 3.5.3.2.6.3.9.5C17 11.4 18 13.3 18 16v2.2c0 .8-.6 1.6-1.7 1.6H7.7C6.6 19.8 6 19 6 18.2V16c0-2.7 1-4.6 3.1-5.7.3-.2.6-.3.9-.5-.6-.9-1-2.1-1-3.5C9 4.5 10.3 3 12 3z"
          fill="currentColor"
        />
        <path
          d="M8.6 6.4c-.4-1 .3-2.3 1.6-2.8M15.4 6.4c.4-1-.3-2.3-1.6-2.8"
          stroke="currentColor"
          strokeWidth="1.1"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="person-icon person-icon-m" aria-hidden="true">
      <circle cx="12" cy="7.2" r="3.4" fill="currentColor" />
      <path
        d="M6 18.4C6 14.9 8.7 12.6 12 12.6s6 2.3 6 5.8v.4c0 .8-.6 1.5-1.5 1.5h-9C6.6 20.3 6 19.6 6 18.8v-.4z"
        fill="currentColor"
      />
    </svg>
  );
}

function TeamGroup({ label, people }) {
  return (
    <div className="team-group">
      <span className="team-group-label">{label}</span>
      <div className="team-people">
        {people.length > 0 ? (
          people.map((p) => (
            <div className="team-person" key={p.nome}>
              <div className={`team-avatar avatar-${(p.genero || 'M').toLowerCase()}`}>
                <PersonIcon genero={p.genero} />
              </div>
              <span>{p.nome}</span>
            </div>
          ))
        ) : (
          <span className="team-pending">Equipe em definição</span>
        )}
      </div>
    </div>
  );
}

function TecnicoGroup({ grupo }) {
  return (
    <div className="tecnico-group">
      <TeamGroup
        label="Técnico"
        people={grupo.tecnico ? [grupo.tecnico] : []}
      />
      <div className="tecnico-equipes">
        {grupo.equipes.map((competidores, i) => (
          <div className="equipe-block" key={i}>
            <h4 className="equipe-nome">Equipe {i + 1}</h4>
            <TeamGroup label="Competidores" people={competidores} />
          </div>
        ))}
      </div>
    </div>
  );
}

function TeamList({ universities }) {
  const [active, setActive] = useState(0);
  const [locked, setLocked] = useState(false);
  const [enter, setEnter] = useState('side');
  const uni = universities[active];

  useEffect(() => {
    if (locked) return;
    const id = setInterval(() => {
      setEnter('side');
      setActive((a) => (a + 1) % universities.length);
    }, 3500);
    return () => clearInterval(id);
  }, [locked, universities.length]);

  return (
    <div className="maratona-teams">
      <div className="team-tabs" role="tablist" aria-label="Universidades participantes">
        {universities.map((u, i) => (
          <button
            key={u.nome}
            className="team-tab"
            role="tab"
            aria-selected={active === i}
            onClick={() => {
              setEnter('down');
              setActive(i);
              setLocked(true);
            }}
          >
            {u.sigla}
          </button>
        ))}
      </div>
      <div className={`team-panel enter-${enter}`} key={uni.nome}>
        <div className="equipes-list">
          {uni.tecnicos.map((grupo, i) => (
            <TecnicoGroup key={grupo.tecnico?.nome || i} grupo={grupo} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Marathon() {
  const refText = useReveal();
  const refTeams = useReveal();

  return (
    <section className="band" id="maratona">
      <div className="wrap">
        <div className="maratona-grid">
          <div className="reveal" ref={refText}>
            <div className="sechead" style={{ marginBottom: 0 }}>
              <span className="eyebrow">Maratona</span>
              <h2>Maratona de Programação</h2>
            </div>

            <div className="maratona-text">
              <p>
                A Maratona de Programação é um evento da Sociedade Brasileira
                de Computação, é uma das atividades de maior impacto dentro
                da computação, pois a competição promove nos estudantes a
                criatividade, a capacidade de trabalho em equipe, a busca de
                novas soluções de software e a habilidade de resolver
                problemas sob pressão.
              </p>
              <p>
                Para a universidade, a participação fortalece a formação
                prática dos estudantes, amplia a visibilidade institucional e
                estimula a excelência acadêmica.
              </p>
              <p>
                Do ponto de vista do mercado, a maratona funciona como um
                ambiente estratégico para identificação de talentos
                altamente qualificados, capazes de enfrentar desafios reais
                de desenvolvimento tecnológico.
              </p>
              <a
                className="btn"
                href="https://maratona.sbc.org.br"
                target="_blank"
                rel="noopener noreferrer"
              >
                Conheça mais →
              </a>
            </div>
          </div>

          <div className="maratona-logo-col">
            <img src={logoMaratona} alt="Maratona de Programação" className="maratona-logo-lg" />
          </div>
        </div>

        <div className="reveal" ref={refTeams}>
          <TeamList universities={UNIVERSITIES} />
        </div>
      </div>
    </section>
  );
}
