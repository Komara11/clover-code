import { ArrowUpRight, Award, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";


const Hero = () => {

    const GradientBG = () => (
        <>
            <div className="pointer-events-none fixed inset-0 -z-10 opacity-30">
                <div className="absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full blur-3xl" style={{
                    background:
                        "radial-gradient(circle at 50% 50%, var(--cc-grad-a), transparent 60%)",
                }} />
                <div className="absolute bottom-0 right-[-10%] h-[30rem] w-[30rem] rounded-full blur-3xl" style={{
                    background:
                        "radial-gradient(circle at 50% 50%, var(--cc-grad-b), transparent 60%)",
                }} />
                <div className="absolute -bottom-20 left-[-10%] h-[28rem] w-[28rem] rounded-full blur-3xl" style={{
                    background:
                        "radial-gradient(circle at 50% 50%, var(--cc-grad-c), transparent 60%)",
                }} />
            </div>
        </>
    );

    const BUSINESS_INFO = {
        brand: "Clovercode",
        tagline: "Code that converts.",
        shortDescription: "Website & web app modern yang mendorong pertumbuhan bisnis.",
        ctaLabel: "Konsultasi Gratis",
        email: "halo@ogastudio.com",
        phone: "+62 812-3456-7890",
        location: "Jakarta, Indonesia",
        social: {
            github: "https://github.com/username",
            linkedin: "https://www.linkedin.com/in/username/",
            instagram: "https://instagram.com/username",
            facebook: "https://facebook.com/username",
        },
    };

    const Container = ({
        children,
        className = "",
    }) => (
        <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
    );

    const BadgePill = ({
        children,
        className = "",
    }) => (
        <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${className}`}>{children}</span>
    );

    return (
        <section id="home" className="scroll-mt-24 pt-24 md:pt-28">
            <Container>
                <div className="relative overflow-hidden rounded-3xl border bg-gradient-to-b from-background/60 to-background/30 p-8 md:p-12">
                    <GradientBG />
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative z-10 grid gap-8 md:grid-cols-2 md:gap-12"
                    >
                        <div className="flex flex-col justify-center">
                            <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-background/60 px-3 py-1 text-xs">
                                <Award className="h-4 w-4" />Bisa dipercaya UMKM & Startup
                            </div>
                            <h1 className="text-3xl leading-tight sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                                {BUSINESS_INFO.brand}: Solusi Digital untuk Bisnis yang Mau Tumbuh
                            </h1>
                            <p className="mt-4 text-base md:text-lg text-foreground/80 max-w-prose">
                                {BUSINESS_INFO.tagline} {BUSINESS_INFO.shortDescription}
                            </p>
                            <div className="mt-6 flex flex-wrap items-center gap-3">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-2 rounded-xl border bg-primary/90 px-5 py-3 text-sm font-semibold text-primary-foreground shadow hover:bg-primary"
                                >
                                    {BUSINESS_INFO.ctaLabel}
                                    <ArrowUpRight className="h-4 w-4" />
                                </a>
                                <a
                                    href="#projects"
                                    className="inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold hover:bg-accent"
                                >
                                    Lihat Portofolio <ChevronRight className="h-4 w-4" />
                                </a>
                            </div>
                            <div className="mt-6 flex flex-wrap gap-2 text-xs text-foreground/70">
                                <BadgePill>Next.js</BadgePill>
                                <BadgePill>Tailwind</BadgePill>
                                <BadgePill>SEO</BadgePill>
                                <BadgePill>Integrasi API</BadgePill>
                            </div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="relative"
                        >
                            <div className="absolute -right-6 -top-6 h-40 w-40 rounded-full bg-gradient-to-br from-emerald-500 to-lime-500 opacity-30 blur-2xl" />
                            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border shadow-sm">
                                {/* Placeholder visual */}
                                <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_25%_25%,var(--cc-grad-a-soft),transparent_60%),radial-gradient(75%_75%_at_75%_75%,var(--cc-grad-b-soft),transparent_60%)]" />
                                <div className="relative z-10 grid h-full place-items-center p-6 text-center">
                                    <div>
                                        <p className="text-sm uppercase tracking-widest text-foreground/70">Showcase</p>
                                        <h3 className="mt-2 text-2xl font-bold">Website & Aplikasi Bisnis</h3>
                                        <p className="mt-2 text-foreground/75">Kecepatan tinggi, desain modern, dan siap scale.</p>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-foreground/70">
                                <div className="rounded-xl border p-3 text-center">
                                    <div className="text-lg font-bold">40% ⬇</div>
                                    <div>Waktu Operasional</div>
                                </div>
                                <div className="rounded-xl border p-3 text-center">
                                    <div className="text-lg font-bold">+120%</div>
                                    <div>Traffic Organik</div>
                                </div>
                                <div className="rounded-xl border p-3 text-center">
                                    <div className="text-lg font-bold">A+</div>
                                    <div>SEO & Speed</div>
                                </div>
                            </div> */}
                        </motion.div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
};

export default Hero