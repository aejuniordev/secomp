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
  { t: '10:00', title: 'PLN na prática: dos dados à modelagem', speaker: 'Helder Mateus dos Reis Matos', badge: 'Oficina' },
  { t: '12:00', title: 'Almoço', meta: '', badge: 'Intervalo' },
  { t: '14:00', title: 'Abertura', meta: '', badge: 'Geral' },
  { t: '15:00', title: 'Intenção é tudo que você precisa: nova era da IA, novo código - Mercado Livre', speaker: 'Jherson Haryson Almeida Pereira', badge: 'Palestra' },
  { t: '16:00', title: 'Em construção', meta: '', badge: 'Em breve' },
  { t: '16:30', title: 'Em construção', meta: '', badge: 'Em breve' },
  { t: '17:00', title: 'Em construção', meta: '', badge: 'Em breve' },
  { t: '17:30', title: 'Coffee-break', meta: '', badge: 'Coffee-break' },
];

const DAY_27_SLOTS = [
  { t: '10:00', title: 'Desenvolvimento Corporativo em GNU/Linux / Introdução à Depuração do Kernel para Iniciantes', speaker: 'Desnes Augusto Nunes do Rosário', badge: 'Oficina' },
  { t: '12:00', title: 'Almoço', meta: '', badge: 'Intervalo' },
  { t: '14:00', title: 'Em construção', meta: '', badge: 'Em breve' },
  { t: '14:30', title: 'Engenharia de Software Agêntica: reflexão sobre o impacto e as mudanças na indústria de software - JAMBU Tecnologia', speaker: 'Marcelo Sá', badge: 'Palestra' },
  { t: '15:00', title: 'Em construção', meta: '', badge: 'Em breve' },
  { t: '15:30', title: 'Em construção', meta: '', badge: 'Em breve' },
  { t: '16:00', title: 'Em construção', meta: '', badge: 'Em breve' },
  { t: '16:30', title: 'Em construção', meta: '', badge: 'Em breve' },
  { t: '17:00', title: 'Em construção', meta: '', badge: 'Em breve' },
  { t: '17:30', title: 'Coffee-break', meta: '', badge: 'Coffee-break' },
];

const DAY_28_SLOTS = [
  { t: '10:00', title: 'Descomplicando o versionamento de código com o Git/GitHub', speaker: 'Flávio Ramon Almeida de Souza', badge: 'Oficina' },
  { t: '12:00', title: 'Almoço', meta: '', badge: 'Intervalo' },
  { t: '14:00', title: 'Em construção', meta: '', badge: 'Em breve' },
  { t: '14:30', title: 'Em construção', meta: '', badge: 'Em breve' },
  { t: '15:00', title: 'Em construção', meta: '', badge: 'Em breve' },
  { t: '15:30', title: 'Academia ao Mercado — Transformando Pesquisa em Empresas Tecnológicas', speaker: 'Filipe Saraiva', badge: 'Palestra' },
  { t: '16:00', title: 'Sistemas inteligentes para supervisão e controle de redes elétricas de energia', speaker: 'Thiago Soares', badge: 'Palestra' },
  { t: '16:30', title: 'Em construção', meta: '', badge: 'Em breve' },
  { t: '17:00', title: 'Em construção', meta: '', badge: 'Em breve' },
  { t: '17:30', title: 'Coffee-break', meta: '', badge: 'Coffee-break' },
];

const MARATHON_SLOTS = [
  { t: '09:30', title: 'Chegada e credenciamento', meta: 'Recepção dos times e entrega do material da competição', badge: 'Início' },
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
            <div className="slot" key={i}>
              <div className="t">{slot.t}</div>
              <div>
                <div className="title">{slot.title}</div>
                {slot.meta && <div className="meta">{slot.meta}</div>}
                {slot.speaker && (
                  <div className="speaker-line">
                    Palestrante: <strong>{slot.speaker}</strong>
                  </div>
                )}
              </div>
              <div className="badge">{slot.badge}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
