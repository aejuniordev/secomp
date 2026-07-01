import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import './Schedule.css';

const DAYS = [
  { dow: 'Qua', dn: '26' },
  { dow: 'Qui', dn: '27' },
  { dow: 'Sex', dn: '28' },
  { dow: 'Sáb', dn: '29' },
];

const BASE_SLOTS = [
  { t: '09:00', title: 'Oficina', meta: 'Hall de entrada — UFPA', badge: 'Abertura' },
  { t: '12:00', title: 'Almoço', meta: 'Palestra magna · a confirmar', badge: 'Palestra' },
  { t: '14:00', title: 'Credenciamento e Abertura', meta: 'Laboratórios · vagas limitadas', badge: 'Minicurso' },
  { t: '15:00', title: 'Palestra', meta: 'Auditório principal', badge: 'Painel' },
  { t: '15:30', title: 'Palestra', meta: 'Auditório principal', badge: 'Painel' },
  { t: '16:00', title: 'Palestra', meta: 'Auditório principal', badge: 'Painel' },
  { t: '16:30', title: 'Palestra', meta: 'Auditório principal', badge: 'Painel' },
];

const MARATHON_SLOTS = [
  { t: '9:00',  title: 'Abertura', meta: 'Chegada dos times e entrega do material', badge: 'Inicio' },
  { t: '10:00', title: 'Sessão de aquecimento', meta: 'texto', badge: 'Aquecimento' },
  { t: '12:00', title: 'Almoço', meta: 'texto', badge: 'Texto' },
  { t: '14:00', title: 'Início da competição', meta: 'Texto', badge: 'Texto' },
  { t: '19:00', title: 'Encerramento', meta: 'Divulgação dos resultados', badge: 'Texto' },
];

const SCHEDULES = [BASE_SLOTS, BASE_SLOTS, BASE_SLOTS, MARATHON_SLOTS];

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(0);
  const refHead = useReveal();
  const refDays = useReveal();

  return (
    <section className="band" id="programacao">
      <div className="wrap">
        <div className="sechead reveal" ref={refHead}>
          <span className="eyebrow">Programação</span>
          <h2>Quatro dias, um rio de conteúdo</h2>
          <p>
            Toque em um dia para navegar pela agenda. A grade completa é
            divulgada conforme as confirmações.
          </p>
        </div>

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

        <div className="sched-container">
          {SCHEDULES[activeDay].map((slot, i) => (
            <div className="slot" key={i}>
              <div className="t">{slot.t}</div>
              <div>
                <div className="title">{slot.title}</div>
                <div className="meta">{slot.meta}</div>
              </div>
              <div className="badge">{slot.badge}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
