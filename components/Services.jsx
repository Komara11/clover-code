import { motion } from "framer-motion";
import { Globe, Code2, Brush, Layers } from "lucide-react";


const Services = () => {

    const BadgePill = ({
        children,
        className = "",
    }) => (
        <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${className}`}>{children}</span>
    );

    const SectionTitle = ({
        title,
        subtitle,
    }) => (
        <div className="mb-10 flex flex-col gap-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                {title}
            </h2>
            {subtitle && (
                <p className="text-muted-foreground/80 text-base md:text-lg">{subtitle}</p>
            )}
        </div>
    );

    const Container = ({
        children,
        className = "",
    }) => (
        <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
    );

    const SERVICES = [
        {
            icon: <Globe className="w-6 h-6" />,
            title: "Website & Landing Page",
            desc: "Website cepat, SEO-ready, dan mobile-first untuk konversi maksimal.",
            items: ["Next.js", "Tailwind", "SEO"],
        },
        {
            icon: <Code2 className="w-6 h-6" />,
            title: "Web App / Dashboard",
            desc: "Sistem internal, admin panel, dan portal pelanggan yang scalable.",
            items: ["Auth", "Charting", "Integrasi API"],
        },
        {
            icon: <Brush className="w-6 h-6" />,
            title: "Branding & Desain",
            desc: "Logo, identitas visual, dan guideline untuk citra yang konsisten.",
            items: ["Logo", "UI Kit"],
        },
        {
            icon: <Layers className="w-6 h-6" />,
            title: "E-Commerce",
            desc: "Toko online dengan checkout nyaman dan katalog mudah dikelola.",
            items: ["Optimasi Speed", "Payment", "Integrasi WA"],
        },
        {
            icon: <Layers className="w-6 h-6" />,
            title: "PPT Business",
            desc: "Layanan pembuatan presentasi bisnis yang profesional, menarik, dan mudah dipahami untuk mendukung kesuksesan Anda.",
            items: [
                "Desain elegan & modern",
                "Konten terstruktur & persuasif",
                "Siap pakai untuk meeting, pitching, dan presentasi"
            ],
        }

    ];

    return (
        <section id="services" className=" scroll-mt-24 pt-20">
            <Container>
                <SectionTitle
                    title="Layanan Utama"
                    subtitle="Paket fleksibel untuk kebutuhan bisnis—dari landing page hingga web app yang kompleks."
                />
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {SERVICES.map((s, i) => (
                        <motion.div
                            key={s.title}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                            className="group relative overflow-hidden rounded-2xl border bg-background p-5 shadow-sm"
                        >
                            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-emerald-500/20 to-lime-500/20 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                            <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl border bg-background/70">
                                {s.icon}
                            </div>
                            <h3 className="text-lg font-semibold">{s.title}</h3>
                            <p className="mt-1 text-sm text-foreground/80">{s.desc}</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {s.items.map((it) => (
                                    <BadgePill key={it} className="text-foreground/80">
                                        {it}
                                    </BadgePill>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Services