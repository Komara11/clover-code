
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

const Footer = () => {

    const Container = ({
        children,
        className = "",
    }) => (
        <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
    );


    return (
        <footer className="pb-10">
            <Container>
                <div className="rounded-2xl border bg-background p-6">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div className="flex items-center gap-2">
                            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-lime-500 text-white font-bold">CC</div>
                            <div>
                                <div className="text-sm font-semibold">{BUSINESS_INFO.brand}</div>
                                <div className="text-xs text-foreground/70">© {new Date().getFullYear()} All rights reserved.</div>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-xs">
                            <a href="#services" className="rounded-lg border px-3 py-1 hover:bg-accent">Layanan</a>
                            <a href="#projects" className="rounded-lg border px-3 py-1 hover:bg-accent">Proyek</a>
                            <a href="#about" className="rounded-lg border px-3 py-1 hover:bg-accent">Tentang</a>
                            <a href="#contact" className="rounded-lg border px-3 py-1 hover:bg-accent">Kontak</a>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
};
export default Footer