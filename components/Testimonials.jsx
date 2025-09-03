import { motion } from "framer-motion";


const TESTIMONIALS = [
    {
        name: "Rina Pratiwi",
        role: "Owner, Klinik Y",
        quote:
            "Website baru membuat proses booking lebih lancar dan trust meningkat. Tim responsif & rapi sekali!",
        avatar: "https://i.pravatar.cc/100?img=5",
    },
    {
        name: "Dimas Akbar",
        role: "CTO, Perusahaan X",
        quote:
            "Admin panel yang dibangun memotong waktu operasional hingga 40%. Dokumentasinya juga lengkap.",
        avatar: "https://i.pravatar.cc/100?img=12",
    },
    {
        name: "Sari M.",
        role: "Founder, UMKM Z",
        quote:
            "Toko online kami performanya kencang dan gampang dikelola. Penjualan naik signifikan.",
        avatar: "https://i.pravatar.cc/100?img=8",
    },
];

const Testimonials = () => {

    const Container = ({
        children,
        className = "",
    }) => (
        <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
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

    return (
        <section id="testimonials" className="scroll-mt-24 pt-20">
            <Container>
                <SectionTitle title="Apa Kata Klien" subtitle="Kepercayaan dibangun dari pengalaman yang menyenangkan." />
                <div className="grid gap-6 md:grid-cols-3">
                    {TESTIMONIALS.map((t, i) => (
                        <motion.figure
                            key={t.name}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.35, delay: i * 0.05 }}
                            className="rounded-2xl border bg-background p-6 shadow-sm"
                        >
                            <div className="mb-4 flex items-center gap-3">
                                <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
                                <div>
                                    <div className="text-sm font-semibold">{t.name}</div>
                                    <div className="text-xs text-foreground/70">{t.role}</div>
                                </div>
                            </div>
                            <blockquote className="text-sm text-foreground/80">“{t.quote}”</blockquote>
                        </motion.figure>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Testimonials