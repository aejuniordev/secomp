import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { useRelativeTime } from '../hooks/useRelativeTime';
import './Schedule.css';

const SCHEDULE_UPDATED_AT = '2026-08-07T14:22:00-03:00';

const DAYS = [
  { dow: 'Qua', dn: '26' },
  { dow: 'Qui', dn: '27' },
  { dow: 'Sex', dn: '28' },
  { dow: 'Sáb', dn: '29' },
];

const DAY_26_SLOTS = [
  { t: '10:00', title: 'PLN na prática: dos dados à modelagem', speaker: 'Helder Mateus dos Reis Matos', company: "PPGCOMP/UFPA", meta: 'Local: Laboratório de Computação 02 - FACOMP/ICEN', badge: 'Oficina' },
  { t: '12:00', title: 'Almoço', meta: '', badge: 'Intervalo' },
  { t: '14:00', title: 'Credenciamento', meta: '', badge: 'Geral' },
  { t: '14:30', title: 'Abertura', meta: 'Local: Auditório - Espaço Inovação - PCT Guamá', badge: 'Geral' },
  { t: '15:00', title: 'Intenção é tudo que você precisa: nova era da IA, novo código', speaker: 'Jherson Haryson Almeida Pereira', company: 'Mercado Livre', badge: 'Palestra' },
  { t: '15:30', title: 'Da Amazônia Brasileira para o mundo: Educação imersiva, inteligência artificial e impacto social', speaker: 'Bárbara Chagas', company: "Inteceleri", badge: 'Palestra' },
  { t: '16:00', title: 'Pré-Lançamento de produtos de Tecnologias Educacionais - Transformação da aprendizagem matemática', speaker: 'Bárbara Chagas', company: "Inteceleri", badge: 'Palestra'},
  { t: '16:30', title: 'Redes da Sexta Geração (6G) como Plataforma de Conexão para Inovação Sustentável', speaker: 'José Jailton Junior', company: "UFPA", badge: 'Palestra' },
  { t: '17:00', title: 'Sistemas inteligentes para supervisão e controle de redes elétricas de energia', speaker: 'Thiago Mota Soares', company: "CEAMAZON", badge: 'Palestra' },
  { t: '17:30', title: 'Coffee-break', meta: '', badge: 'Coffee-break' },
];

const DAY_27_SLOTS = [
    { t: '09:30', title: 'Desenvolvimento corporativo de GNU/Linux / Debugging de Kernel para iniciantes', speaker: 'Desnes Augusto Nunes do Rosário', meta: 'Local: Laboratório de Computação 02 - FACOMP/ICEN',company:"Red Hat", badge: 'Oficina' },
  { t: '12:00', title: 'Almoço', meta: '', badge: 'Intervalo' },
  { t: '14:00', title: 'Ações dos CAs: Ciência da Computação, Sistemas de Informação e Inteligência Artificial', speaker: 'Guilherme Pimenta, Sara Matos e Madalena Campos', company: 'UFPA', badge: 'Palestra' },
  { t: '14:30', title: 'Engenharia de Software Agêntica: reflexão sobre o impacto e as mudanças na indústria de software', speaker: 'Marcelo Sá', company: 'JAMBU Tecnologia', badge: 'Palestra' },
  { t: '15:00', title: 'Liderando Times de Tecnologia em Tempos de IA — liderança, cultura, produtividade e novas competências', speaker: 'Adriana Xisto', company: 'SUCESU', badge: 'Palestra' },
  { t: '15:30', title: 'Da Pesquisa ao Impacto: Computação, Inovação e Desenvolvimento na Amazônia', speaker: 'Claudio Alex Jorge da Rocha', company: 'iSACI', badge: 'Palestra' },
  { t: '16:00', title: 'Disciplina, Disponibilidade e Oportunidade: a tríade que me levou ao SOC', speaker: 'Felipe Vaz', company: "iTProtect", badge: 'Palestra'  },
  { t: '16:30', title: 'Onde Problemas Viram Produtos - Mostra de Software da FACOMP', company: 'UFPA', meta: '', badge: 'Palestra' },
  { t: '17:00', title: 'Onde Problemas Viram Produtos - Mostra de Software da FACOMP', company: 'UFPA', meta: '', badge: 'Palestra' },
  { t: '17:30', title: 'Coffee-break', meta: '', badge: 'Coffee-break' },
];

