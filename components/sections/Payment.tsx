"use client";

import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "918828186098";
const WHATSAPP_MESSAGE = encodeURIComponent(
  `Hi Pratik,\n\nI've completed the payment for Remote Job Cohort 1.\n\nName: \nAge: \nStudent/Fresher: \nCollege: \n\n[Payment Screenshot Attached]`
);

export function Payment() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <section className="bg-black py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 items-start">

          {/* Left — Heading + instructions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-500 mb-4">
              Payment
            </p>
            <h2 className="text-3xl font-semibold tracking-tighter text-white sm:text-4xl lg:text-5xl mb-4">
              Reserve Your Seat.
            </h2>
            <p className="text-base text-zinc-400 leading-relaxed mb-8 max-w-sm">
              Scan the QR code using any UPI app. Once paid, tap the button below to confirm your seat on WhatsApp.
            </p>

            {/* Step list */}
            <div className="space-y-4 mb-10">
              {[
                "Open GPay, PhonePe, Paytm, or any UPI app",
                "Scan the QR code and pay ₹199",
                "Screenshot your payment confirmation",
                "Tap 'I've Completed Payment' below",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-[10px] font-semibold text-zinc-500">
                    {i + 1}
                  </span>
                  <p className="text-sm text-zinc-500">{step}</p>
                </div>
              ))}
            </div>

            {/* UPI ID */}
            <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 mb-8 inline-block">
              <p className="text-xs text-zinc-600 mb-0.5">UPI ID</p>
              <p className="text-sm font-mono font-medium text-white tracking-wide">
                pratiksagvekar07@okaxis
              </p>
            </div>

            {/* WhatsApp CTA */}
            <div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="whatsapp-payment-btn"
                className="group inline-flex h-12 items-center justify-center gap-3 rounded-xl bg-[#25D366] px-7 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#20bd59] active:scale-[0.98]"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                I&apos;ve Completed Payment
              </a>
              <p className="mt-3 text-xs text-zinc-600">
                A pre-filled message opens automatically.
              </p>
            </div>
          </motion.div>

          {/* Right — QR Code */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col items-center lg:items-start"
          >
            {/* QR Card */}
            <div className="relative w-full max-w-[320px] overflow-hidden rounded-2xl border border-white/[0.1] bg-white/[0.04] p-5">
              {/* Actual QR code */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/qr-clean.png"
                alt="UPI QR Code — Pratik Sagvekar"
                className="w-full rounded-2xl"
              />
              <div className="mt-4 text-center">
                <p className="text-sm font-medium text-white">Pratik Sagvekar</p>
                <p className="text-xs text-zinc-500 mt-1">Scan to pay with any UPI app</p>
              </div>
            </div>

            {/* Amount callout */}
            <div className="mt-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-white/[0.06]" />
              <span className="text-3xl font-bold tracking-tighter text-white">₹199</span>
              <div className="h-px flex-1 bg-white/[0.06]" />
            </div>
            <p className="mt-2 text-center text-xs text-zinc-600 w-full max-w-[320px]">
              Early Bird · Price increases to ₹399 from Saturday
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
