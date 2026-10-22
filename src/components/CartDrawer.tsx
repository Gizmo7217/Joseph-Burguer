import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, Send, ShoppingBag, MapPin, Phone, CreditCard, ChevronRight, AlertCircle, ArrowLeft } from 'lucide-react';
import { CartItem, OrderCustomerInfo } from '../types/cart';
import { BUSINESS_INFO } from '../data/menuData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (cartItemId: string, newQty: number) => void;
  onRemoveItem: (cartItemId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<'cart' | 'checkout'>('cart');
  const [customerInfo, setCustomerInfo] = useState<OrderCustomerInfo>({
    fullName: '',
    phone: '',
    deliveryType: 'domicilio',
    address: '',
    neighborhood: 'Barrio La Alboraya',
    paymentMethod: 'Nequi',
    cashAmountNeeded: '',
    notes: '',
  });
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const subtotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
  const deliveryFee = customerInfo.deliveryType === 'domicilio' ? 4000 : 0;
  const grandTotal = subtotal + deliveryFee;

  const handleInputChange = (field: keyof OrderCustomerInfo, value: any) => {
    setCustomerInfo((prev) => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      setFormErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const validateCheckout = (): boolean => {
    const errors: { [key: string]: string } = {};
    if (!customerInfo.fullName.trim()) {
      errors.fullName = 'Por favor ingresa tu nombre completo.';
    }
    if (!customerInfo.phone.trim() || customerInfo.phone.length < 7) {
      errors.phone = 'Ingresa un número de celular de contacto.';
    }
    if (customerInfo.deliveryType === 'domicilio' && !customerInfo.address.trim()) {
      errors.address = 'Ingresa tu dirección de entrega en La Alboraya o sector.';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSendWhatsAppOrder = () => {
    if (!validateCheckout()) return;

    let itemsText = '';
    cartItems.forEach((ci) => {
      itemsText += `• *${ci.quantity}x ${ci.item.name}* - $${ci.totalPrice.toLocaleString('es-CO')} COP\n`;
      if (ci.selectedSauces.length > 0) {
        itemsText += `   _Salsas:_ ${ci.selectedSauces.join(', ')}\n`;
      }
      if (ci.selectedAdditions.length > 0) {
        itemsText += `   _Adiciones:_ ${ci.selectedAdditions.map((a) => `${a.name} (+$${a.price.toLocaleString('es-CO')})`).join(', ')}\n`;
      }
      if (ci.specialInstructions.trim()) {
        itemsText += `   _Nota:_ "${ci.specialInstructions}"\n`;
      }
      itemsText += `\n`;
    });

    const isDomicilio = customerInfo.deliveryType === 'domicilio';

    const orderMessage = `*🍔 NUEVO PEDIDO - JOSEPH BURGER 🍔*
📍 *Barrio La Alboraya, Barranquilla*
----------------------------------------
👤 *Cliente:* ${customerInfo.fullName}
📱 *Teléfono:* ${customerInfo.phone}
🛵 *Modalidad:* ${isDomicilio ? 'Domicilio' : 'Para recoger en el local'}
${isDomicilio ? `🏠 *Dirección:* ${customerInfo.address} (${customerInfo.neighborhood})\n` : ''}
💳 *Método de Pago:* ${customerInfo.paymentMethod}${
      customerInfo.paymentMethod === 'Efectivo' && customerInfo.cashAmountNeeded
        ? ` (Paga con: $${customerInfo.cashAmountNeeded})`
        : ''
    }
${customerInfo.notes ? `📝 *Observaciones:* ${customerInfo.notes}\n` : ''}
----------------------------------------
*ITEMS DEL PEDIDO:*
${itemsText}----------------------------------------
*Subtotal:* $${subtotal.toLocaleString('es-CO')} COP
*Costo de Entrega:* $${deliveryFee.toLocaleString('es-CO')} COP
*TOTAL A PAGAR:* $${grandTotal.toLocaleString('es-CO')} COP
----------------------------------------
¡Hola! Envío mi pedido desde el sitio web de Joseph Burger. Quedo atento a la confirmación y tiempo estimado de entrega. 🙌`;

    const encoded = encodeURIComponent(orderMessage);
    const waUrl = `https://wa.me/57${BUSINESS_INFO.phoneRaw}?text=${encoded}`;

    // Open WhatsApp
    window.open(waUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-zinc-950 border-l border-zinc-800 shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-5 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/60">
            <div className="flex items-center gap-2.5">
              {step === 'checkout' && (
                <button
                  onClick={() => setStep('cart')}
                  className="p-1 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors mr-1 cursor-pointer"
                  title="Volver al carrito"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
              )}
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-500">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base font-heading">
                  {step === 'cart' ? 'Tu Pedido' : 'Datos de Entrega & Pago'}
                </h3>
                <span className="text-xs text-zinc-400">
                  {cartItems.length} {cartItems.length === 1 ? 'producto' : 'productos'} en lista
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {cartItems.length > 0 && step === 'cart' && (
                <button
                  onClick={onClearCart}
                  className="text-xs text-zinc-400 hover:text-rose-400 transition-colors cursor-pointer mr-2"
                >
                  Vaciar
                </button>
              )}
              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-20 space-y-4">
                <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 mx-auto flex items-center justify-center text-zinc-500">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-white font-bold text-base font-heading">Tu carrito está vacío</h4>
                  <p className="text-xs text-zinc-400 max-w-xs mx-auto">
                    Explora nuestras hamburguesas artesanales, salchipapas y desgranados para armar tu pedido.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs transition-colors cursor-pointer"
                >
                  Explorar Menú
                </button>
              </div>
            ) : step === 'cart' ? (
              /* Step 1: Cart Items List */
              <div className="space-y-3">
                {cartItems.map((ci) => (
                  <div
                    key={ci.cartItemId}
                    className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-2.5"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className="text-sm font-bold text-white font-heading">{ci.item.name}</h4>
                        <span className="text-xs text-amber-400 font-semibold tabular-nums">
                          ${ci.totalPrice.toLocaleString('es-CO')} COP
                        </span>
                      </div>
                      <button
                        onClick={() => onRemoveItem(ci.cartItemId)}
                        className="text-zinc-500 hover:text-rose-400 transition-colors p-1"
                        title="Eliminar producto"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Salsas y adiciones seleccionadas */}
                    {(ci.selectedSauces.length > 0 || ci.selectedAdditions.length > 0 || ci.specialInstructions) && (
                      <div className="text-[11px] text-zinc-400 space-y-1 pt-1 border-t border-zinc-800/60">
                        {ci.selectedSauces.length > 0 && (
                          <div className="line-clamp-1">
                            <span className="text-zinc-500">Salsas:</span> {ci.selectedSauces.join(', ')}
                          </div>
                        )}
                        {ci.selectedAdditions.length > 0 && (
                          <div className="text-amber-300/90 line-clamp-1">
                            <span className="text-zinc-500">Extras:</span>{' '}
                            {ci.selectedAdditions.map((a) => a.name).join(', ')}
                          </div>
                        )}
                        {ci.specialInstructions && (
                          <div className="italic text-zinc-400">
                            "{ci.specialInstructions}"
                          </div>
                        )}
                      </div>
                    )}

                    {/* Stepper */}
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-xs text-zinc-500">Cantidad</span>
                      <div className="flex items-center gap-2 bg-zinc-950 border border-zinc-800 rounded-lg p-0.5">
                        <button
                          onClick={() => onUpdateQuantity(ci.cartItemId, ci.quantity - 1)}
                          className="w-6 h-6 rounded bg-zinc-900 text-zinc-300 hover:text-white flex items-center justify-center"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-white tabular-nums">
                          {ci.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(ci.cartItemId, ci.quantity + 1)}
                          className="w-6 h-6 rounded bg-zinc-900 text-zinc-300 hover:text-white flex items-center justify-center"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Step 2: Checkout Customer Details */
              <div className="space-y-4 text-left">
                {/* Modalidad de Entrega */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block">
                    ¿Cómo deseas recibir tu pedido?
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => handleInputChange('deliveryType', 'domicilio')}
                      className={`p-3 rounded-xl border text-xs font-bold transition-all flex flex-col items-center justify-center gap-1 cursor-pointer ${
                        customerInfo.deliveryType === 'domicilio'
                          ? 'bg-amber-500/10 border-amber-500 text-amber-400'
                          : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                      }`}
                    >
                      <span>🛵 Domicilio</span>
                      <span className="text-[10px] text-zinc-400 font-normal">+$4.000 COP</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleInputChange('deliveryType', 'recoger')}
                      className={`p-3 rounded-xl border text-xs font-bold transition-all flex flex-col items-center justify-center gap-1 cursor-pointer ${
                        customerInfo.deliveryType === 'recoger'
                          ? 'bg-amber-500/10 border-amber-500 text-amber-400'
                          : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                      }`}
                    >
                      <span>📍 Recoger en Local</span>
                      <span className="text-[10px] text-emerald-400 font-normal">Gratis</span>
                    </button>
                  </div>
                </div>

                {/* Nombre */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-zinc-300 block">
                    Tu Nombre Completo *
                  </label>
                  <input
                    type="text"
                    value={customerInfo.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    placeholder="Ej: Camilo Andrés Rodríguez"
                    className={`w-full px-3.5 py-2 bg-zinc-900 border rounded-xl text-xs text-white placeholder:text-zinc-500 focus:outline-none ${
                      formErrors.fullName ? 'border-rose-500' : 'border-zinc-800 focus:border-amber-500'
                    }`}
                  />
                  {formErrors.fullName && (
                    <span className="text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {formErrors.fullName}
                    </span>
                  )}
                </div>

                {/* Teléfono */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-zinc-300 block">
                    Número de Celular / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    value={customerInfo.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="Ej: 313 123 4567"
                    className={`w-full px-3.5 py-2 bg-zinc-900 border rounded-xl text-xs text-white placeholder:text-zinc-500 focus:outline-none ${
                      formErrors.phone ? 'border-rose-500' : 'border-zinc-800 focus:border-amber-500'
                    }`}
                  />
                  {formErrors.phone && (
                    <span className="text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {formErrors.phone}
                    </span>
                  )}
                </div>

                {/* Dirección if Domicilio */}
                {customerInfo.deliveryType === 'domicilio' && (
                  <>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-zinc-300 block">
                        Dirección exacta de entrega *
                      </label>
                      <input
                        type="text"
                        value={customerInfo.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        placeholder="Ej: Calle 45 # 8-12, Apto 201"
                        className={`w-full px-3.5 py-2 bg-zinc-900 border rounded-xl text-xs text-white placeholder:text-zinc-500 focus:outline-none ${
                          formErrors.address ? 'border-rose-500' : 'border-zinc-800 focus:border-amber-500'
                        }`}
                      />
                      {formErrors.address && (
                        <span className="text-[11px] text-rose-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {formErrors.address}
                        </span>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-zinc-300 block">
                        Barrio / Sector
                      </label>
                      <input
                        type="text"
                        value={customerInfo.neighborhood}
                        onChange={(e) => handleInputChange('neighborhood', e.target.value)}
                        placeholder="Barrio La Alboraya u otro sector"
                        className="w-full px-3.5 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </>
                )}

                {/* Método de Pago */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 block">
                    Forma de Pago
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {(['Nequi', 'Daviplata', 'Efectivo', 'Datáfono'] as const).map((method) => (
                      <button
                        key={method}
                        type="button"
                        onClick={() => handleInputChange('paymentMethod', method)}
                        className={`p-2.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                          customerInfo.paymentMethod === method
                            ? 'bg-amber-500/15 border-amber-500 text-amber-300'
                            : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                        }`}
                      >
                        {method === 'Nequi' && '📲 Nequi'}
                        {method === 'Daviplata' && '📱 Daviplata'}
                        {method === 'Efectivo' && '💵 Efectivo'}
                        {method === 'Datáfono' && '💳 Datáfono'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Si paga en efectivo, preguntar cambio */}
                {customerInfo.paymentMethod === 'Efectivo' && (
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-zinc-300 block">
                      ¿Con cuánto vas a pagar? (Para llevarte el cambio exacto)
                    </label>
                    <input
                      type="text"
                      value={customerInfo.cashAmountNeeded}
                      onChange={(e) => handleInputChange('cashAmountNeeded', e.target.value)}
                      placeholder="Ej: Pago con billete de $50.000"
                      className="w-full px-3.5 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-white placeholder:text-zinc-500 focus:outline-none"
                    />
                  </div>
                )}

                {/* Notas adicionales */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-zinc-300 block">
                    Notas adicionales para la entrega
                  </label>
                  <textarea
                    rows={2}
                    value={customerInfo.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    placeholder="Ej: Tocar el timbre blanco, portón negro..."
                    className="w-full px-3.5 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-white placeholder:text-zinc-500 focus:outline-none"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Footer Checkout actions */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-zinc-800 bg-zinc-900/80 space-y-3">
              {/* Summary table */}
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-zinc-400">
                  <span>Subtotal</span>
                  <span className="tabular-nums font-medium text-zinc-200">
                    ${subtotal.toLocaleString('es-CO')} COP
                  </span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Entrega ({customerInfo.deliveryType === 'domicilio' ? 'La Alboraya' : 'Local'})</span>
                  <span className="tabular-nums font-medium text-zinc-200">
                    {deliveryFee > 0 ? `$${deliveryFee.toLocaleString('es-CO')} COP` : 'Gratis'}
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold text-white pt-2 border-t border-zinc-800">
                  <span>Total</span>
                  <span className="text-amber-400 tabular-nums font-heading">
                    ${grandTotal.toLocaleString('es-CO')} COP
                  </span>
                </div>
              </div>

              {step === 'cart' ? (
                <button
                  onClick={() => setStep('checkout')}
                  className="w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-500/20"
                >
                  <span>Continuar al Pedido</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleSendWhatsAppOrder}
                  className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-lg shadow-emerald-600/30 active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Pedido a WhatsApp</span>
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
