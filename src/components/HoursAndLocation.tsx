import React, { useState } from 'react';
import { MapPin, Clock, Phone, Send, CheckCircle2, Navigation, MessageCircle, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/menuData';

export const HoursAndLocation: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2 Personas',
    date: '',
    time: '07:00 PM',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);

    // Format WhatsApp reservation message
    const msg = `*📅 RESERVA DE MESA - JOSEPH BURGER*\n📍 *Barrio La Alboraya*\nNombre: ${formData.name}\nTeléfono: ${formData.phone}\nPersonas: ${formData.guests}\nFecha: ${formData.date}\nHora: ${formData.time}\nNotas: ${formData.notes || 'Ninguna'}`;
    const url = `https://wa.me/57${BUSINESS_INFO.phoneRaw}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contacto" className="py-16 md:py-24 bg-zinc-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-500">
            <MapPin className="w-4 h-4 text-amber-500" />
            <span>Ubícanos & Horarios</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white font-heading tracking-tight text-balance">
            Encuéntranos en Barrio La Alboraya
          </h2>

          <p className="text-sm text-zinc-400">
            Ven a compartir en familia o amigos, o pide a domicilio directo por WhatsApp al {BUSINESS_INFO.phone}.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Business Info & Hours */}
          <div className="lg:col-span-5 space-y-6 text-left">
            {/* Information Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-6">
              <h3 className="text-xl font-bold text-white font-heading">
                Información de Contacto
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                      Dirección
                    </h4>
                    <p className="text-sm font-semibold text-white mt-0.5">
                      {BUSINESS_INFO.address}
                    </p>
                    <span className="text-xs text-zinc-400">{BUSINESS_INFO.city}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                      Teléfono & WhatsApp
                    </h4>
                    <a
                      href={BUSINESS_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors block mt-0.5"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                    <span className="text-xs text-zinc-400">Atención rápida para pedidos</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                      Horario de Atención
                    </h4>
                    <p className="text-sm font-semibold text-white mt-0.5">
                      Martes a Domingo: 5:30 PM - 11:30 PM
                    </p>
                    <span className="text-xs text-rose-400">Lunes cerrado por descanso</span>
                  </div>
                </div>
              </div>

              {/* Domicilio Zones */}
              <div className="pt-4 border-t border-zinc-800 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
                  Zonas de Cobertura de Domicilio
                </span>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {BUSINESS_INFO.deliveryZones}.
                </p>
              </div>

              {/* Quick WhatsApp Action Button */}
              <a
                href={`https://wa.me/57${BUSINESS_INFO.phoneRaw}?text=Hola%20Joseph%20Burger,%20quiero%20hacer%20un%20pedido%20a%20domicilio`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-600/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Escribir al WhatsApp (313 545 9315)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Reservation / Order pickup Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900 border border-zinc-800 space-y-6 text-left">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-500">
                  <Calendar className="w-4 h-4 text-amber-500" />
                  <span>Reserva o Pedido Anticipado</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white font-heading">
                  ¿Celebras un cumpleaños o vienes en grupo?
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400">
                  Aparta tu mesa en nuestro local de La Alboraya o programa un pedido grande para tu reunión.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-zinc-300 block">Nombre Completo *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Tu nombre"
                      className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-zinc-300 block">Teléfono / Celular *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="313 000 0000"
                      className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-zinc-300 block">Número de Personas</label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-xs text-white focus:outline-none focus:border-amber-500"
                    >
                      <option>1 a 2 Personas</option>
                      <option>3 a 4 Personas</option>
                      <option>5 a 8 Personas</option>
                      <option>Grupo 10+ Personas</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-zinc-300 block">Fecha</label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-xs text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-zinc-300 block">Hora</label>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-xs text-white focus:outline-none focus:border-amber-500"
                    >
                      <option>05:30 PM</option>
                      <option>06:30 PM</option>
                      <option>07:30 PM</option>
                      <option>08:30 PM</option>
                      <option>09:30 PM</option>
                      <option>10:30 PM</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-zinc-300 block">
                    Observaciones o requerimientos especiales
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Ej: Cumpleaños familiar, decoración especial, solicitud de menú infantil..."
                    className="w-full px-3.5 py-2.5 bg-zinc-950 border border-zinc-800 rounded-xl text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-black text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-amber-500/20 active:scale-98"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Solicitud a WhatsApp</span>
                </button>

                {formSubmitted && (
                  <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                    <span>¡Solicitud enviada! Se abrirá WhatsApp para coordinar tu reserva con Joseph Burger.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
