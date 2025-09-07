"use client"; // <-- PENTING kalau kamu di Next.js App Router (app/)

import { useState } from "react";
import { ArrowUpRight, Mail, Github, Phone, Linkedin, Instagram, Facebook } from "lucide-react";

const BUSINESS_INFO = {
    brand: "Clovercode",
    tagline: "Code that converts.",
    shortDescription: "Website & web app modern yang mendorong pertumbuhan bisnis.",
    ctaLabel: "Konsultasi Gratis Via Whatsapp",
    email: "ogajet27@gmail.com",
    phone: "+6281223487220",
    social: {
        github: "https://github.com/username",
        linkedin: "https://www.linkedin.com/in/username/",
        instagram: "https://instagram.com/username",
        facebook: "https://facebook.com/username",
    },
};

// Pindahkan komponen kecil ke luar agar tidak re-def setiap render
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
    const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

    // FIX: ekstrak name & value terlebih dahulu
    const onChange = ({ target: { name, value } }) => {
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(
            `Kontak Baru: ${form.name}${form.company ? ` - ${form.company}` : ""}`
        );
        const body = encodeURIComponent(
            [
                `Nama     : ${form.name}`,
                `Email    : ${form.email}`,
                form.company ? `Perusahaan: ${form.company}` : null,
                "",
                "Pesan:",
                form.message,
            ]
                .filter(Boolean)
                .join("\n")
        );
        window.location.href = `mailto:${BUSINESS_INFO.email}?subject=${subject}&body=${body}`;
    };

    return (
        <section id="contact" className="scroll-mt-24 pt-20 pb-24">
            <Container>
                <div className="grid gap-8 md:grid-cols-2">
                    {/* Kiri: Info kontak */}
                    <div>
                        <SectionTitle
                            title="Diskusikan Proyek Anda"
                            subtitle="Ceritakan kebutuhan Anda, kami bantu estimasi waktu & biaya."
                        />
                        <div className="grid gap-3 text-sm">
                            <a href={`mailto:${BUSINESS_INFO.email}`} className="inline-flex items-center gap-2" aria-label="Kirim email">
                                <Mail className="h-4 w-4" /> {BUSINESS_INFO.email}
                            </a>
                            <a
                                href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, "")}`}
                                className="inline-flex items-center gap-2"
                                aria-label="Hubungi telepon"
                            >
                                <Phone className="h-4 w-4" /> {BUSINESS_INFO.phone}
                            </a>
                            <div className="mt-2 flex items-center gap-2 text-sm">
                                <a href={BUSINESS_INFO.social.github} className="rounded-xl border p-2 hover:bg-accent" aria-label="GitHub">
                                    <Github className="h-4 w-4" />
                                </a>
                                <a href={BUSINESS_INFO.social.linkedin} className="rounded-xl border p-2 hover:bg-accent" aria-label="LinkedIn">
                                    <Linkedin className="h-4 w-4" />
                                </a>
                                <a href={BUSINESS_INFO.social.instagram} className="rounded-xl border p-2 hover:bg-accent" aria-label="Instagram">
                                    <Instagram className="h-4 w-4" />
                                </a>
                                <a href={BUSINESS_INFO.social.facebook} className="rounded-xl border p-2 hover:bg-accent" aria-label="Facebook">
                                    <Facebook className="h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Kanan: Form */}
                    <form onSubmit={handleSubmit} className="rounded-2xl border bg-background p-6 shadow-sm">
                        <div className="grid gap-4">
                            <div>
                                <label htmlFor="name" className="text-sm font-medium">Nama</label>
                                <input
                                    id="name"
                                    name="name"
                                    required
                                    value={form.name}
                                    onChange={onChange}
                                    autoComplete="name"
                                    className="mt-1 w-full rounded-xl border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Nama lengkap"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={form.email}
                                    onChange={onChange}
                                    autoComplete="email"
                                    className="mt-1 w-full rounded-xl border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="email@bisnis.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="company" className="text-sm font-medium">Perusahaan (opsional)</label>
                                <input
                                    id="company"
                                    name="company"
                                    value={form.company}
                                    onChange={onChange}
                                    autoComplete="organization"
                                    className="mt-1 w-full rounded-xl border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Nama perusahaan"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="text-sm font-medium">Pesan</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required
                                    value={form.message}
                                    onChange={onChange}
                                    className="mt-1 w-full rounded-xl border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Ceritakan kebutuhan Anda..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="inline-flex items-center justify-center gap-2 rounded-xl border bg-primary/90 px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary"
                            >
                                Kirim Pesan <ArrowUpRight className="h-4 w-4" />
                            </button>

                            <a
                                href="https://wa.me/6281223487220"
                                className="inline-flex items-center justify-center gap-2 rounded-xl border bg-primary/90 px-4 py-3 text-sm font-medium text-primary-foreground hover:bg-primary"
                            >
                                {BUSINESS_INFO.ctaLabel}
                                <ArrowUpRight className="h-4 w-4" />
                            </a>
                        </div>
                    </form>
                </div>
            </Container>
        </section>
    );
};

export default Contact;
