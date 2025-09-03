// app/layout.jsx
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "Clovercode",
  description: "Code that converts.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
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
