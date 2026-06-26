import { useState, useEffect } from "react";
import { Sparkles, Terminal, CheckCircle } from "lucide-react";
import bgDesktop from "../../assets/bg-desktop.png";
import bgMobile from "../../assets/bg-mobile-full.png";
import iaCircuit from "../../assets/ia-circuit.svg";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-08-26T00:00:00");

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const TimeBlock = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="bg-secomp-darker/80 backdrop-blur-sm border border-secomp-border/50 rounded-xl px-2 py-1 md:px-2.5 md:py-1.5 min-w-[42px] md:min-w-[54px] shadow-lg">
        <span className="text-lg md:text-xl font-black text-white">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-[10px] md:text-xs text-secomp-text/80 mt-2 md:mt-3 uppercase tracking-wider font-medium">
        {label}
      </span>
    </div>
  );

  const CountdownCard = ({ className = "" }) => (
    <div
      className={`bg-secomp-card/95 border border-secomp-border rounded-2xl p-3 md:p-4 shadow-2xl ${className}`}
    >
      <p className="text-secomp-text uppercase tracking-widest text-xs md:text-sm mb-1 md:mb-3 font-semibold text-center">
        Faltam
      </p>
      <div className="flex items-center justify-center gap-2 md:gap-4">
        <TimeBlock value={timeLeft.days} label="Dias" />
        <span className="text-xl md:text-3xl text-secomp-cyan font-bold pb-5">
          :
        </span>
        <TimeBlock value={timeLeft.hours} label="Horas" />
        <span className="text-xl md:text-3xl text-secomp-cyan font-bold pb-5">
          :
        </span>
        <TimeBlock value={timeLeft.minutes} label="Minutos" />
        <span className="text-xl md:text-3xl text-secomp-cyan font-bold pb-5">
          :
        </span>
        <TimeBlock value={timeLeft.seconds} label="Segundos" />
      </div>
    </div>
  );

  const TemaDestaque = ({ grande = false }) => (
    <div
      className={`relative rounded-2xl overflow-hidden border border-secomp-cyan/30 bg-gradient-to-br from-secomp-card via-secomp-card/95 to-secomp-cyan/5 shadow-xl shadow-secomp-cyan/10 ${grande ? "p-6" : "p-5 md:p-8"}`}
    >
      {/* Glow decorativo */}
      <div className="absolute -top-8 -right-8 w-40 h-40 bg-secomp-cyan/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-secomp-cyan/5 rounded-full blur-xl pointer-events-none" />

      <div className="relative">
        {/* Pill badge */}
        <span
          className={`inline-flex items-center gap-1.5 font-bold uppercase tracking-widest text-secomp-cyan border border-secomp-cyan/50 rounded-full bg-secomp-cyan/10 mb-4 ${grande ? "text-[11px] px-3 py-1" : "text-[9px] md:text-[11px] px-2 md:px-3 py-0.5 md:py-1"}`}
        >
          <span
            className={`inline-block rounded-full bg-secomp-cyan ${grande ? "w-1.5 h-1.5" : "w-1 h-1 md:w-1.5 md:h-1.5"}`}
          />
          Tema SECOMP 2026
        </span>

        {/* Ícone + título */}
        <div
          className={`flex items-start gap-3 mb-4 ${grande ? "" : "md:gap-5"}`}
        >
          <img
            src={iaCircuit}
            alt=""
            className={`flex-shrink-0 opacity-90 ${grande ? "w-10 h-10" : "w-9 h-9 md:w-14 md:h-14"}`}
          />
          <p
            className={`text-white font-bold leading-snug ${grande ? "text-lg" : "text-base md:text-3xl"}`}
          >
            Tecnologia e sociedade diante das novas fronteiras da{" "}
            <span className="text-secomp-cyan">inteligência artificial</span>
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center pt-6 pb-8 overflow-x-hidden"
    >
      {/* ── Mobile: imagem com badge e countdown sobrepostos ── */}
      <div className="block md:hidden w-full mb-4">
        <div className="relative h-[55vh] overflow-hidden">
          <img
            src={bgMobile}
            alt="Imagem FACOMP"
            className="w-full h-full object-cover object-top"
          />
          {/* Badge no topo — deslocado para baixo do header fixo (h-16 = 64px) */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2 z-10 w-max">
            <div className="inline-flex items-center gap-2 bg-secomp-cyan/10 backdrop-blur-sm border border-secomp-cyan/30 rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4 text-secomp-cyan" />
              <span className="text-secomp-cyan text-xs font-medium whitespace-nowrap">
                1ª Edição • 26 a 29 de Agosto de 2026
              </span>
            </div>
          </div>
          {/* Tema + Countdown empilhados na parte inferior */}
          <div className="absolute bottom-6 left-4 right-4 z-10 flex flex-col gap-3">
            <TemaDestaque grande />
            <CountdownCard />
          </div>
        </div>
      </div>

      {/* ── Desktop: imagem com countdown sobreposto ── */}
      <div className="hidden md:block relative w-full mb-12 overflow-hidden">
        <img
          src={bgDesktop}
          alt="Imagem FACOMP"
          className="w-full h-auto object-cover object-center"
        />
        {/* Badge sobre a imagem */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 z-10 w-max">
          <div className="inline-flex items-center gap-2 bg-secomp-cyan/10 backdrop-blur-sm border border-secomp-cyan/30 rounded-full px-6 py-3">
            <Sparkles className="w-5 h-5 text-secomp-cyan" />
            <span className="text-secomp-cyan text-sm font-medium whitespace-nowrap">
              1ª Edição • 26 a 29 de Agosto de 2026
            </span>
          </div>
        </div>
        {/* Countdown à esquerda, centralizado verticalmente */}
        <div className="absolute left-[8%] top-[48%] -translate-y-1/2">
          <CountdownCard />
        </div>
        {/* Tema à direita, centralizado verticalmente */}
        <div className="absolute right-12 top-[40%] -translate-y-1/2 max-w-3xl">
          <TemaDestaque />
        </div>
      </div>

      {/* Texto central */}
      <div className="text-center max-w-6xl mx-auto px-4 md:px-0">
        <div className="mb-8">
          <p className="text-xl md:text-2xl lg:text-4xl text-secomp-text font-light mb-6 leading-relaxed">
            Semana da Computação da UFPA
          </p>
          <div className="inline-flex items-center gap-3 bg-secomp-darker/50 border border-secomp-border/50 rounded-full px-6 md:px-8 py-3 md:py-4">
            <Terminal className="w-4 h-4 md:w-5 md:h-5 text-secomp-cyan" />
            <span className="font-mono text-secomp-cyan text-base md:text-lg font-medium">
              Belém, Pará
            </span>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-secomp-text/80 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            Quatro dias de palestras, oficinas e atividades voltadas para o
            desenvolvimento profissional e acadêmico na área da computação.
          </p>
        </div>
      </div>

      {/* Card de anúncio */}
      <div className="w-full mt-12 md:mt-16 mb-16 md:mb-24 px-4">
        <div className="relative max-w-3xl mx-auto bg-secomp-card/80 backdrop-blur-sm border-2 border-gray-500/40 rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/20 opacity-80">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
            <div className="flex items-center gap-2 bg-gray-500 text-white font-bold uppercase tracking-wider text-sm px-5 py-2 rounded-full shadow-lg">
              <CheckCircle className="w-4 h-4" />
              Prazo Encerrado
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 mb-6 mt-2">
            <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-secomp-cyan/50" />
            <h3 className="text-2xl md:text-3xl font-bold text-white/60 text-center">
              Concurso: Chamada Criativa
            </h3>
          </div>
          <p className="text-secomp-text/60 text-base md:text-lg leading-relaxed mb-6 text-center max-w-xl mx-auto">
            Chamada Criativa para escolha da logomarca da SECOMP.
          </p>
          <div className="max-w-md mx-auto mb-8 bg-gray-500/10 border border-gray-500/30 rounded-xl p-4 text-center">
            <p className="text-gray-400 text-sm uppercase tracking-wider font-semibold mb-1">
              Período de inscrições encerrado
            </p>
            <p className="text-white/50 text-xl md:text-2xl font-bold">
              24/05/2026{" "}
              <span className="text-secomp-text/40 text-base font-normal">
                às 23:59
              </span>
            </p>
            <p className="text-secomp-text/50 text-sm mt-2">
              As inscrições foram encerradas. Aguarde o resultado!
            </p>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() =>
                window.open(
                  "/Edital_Chamada_criativa_Logomarca_novo.pdf",
                  "_blank",
                )
              }
              className="bg-gray-600/60 text-white/60 font-semibold py-3 px-8 rounded-xl cursor-default"
              disabled
            >
              Inscrições Encerradas
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
