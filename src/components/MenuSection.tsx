import React, { useState, useMemo } from 'react';
import { Search, Plus, Star, Clock, Flame, SlidersHorizontal, Check } from 'lucide-react';
import { MENU_CATEGORIES, MENU_ITEMS, MenuItem } from '../data/menuData';
import { DishIllustration } from './DishIllustration';

interface MenuSectionProps {
  onSelectItem: (item: MenuItem) => void;
  onQuickAdd: (item: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectItem, onQuickAdd }) => {
  const [activeCategory, setActiveCategory] = useState<string>('todas');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [recentlyAddedId, setRecentlyAddedId] = useState<string | null>(null);

  // Filter items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === 'todas' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleQuickAddClick = (e: React.MouseEvent, item: MenuItem) => {
    e.stopPropagation();
    onQuickAdd(item);
    setRecentlyAddedId(item.id);
    setTimeout(() => {
      setRecentlyAddedId(null);
    }, 1500);
  };

  return (
    <section id="menu" className="py-16 md:py-24 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-500">
            <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
            <span>Nuestra Carta</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white font-heading tracking-tight text-balance">
            Platos preparados al momento
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Ingredientes de primera calidad, salsas caseras y el sabor inconfundible de Joseph Burger en La Alboraya.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="space-y-4 mb-10">
          {/* Search Input Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar hamburguesas, salchipapas, desgranados..."
              className="w-full pl-10 pr-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white"
              >
                Limpiar
              </button>
            )}
          </div>

          {/* Category Tabs (Segmented Buttons) */}
          <div className="flex items-center justify-center gap-1.5 flex-wrap p-1.5 bg-zinc-900/90 border border-zinc-800/80 rounded-2xl max-w-3xl mx-auto">
            {MENU_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-amber-500 text-zinc-950 shadow-md shadow-amber-500/20'
                      : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Cards Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-zinc-900/40 rounded-2xl border border-zinc-800/80 max-w-lg mx-auto">
            <p className="text-zinc-300 font-medium mb-2">No encontramos platos con "{searchQuery}"</p>
            <p className="text-xs text-zinc-500 mb-4">Prueba con otra palabra o selecciona una categoría.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('todas');
              }}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-amber-500 text-zinc-950"
            >
              Ver todo el menú
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const isAddedJustNow = recentlyAddedId === item.id;

              return (
                <div
                  key={item.id}
                  onClick={() => onSelectItem(item)}
                  className="group rounded-2xl bg-zinc-900/90 border border-zinc-800/90 hover:border-amber-500/40 transition-all duration-200 overflow-hidden flex flex-col justify-between cursor-pointer shadow-lg hover:shadow-black/60 hover:-translate-y-0.5"
                >
                  <div>
                    {/* Visual Graphic Artwork */}
                    <div className="relative">
                      <DishIllustration
                        category={item.category}
                        itemId={item.id}
                        name={item.name}
                        imageSrc={item.image}
                      />

                      {/* Optional promo or special tag */}
                      {item.tag && (
                        <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-md bg-amber-500 text-zinc-950 text-xs font-bold shadow-md">
                          {item.tag}
                        </div>
                      )}
                    </div>

                    {/* Card Content Body */}
                    <div className="p-5 space-y-2.5">
                      {/* Quiet Unboxed Metadata */}
                      <div className="flex items-center gap-2 text-xs text-zinc-400 font-medium">
                        <span className="text-amber-500/90">{item.categoryLabel}</span>
                        <span aria-hidden="true" className="text-zinc-600">·</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-zinc-500" />
                          <span>{item.prepTime}</span>
                        </span>
                        <span aria-hidden="true" className="text-zinc-600">·</span>
                        <span className="flex items-center gap-1 text-zinc-300">
                          <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                          <span className="tabular-nums font-semibold">{item.rating}</span>
                          <span className="text-zinc-500">({item.reviewsCount})</span>
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors font-heading leading-snug">
                        {item.name}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom / Price & Action */}
                  <div className="p-5 pt-0 border-t border-zinc-800/50 mt-2 flex items-center justify-between">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-black text-amber-400 tabular-nums font-heading">
                          ${item.price.toLocaleString('es-CO')}
                        </span>
                        {item.oldPrice && (
                          <span className="text-xs text-zinc-500 line-through tabular-nums">
                            ${item.oldPrice.toLocaleString('es-CO')}
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] text-zinc-500 block">COP · Precio final</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={(e) => handleQuickAddClick(e, item)}
                        className={`p-2.5 rounded-xl text-xs font-semibold transition-all flex items-center justify-center cursor-pointer ${
                          isAddedJustNow
                            ? 'bg-emerald-500 text-white'
                            : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white'
                        }`}
                        title="Agregar rápido"
                      >
                        {isAddedJustNow ? (
                          <Check className="w-4 h-4 text-white" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                      </button>

                      <button
                        onClick={() => onSelectItem(item)}
                        className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs transition-colors cursor-pointer"
                      >
                        Personalizar
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
