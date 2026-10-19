import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "Legal Firma | Transferencia de Vehículos y Trámites Ágiles",
  description:
    "Servicios profesionales de transferencia de vehículos, contratos digitales y firma electrónica avanzada en Chile.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-white text-gray-900 selection:bg-[#a2172b] selection:text-white`}
      >
        {/* Navbar fijo */}
        <Navbar />

        {/* Contenido principal */}
        <div className="flex-1 w-full">{children}</div>

        {/* Footer global */}
        <Footer />
      </body>
    </html>
  );
}
