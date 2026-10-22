import React, { useState } from 'react';
import { ShoppingBag, Flame, Phone, MapPin, Menu as MenuIcon, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/menuData';

interface NavbarProps {
  cartItemCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartItemCount, onOpenCart }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800/80">
      {/* Top micro info strip */}
      <div className="bg-zinc-900/90 text-zinc-300 text-xs border-b border-zinc-800/50 py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-zinc-300 font-medium">
              <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>{BUSINESS_INFO.address}, Barranquilla</span>
            </span>
            <span className="hidden sm:inline-block text-zinc-600">·</span>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-zinc-300 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>WhatsApp: <strong>{BUSINESS_INFO.phone}</strong></span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-amber-400/90 font-medium hidden md:inline-flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-amber-500" />
              <span>Abierto hoy desde las 5:30 PM</span>
            </span>
            <a
              href={`https://wa.me/57${BUSINESS_INFO.phoneRaw}?text=Hola%20Joseph%20Burger,%20quiero%20hacer%20un%20pedido%20a%20domicilio`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium text-xs flex items-center gap-1"
            >
              Pedir Domicilio Directo →
            </a>
          </div>
        </div>
      </div>

      {/* Main 3-Zone Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark with official logo */}
        <a
          href="#inicio"
          className="flex items-center gap-2.5 text-xl sm:text-2xl font-black tracking-tight text-white whitespace-nowrap shrink-0 group font-heading"
        >
          <img
            src="/img/joseph-burger-logo.svg"
            alt="Joseph Burger Logo"
            className="w-10 h-10 rounded-full shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform"
          />
          <span className="flex items-center">
            Joseph<span className="text-amber-500 ml-1.5">Burger</span>
          </span>
        </a>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-300">
          <a
            href="#inicio"
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            Inicio
          </a>
          <a
            href="#menu"
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            Menú Completo
          </a>
          <a
            href="#promocion"
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            Combo Especial
          </a>
          <a
            href="#nosotros"
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            Nuestra Historia
          </a>
          <a
            href="#contacto"
            className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
          >
            Ubicación & Contacto
          </a>
        </nav>

        {/* Zone 3: 1 primary action (Cart & Mobile trigger) */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm transition-all shadow-lg shadow-amber-500/20 active:scale-95 whitespace-nowrap shrink-0"
            aria-label="Abrir carrito de compras"
          >
            <ShoppingBag className="w-4 h-4 shrink-0 text-zinc-950" />
            <span className="hidden sm:inline">Mi Pedido</span>
            {cartItemCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-zinc-950 text-amber-400 text-xs font-black flex items-center justify-center tabular-nums">
                {cartItemCount}
              </span>
            )}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-zinc-900 text-zinc-300 hover:text-white border border-zinc-800"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-800 px-6 py-4 space-y-3">
          <a
            href="#inicio"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-zinc-200 hover:text-amber-400 font-medium"
          >
            Inicio
          </a>
          <a
            href="#menu"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-zinc-200 hover:text-amber-400 font-medium"
          >
            Menú Completo
          </a>
          <a
            href="#promocion"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-zinc-200 hover:text-amber-400 font-medium"
          >
            Combo Especial
          </a>
          <a
            href="#nosotros"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-zinc-200 hover:text-amber-400 font-medium"
          >
            Nuestra Historia
          </a>
          <a
            href="#contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-zinc-200 hover:text-amber-400 font-medium"
          >
            Ubicación & Contacto
          </a>
          <div className="pt-2 border-t border-zinc-800 flex flex-col gap-2">
            <a
              href={`https://wa.me/57${BUSINESS_INFO.phoneRaw}?text=Hola%20Joseph%20Burger,%20quiero%20hacer%20un%20pedido%20a%20domicilio`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              WhatsApp: {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
