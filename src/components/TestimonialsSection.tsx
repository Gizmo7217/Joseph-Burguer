import React from 'react';
import { Star, MessageSquareQuote } from 'lucide-react';
import { TESTIMONIALS } from '../data/menuData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-zinc-900/50 border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-500">
            <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
            <span>Opiniones Reales</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white font-heading tracking-tight text-balance">
            Lo que dicen nuestros clientes en La Alboraya
          </h2>

          <p className="text-sm text-zinc-400">
            Clientes que disfrutan de nuestras hamburguesas, salchipapas y desgranados cada semana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800/90 flex flex-col justify-between space-y-4 hover:border-zinc-700 transition-colors"
            >
              <div className="space-y-3">
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white font-heading">{t.name}</h4>
                  <span className="text-[11px] text-zinc-400 block">{t.neighborhood}</span>
                </div>
                <span className="text-[11px] text-amber-400/90 font-medium px-2 py-0.5 rounded bg-amber-500/10">
                  {t.dish}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
