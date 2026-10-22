import React from 'react';
import { Flame, Award, Heart, Sparkles, Utensils, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/menuData';

export const AboutSection: React.FC = () => {
  return (
    <section id="nosotros" className="py-16 md:py-24 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Story Card */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-8 space-y-6 shadow-2xl relative">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-600 to-orange-500 flex items-center justify-center text-zinc-950 shadow-lg shadow-orange-500/20">
                  <Flame className="w-8 h-8 fill-current" />
                </div>

                <div className="space-y-1">
                  <div className="text-xs uppercase tracking-wider text-amber-500 font-bold">
                    Nacidos en Barranquilla
                  </div>
                  <h3 className="text-2xl font-black text-white font-heading">
                    Pasión por la buena mesa en La Alboraya
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  En Joseph Burger creemos que una verdadera hamburguesa se reconoce al primer bocado: carne bien sazonada con costra crujiente, queso fundido en su punto y salsas preparadas con dedicación.
                </p>
              </div>

              {/* Pillars list */}
              <div className="space-y-3 pt-3 border-t border-zinc-800/80">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Carne 100% de Res Seleccionada</h4>
                    <p className="text-[11px] text-zinc-400">
                      Molida diariamente en cocina, sin conservantes ni harinas añadidas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Pan Brioche Artesanal</h4>
                    <p className="text-[11px] text-zinc-400">
                      Suave, dorado con mantequilla clarificada para sostener todo el jugo.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">Salsas de la Casa</h4>
                    <p className="text-[11px] text-zinc-400">
                      Tártara especial, piña cocinada en paila de cobre y aderezos auténticos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text */}
          <div className="lg:col-span-7 space-y-6 text-left order-1 lg:order-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-500">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Nuestra Historia & Compromiso</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-heading tracking-tight leading-tight text-balance">
              De una pasión por la cocina a ser el punto favorito de{' '}
              <span className="text-amber-400">Barrio La Alboraya</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
              <p>
                <strong>Joseph Burger</strong> nació con una premisa clara: rescatar la esencia de la comida rápida costeña y elevarla con técnicas gourmet de hamburguesería moderna. En cada plato combinamos la potencia de la técnica smash con el sabor inconfundible del queso costeño, la tocineta dorada y el maíz tierno.
              </p>
              <p>
                Ubicados en el corazón de <strong>Barrio La Alboraya</strong>, nos hemos ganado el cariño de vecinos y familias que buscan calidad sin pretensiones, porciones generosas y un servicio al cliente cálido y atento tanto en nuestro punto como en cada entrega a domicilio.
              </p>
            </div>

            {/* Quick stats grid */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-zinc-800">
              <div>
                <span className="text-2xl sm:text-3xl font-black text-white font-heading tabular-nums">
                  +5.000
                </span>
                <p className="text-xs text-zinc-400 mt-0.5">Hamburguesas y platos servidos</p>
              </div>

              <div>
                <span className="text-2xl sm:text-3xl font-black text-amber-400 font-heading tabular-nums">
                  100%
                </span>
                <p className="text-xs text-zinc-400 mt-0.5">Ingredientes frescos del día</p>
              </div>

              <div>
                <span className="text-2xl sm:text-3xl font-black text-orange-400 font-heading tabular-nums">
                  4.9 ★
                </span>
                <p className="text-xs text-zinc-400 mt-0.5">Calificación promedio local</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
