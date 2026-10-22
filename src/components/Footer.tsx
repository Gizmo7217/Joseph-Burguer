import React from 'react';
import { Flame, Phone, MapPin, Clock, ArrowUp, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/menuData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/80 pt-16 pb-12 text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 text-left">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#inicio" className="flex items-center gap-2.5 text-xl font-black text-white font-heading">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-600 to-orange-500 flex items-center justify-center text-zinc-950">
                <Flame className="w-5 h-5 fill-current" />
              </div>
              <span>
                Joseph<span className="text-amber-500 ml-1">Burger</span>
              </span>
            </a>

            <p className="text-zinc-400 max-w-sm leading-relaxed text-xs">
              El auténtico sabor de las hamburguesas artesanales, salchipapas especiales y desgranados en el <strong>Barrio La Alboraya</strong>, Barranquilla. Calidad, ingredientes frescos y entrega a domicilio directa.
            </p>

            <div className="pt-2 text-[11px] text-zinc-500 space-y-1">
              <div>Medios de pago aceptados: Nequi, Daviplata, Efectivo y Datáfono.</div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navegación Rápida
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="hover:text-amber-400 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-400 transition-colors">
                  Menú & Especialidades
                </a>
              </li>
              <li>
                <a href="#promocion" className="hover:text-amber-400 transition-colors">
                  Combo Estrella
                </a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-amber-400 transition-colors">
                  Nuestra Historia
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-amber-400 transition-colors">
                  Ubicación & Reservas
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Hours */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contacto Directo
            </h4>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}, {BUSINESS_INFO.city}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 font-semibold text-emerald-400 transition-colors"
                >
                  WhatsApp: {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.openingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-400">
          <p>© 2026 Joseph Burger. Todos los derechos reservados. Barrio La Alboraya, Barranquilla.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-amber-400 transition-colors cursor-pointer"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
