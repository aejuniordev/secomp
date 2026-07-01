import { useReveal } from '../hooks/useReveal';
import './Tracks.css';

const TRACKS = [
  {
    tag: 'aprender',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
        <path d="M4 6h16M4 12h10M4 18h7" />
      </svg>
    ),
    title: 'Palestras',
    desc: 'Visões de quem está moldando a tecnologia — da pesquisa de ponta à indústria.',
  },
  {
    tag: 'mão na massa',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 6l-2 12" />
      </svg>
    ),
    title: 'Minicursos',
    desc: 'Conteúdo prático, do básico ao avançado. Traga seu notebook e saia codando.',
  },
  {
    tag: 'competição',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 4h14M7 4v5a5 5 0 0010 0V4M12 14v4M8 21h8" />
      </svg>
    ),
    title: 'Maratona de Programação',
    desc: 'Algoritmos sob pressão. Lógica, velocidade e trabalho em equipe.',
  },
  {
    tag: 'carreira',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 7h16v12H4zM9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M4 13h16" />
      </svg>
    ),
    title: 'Feira de Carreiras',
    desc: 'Empresas e talentos no mesmo lugar. Conheça vagas, estágios e quem está contratando.',
  },
  {
    tag: 'conexões',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
        <circle cx="6" cy="6" r="2.4" />
        <circle cx="18" cy="6" r="2.4" />
        <circle cx="12" cy="18" r="2.4" />
        <path d="M7.6 7.6L11 16M16.4 7.6L13 16M8 6h8" />
      </svg>
    ),
    title: 'Networking',
    desc: 'A outra rede. Conexões com a comunidade tech do Norte que duram além da semana.',
  },
];

function TrackCard({ tag, icon, title, desc }) {
  const ref = useReveal();
  return (
    <div className="track reveal" ref={ref}>
      <span className="tag">{tag}</span>
      <div className="ic">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

export default function Tracks() {
  const refHead = useReveal();

  return (
    <section className="band alt" id="trilhas">
      <div className="wrap">
        <div className="sechead reveal" ref={refHead}>
          <span className="eyebrow">Trilhas</span>
          <h2>Várias formas de mergulhar</h2>
          <p>
            Escolha por onde navegar. Cada trilha é um afluente do mesmo rio:
            aprender, construir e se conectar.
          </p>
        </div>
        <div className="tracks">
          {TRACKS.map((t) => (
            <TrackCard key={t.title} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
