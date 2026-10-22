import React from 'react';
import { Flame, Clock, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { MenuItem } from '../data/menuData';

interface SpecialOfferProps {
  onAddCombo: (comboItem: MenuItem) => void;
}

export const SpecialOffer: React.FC<SpecialOfferProps> = ({ onAddCombo }) => {
  const comboItem: MenuItem = {
    id: 'combo-alboraya-estrella',
    name: 'Combo Alboraya Estrella',
    category: 'hamburguesas',
    categoryLabel: 'Combo Especial',
    price: 36000,
    oldPrice: 44000,
    description: '1 Joseph Burger Especial + 1 Papas Rústicas con Cheddar & Tocineta + 1 Gaseosa 400ml bien fría.',
    longDescription: 'El combo definitivo para disfrutar solo o acompañado. Incluye nuestra aclamada Joseph Burger Especial (doble carne smash 260g, queso cheddar, tocineta crujiente, cebolla caramelizada y salsa tártara), acompañada con una porción completa de papas rústicas bañadas en queso cheddar y tocineta, más una gaseosa 400ml helada.',
    rating: 5.0,
    reviewsCount: 290,
    prepTime: '15-20 min',
    isPopular: true,
    tag: 'Ahorra $8.000',
  };

  return (
    <section id="promocion" className="py-16 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 border-y border-zinc-800/80 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-r from-zinc-900 via-amber-950/20 to-zinc-900 border border-amber-500/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Promotion Info */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Promoción Especial de la Semana</span>
                <span className="text-zinc-600" aria-hidden="true">·</span>
                <span>Barrio La Alboraya</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-heading tracking-tight leading-tight">
                Combo Alboraya Estrella
              </h2>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl">
                Lleva la hamburguesa favorita del barrio junto con papas rústicas cargadas de cheddar y tocineta, más tu gaseosa favorita helada.
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>1 Joseph Burger Especial (Doble carne smash 260g)</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>1 Porción de Papas Rústicas con salsa cheddar & tocineta</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>1 Gaseosa personal 400ml helada (sabor a tu elección)</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-baseline gap-4">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl sm:text-4xl font-black text-amber-400 tabular-nums font-heading">
                    $36.000
                  </span>
                  <span className="text-sm sm:text-base text-zinc-500 line-through tabular-nums">
                    $44.000 COP
                  </span>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Ahorras $8.000 COP
                </span>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onAddCombo(comboItem)}
                  className="px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-black text-sm sm:text-base transition-all shadow-xl shadow-amber-500/20 flex items-center gap-2 cursor-pointer active:scale-95"
                >
                  <Flame className="w-4 h-4 fill-zinc-950" />
                  <span>Agregar Combo a Mi Pedido</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>

            {/* Right Column: Visual Combo Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm rounded-2xl bg-zinc-950/80 border border-zinc-800 p-6 space-y-4 shadow-xl">
                <div className="text-center space-y-1">
                  <span className="text-xs uppercase tracking-wider text-amber-500 font-bold">
                    El combo más pedido
                  </span>
                  <h3 className="text-xl font-bold text-white font-heading">
                    Sabor completo garantizado
                  </h3>
                </div>

                {/* Real imagery representation */}
                <div className="relative h-48 rounded-xl overflow-hidden border border-zinc-800/80 grid grid-cols-2 gap-1.5 p-1 bg-zinc-900">
                  <div className="relative rounded-lg overflow-hidden h-full">
                    <img
                      src="/img/burger-cheddar.jpg"
                      alt="Burger Smash"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-1.5 left-1.5 text-[10px] font-bold px-1.5 py-0.5 rounded bg-zinc-950/80 text-amber-300">
                      Burger Smash
                    </span>
                  </div>
                  <div className="relative rounded-lg overflow-hidden h-full">
                    <img
                      src="/img/papas-fritas.jpg"
                      alt="Papas Rústicas"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-1.5 left-1.5 text-[10px] font-bold px-1.5 py-0.5 rounded bg-zinc-950/80 text-orange-300">
                      Papas Cheddar
                    </span>
                  </div>
                </div>

                <div className="text-center text-xs text-zinc-400">
                  Disponible para domicilio en Barrio La Alboraya o para retirar en punto de venta.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
