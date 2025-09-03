import { ArrowUpRight, MapPin, Mail, Github, Phone, Linkedin,Instagram, Facebook, } from "lucide-react";

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

const Contact = () => {

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
        <section id="contact" className="scroll-mt-24 pt-20 pb-24">
            <Container>
                <div className="grid gap-8 md:grid-cols-2">
                    <div>
                        <SectionTitle title="Diskusikan Proyek Anda" subtitle="Ceritakan kebutuhan Anda, kami bantu estimasi waktu & biaya." />
                        <div className="grid gap-3 text-sm">
                            <a href={`mailto:${BUSINESS_INFO.email}`} className="inline-flex items-center gap-2"><Mail className="h-4 w-4" /> {BUSINESS_INFO.email}</a>
                            <a href={`tel:${BUSINESS_INFO.phone}`} className="inline-flex items-center gap-2"><Phone className="h-4 w-4" /> {BUSINESS_INFO.phone}</a>
                            <div className="mt-2 flex items-center gap-2 text-sm">
                                <a href={BUSINESS_INFO.social.github} className="rounded-xl border p-2 hover:bg-accent" aria-label="GitHub"><Github className="h-4 w-4" /></a>
                                <a href={BUSINESS_INFO.social.linkedin} className="rounded-xl border p-2 hover:bg-accent" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
                                <a href={BUSINESS_INFO.social.instagram} className="rounded-xl border p-2 hover:bg-accent" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
                                <a href={BUSINESS_INFO.social.facebook} className="rounded-xl border p-2 hover:bg-accent" aria-label="Facebook"><Facebook className="h-4 w-4" /></a>
                            </div>
                        </div>
                    </div>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            alert("Terima kasih! Pesan Anda terkirim (demo).");
                        }}
                        className="rounded-2xl border bg-background p-6 shadow-sm"
                    >
                        <div className="grid gap-4">
                            <div>
                                <label className="text-sm font-medium">Nama</label>
                                <input required className="mt-1 w-full rounded-xl border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary" placeholder="Nama lengkap" />
                            </div>
                            <div>
                                <label className="text-sm font-medium">Email</label>
                                <input type="email" required className="mt-1 w-full rounded-xl border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary" placeholder="email@bisnis.com" />
                            </div>
                            <div>
                                <label className="text-sm font-medium">Perusahaan (opsional)</label>
                                <input className="mt-1 w-full rounded-xl border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary" placeholder="Nama perusahaan" />
                            </div>
                            <div>
                                <label className="text-sm font-medium">Pesan</label>
                                <textarea rows={5} required className="mt-1 w-full rounded-xl border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-primary" placeholder="Ceritakan kebutuhan Anda..." />
                            </div>
                            <button className="inline-flex items-center justify-center gap-2 rounded-xl border bg-primary/90 px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary">
                                Kirim Pesan <ArrowUpRight className="h-4 w-4" />
                            </button>
                        </div>
                    </form>
                </div>
            </Container>
        </section>
    );
};

export default Contact