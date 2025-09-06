import { motion } from "framer-motion";
import { Sparkles, Brush, Code2, Rocket } from "lucide-react";


const PROCESS = [
  {
    title: "Discovery",
    desc: "Riset kebutuhan, target audiens, dan tujuan bisnis.",
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    title: "Desain",
    desc: "Wireframe → UI high fidelity, iterasi cepat.",
    icon: <Brush className="w-5 h-5" />,
  },
  { title: "Build", desc: "Development modular & terukur.", icon: <Code2 className="w-5 h-5" /> },
  { title: "Launch", desc: "Testing, SEO, deploy & monitoring.", icon: <Rocket className="w-5 h-5" /> },
];

const About = () => {

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

    const BadgePill = ({
        children,
        className = "",
    }) => (
        <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${className}`}>{children}</span>
    );

    return (
        <section id="about" className="scroll-mt-24 pt-20">
            <Container>
                <div className="grid gap-8 md:grid-cols-2">
                    <div>
                        <SectionTitle title="Tentang Kami" subtitle="Tim kecil yang bergerak cepat, fokus pada hasil nyata dan pengalaman pengguna." />
                        <div className="prose dark:prose-invert max-w-none">
                            <p className="text-justify" >
                                Kami membantu UMKM, startup, dan divisi korporat membangun produk digital yang efektif—tanpa ribet. Pendekatan kami sederhana: pahami tujuan bisnis, rancang solusi yang mudah dipakai, lalu jalankan iterasi cepat berdasarkan data.
                            </p>
                            <ul>
                                <li>Berpengalaman di Next.js, React, dan ekosistem modern.</li>
                                <li>Kolaborasi transparan dengan milestone jelas.</li>
                                <li>Fokus ke performa, aksesibilitas, dan skalabilitas.</li>
                            </ul>
                        </div>
                        <div className="mt-6 flex flex-wrap gap-2 text-xs text-foreground/70">
                            <BadgePill className="bg-emerald-500/10">UI Menarik</BadgePill>
                            <BadgePill className="bg-emerald-500/10">Jam Support Fleksibel</BadgePill>
                            <BadgePill className="bg-violet-500/10">Dokumentasi Rapi</BadgePill>
                        </div>
                    </div>
                    <div>
                        <div className="mb-6">
                            <SectionTitle title="Proses Kerja" subtitle="Kerapihan proses = hasil yang lebih konsisten." />
                        </div>
                        <ol className="space-y-3">
                            {PROCESS.map((step, i) => (
                                <motion.li
                                    key={step.title}
                                    initial={{ opacity: 0, x: -8 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.35, delay: i * 0.05 }}
                                    className="flex items-start gap-3 rounded-2xl border bg-background p-4"
                                >
                                    <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl border bg-background/70">
                                        {step.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">{i + 1}. {step.title}</h4>
                                        <p className="text-sm text-foreground/80">{step.desc}</p>
                                    </div>
                                </motion.li>
                            ))}
                        </ol>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default About