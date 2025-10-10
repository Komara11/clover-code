import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "Clovercode - Pembuatan Website & Web App Profesional",
  description: "Clovercode membantu bisnis Anda dengan pembuatan website & web app modern. Solusi cepat, responsif, dan profesional untuk semua kebutuhan digital.",
  keywords: ["Clovercode", "clover code", "Clover Code", "Clover", "joki tugas", "joki skripsi", "pembuatan website", "web app", "jasa web", "website profesional"],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Clovercode - Jasa Pembuatan Website",
    description: "Solusi website profesional, cepat, dan responsif.",
    url: "https://clovercode.shop",
    siteName: "Clovercode",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Clovercode - Pembuatan Website Profesional",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var saved = localStorage.getItem('theme');
                  var prefers = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var dark = saved ? (saved === 'dark') : prefers;
                  document.documentElement.classList.toggle('dark', dark);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
