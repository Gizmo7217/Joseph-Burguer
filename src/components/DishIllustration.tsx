import React from 'react';
import { Flame, Star, Sparkles, Utensils, Heart } from 'lucide-react';

interface DishIllustrationProps {
  category: string;
  itemId?: string;
  name: string;
  className?: string;
}

export const DishIllustration: React.FC<DishIllustrationProps> = ({
  category,
  itemId,
  name,
  className = 'h-52 w-full',
}) => {
  // Return distinct thematic backgrounds and stylized icons based on dish type
  const isSignature = itemId?.includes('joseph') || itemId?.includes('alboraya');

  if (category === 'hamburguesas') {
    return (
      <div className={`relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-zinc-900 via-amber-950/40 to-zinc-900 border-b border-zinc-800/80 ${className}`}>
        {/* Ambient glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/15 via-transparent to-transparent pointer-events-none" />
        
        {/* Geometric dish background lines */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]" />

        {/* Realistic SVG Burger Artwork */}
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
                <stop offset="50%" stopColor="#291102" />
                <stop offset="100%" stopColor="#1e0c01" />
              </linearGradient>
              <linearGradient id="cheese" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
              <linearGradient id="bacon" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#991b1b" />
                <stop offset="50%" stopColor="#f87171" />
                <stop offset="100%" stopColor="#7f1d1d" />
              </linearGradient>
            </defs>

            {/* Top Brioche Bun */}
            <path
              d="M 20 50 C 20 18, 140 18, 140 50 C 140 56, 20 56, 20 50 Z"
              fill="url(#bunTop)"
            />
            {/* Sesame Seeds */}
            <circle cx="45" cy="36" r="1.8" fill="#fef08a" opacity="0.9" />
            <circle cx="70" cy="28" r="1.8" fill="#fef08a" opacity="0.9" />
            <circle cx="95" cy="30" r="1.8" fill="#fef08a" opacity="0.9" />
            <circle cx="115" cy="40" r="1.8" fill="#fef08a" opacity="0.9" />
            <circle cx="82" cy="42" r="1.8" fill="#fef08a" opacity="0.9" />
            <circle cx="58" cy="45" r="1.8" fill="#fef08a" opacity="0.9" />

            {/* Fresh Lettuce layer */}
            <path
              d="M 16 54 Q 30 63, 44 54 Q 60 63, 76 54 Q 92 63, 108 54 Q 124 63, 144 54 L 140 58 Q 120 66, 104 59 Q 88 66, 72 59 Q 54 66, 36 59 Q 22 66, 16 58 Z"
              fill="#22c55e"
            />

            {/* Tomato Slice */}
            <path d="M 24 60 C 24 57, 136 57, 136 60 C 136 65, 24 65, 24 60 Z" fill="#ef4444" />

            {/* Smashed Beef Patty 1 */}
            <path
              d="M 18 66 C 18 63, 142 63, 142 66 C 144 75, 16 75, 18 66 Z"
              fill="url(#patty)"
            />

            {/* Melting Cheddar Cheese drip */}
            <path
              d="M 22 72 L 40 85 L 56 73 L 80 88 L 100 73 L 126 86 L 138 72 Z"
              fill="url(#cheese)"
            />

            {/* Bacon strips */}
            <path
              d="M 24 74 Q 50 82, 80 75 Q 110 82, 136 74 L 134 78 Q 110 86, 80 79 Q 50 86, 22 78 Z"
              fill="url(#bacon)"
            />

            {/* Smashed Beef Patty 2 */}
            <path
              d="M 20 82 C 20 80, 140 80, 140 82 C 142 92, 18 92, 20 82 Z"
              fill="url(#patty)"
            />

            {/* Bottom Brioche Bun */}
            <path
              d="M 22 93 C 22 92, 138 92, 138 93 C 138 110, 22 110, 22 93 Z"
              fill="url(#bunTop)"
            />
          </svg>
        </div>

        {/* Badge icon */}
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
          <svg viewBox="0 0 160 140" className="w-36 h-32 drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]">
            <defs>
              <linearGradient id="fryGold" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
              <linearGradient id="sausage" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#b91c1c" />
                <stop offset="100%" stopColor="#7f1d1d" />
              </linearGradient>
              <linearGradient id="plate" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#27272a" />
                <stop offset="100%" stopColor="#18181b" />
              </linearGradient>
            </defs>

            {/* Serving Platter */}
            <ellipse cx="80" cy="100" rx="68" ry="24" fill="url(#plate)" stroke="#3f3f46" strokeWidth="2" />
            <ellipse cx="80" cy="98" rx="60" ry="20" fill="#18181b" />

            {/* Golden French Fries bed */}
            <rect x="40" y="65" width="8" height="38" rx="2" fill="url(#fryGold)" transform="rotate(-25 40 65)" />
            <rect x="55" y="55" width="8" height="42" rx="2" fill="url(#fryGold)" transform="rotate(-10 55 55)" />
            <rect x="72" y="50" width="8" height="45" rx="2" fill="url(#fryGold)" transform="rotate(5 72 50)" />
            <rect x="90" y="52" width="8" height="44" rx="2" fill="url(#fryGold)" transform="rotate(20 90 52)" />
            <rect x="108" y="62" width="8" height="38" rx="2" fill="url(#fryGold)" transform="rotate(35 108 62)" />
            
            {/* Cross fries */}
            <rect x="45" y="70" width="46" height="8" rx="2" fill="url(#fryGold)" transform="rotate(12 45 70)" />
            <rect x="70" y="72" width="48" height="8" rx="2" fill="url(#fryGold)" transform="rotate(-15 70 72)" />

            {/* Sliced Sausages */}
            <ellipse cx="50" cy="78" rx="12" ry="7" fill="url(#sausage)" stroke="#ef4444" strokeWidth="1" transform="rotate(-15 50 78)" />
            <ellipse cx="78" cy="70" rx="14" ry="8" fill="url(#sausage)" stroke="#ef4444" strokeWidth="1" transform="rotate(10 78 70)" />
            <ellipse cx="106" cy="76" rx="13" ry="7.5" fill="url(#sausage)" stroke="#ef4444" strokeWidth="1" transform="rotate(-20 106 76)" />
            <ellipse cx="64" cy="88" rx="13" ry="7.5" fill="url(#sausage)" stroke="#ef4444" strokeWidth="1" transform="rotate(25 64 88)" />
            <ellipse cx="94" cy="88" rx="12" ry="7" fill="url(#sausage)" stroke="#ef4444" strokeWidth="1" transform="rotate(-10 94 88)" />

            {/* Grated Costeño Cheese snow */}
            <circle cx="56" cy="68" r="1.5" fill="#fef08a" />
            <circle cx="68" cy="62" r="1.5" fill="#ffffff" />
            <circle cx="85" cy="65" r="1.5" fill="#fef08a" />
            <circle cx="100" cy="70" r="1.5" fill="#ffffff" />
            <circle cx="75" cy="82" r="1.5" fill="#fef08a" />
            <circle cx="88" cy="80" r="1.5" fill="#ffffff" />
            <circle cx="60" cy="80" r="1.5" fill="#ffffff" />

            {/* Pink & Garlic Sauce drizzles */}
            <path d="M 45 80 Q 75 90, 115 80" stroke="#f43f5e" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.9" />
            <path d="M 52 72 Q 80 62, 110 74" stroke="#fef08a" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.9" />
          </svg>
        </div>

        <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-zinc-900/90 text-orange-400 border border-orange-500/20 backdrop-blur-sm">
          <Utensils className="w-3.5 h-3.5 text-orange-500" />
          <span>Queso Costeño Rallado</span>
        </div>
      </div>
    );
  }

  if (category === 'desgranados') {
    return (
      <div className={`relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-zinc-900 via-yellow-950/30 to-zinc-900 border-b border-zinc-800/80 ${className}`}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-yellow-500/15 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center group-hover:scale-105 transition-transform duration-300">
          <svg viewBox="0 0 160 140" className="w-36 h-32 drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]">
            <defs>
              <linearGradient id="bowl" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3f3f46" />
                <stop offset="100%" stopColor="#18181b" />
              </linearGradient>
              <linearGradient id="corn" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="100%" stopColor="#eab308" />
              </linearGradient>
            </defs>

            {/* Bowl */}
            <path d="M 25 65 C 25 115, 135 115, 135 65 Z" fill="url(#bowl)" stroke="#52525b" strokeWidth="2" />
            <ellipse cx="80" cy="65" rx="55" ry="14" fill="#27272a" stroke="#52525b" strokeWidth="2" />

            {/* Corn kernels filling */}
            <ellipse cx="80" cy="63" rx="48" ry="11" fill="url(#corn)" />
            <circle cx="55" cy="60" r="3" fill="#ca8a04" />
            <circle cx="65" cy="58" r="3" fill="#eab308" />
            <circle cx="75" cy="62" r="3.2" fill="#ca8a04" />
            <circle cx="85" cy="59" r="3" fill="#facc15" />
            <circle cx="95" cy="62" r="3.2" fill="#eab308" />
            <circle cx="105" cy="60" r="3" fill="#ca8a04" />

            {/* Meat & Chicken pieces */}
            <rect x="58" y="54" width="10" height="7" rx="1.5" fill="#78350f" transform="rotate(15 58 54)" />
            <rect x="88" y="52" width="12" height="6" rx="1.5" fill="#d97706" transform="rotate(-10 88 52)" />
            <rect x="74" y="56" width="11" height="6" rx="1.5" fill="#78350f" transform="rotate(5 74 56)" />

            {/* Cheese Blanket & shoestring fries */}
            <path d="M 40 62 Q 80 50, 120 62 Q 80 74, 40 62 Z" fill="#fef08a" opacity="0.6" />
            
            {/* Shoestring potato matchsticks */}
            <line x1="60" y1="56" x2="72" y2="52" stroke="#fde047" strokeWidth="2" />
            <line x1="75" y1="58" x2="88" y2="54" stroke="#fde047" strokeWidth="2" />
            <line x1="84" y1="52" x2="98" y2="56" stroke="#fde047" strokeWidth="2" />
            <line x1="68" y1="52" x2="78" y2="59" stroke="#fde047" strokeWidth="2" />

            {/* Steam trails */}
            <path d="M 65 42 Q 62 32, 68 25" stroke="#f4f4f5" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.4" />
            <path d="M 80 38 Q 84 28, 78 20" stroke="#f4f4f5" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.4" />
            <path d="M 95 42 Q 98 32, 92 25" stroke="#f4f4f5" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.4" />
          </svg>
        </div>

        <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-zinc-900/90 text-yellow-400 border border-yellow-500/20 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-yellow-500" />
          <span>Maíz Tierno & Tártara</span>
        </div>
      </div>
    );
  }

  if (category === 'perros') {
    return (
      <div className={`relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-zinc-900 via-rose-950/30 to-zinc-900 border-b border-zinc-800/80 ${className}`}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-500/15 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center group-hover:scale-105 transition-transform duration-300">
          <svg viewBox="0 0 160 140" className="w-36 h-32 drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)]">
            <defs>
              <linearGradient id="hotdogBun" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
              <linearGradient id="frankfurter" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#b91c1c" />
                <stop offset="100%" stopColor="#881337" />
              </linearGradient>
            </defs>

            {/* Bottom bun */}
            <path d="M 20 80 C 15 95, 145 95, 140 80 C 145 70, 15 70, 20 80 Z" fill="url(#hotdogBun)" />

            {/* Frankfurter sausage */}
            <rect x="15" y="65" width="130" height="20" rx="10" fill="url(#frankfurter)" />

            {/* Melted Cheese blanket */}
            <path d="M 22 66 Q 80 56, 138 66 L 135 74 Q 80 66, 25 74 Z" fill="#fde047" opacity="0.9" />

            {/* Bacon bits & crushed chips */}
            <circle cx="40" cy="68" r="2.5" fill="#7f1d1d" />
            <circle cx="60" cy="66" r="2" fill="#7f1d1d" />
            <circle cx="85" cy="67" r="2.5" fill="#7f1d1d" />
            <circle cx="110" cy="66" r="2" fill="#7f1d1d" />
            <circle cx="125" cy="68" r="2.2" fill="#7f1d1d" />

            {/* Quail Egg on top */}
            <ellipse cx="80" cy="56" rx="9" ry="7" fill="#ffffff" stroke="#e4e4e7" strokeWidth="1" />
            <circle cx="80" cy="56" r="3.5" fill="#f59e0b" />

            {/* Drizzled sauces */}
            <path d="M 25 70 Q 40 60, 55 70 Q 70 60, 85 70 Q 100 60, 115 70 Q 130 60, 135 70" stroke="#f43f5e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M 30 73 Q 50 65, 70 73 Q 90 65, 110 73 Q 125 67, 132 73" stroke="#fef08a" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
        </div>

        <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-zinc-900/90 text-rose-400 border border-rose-500/20 backdrop-blur-sm">
          <Star className="w-3.5 h-3.5 text-rose-500" />
          <span>Huevo de Codorniz</span>
        </div>
      </div>
    );
  }

  // Entradas or Bebidas
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
