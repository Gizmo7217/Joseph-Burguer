import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { SpecialOffer } from './components/SpecialOffer';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { HoursAndLocation } from './components/HoursAndLocation';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { MenuItem, MENU_ITEMS } from './data/menuData';
import { CartItem, CartItemAddition } from './types/cart';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedItemForModal, setSelectedItemForModal] = useState<MenuItem | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

  // Cart total item count
  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Open item modal to customize
  const handleSelectItem = (item: MenuItem) => {
    setSelectedItemForModal(item);
    setIsProductModalOpen(true);
  };

  // Add customized item from modal
  const handleAddToCart = (
    item: MenuItem,
    quantity: number,
    selectedSauces: string[],
    selectedAdditions: CartItemAddition[],
    specialInstructions: string
  ) => {
    const additionsKey = selectedAdditions
      .map((a) => a.id)
      .sort()
      .join('-');
    const saucesKey = selectedSauces.sort().join('-');
    const cartItemId = `${item.id}-${additionsKey}-${saucesKey}-${specialInstructions.trim()}`;

    const additionsTotal = selectedAdditions.reduce((sum, a) => sum + a.price, 0);
    const unitPrice = item.price + additionsTotal;
    const totalPrice = unitPrice * quantity;

    setCartItems((prev) => {
      const existingIndex = prev.findIndex((ci) => ci.cartItemId === cartItemId);
      if (existingIndex > -1) {
        const updated = [...prev];
        const newQty = updated[existingIndex].quantity + quantity;
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: newQty,
          totalPrice: unitPrice * newQty,
        };
        return updated;
      } else {
        return [
          ...prev,
          {
            cartItemId,
            item,
            quantity,
            selectedSauces,
            selectedAdditions,
            specialInstructions,
            unitPrice,
            totalPrice,
          },
        ];
      }
    });

    // Auto open cart drawer so customer gets instant feedback
    setIsCartOpen(true);
  };

  // Fast 1-click addition without modal
  const handleQuickAdd = (item: MenuItem) => {
    handleAddToCart(
      item,
      1,
      item.category === 'bebidas' ? [] : ['Tártara Especial Joseph', 'Salsa de Piña Artesanal'],
      [],
      ''
    );
  };

  // Update item quantity in cart
  const handleUpdateQuantity = (cartItemId: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(cartItemId);
      return;
    }
    setCartItems((prev) =>
      prev.map((ci) => {
        if (ci.cartItemId === cartItemId) {
          return {
            ...ci,
            quantity: newQty,
            totalPrice: ci.unitPrice * newQty,
          };
        }
        return ci;
      })
    );
  };

  // Remove item from cart
  const handleRemoveItem = (cartItemId: string) => {
    setCartItems((prev) => prev.filter((ci) => ci.cartItemId !== cartItemId));
  };

  // Clear all
  const handleClearCart = () => {
    setCartItems([]);
  };

  // Scroll to menu
  const handleExploreMenu = () => {
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Hero quick order
  const handleHeroQuickOrder = () => {
    const signatureBurger = MENU_ITEMS.find((i) => i.id === 'joseph-burger-especial');
    if (signatureBurger) {
      handleSelectItem(signatureBurger);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-amber-500 selection:text-zinc-950">
      {/* Navigation */}
      <Navbar
        cartItemCount={cartItemCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        <Hero
          onExploreMenu={handleExploreMenu}
          onOpenQuickOrder={handleHeroQuickOrder}
        />

        <MenuSection
          onSelectItem={handleSelectItem}
          onQuickAdd={handleQuickAdd}
        />

        <SpecialOffer onAddCombo={handleQuickAdd} />

        <AboutSection />

        <TestimonialsSection />

        <HoursAndLocation />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Product Customizer Modal */}
      <ProductModal
        item={selectedItemForModal}
        isOpen={isProductModalOpen}
        onClose={() => {
          setIsProductModalOpen(false);
          setSelectedItemForModal(null);
        }}
        onAddToCart={handleAddToCart}
      />

      {/* Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
