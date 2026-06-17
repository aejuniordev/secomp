import React from "react";
import { Mail } from "lucide-react";

const Contato = () => {
  return (
    <section id="contato" className="py-24 px-4 bg-secomp-darker/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-secomp-card border border-secomp-cyan rounded-full flex items-center justify-center">
            <Mail className="w-8 h-8 text-secomp-cyan" />
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contato
          </h2>
          <div className="w-16 h-1 bg-secomp-cyan mx-auto mb-6"></div>
        </div>

        <div className="max-w-2xl mx-auto bg-secomp-card border border-secomp-border rounded-xl p-8 text-center">
          <p className="text-secomp-text mb-4">
            Para contatar a organização da SECOMP 2026, envie email para:
          </p>
          <a
            href="mailto:secompufpa@gmail.com"
            className="inline-flex items-center gap-2 text-secomp-cyan hover:text-white transition-colors text-lg font-semibold"
          >
            <Mail className="w-5 h-5" />
            secompufpa@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contato;
