import React, { useState } from 'react';
import { X, Plus, Minus, Check, Star, Clock, Utensils, Flame } from 'lucide-react';
import { MenuItem, SAUCE_OPTIONS, EXTRA_ADDITIONS } from '../data/menuData';
import { CartItemAddition } from '../types/cart';
import { DishIllustration } from './DishIllustration';

interface ProductModalProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (
    item: MenuItem,
    quantity: number,
    selectedSauces: string[],
    selectedAdditions: CartItemAddition[],
    specialInstructions: string
  ) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  item,
  isOpen,
  onClose,
  onAddToCart,
}) => {
  if (!isOpen || !item) return null;

  const [quantity, setQuantity] = useState<number>(1);
  const [selectedSauces, setSelectedSauces] = useState<string[]>([
    'Tártara Especial Joseph',
    'Salsa de Piña Artesanal',
  ]);
  const [selectedAdditions, setSelectedAdditions] = useState<CartItemAddition[]>([]);
  const [specialInstructions, setSpecialInstructions] = useState<string>('');

  const toggleSauce = (sauce: string) => {
    setSelectedSauces((prev) =>
      prev.includes(sauce) ? prev.filter((s) => s !== sauce) : [...prev, sauce]
    );
  };

  const toggleAddition = (addition: { id: string; name: string; price: number }) => {
    setSelectedAdditions((prev) => {
      const exists = prev.find((a) => a.id === addition.id);
      if (exists) {
        return prev.filter((a) => a.id !== addition.id);
      } else {
        return [...prev, addition];
      }
    });
  };

  const additionsTotal = selectedAdditions.reduce((sum, add) => sum + add.price, 0);
  const unitPrice = item.price + additionsTotal;
  const totalPrice = unitPrice * quantity;

  const handleAdd = () => {
    onAddToCart(item, quantity, selectedSauces, selectedAdditions, specialInstructions);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-xl max-h-[90vh] bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-zinc-900/90 text-zinc-300 hover:text-white border border-zinc-700/80 transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header / Graphic banner */}
        <div className="relative">
          <DishIllustration
            category={item.category}
            itemId={item.id}
            name={item.name}
            imageSrc={item.image}
            className="h-56 w-full"
          />
        </div>

        {/* Scrollable details */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-left">
          {/* Title & Metadata */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs text-zinc-400 font-medium">
              <span className="text-amber-500 font-semibold">{item.categoryLabel}</span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-zinc-500" />
                <span>{item.prepTime}</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1 text-zinc-300">
                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                <span>{item.rating}</span>
                <span className="text-zinc-500">({item.reviewsCount} reseñas)</span>
              </span>
            </div>

            <h3 className="text-2xl font-black text-white font-heading">{item.name}</h3>

            <p className="text-sm text-zinc-300 leading-relaxed pt-1">{item.longDescription}</p>
          </div>

          {/* Salsas selection */}
          <div className="space-y-3 pt-2 border-t border-zinc-800/80">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-200">
                Salsas de la casa (Elige tus favoritas)
              </label>
              <span className="text-xs text-amber-500 font-medium">Incluidas</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {SAUCE_OPTIONS.map((sauce) => {
                const isSelected = selectedSauces.includes(sauce);
                return (
                  <button
                    key={sauce}
                    type="button"
                    onClick={() => toggleSauce(sauce)}
                    className={`p-2.5 rounded-xl border text-xs font-medium text-left flex items-center justify-between transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-amber-500/10 border-amber-500/60 text-amber-300'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                    }`}
                  >
                    <span>{sauce}</span>
                    <div
                      className={`w-4 h-4 rounded flex items-center justify-center shrink-0 ml-1.5 ${
                        isSelected ? 'bg-amber-500 text-zinc-950' : 'border border-zinc-700'
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Adiciones extras */}
          {item.category !== 'bebidas' && (
            <div className="space-y-3 pt-2 border-t border-zinc-800/80">
              <label className="text-xs font-bold uppercase tracking-wider text-zinc-200 block">
                Adiciones opcionales
              </label>

              <div className="space-y-2">
                {EXTRA_ADDITIONS.map((extra) => {
                  const isSelected = selectedAdditions.some((a) => a.id === extra.id);
                  return (
                    <button
                      key={extra.id}
                      type="button"
                      onClick={() => toggleAddition(extra)}
                      className={`w-full p-2.5 rounded-xl border text-xs font-medium flex items-center justify-between transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-amber-500/10 border-amber-500/60 text-white'
                          : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <Plus className="w-3.5 h-3.5 text-amber-500" />
                        <span>{extra.name}</span>
                      </span>
                      <span className="font-bold text-amber-400 tabular-nums">
                        +${extra.price.toLocaleString('es-CO')} COP
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Notas de cocina */}
          <div className="space-y-2 pt-2 border-t border-zinc-800/80">
            <label className="text-xs font-bold uppercase tracking-wider text-zinc-200 block">
              Instrucciones especiales para la cocina
            </label>
            <input
              type="text"
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              placeholder="Ej: Sin cebolla, salsas en potes aparte, tocineta bien tostada..."
              className="w-full px-3.5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>

        {/* Modal Footer (Quantity Stepper + Add Button) */}
        <div className="p-4 sm:p-5 bg-zinc-900/90 border-t border-zinc-800 flex items-center justify-between gap-4">
          {/* Stepper */}
          <div className="flex items-center gap-2 bg-zinc-950 border border-zinc-800 rounded-xl p-1">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="w-8 h-8 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 flex items-center justify-center transition-colors disabled:opacity-40"
              disabled={quantity <= 1}
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-8 text-center font-bold text-white tabular-nums text-sm">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="w-8 h-8 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 flex items-center justify-center transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Add to order button */}
          <button
            onClick={handleAdd}
            className="flex-1 py-3 px-5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-black text-sm transition-all flex items-center justify-between shadow-lg shadow-amber-500/20 active:scale-98 cursor-pointer"
          >
            <span>Agregar al Pedido</span>
            <span className="tabular-nums font-extrabold">
              ${totalPrice.toLocaleString('es-CO')} COP
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
