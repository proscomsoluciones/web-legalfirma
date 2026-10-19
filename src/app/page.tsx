import type { Metadata } from "next";
import Hero from "./components/Hero";
import Nosotros from "./components/Nosotros";
import Servicios from "./components/Servicios";
import PorQueElegirnos from "./components/PorQueElegirnos";
import Reseñas from "./components/Resenas";
import PreguntasFrecuentes from "./components/Faq";
import ContactoFooter from "./components/ContactoFooter";
import Simulador from "./components/Simulador";

export const metadata: Metadata = {
  title: "Legal Firma | Transferencia de Vehículos y Cambio de Dueño Rápido",
  description:
    "Ofrecemos servicios profesionales de transferencia de vehículos, cambio de dueño y traspaso de autos en Chile. Rápido, seguro y confiable con firma electrónica avanzada.",
  keywords: [
    "transferencia de vehículos",
    "cambio de dueño de auto",
    "traspaso de autos",
    "trámites de vehículos",
    "transferencia de automóviles",
    "compra venta de vehículos",
    "transferencias online",
    "compra y venta de autos",
    "traspaso de autos usados chile",
    "gestoría para transferencia de automóviles",
  ],
  openGraph: {
    title: "Transferencia de Vehículos | Traspaso y Cambio de Dueño Rápido y Seguro",
    description:
      "Servicios profesionales de transferencia de vehículos y traspaso de autos. Simplifica tus trámites con atención rápida y segura.",
    type: "website",
    url: "https://www.legalfirma.com",
    siteName: "Legal Firma",
  },
};

export default function Home() {
  return (
    <main id="main-content" className="w-full overflow-x-hidden">
      <Hero />
      <Nosotros />
      <Servicios />
      <Simulador />
      <PorQueElegirnos />
      <Reseñas />
      <PreguntasFrecuentes />
      <ContactoFooter />
    </main>
  );
}
