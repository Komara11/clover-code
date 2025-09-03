import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Filter, ExternalLink, Github } from "lucide-react";

/**
 * Pilihan rasio yang diizinkan Tailwind JIT (agar class aspect-* bisa di-tree-shake dengan aman).
 * Tambah di sini jika butuh rasio baru.
 */
const RATIO_CLASS = {
    "16/10": "aspect-[16/10]",
    "4/3": "aspect-[4/3]",
    "1/1": "aspect-square",
    "9/16": "aspect-[9/16]",
};

const getRatioClass = (ratio) => RATIO_CLASS[ratio] || "aspect-[16/10]";

/**
 * Data proyek: tambahkan properti 'ratio' dan 'fit'
 * - ratio: "16/10" | "4/3" | "1/1" | "9/16"
 * - fit: "cover" (cropping halus) | "contain" (tanpa cropping, diberi padding + bg)
 */
const PROJECTS = [
    {
        id: "p1",
        title: "Landing Page Wisata River Tubing",
        year: 2025,
        tags: ["Website", "Landing Page"],
        tech: ["Next.js", "Tailwind", "Node.js"],
        desc: "Landing Page dengan tampilan modern dan performa tinggi.",
        cover: "./image/gambar1.png",
        links: {
            live: "https://river-tubing-cikadongdong.vercel.app/",
            repo: "#",
        },
        ratio: "16/10",
        fit: "cover",
    },
    {
        id: "p2",
        title: "Admin Page",
        year: 2024,
        tags: ["Web App", "Dashboard"],
        tech: ["Next.js", "Tailwindcss", "Firebase", "Vercel"],
        desc: "Admin page pengelola wisata yang ada di desa Payung",
        cover: "./image/gambar2.png",
        links: { live: "#", repo: "#", case: "#" },
        ratio: "16/10",
        fit: "cover",
    },
    {
        id: "p3",
        title: "Aplikasi Sipayung",
        year: 2024,
        tags: ["Aplikasi", "Android"],
        tech: ["React Native", "Firebase"],
        desc:
            "Sipayung aplikasi e-tiketing untuk parawisata yang ada di desa Payung Kabupaten Majalengka.",
        cover:
            "./image/gambar3.jpeg",
        links: { live: "#", repo: "#", case: "#" },
        ratio: "16/10", // portrait
        fit: "contain", // jangan dipotong
    },
    {
        id: "p4",
        title: "Prototype Aplikasi Baleni",
        year: 2023,
        tags: ["Prototype"],
        tech: ["Figma"],
        desc: "Tampilan UI Aplikasi yang menarik.",
        cover: "./image/gambar4.jpeg",
        links: {
            live:
                "https://www.figma.com/proto/wfQnGEjf3BNRczRQd3kKSi/Untitled?node-id=1-12&t=w4ZQjQLst0ETJxVH-1&starting-point-node-id=1%3A12&scaling=contain&content-scaling=fixed",
        },
        ratio: "9/16",
        fit: "cover",
    },
];

const Projects = () => {
    const [filter, setFilter] = useState("Semua");
    const tags = useMemo(
        () => ["Semua", ...Array.from(new Set(PROJECTS.flatMap((p) => p.tags)))],
        []
    );
    const filtered = useMemo(() => {
        if (filter === "Semua") return PROJECTS;
        return PROJECTS.filter((p) => p.tags.includes(filter));
    }, [filter]);

    const Container = ({ children, className = "" }) => (
        <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
            {children}
        </div>
    );

    const SectionTitle = ({ title, subtitle }) => (
        <div className="mb-10 flex flex-col gap-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                {title}
            </h2>
            {subtitle && (
                <p className="text-muted-foreground/80 text-base md:text-lg">
                    {subtitle}
                </p>
            )}
        </div>
    );

    const BadgePill = ({ children, className = "" }) => (
        <span
            className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${className}`}
        >
            {children}
        </span>
    );

    return (
        <section id="projects" className="scroll-mt-24 pt-20">
            <Container>
                <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:gap-6">
                    <SectionTitle
                        title="Portofolio Terpilih"
                        subtitle="Beberapa karya terbaru yang relevan untuk bisnis."
                    />
                    <div className="flex items-center gap-2">
                        <Filter className="h-4 w-4 text-foreground/60" />
                        <div className="flex flex-wrap gap-2">
                            {tags.map((t) => (
                                <button
                                    key={t}
                                    onClick={() => setFilter(t)}
                                    className={`rounded-full border px-3 py-1 text-xs font-medium transition ${filter === t
                                            ? "bg-primary text-primary-foreground"
                                            : "hover:bg-accent"
                                        }`}
                                >
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filtered.map((p, i) => (
                        <motion.article
                            key={p.id}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.4, delay: i * 0.03 }}
                            className="group overflow-hidden rounded-2xl border bg-background shadow-sm"
                        >
                            {/* Gambar dengan rasio & fit per-item */}
                            <div className={`relative overflow-hidden ${getRatioClass(p.ratio)}`}>
                                <img
                                    src={p.cover}
                                    alt={p.title}
                                    loading="lazy"
                                    decoding="async"
                                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                    className={[
                                        "h-full w-full transition duration-300",
                                        p.fit === "contain"
                                            ? "object-contain p-3 bg-muted"
                                            : "object-cover group-hover:scale-105",
                                    ].join(" ")}
                                />
                                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            </div>

                            {/* Konten kartu */}
                            <div className="p-5">
                                <div className="flex items-center gap-2 text-xs text-foreground/60">
                                    <span className="rounded-md border px-2 py-0.5">{p.year}</span>
                                    <span>•</span>
                                    <span>{p.tags.join(" · ")}</span>
                                </div>
                                <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
                                <p className="mt-1 text-sm text-foreground/80 line-clamp-2">
                                    {p.desc}
                                </p>
                                <div className="mt-3 flex flex-wrap gap-2 text-xs text-foreground/70">
                                    {p.tech.map((t) => (
                                        <BadgePill key={t}>{t}</BadgePill>
                                    ))}
                                </div>
                                <div className="mt-4 flex flex-wrap items-center gap-2">
                                    {p.links?.live && (
                                        <a
                                            href={p.links.live}
                                            className="inline-flex items-center gap-1 rounded-xl border px-3 py-2 text-xs font-medium hover:bg-accent"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Live <ExternalLink className="h-3.5 w-3.5" />
                                        </a>
                                    )}
                                    {p.links?.repo && (
                                        <a
                                            href={p.links.repo}
                                            className="inline-flex items-center gap-1 rounded-xl border px-3 py-2 text-xs font-medium hover:bg-accent"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Repo <Github className="h-3.5 w-3.5" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Projects;
