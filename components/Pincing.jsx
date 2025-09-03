import { ArrowUpRight } from "lucide-react";

const PRICING = [
    {
        name: "Starter",
        price: "Menyesuaikan",
        desc: "Landing page profesional untuk validasi cepat.",
        features: ["1 Halaman", "Responsive & SEO Dasar", "Deploy ke Vercel"],
    },
    {
        name: "Growth",
        price: "Menyesuaikan",
        desc: "Website multi-halaman + blog/portofolio.",
        features: ["3–8 Halaman", "responsive", "UI modern"],
    },
    {
        name: "Scale",
        price: "Menyesuaikan",
        desc: "Web app/dashboard & integrasi khusus kebutuhan bisnis.",
        features: ["Auth & RBAC", "Komponen Kustom", "Integrasi API"],
    },
    {
        name: "Mahasiswa",
        price: "Menyesuaikan",
        desc: "Layanan khusus mahasiswa untuk membantu berbagai kebutuhan akademik maupun praktis di bidang teknologi dan penulisan dengan harga terjangkau.",
        features: [
            "Bantuan penulisan Jurnal & Artikel Ilmiah",
            "Pendampingan Skripsi (all jurusan)",
            "Tugas kuliah lainnya",
            "Proyek IT: Landing Page, Website, Aplikasi sederhana",
            "Harga Terjangkau"
        ],
        highlight: true,
    }

];

const Pricing = () => {

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
        <section id="pricing" className="scroll-mt-24 pt-20">
            <Container>
                <SectionTitle title="Paket Harga" subtitle="Sesuaikan dengan kebutuhan dan tahap bisnis Anda." />
                <div className="grid gap-6 md:grid-cols-3">
                    {PRICING.map((p) => (
                        <div
                            key={p.name}
                            className={`relative rounded-2xl border bg-background p-6 shadow-sm ${p.highlight ? "ring-2 ring-primary" : ""}`}
                        >
                            {p.highlight && (
                                <span className="absolute -top-3 right-4 rounded-full border bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                                    Rekomendasi
                                </span>
                            )}
                            <h3 className="text-lg font-semibold">{p.name}</h3>
                            <div className="mt-1 text-3xl font-extrabold">{p.price}</div>
                            <p className="mt-1 text-sm text-foreground/80">{p.desc}</p>
                            <ul className="mt-4 space-y-2 text-sm">
                                {p.features.map((f) => (
                                    <li key={f} className="flex items-center gap-2">
                                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" /> {f}
                                    </li>
                                ))}
                            </ul>
                            <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border bg-primary/90 px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary">
                                Konsultasi <ArrowUpRight className="h-4 w-4" />
                            </a>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Pricing