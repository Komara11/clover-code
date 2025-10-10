"use client";

import { Mail, Github, Phone, Linkedin, Instagram, Facebook, MapPin } from "lucide-react";

const BUSINESS_INFO = {
    brand: "Clovercode",
    tagline: "Code that converts.",
    shortDescription: "Website & web app modern yang mendorong pertumbuhan bisnis.",
    ctaLabel: "Konsultasi Gratis Via Whatsapp",
    email: "ogajet27@gmail.com",
    phone: "+6281223487220",
    address: "Majalengka, Indonesia",
    social: {
        github: "https://github.com/username",
        linkedin: "https://www.linkedin.com/in/username/",
        instagram: "https://instagram.com/username",
        facebook: "https://facebook.com/username",
    },
};

const Container = ({ children, className = "" }) => (
    <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

const SectionTitle = ({ title, subtitle }) => (
    <div className="mb-10 flex flex-col gap-2">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
        {subtitle && <p className="text-muted-foreground/80 text-base md:text-lg">{subtitle}</p>}
    </div>
);

const Contact = () => {
    return (
        <section id="contact" className="scroll-mt-24 pt-20 pb-24 bg-gradient-to-b from-background to-muted/20">
            <Container>
                {/* Header Section */}
                <div className="mb-16">
                    <SectionTitle
                        title="Hubungi Kami"
                        subtitle="Mari berkolaborasi untuk mewujudkan ide bisnis digital Anda"
                    />
                </div>

                <div className="grid gap-12 lg:grid-cols-2 max-w-5xl mx-auto">
                    {/* Left: Contact Information */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold">Informasi Kontak</h3>
                            
                            {/* Email */}
                            <div className="flex items-start gap-4 p-4 rounded-2xl border bg-background hover:shadow-md transition-shadow">
                                <div className="p-2 bg-primary/10 rounded-lg">
                                    <Mail className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="font-medium text-sm text-muted-foreground">Email</p>
                                    <a 
                                        href={`mailto:${BUSINESS_INFO.email}`}
                                        className="text-lg hover:text-primary transition-colors"
                                    >
                                        {BUSINESS_INFO.email}
                                    </a>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-4 p-4 rounded-2xl border bg-background hover:shadow-md transition-shadow">
                                <div className="p-2 bg-primary/10 rounded-lg">
                                    <Phone className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="font-medium text-sm text-muted-foreground">Telepon/WhatsApp</p>
                                    <a 
                                        href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, "")}`}
                                        className="text-lg hover:text-primary transition-colors"
                                    >
                                        {BUSINESS_INFO.phone}
                                    </a>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="flex items-start gap-4 p-4 rounded-2xl border bg-background hover:shadow-md transition-shadow">
                                <div className="p-2 bg-primary/10 rounded-lg">
                                    <MapPin className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="font-medium text-sm text-muted-foreground">Lokasi</p>
                                    <p className="text-lg">{BUSINESS_INFO.address}</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="space-y-4">
                            <h4 className="font-semibold">Follow Kami</h4>
                            <div className="flex gap-3">
                                <a 
                                    href={BUSINESS_INFO.social.github} 
                                    className="rounded-xl border p-3 hover:bg-accent hover:shadow-md transition-all"
                                    aria-label="GitHub"
                                >
                                    <Github className="h-5 w-5" />
                                </a>
                                <a 
                                    href={BUSINESS_INFO.social.linkedin} 
                                    className="rounded-xl border p-3 hover:bg-accent hover:shadow-md transition-all"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="h-5 w-5" />
                                </a>
                                <a 
                                    href={BUSINESS_INFO.social.instagram} 
                                    className="rounded-xl border p-3 hover:bg-accent hover:shadow-md transition-all"
                                    aria-label="Instagram"
                                >
                                    <Instagram className="h-5 w-5" />
                                </a>
                                <a 
                                    href={BUSINESS_INFO.social.facebook} 
                                    className="rounded-xl border p-3 hover:bg-accent hover:shadow-md transition-all"
                                    aria-label="Facebook"
                                >
                                    <Facebook className="h-5 w-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right: CTA Section */}
                    <div className="space-y-6">
                        <div className="rounded-2xl border bg-background p-8 shadow-sm">
                            <h3 className="text-xl font-semibold mb-4">Mulai Proyek Anda</h3>
                            <p className="text-muted-foreground mb-6">
                                Konsultasi gratis untuk mendiskusikan kebutuhan dan mendapatkan estimasi proyek Anda.
                            </p>
                            
                            <div className="space-y-4">
                                {/* WhatsApp CTA */}
                                <a
                                    href="https://wa.me/6281223487220"
                                    className="flex items-center justify-between gap-4 rounded-xl bg-green-600 hover:bg-green-700 px-6 py-4 text-white font-medium transition-colors group"
                                >
                                    <span>{BUSINESS_INFO.ctaLabel}</span>
                                    <div className="p-2 bg-white/20 rounded-lg group-hover:scale-110 transition-transform">
                                        <Phone className="h-4 w-4" />
                                    </div>
                                </a>

                                {/* Email CTA */}
                                <a
                                    href={`mailto:${BUSINESS_INFO.email}?subject=Konsultasi Proyek&body=Halo, saya tertarik untuk berkonsultasi mengenai proyek website.`}
                                    className="flex items-center justify-between gap-4 rounded-xl border border-primary/20 bg-primary/5 hover:bg-primary/10 px-6 py-4 font-medium transition-colors group"
                                >
                                    <span>Kirim Email</span>
                                    <div className="p-2 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform">
                                        <Mail className="h-4 w-4 text-primary" />
                                    </div>
                                </a>
                            </div>

                            <div className="mt-6 p-4 bg-muted/30 rounded-xl">
                                <p className="text-sm text-muted-foreground">
                                    <strong>Respon Cepat:</strong> Kami biasanya membalas dalam 1-2 jam kerja
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Contact;