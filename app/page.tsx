"use client";

import { useState } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Story } from "@/components/sections/Story";
import { Curriculum } from "@/components/sections/Curriculum";
import { Bonuses } from "@/components/sections/Bonuses";
import { WhoIsThisFor } from "@/components/sections/WhoIsThisFor";
import { Pricing } from "@/components/sections/Pricing";
import { Payment } from "@/components/sections/Payment";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { StickyCTA } from "@/components/sections/StickyCTA";

export default function Home() {
  const [, setModalOpen] = useState(false);

  const scrollToPayment = () => {
    document.getElementById("payment-section")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black">
      <Navbar onReserveClick={scrollToPayment} />

      <Hero onReserveClick={scrollToPayment} />
      <WhoIsThisFor />
      <Story />
      <Curriculum />
      <Bonuses />
      <Pricing onReserveClick={scrollToPayment} />

      <div id="payment-section">
        <Payment />
      </div>

      <FAQ />
      <Footer />

      <StickyCTA onReserveClick={scrollToPayment} />
    </main>
  );
}
