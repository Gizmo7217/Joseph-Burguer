import React, { useState } from 'react';
import { Flame, Star, Sparkles, Utensils, Pizza } from 'lucide-react';

interface DishIllustrationProps {
  category: string;
  itemId?: string;
  name: string;
  imageSrc?: string;
  className?: string;
}

export const DishIllustration: React.FC<DishIllustrationProps> = ({
  category,
  itemId,
  name,
  imageSrc,
  className = 'h-52 w-full',
}) => {
  const [imageError, setImageError] = useState(false);

  // If real image is provided and hasn't failed to load, display the real photography
  if (imageSrc && !imageError) {
    return (
      <div className={`relative overflow-hidden bg-zinc-950 ${className}`}>
        <img
          src={imageSrc}
          alt={name}
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setImageError(true)}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />

        {/* Ambient bottom scrim gradient for text readability and cinematic depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent pointer-events-none" />

        {/* Category badge */}
        <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-zinc-950/80 text-amber-400 border border-amber-500/20 backdrop-blur-sm">
          {category === 'pizzas' ? (
            <Pizza className="w-3.5 h-3.5 text-amber-500" />
          ) : (
            <Flame className="w-3.5 h-3.5 text-amber-500" />
          )}
          <span>
            {category === 'pizzas'
              ? 'Horno a la Piedra'
              : category === 'salchipapas'
              ? 'Papas & Queso Costeño'
              : category === 'desgranados'
              ? 'Maíz Tierno & Tártara'
              : category === 'perros'
              ? 'Especial Callejero'
              : '100% Artesanal'}
          </span>
        </div>
      </div>
    );
  }

  // Fallback to stylized SVG artworks if image fails or isn't available
  if (category === 'pizzas') {
    return (
      <div className={`relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-zinc-900 via-rose-950/30 to-zinc-900 border-b border-zinc-800/80 ${className}`}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/15 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center group-hover:scale-105 transition-transform duration-300">
          <svg viewBox="0 0 160 140" className="w-36 h-32 drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]">
            <defs>
              <linearGradient id="crust" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
            </defs>
            <circle cx="80" cy="70" r="54" fill="url(#crust)" stroke="#78350f" strokeWidth="3" />
            <circle cx="80" cy="70" r="46" fill="#ef4444" />
            <circle cx="80" cy="70" r="42" fill="#fef08a" opacity="0.95" />
            {/* Pepperoni slices */}
            <circle cx="65" cy="55" r="9" fill="#991b1b" stroke="#7f1d1d" strokeWidth="1" />
            <circle cx="95" cy="58" r="9" fill="#991b1b" stroke="#7f1d1d" strokeWidth="1" />
            <circle cx="80" cy="80" r="9" fill="#991b1b" stroke="#7f1d1d" strokeWidth="1" />
            <circle cx="60" cy="82" r="8" fill="#991b1b" stroke="#7f1d1d" strokeWidth="1" />
            <circle cx="100" cy="80" r="8" fill="#991b1b" stroke="#7f1d1d" strokeWidth="1" />
            {/* Basil leaves */}
            <ellipse cx="78" cy="62" rx="4" ry="7" fill="#15803d" transform="rotate(30 78 62)" />
            <ellipse cx="88" cy="72" rx="4" ry="7" fill="#15803d" transform="rotate(-40 88 72)" />
          </svg>
        </div>
        <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-zinc-900/90 text-amber-400 border border-amber-500/20 backdrop-blur-sm">
          <Pizza className="w-3.5 h-3.5 text-amber-500" />
          <span>Pizza a la Piedra</span>
        </div>
      </div>
    );
  }

  if (category === 'hamburguesas') {
    return (
      <div className={`relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-zinc-900 via-amber-950/40 to-zinc-900 border-b border-zinc-800/80 ${className}`}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/15 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center group-hover:scale-105 transition-transform duration-300">
          <svg viewBox="0 0 160 140" className="w-36 h-32 drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]">
            <defs>
              <linearGradient id="bunTop" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="60%" stopColor="#d97706" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
              <linearGradient id="patty" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#451a03" />
                <stop offset="100%" stopColor="#1e0c01" />
              </linearGradient>
              <linearGradient id="cheese" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>
            <path d="M 20 50 C 20 18, 140 18, 140 50 C 140 56, 20 56, 20 50 Z" fill="url(#bunTop)" />
            <circle cx="45" cy="36" r="1.8" fill="#fef08a" opacity="0.9" />
            <circle cx="70" cy="28" r="1.8" fill="#fef08a" opacity="0.9" />
            <circle cx="95" cy="30" r="1.8" fill="#fef08a" opacity="0.9" />
            <circle cx="115" cy="40" r="1.8" fill="#fef08a" opacity="0.9" />
            <circle cx="82" cy="42" r="1.8" fill="#fef08a" opacity="0.9" />
            <path d="M 16 54 Q 30 63, 44 54 Q 60 63, 76 54 Q 92 63, 108 54 Q 124 63, 144 54 L 140 58 Q 120 66, 104 59 Q 88 66, 72 59 Q 54 66, 36 59 Q 22 66, 16 58 Z" fill="#22c55e" />
            <path d="M 24 60 C 24 57, 136 57, 136 60 C 136 65, 24 65, 24 60 Z" fill="#ef4444" />
            <path d="M 18 66 C 18 63, 142 63, 142 66 C 144 75, 16 75, 18 66 Z" fill="url(#patty)" />
            <path d="M 22 72 L 40 85 L 56 73 L 80 88 L 100 73 L 126 86 L 138 72 Z" fill="url(#cheese)" />
            <path d="M 20 82 C 20 80, 140 80, 140 82 C 142 92, 18 92, 20 82 Z" fill="url(#patty)" />
            <path d="M 22 93 C 22 92, 138 92, 138 93 C 138 110, 22 110, 22 93 Z" fill="url(#bunTop)" />
          </svg>
        </div>
        <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-zinc-900/90 text-amber-400 border border-amber-500/20 backdrop-blur-sm">
          <Flame className="w-3.5 h-3.5 text-amber-500" />
          <span>100% Res Smash</span>
        </div>
      </div>
    );
  }

  if (category === 'salchipapas') {
    return (
      <div className={`relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-zinc-900 via-orange-950/30 to-zinc-900 border-b border-zinc-800/80 ${className}`}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-500/15 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 flex flex-col items-center group-hover:scale-105 transition-transform duration-300">
          <div className="w-20 h-20 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shadow-lg shadow-black/40">
            <Utensils className="w-9 h-9" />
          </div>
        </div>
        <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-zinc-900/90 text-orange-400 border border-orange-500/20 backdrop-blur-sm">
          <Utensils className="w-3.5 h-3.5 text-orange-500" />
          <span>Queso Costeño Rallado</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-zinc-900 via-amber-950/20 to-zinc-900 border-b border-zinc-800/80 ${className}`}>
      <div className="relative z-10 flex flex-col items-center group-hover:scale-105 transition-transform duration-300">
        <div className="w-20 h-20 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 shadow-lg shadow-black/40">
          <Utensils className="w-9 h-9" />
        </div>
      </div>
      <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-zinc-900/90 text-amber-400 border border-amber-500/20 backdrop-blur-sm">
        <Sparkles className="w-3.5 h-3.5 text-amber-500" />
        <span>Receta Casera</span>
      </div>
    </div>
  );
};
