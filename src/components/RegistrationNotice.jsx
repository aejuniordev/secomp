import { useEffect, useState } from 'react';
import './RegistrationNotice.css';

const CLOSE_ANIM_MS = 250;

export default function RegistrationNotice() {
  const [visible, setVisible] = useState(true);
  const [closing, setClosing] = useState(false);

  const handleClose = () => setClosing(true);

  useEffect(() => {
    if (!closing) return;
    const timer = setTimeout(() => setVisible(false), CLOSE_ANIM_MS);
    return () => clearTimeout(timer);
  }, [closing]);

  if (!visible) return null;

  return (
    <div className="notice-dock" role="dialog" aria-modal="true" aria-labelledby="notice-title">
      <div className={`notice-card${closing ? ' notice-card--closing' : ''}`}>
        <button
          className="notice-close"
          onClick={handleClose}
          aria-label="Fechar aviso"
        >
          ×
        </button>
        <h2 className="notice-heading">Aviso</h2>
        <p id="notice-title" className="notice-text">
          As inscrições para palestra estão encerradas. Ainda restam algumas vagas em oficinas.
        </p>
        <button className="notice-confirm" onClick={handleClose}>
            Entendi
        </button>
      </div>
    </div>
  );
}
