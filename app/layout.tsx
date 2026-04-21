import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ScrollRevealRoot } from "@/components/ui/scroll-reveal";
import { CookieBanner } from "@/components/ui/cookie-banner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-handwriting",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mieterlotse — Ihr Unternehmen läuft, auch wenn Sie nicht im Büro sind.",
  description:
    "Mieterlotse beantwortet 70 % Ihrer Mieteranfragen automatisch — auf Ihrer bestehenden Telefonnummer und Ihrer bestehenden E-Mail-Adresse. Keine neue Software, keine Schulungen.",
  metadataBase: new URL("https://mieterlotse.de"),
  openGraph: {
    type: "website",
    locale: "de_DE",
    title: "Mieterlotse — Betriebssteuerung für Hausverwaltungen",
    description:
      "70 % Ihrer Mieteranfragen automatisch beantwortet. Kein neues System.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${inter.variable} ${caveat.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <ScrollRevealRoot />
        <CookieBanner />
      </body>
    </html>
  );
}
