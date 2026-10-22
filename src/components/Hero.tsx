import React from 'react';
import { Flame, Clock, MapPin, Phone, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/menuData';

interface HeroProps {
  onExploreMenu: () => void;
  onOpenQuickOrder: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onOpenQuickOrder }) => {
  return (
    <section id="inicio" className="relative overflow-hidden pt-8 pb-16 md:py-20 lg:py-24 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      {/* Decorative background glow elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-orange-600/10 blur-[90px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Editorial kicker without pill box */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-semibold uppercase tracking-wider text-amber-500">
              <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
              <span>Auténtica Hamburguesería Artesanal</span>
              <span className="text-zinc-600" aria-hidden="true">·</span>
              <span>Barrio La Alboraya</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-heading text-balance leading-[1.08]">
              Hamburguesas brutales con la sazón de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500">
                La Alboraya
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Carnes smash 100% de res con bordes ultracrocantes, pan brioche horneado a diario, tocineta ahumada y nuestras legendarias salsas de la casa. Pide caliente a domicilio en Barrio La Alboraya y sectores vecinos.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onExploreMenu}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-extrabold text-base transition-all shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Ver Menú & Armar Pedido</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`https://wa.me/57${BUSINESS_INFO.phoneRaw}?text=Hola%20Joseph%20Burger,%20estoy%20en%20el%20sitio%20web%20y%20quiero%20hacer%20un%20pedido%20a%20domicilio.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-100 font-bold text-base border border-zinc-700/80 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>WhatsApp: {BUSINESS_INFO.phone}</span>
              </a>
            </div>

            {/* Trust signals & specs */}
            <div className="pt-6 border-t border-zinc-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div className="space-y-1">
                <div className="text-xl sm:text-2xl font-black text-white tabular-nums font-heading">
                  100%
                </div>
                <div className="text-xs text-zinc-400 font-medium">Carne de Res Seleccionada</div>
              </div>
              <div className="space-y-1">
                <div className="text-xl sm:text-2xl font-black text-amber-400 tabular-nums font-heading">
                  30-40m
                </div>
                <div className="text-xs text-zinc-400 font-medium">Tiempo de Entrega Rápido</div>
              </div>
              <div className="space-y-1">
                <div className="text-xl sm:text-2xl font-black text-white tabular-nums font-heading">
                  4.9 / 5
                </div>
                <div className="text-xs text-zinc-400 font-medium">Sabor y Calidad Calificada</div>
              </div>
              <div className="space-y-1">
                <div className="text-xl sm:text-2xl font-black text-orange-400 tabular-nums font-heading">
                  $0
                </div>
                <div className="text-xs text-zinc-400 font-medium">Para Recoger en Local</div>
              </div>
            </div>
          </div>

          {/* Right Column: Culinary Presentation Feature Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md rounded-2xl bg-gradient-to-b from-zinc-800/90 to-zinc-900/90 p-1.5 shadow-2xl shadow-black/80 border border-zinc-700/60">
              <div className="rounded-xl overflow-hidden bg-zinc-950 p-6 space-y-6">
                {/* Visual Dish Hero Preview */}
                <div className="relative h-64 rounded-xl overflow-hidden bg-gradient-to-tr from-zinc-950 via-amber-950/40 to-zinc-900 border border-zinc-800 flex items-center justify-center">
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:12px_12px]" />
                  
                  {/* Stylized Burger Graphic */}
                  <div className="relative z-10 flex flex-col items-center">
                    <svg viewBox="0 0 160 140" className="w-48 h-44 drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)]">
                      <defs>
                        <linearGradient id="heroBun" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#f59e0b" />
                          <stop offset="50%" stopColor="#d97706" />
                          <stop offset="100%" stopColor="#92400e" />
                        </linearGradient>
                        <linearGradient id="heroMeat" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#451a03" />
                          <stop offset="100%" stopColor="#1e0c01" />
                        </linearGradient>
                        <linearGradient id="heroCheese" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#fef08a" />
                          <stop offset="100%" stopColor="#f59e0b" />
                        </linearGradient>
                      </defs>
                      {/* Brioche Top */}
                      <path d="M 18 52 C 18 16, 142 16, 142 52 C 142 58, 18 58, 18 52 Z" fill="url(#heroBun)" />
                      {/* Seeds */}
                      <circle cx="45" cy="36" r="2" fill="#fef08a" opacity="0.9" />
                      <circle cx="70" cy="28" r="2" fill="#fef08a" opacity="0.9" />
                      <circle cx="95" cy="30" r="2" fill="#fef08a" opacity="0.9" />
                      <circle cx="118" cy="42" r="2" fill="#fef08a" opacity="0.9" />
                      <circle cx="82" cy="42" r="2" fill="#fef08a" opacity="0.9" />
                      <circle cx="58" cy="45" r="2" fill="#fef08a" opacity="0.9" />
                      {/* Lettuce */}
                      <path d="M 14 56 Q 30 65, 46 56 Q 62 65, 78 56 Q 94 65, 110 56 Q 126 65, 146 56 L 142 60 Q 120 68, 104 61 Q 88 68, 72 61 Q 54 68, 36 61 Q 20 68, 14 60 Z" fill="#22c55e" />
                      {/* Tomato */}
                      <path d="M 22 62 C 22 59, 138 59, 138 62 C 138 67, 22 67, 22 62 Z" fill="#ef4444" />
                      {/* Patty 1 */}
                      <path d="M 16 68 C 16 65, 144 65, 144 68 C 146 77, 14 77, 16 68 Z" fill="url(#heroMeat)" />
                      {/* Melting Cheddar */}
                      <path d="M 20 74 L 38 88 L 54 75 L 82 92 L 102 75 L 128 89 L 140 74 Z" fill="url(#heroCheese)" />
                      {/* Bacon */}
                      <path d="M 22 76 Q 50 85, 80 77 Q 110 85, 138 76 L 135 80 Q 110 89, 80 81 Q 50 89, 20 80 Z" fill="#b91c1c" />
                      {/* Patty 2 */}
                      <path d="M 18 84 C 18 82, 142 82, 142 84 C 144 94, 16 94, 18 84 Z" fill="url(#heroMeat)" />
                      {/* Bottom Brioche */}
                      <path d="M 20 95 C 20 94, 140 94, 140 95 C 140 114, 20 114, 20 95 Z" fill="url(#heroBun)" />
                    </svg>
                  </div>

                  {/* Overlaid highlight tag */}
                  <div className="absolute top-3 right-3 px-3 py-1 bg-zinc-950/80 backdrop-blur-md rounded-lg border border-amber-500/30 text-amber-400 text-xs font-bold flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-amber-500" />
                    <span>Joseph Especial</span>
                  </div>
                </div>

                {/* Dish details */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-black text-white font-heading">
                        Joseph Burger Especial
                      </h3>
                      <div className="text-xs text-zinc-400 mt-0.5">
                        Doble carne smash 260g · Queso Cheddar · Tocineta · Pan Brioche
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-black text-amber-400 tabular-nums font-heading">
                        $28.000
                      </span>
                      <div className="text-xs text-zinc-500 line-through tabular-nums">$32.000</div>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Preparada en el momento con carne molida fresca en casa, doble cheddar madurado y cebolla lentamente caramelizada.
                  </p>

                  <div className="pt-2 flex items-center gap-2">
                    <button
                      onClick={onOpenQuickOrder}
                      className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm transition-all text-center flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-amber-500/20"
                    >
                      <Flame className="w-4 h-4 fill-zinc-950" />
                      <span>Pedir Esta Hamburguesa</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick floating delivery guarantee badge */}
            <div className="hidden sm:flex absolute -bottom-5 -left-6 bg-zinc-900 border border-zinc-700/80 rounded-xl p-3.5 shadow-xl items-center gap-3 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-xs">
                <div className="font-bold text-zinc-100">Barrio La Alboraya</div>
                <div className="text-zinc-400">Domicilios directos en minutos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
