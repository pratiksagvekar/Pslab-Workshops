"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { BorderBeam } from "@/components/ui/magicui/border-beam";
import { ShimmerButton } from "@/components/ui/magicui/shimmer-button";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2, MessageCircle, QrCode } from "lucide-react";

interface PaymentModalProps {
  open: boolean;
  onClose: () => void;
}

function buildWhatsAppLink() {
  const phone = "917XXXXXXXXX"; // Replace with Pratik's actual WhatsApp number
  const message = encodeURIComponent(
    `Hi Pratik! 👋

I have completed the payment for Remote Job Cohort 1.

Name: 
Age: 
Student / Fresher: 
College / Background: 

[Payment Screenshot Attached]`
  );
  return `https://wa.me/${phone}?text=${message}`;
}

export function PaymentModal({ open, onClose }: PaymentModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="relative overflow-hidden border border-white/10 bg-zinc-950 p-0 text-white max-w-md w-[calc(100vw-2rem)] rounded-2xl shadow-2xl shadow-black/80">
        <BorderBeam
          size={300}
          duration={12}
          colorFrom="#10b981"
          colorTo="#6366f1"
        />

        {/* Inner glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-emerald-500/10 blur-3xl rounded-full"
        />

        <div className="relative z-10 flex flex-col p-6 gap-5">
          <DialogHeader className="gap-1">
            <DialogTitle className="text-xl font-semibold tracking-tight text-white">
              Scan &amp; Pay
            </DialogTitle>
            <DialogDescription className="text-sm text-zinc-500">
              Pay ₹199 to confirm your seat in Cohort 1.
            </DialogDescription>
          </DialogHeader>

          {/* QR Code placeholder */}
          <div className="flex flex-col items-center gap-3">
            <div className="relative flex h-56 w-56 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
              {/* Placeholder for actual QR code image */}
              <div className="flex flex-col items-center gap-3 text-center px-4">
                <QrCode className="h-12 w-12 text-emerald-400/60" />
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Replace this with your actual UPI QR code image
                </p>
              </div>
              {/* When you have the real QR: */}
              {/* <Image src="/qr-code.png" alt="UPI QR Code" fill className="object-contain p-2 rounded-2xl" /> */}
            </div>

            <div className="text-center">
              <p className="text-2xl font-bold tracking-tight text-white">₹199</p>
              <p className="text-xs text-zinc-500 mt-0.5">Early Bird · Cohort 1</p>
            </div>

            {/* UPI ID */}
            <div className="w-full rounded-xl border border-white/8 bg-white/3 px-4 py-3 text-center">
              <p className="text-xs text-zinc-500 mb-1">UPI ID</p>
              <p className="text-sm font-mono font-semibold text-white">
                pratik@upi {/* Replace with actual UPI ID */}
              </p>
            </div>
          </div>

          <Separator className="bg-white/8" />

          {/* Steps */}
          <div className="space-y-2">
            {[
              "Open any UPI app (GPay, PhonePe, Paytm)",
              "Scan the QR code above",
              "Pay exactly ₹199",
              "Screenshot your payment confirmation",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                  {i + 1}
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">{step}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <ShimmerButton
            shimmerColor="#10b981"
            background="rgba(16,185,129,0.12)"
            className="w-full border-emerald-500/30 text-white font-semibold text-sm py-3 justify-center gap-2"
            onClick={() => {
              window.open(buildWhatsAppLink(), "_blank");
              onClose();
            }}
          >
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            I've Completed Payment →
          </ShimmerButton>

          <div className="flex items-center justify-center gap-2 text-center">
            <MessageCircle className="h-3.5 w-3.5 text-green-500" />
            <p className="text-xs text-zinc-600">
              A pre-filled WhatsApp message will open after clicking above.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
