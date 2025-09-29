"use client";
import React from "react";
import Head from "next/head"; 
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/ProjectCard";
import About from "@/components/About";
import Pricing from "@/components/Pincing";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function PortfolioPage() {
  return (
    <>
      <Head>
        <title>Clover Code</title>

        {/* ✅ favicon untuk hasil pencarian Google */}
        <link rel="icon" href="/logo.png" type="image/png" />

        <meta
          name="Clover Code"
          content="Clover Code - Jasa pembuatan website, aplikasi, tugas dan lain-lain."
        />

        {/* ✅ structured data logo untuk brand */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://www.clovercode.shop",
              "@type": "Cllover Code",
              "name": "Clover Code",
              "url": "https://www.clovercode.shop",
              "logo": "https://www.clovercode.shop/logo.png",
              // "sameAs": [
              //   "https://www.facebook.com/namabrand",
              //   "https://www.instagram.com/namabrand",
              //   "https://www.twitter.com/namabrand"
              // ]
            }),
          }}
        />
      </Head>

      <div className="min-h-[100dvh] bg-background text-foreground antialiased">
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
    </>
  );
}
