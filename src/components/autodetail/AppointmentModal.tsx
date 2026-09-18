"use client";

import { useState } from "react";
import { X, Calendar, CheckCircle2, Shield, Sparkles } from "lucide-react";
import { SERVICES } from "@/data/autodetailData";

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export function AppointmentModal({
  isOpen,
  onClose,
  defaultService = "Ceramic Coating Protection",
}: AppointmentModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    vehicle: "",
    service: defaultService,
    date: "",
    notes: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Dark Blur Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl rounded-2xl bg-[#13141a] border border-white/15 p-6 sm:p-8 shadow-2xl z-10 my-8 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-white p-1 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#e30613] mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ONLINE RESERVATION</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Make An Appointment
            </h3>
            <p className="mt-1 text-sm text-neutral-400">
              Select your preferred service and schedule time with our detailing specialists.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full rounded-lg bg-black/50 border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#e30613] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (234) 567-890"
                    className="w-full rounded-lg bg-black/50 border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#e30613] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Vehicle Year / Make / Model *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.vehicle}
                    onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                    placeholder="e.g. 2024 Porsche 911 GT3"
                    className="w-full rounded-lg bg-black/50 border border-white/10 px-4 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#e30613] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                    Select Service *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full rounded-lg bg-black/50 border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#e30613] transition-colors"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title} className="bg-[#14151a] text-white">
                        {s.title} ({s.price})
                      </option>
                    ))}
                    <option value="Full Restoration Package" className="bg-[#14151a] text-white">
                      Full Restoration Custom Package
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Preferred Date &amp; Time
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full rounded-lg bg-black/50 border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#e30613] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Special Instructions or Vehicle Condition
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Mention paint swirls, pet hair, or any specific concerns..."
                  className="w-full rounded-lg bg-black/50 border border-white/10 px-4 py-2 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#e30613] transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#e30613] py-3.5 text-sm font-bold text-white shadow-xl hover:bg-[#c5040f] hover:shadow-2xl transition-all cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Confirm Appointment Request</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-neutral-400 pt-1">
                <Shield className="w-3.5 h-3.5 text-[#e30613]" />
                <span>No upfront charge. We confirm booking by phone.</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-[#e30613]/10 border border-[#e30613]/30 text-[#e30613] flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-black text-white">
              Appointment Request Received!
            </h3>
            <p className="mt-3 text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{formData.name}</strong>. We have logged your booking for your{" "}
              <strong className="text-white">{formData.vehicle || "vehicle"}</strong> ({formData.service}).
            </p>
            <p className="mt-2 text-xs text-neutral-400">
              Our lead service manager will call you at <strong className="text-white">{formData.phone}</strong> within 15 minutes to confirm timing and drop-off instructions.
            </p>

            <div className="mt-8">
              <button
                onClick={handleReset}
                className="rounded-lg bg-white/10 hover:bg-white/15 px-6 py-2.5 text-sm font-bold text-white transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
