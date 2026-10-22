import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/menuData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Contacto por WhatsApp" className="fixed bottom-5 right-5 z-40 flex items-center gap-2 group">
      {/* Tooltip on hover */}
      <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 text-white text-xs font-semibold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <span>Pedir al {BUSINESS_INFO.phone}</span>
      </div>

      {/* Floating button */}
      <a
        href={`https://wa.me/57${BUSINESS_INFO.phoneRaw}?text=Hola%20Joseph%20Burger,%20quiero%20hacer%20un%20pedido%20a%20domicilio%20en%20La%20Alboraya`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/40 transition-transform active:scale-95 hover:scale-105 cursor-pointer"
        aria-label="Abrir chat de WhatsApp de Joseph Burger"
      >
        <MessageCircle className="w-7 h-7 fill-white text-emerald-500" />
      </a>
    </aside>
  );
};