const DAY_28_SLOTS = [
  { t: '10:00', title: 'Descomplicando o versionamento de código com o Git/GitHub', speaker: 'Flávio Ramon Almeida de Souza', meta: 'Local: Laboratório de Computação 02 - FACOMP/ICEN', company: 'PPGCOMP/UFPA', badge: 'Oficina' },
  { t: '12:00', title: 'Almoço', meta: '', badge: 'Intervalo' },
  { t: '14:00', title: 'Vitrine Acadêmica', company: 'PPGCOMP/UFPA', speaker: 'Samira Borges, Flávio de Souza e Luciano Teran',  badge: 'Palestra' },
  { t: '14:30', title: 'Vitrine Acadêmica', company: 'PPGCOMP/UFPA', speaker: 'Samira Borges, Flávio de Souza e Luciano Teran',  badge: 'Palestra' },
  { t: '15:00', title: 'Decisões Técnicas, Consequências Humanas? Racismo algorítmico, impactos ambientais e responsabilidade no desenvolvimento da IA', speaker: 'Flávia Pessoa Monteiro', company: "UFPA", badge: 'Palestra' },
{ t: '15:30', title: 'O Preço da Tecnologia', speaker: 'Emanuel Estumano', company: "VIBE", badge: 'Palestra' },
  { t: '16:00', title: 'Engenharia de Produtos Digitais - Uma abordagem Agentic First ', speaker: 'Allyson Brito', company: "Techlead", badge: 'Palestra'  },
  { t: '16:30', title: 'Engenharia de Software na Era dos Agentes de IA', speaker: 'Thayana Mamoré', company: "AI/R Company", badge: 'Palestra' },
  { t: '17:00', title: 'Encerramento', meta: '', badge: 'Geral' },
  { t: '17:30', title: 'Coffee-break', meta: '', badge: 'Coffee-break' },
];

const MARATHON_SLOTS = [
    {
        t: '09:30', title: 'Chegada e credenciamento', meta: 'Recepção dos times e entrega do material da competição\nLocal: Auditório do ICEN - FACOMP/ICEN', badge: 'Início' },
  { t: '10:00', title: 'Warmup', meta: 'Problemas de aquecimento para ambientação com o juiz online', badge: 'Aquecimento' },
  { t: '11:00', title: 'Palestras dos patrocinadores', meta: 'Transmissão ao vivo no YouTube — primeira fase', badge: 'Palestra' },
  { t: '12:00', title: 'Almoço', meta: 'Intervalo para almoço dos competidores', badge: 'Intervalo' },
  { t: '13:30', title: 'Preparação para a competição', meta: 'Todos os competidores devem estar na sala de competição', badge: 'Preparação' },
  { t: '14:00', title: 'Início da competição', meta: 'Início oficial da maratona de programação', badge: 'Competição' },
  { t: '19:00', title: 'Encerramento', meta: 'Divulgação dos resultados e premiação', badge: 'Encerramento' },
];

const SCHEDULES = [DAY_26_SLOTS, DAY_27_SLOTS, DAY_28_SLOTS, MARATHON_SLOTS];

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(0);
  const refHead = useReveal();
  const refDays = useReveal();
  const updatedLabel = useRelativeTime(SCHEDULE_UPDATED_AT);

  return (
    <section className="band" id="programacao">
          <div className="wrap">
              <span
          className="eyebrow"
      >
        Programação
      </span>
        <div className="sechead reveal" ref={refHead}>
          {/* <span className="eyebrow"></span>*/}
          <h2>Quatro dias, um rio de conteúdo</h2>
          <p>
            Toque em um dia para navegar pela agenda. A grade completa é
            divulgada conforme as confirmações.
          </p>
        </div>

        <div className="days-row">
          <div className="days reveal" role="tablist" aria-label="Dias do evento" ref={refDays}>
            {DAYS.map((d, i) => (
              <button
                key={i}
                className="day"
                role="tab"
                aria-selected={activeDay === i}
                onClick={() => setActiveDay(i)}
              >
                <span className="dow">{d.dow}</span>
                <span className="dn">{d.dn}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="sched-container">
          {SCHEDULES[activeDay].map((slot, i) => (
            <div className={`slot${slot.destaque ? ' slot-destaque' : ''}`} key={i}>
              <div className="t">{slot.t}</div>
              <div>
                <div className="title">{slot.title}</div>
                {(slot.speaker || slot.company) && (
                  <div className="speaker-line">
                    {slot.speaker && (
                      <>
                        Palestrante(s): <strong>{slot.speaker}</strong>
                      </>
                    )}
                    {slot.company &&
                      (slot.speaker ? ` - ${slot.company}` : slot.company)}
                  </div>
                )}
                {slot.meta && <div className="meta">{slot.meta}</div>}
              </div>
              <div className="badge">{slot.badge}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
