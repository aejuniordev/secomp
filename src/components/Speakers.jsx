import { useReveal } from '../hooks/useReveal';
import './Speakers.css';

import speakerDesnesRedhat from "../assets/speakers/speaker-desnes-redhat.jpg";
import speakerFlaviaUfpa from "../assets/speakers/speaker-flavia-ufpa.jpg";
import speakerFlavioRamon from "../assets/speakers/speaker-flavio-ramon.jpg";
import speakerHelderMatos from "../assets/speakers/speaker-helder-matos.jpg";
import speakerJhersonMercadoLivre from "../assets/speakers/speaker-jherson-mercadolivre.jpg";
import speakerMarceloJambu from "../assets/speakers/speaker-marcelo-jambu.jpg";
import speakerThiagoCeamazon from "../assets/speakers/speaker-thiago-ceamazon.jpg";
import speakerBarbaraInteleceri from "../assets/speakers/speaker-barbara-inteceleri.jpg";
import speakerThayanaAir from "../assets/speakers/speaker-thayana-air.jpg";
import speakerJoseUfpa from "../assets/speakers/speaker-jose-ufpa.jpg";

const SPEAKERS = [
  { nome: 'Thiago Mota Soares', instituicao: 'CEAMAZON - Centro de Excelência em Eficiência Energética da Amazônia', foto: speakerThiagoCeamazon },
  { nome: 'Jherson Haryson Almeida Pereira', instituicao: 'Mercado Livre', foto: speakerJhersonMercadoLivre },
  { nome: 'Marcelo Rocha de Sá', instituicao: 'JAMBU Tecnologia', foto: speakerMarceloJambu },
  { nome: 'Desnes Augusto Nunes do Rosário', instituicao: 'Red Hat', foto: speakerDesnesRedhat },
    {
        nome: 'Helder Mateus dos Reis Matos', instituicao: 'PPGCOMP/UFPA', foto: speakerHelderMatos },
    {
        nome: 'Bárbara Chagas da Silva', instituicao: 'Inteceleri', foto: speakerBarbaraInteleceri },
  { nome: 'Flávio Ramon Almeida de Souza', instituicao: 'PPGCOMP/UFPA', foto: speakerFlavioRamon },
  { nome: 'Flávia Pessoa Monteiro', instituicao: 'UFPA - Universidade Federal do Pará', foto: speakerFlaviaUfpa },
  { nome: 'Thayana Corrêa Mamoré', instituicao: 'AI/R Company', foto: speakerThayanaAir },
    { nome: 'José Jailton Junior', instituicao: 'UFPA - Universidade Federal do Pará', foto: speakerJoseUfpa },
];

function initials(nome) {
  return nome
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');
}

function SpeakerCard({ nome, instituicao, foto, fotoPosicao }) {
  const ref = useReveal();
  return (
    <div className="speaker reveal" ref={ref}>
      <div className="speaker-photo">
        {foto ? (
          <img
            src={foto}
            alt={nome}
          />
        ) : (
          <span>{initials(nome)}</span>
        )}
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
