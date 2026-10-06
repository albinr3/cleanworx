"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Clock,
  MapPin,
  Phone,
  Mail,
  Send,
  Car,
  Sparkles,
} from "lucide-react";

const SERVICES = [
  "Ceramic Coating",
  "Paint Correction",
  "Window Tinting",
  "Interior Detailing",
  "Exterior Detailing",
  "Full Detail Package",
  "Mobile Auto Detailing",
  "Other Inquiry",
];

export function ContactPageContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    vehicle: "",
    service: "Ceramic Coating",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `CleanWorx inquiry: ${formData.service}`;
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Vehicle: ${formData.vehicle || "Not provided"}`,
      `Service: ${formData.service}`,
      "",
      formData.message,
    ].join("\n");
    window.location.href = `mailto:cleanworxnj@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      vehicle: "",
      service: "Ceramic Coating",
      message: "",
    });
    setSubmitted(false);
  };

  return (
    <div className="bg-[#0a0a0c] py-10 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Contact Form & Hours / Map */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Formulario de Contacto */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-[#121318] p-6 sm:p-8 lg:p-10 shadow-2xl">
              <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <h1 className="text-2xl font-black uppercase tracking-tight text-white sm:text-3xl">
                    Contact Form
                  </h1>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1277ff]/10 text-[#4da3ff]">
                  <Mail className="h-5 w-5" />
                </div>
              </div>

              {submitted ? (
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                    <Mail className="h-8 w-8" />
                  </div>
                  <h2 className="text-xl font-bold text-white">Finish Sending Your Email</h2>
                  <p className="mt-2 text-sm text-neutral-300">
                    Your email app should open with your inquiry ready. Press Send there to contact us. If it did not open, email <a href="mailto:cleanworxnj@gmail.com" className="underline">cleanworxnj@gmail.com</a>.
                  </p>
                  <div className="mt-6">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="rounded-lg bg-white/10 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
                    >
                      Compose Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-neutral-300">
                        Full Name <span className="text-[#1277ff]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="mt-2 w-full rounded-xl border border-white/10 bg-[#181920] px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-all focus:border-[#1277ff] focus:ring-1 focus:ring-[#1277ff]"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-neutral-300">
                        Email Address <span className="text-[#1277ff]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="mt-2 w-full rounded-xl border border-white/10 bg-[#181920] px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-all focus:border-[#1277ff] focus:ring-1 focus:ring-[#1277ff]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-neutral-300">
                        Phone Number <span className="text-[#1277ff]">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="(908) 899-2832"
                        className="mt-2 w-full rounded-xl border border-white/10 bg-[#181920] px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-all focus:border-[#1277ff] focus:ring-1 focus:ring-[#1277ff]"
                      />
                    </div>
                    <div>
                      <label htmlFor="vehicle" className="block text-xs font-bold uppercase tracking-wider text-neutral-300">
                        Vehicle (Year / Make / Model)
                      </label>
                      <input
                        type="text"
                        id="vehicle"
                        value={formData.vehicle}
                        onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                        placeholder="e.g. 2024 Porsche 911"
                        className="mt-2 w-full rounded-xl border border-white/10 bg-[#181920] px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-all focus:border-[#1277ff] focus:ring-1 focus:ring-[#1277ff]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-neutral-300">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="mt-2 w-full rounded-xl border border-white/10 bg-[#181920] px-4 py-3 text-sm text-white outline-none transition-all focus:border-[#1277ff] focus:ring-1 focus:ring-[#1277ff]"
                    >
                      {SERVICES.map((s) => (
                        <option key={s} value={s} className="bg-[#181920] text-white">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-neutral-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your vehicle and what you need..."
                      className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-[#181920] px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-all focus:border-[#1277ff] focus:ring-1 focus:ring-[#1277ff]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#1277ff] px-6 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-[#1277ff]/20 transition-all hover:bg-[#0e62d4] hover:shadow-[#1277ff]/30 active:scale-[0.99] disabled:opacity-60 cursor-pointer"
                  >
                    <Send className="h-4 w-4" />
                    <span>Open Email App</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Horario de Trabajo y El Mapa */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            {/* Horario de Trabajo */}
            <div className="rounded-2xl border border-white/10 bg-[#121318] p-6 sm:p-7 shadow-2xl">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1277ff]/10 text-[#4da3ff]">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-lg font-black uppercase tracking-tight text-white">
                    Business Hours
                  </h2>
                  <p className="text-xs text-neutral-400">CleanWorx Auto Detailing</p>
                </div>
              </div>

              <div className="mt-4 divide-y divide-white/5 text-sm">
                <div className="flex items-center justify-between py-2.5">
                  <span className="font-medium text-neutral-300">Monday – Saturday</span>
                  <span className="font-bold text-white">9:00 AM – 5:00 PM</span>
                </div>
                <div className="flex items-center justify-between py-2.5">
                  <span className="font-medium text-neutral-400">Sunday</span>
                  <span className="font-semibold text-rose-400">Closed</span>
                </div>
              </div>

              <div className="mt-5 border-t border-white/10 pt-4 flex flex-col gap-2.5 text-xs text-neutral-300">
                <div className="flex items-center gap-2.5">
                  <MapPin className="h-4 w-4 shrink-0 text-[#1277ff]" />
                  <span>19 E. Henry Street, Basking Ridge, NJ 07920</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 shrink-0 text-[#1277ff]" />
                  <a href="tel:+19088992832" className="text-white hover:text-[#4da3ff] transition-colors">
                    908-899-2832
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 shrink-0 text-[#1277ff]" />
                  <a href="mailto:cleanworxnj@gmail.com" className="text-white hover:text-[#4da3ff] transition-colors">
                    cleanworxnj@gmail.com
                  </a>
                </div>
              </div>

              {/* Google Business Profile Link */}
              <div className="mt-4 pt-3.5 border-t border-white/10">
                <a
                  href="https://share.google/UwkPd2O0H8zeL4M37"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-3 text-xs font-bold text-white transition-all hover:border-[#1277ff] hover:bg-[#1277ff]/10 group"
                >
                  <div className="flex items-center gap-2.5">
                    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                    </svg>
                    <span>Google Business Profile</span>
                  </div>
                  <span className="text-[#4da3ff] group-hover:translate-x-0.5 transition-transform text-xs">
                    View on Google ↗
                  </span>
                </a>
              </div>
            </div>

            {/* Google Map Embed & Link */}
            <div className="flex flex-col gap-2.5">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#121318] shadow-2xl h-[340px] sm:h-[380px] min-h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.586929759875!2d-74.5508026239746!3d40.70509417139475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3b79f2ad31b11%3A0xddacbc0a3ba76720!2sCleanWorx%20Auto%20Detailing%20%26%20Ceramic%20Coating!5e0!3m2!1ses!2sdo!4v1790476152104!5m2!1ses!2sdo"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="absolute inset-0 h-full w-full border-0"
                  title="CleanWorx Auto Detailing & Ceramic Coating Location Map"
                />
              </div>
              <div className="flex items-center justify-between px-1 text-xs">
                <span className="text-neutral-400">19 E. Henry Street, Basking Ridge, NJ</span>
                <a
                  href="https://share.google/UwkPd2O0H8zeL4M37"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#4da3ff] hover:text-white transition-colors"
                >
                  Open in Google Maps / GBP ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Las 2 Imágenes */}
        <div className="mt-10 sm:mt-14">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Imagen 1: Interior Detailing - Mazda 6 */}
            <div className="group relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-[#121318] shadow-2xl">
              <Image
                src="/images/contact/interior-detailing-mazda-6.webp"
                alt="CleanWorx deep interior steam cleaning and leather conditioning on Mazda 6 in Basking Ridge studio"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
                  <Sparkles className="h-3 w-3 text-[#4da3ff]" />
                  Interior Detailing
                </span>
                <p className="mt-2 text-base sm:text-lg font-black text-white">
                  Mazda 6 Deep Clean & Conditioning
                </p>
              </div>
            </div>

            {/* Imagen 2: Exterior Detailing - Z06 Corvette */}
            <div className="group relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-2xl border border-white/10 bg-[#121318] shadow-2xl">
              <Image
                src="/images/contact/exterior-detailing-z06-corvette.webp"
                alt="CleanWorx scratch-free exterior hand wash and ceramic wax protection on Chevrolet Corvette Z06"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
                  <Car className="h-3 w-3 text-[#4da3ff]" />
                  Exterior Detailing
                </span>
                <p className="mt-2 text-base sm:text-lg font-black text-white">
                  Corvette Z06 Multi-Stage Detail & Gloss
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
