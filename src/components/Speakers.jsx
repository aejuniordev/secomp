import { useReveal } from '../hooks/useReveal';
import './Speakers.css';

import speakerBira from "../assets/speakers/speaker-ubiratan.png";

const SPEAKERS = [
    // { nome: 'Ubiratan Holanda Bezerra', instituicao: 'UFPA - Universidade Federal do Oeste do Pará', foto: speakerBira },
    // { nome: 'Ubiratan Holanda Bezerra', instituicao: 'UFPA - Universidade Federal do Oeste do Pará', foto: speakerBira },
    // { nome: 'Ubiratan Holanda Bezerra', instituicao: 'UFPA - Universidade Federal do Oeste do Pará', foto: speakerBira },
    // { nome: 'Ubiratan Holanda Bezerra', instituicao: 'UFPA - Universidade Federal do Oeste do Pará', foto: speakerBira },
];

function initials(nome) {
  return nome
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');
}

function SpeakerCard({ nome, instituicao, foto }) {
  const ref = useReveal();
  return (
    <div className="speaker reveal" ref={ref}>
      <div className="speaker-photo">
        {foto ? <img src={foto} alt={nome} /> : <span>{initials(nome)}</span>}
      </div>
      <h3>{nome}</h3>
      <p>{instituicao}</p>
    </div>
  );
}

export default function Speakers() {
  const refHead = useReveal();

  return (
    <section className="band alt" id="palestrantes">
          <div className="wrap">

              <span className="eyebrow">Palestrantes</span>
        <div className="sechead reveal" ref={refHead}>
          <h2>Nossos Palestrantes</h2>
          <p>
            Conheça os palestrantes confirmados para esta edição — profissionais e pesquisadores que trarão novas perspectivas e experiências ao nosso evento de Computação.
          </p>
        </div>
        <div className="speakers">
          {SPEAKERS.length > 0 ? (
            SPEAKERS.map((s) => <SpeakerCard key={s.nome} {...s} />)
          ) : (
            <div className="speakers-pending">
              <span className="speakers-pending-pulse" />
              <p>Em construção...</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
