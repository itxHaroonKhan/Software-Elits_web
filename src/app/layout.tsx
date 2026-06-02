import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Charle | Shopify Agency London | Ecommerce Web Designers",
  description:
    "Leading Shopify Partner & Ecommerce Web Design Agency creating visually engaging ecommerce websites built with cutting-edge technology. We help brands sell more online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-full bg-black text-white antialiased">
        <SmoothScroll />
        {children}

        {/* Floating CTA */}
        <Link href="#contact" className="floating-cta" aria-label="Get in touch">
          <div className="floating-cta__circle" />
          <div className="floating-cta__text">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <path id="circlePath" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
              </defs>
              <text>
                <textPath href="#circlePath" startOffset="0%">GET IN TOUCH • GET IN TOUCH • </textPath>
              </text>
            </svg>
          </div>
          <div className="floating-cta__arrow">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 16L16 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M7 4H16V13" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </Link>
      </body>
    </html>
  );
}
