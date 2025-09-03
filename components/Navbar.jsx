import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X, Mail, Phone, MapPin } from "lucide-react";

const Navbar = () => {

    const ThemeToggle = () => {
        const [isDark, setDark] = useState(false);
        useEffect(() => {
            const root = document.documentElement;
            const saved = localStorage.getItem("theme");
            const dark = saved ? saved === "dark" : window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
            setDark(dark);
            root.classList.toggle("dark", dark);
        }, []);
    }

    const Container = ({
        children,
        className = "",
    }) => (
        <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
    );

    const BUSINESS_INFO = {
        brand: "Clovercode",
        tagline: "Code that converts.",
        shortDescription: "Website & web app modern yang mendorong pertumbuhan bisnis.",
        ctaLabel: "Konsultasi Gratis",
        email: "clovercode@gmial.com",
        phone: "+62 812 234 872 20",
        social: {
            github: "https://github.com/username",
            linkedin: "https://www.linkedin.com/in/username/",
            instagram: "https://instagram.com/username",
            facebook: "https://facebook.com/username",
        },
    };


    const NAV_ITEMS = [
        { label: "Home", href: "#home" },
        { label: "Layanan", href: "#services" },
        { label: "Proyek", href: "#projects" },
        { label: "Tentang", href: "#about" },
        { label: "Testimoni", href: "#testimonials" },
        { label: "Harga", href: "#pricing" },
        { label: "Kontak", href: "#contact" },
    ];

    const [open, setOpen] = useState(false);
    return (
        <header className="sticky top-4 z-50">
            <Container>
                <div className="flex items-center justify-between rounded-2xl border bg-background/70 px-4 py-3 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60">
                    <a href="#home" className="flex items-center gap-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-lime-500 text-white font-bold">CC</div>
                        <span className="text-sm font-semibold opacity-90">{BUSINESS_INFO.brand}</span>
                    </a>
                    <nav className="hidden md:flex items-center gap-6">
                        {NAV_ITEMS.map((n) => (
                            <a key={n.href} href={n.href} className="text-sm text-foreground/80 hover:text-foreground transition-colors">
                                {n.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 rounded-xl border bg-primary/90 px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary"
                        >
                            {BUSINESS_INFO.ctaLabel}
                            <ArrowUpRight className="h-4 w-4" />
                        </a>
                        <ThemeToggle />
                    </nav>
                    <div className="md:hidden flex items-center gap-2">
                        <ThemeToggle />
                        <button
                            onClick={() => setOpen(true)}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-background/60"
                        >
                            <Menu className="h-5 w-5" />
                        </button>
                    </div>
                </div>
                {/* Mobile sheet */}
                {open && (
                    <div className="fixed inset-0 z-[60] md:hidden" role="dialog" aria-modal>
                        <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
                        <div className="absolute right-0 top-0 h-full w-[85%] max-w-sm overflow-y-auto rounded-l-2xl border bg-background p-6 shadow-xl">
                            <div className="mb-6 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-lime-500 text-white font-bold">CC</div>
                                    <span className="text-sm font-semibold opacity-90">{BUSINESS_INFO.brand}</span>
                                </div>
                                <button onClick={() => setOpen(false)} className="rounded-xl border p-2">
                                    <X className="h-5 w-5" />
                                </button>
                            </div>
                            <div className="grid gap-4">
                                {NAV_ITEMS.map((n) => (
                                    <a
                                        key={n.href}
                                        href={n.href}
                                        onClick={() => setOpen(false)}
                                        className="rounded-xl border px-4 py-3 text-sm hover:bg-accent"
                                    >
                                        {n.label}
                                    </a>
                                ))}
                                <a
                                    href="#contact"
                                    onClick={() => setOpen(false)}
                                    className="inline-flex items-center justify-center gap-2 rounded-xl border bg-primary/90 px-4 py-3 text-sm font-medium text-primary-foreground hover:bg-primary"
                                >
                                    {BUSINESS_INFO.ctaLabel}
                                    <ArrowUpRight className="h-4 w-4" />
                                </a>
                            </div>
                            <div className="mt-8 grid gap-3 text-sm">
                                <a href={`mailto:${BUSINESS_INFO.email}`} className="inline-flex items-center gap-2 text-foreground/80">
                                    <Mail className="h-4 w-4" /> {BUSINESS_INFO.email}
                                </a>
                                <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center gap-2 text-foreground/80">
                                    <Phone className="h-4 w-4" /> {BUSINESS_INFO.phone}
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </Container>
        </header>
    );
};


export default Navbar