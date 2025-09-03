"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/ProjectCard"
import About from "@/components/About";
import Pricing from "@/components/Pincing";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function PortfolioPage() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground antialiased">
      {/* Base colors via Tailwind (light/dark) rely on your Tailwind config. */}
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
