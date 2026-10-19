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
  title: "Transferencia de Vehículos en Rancagua y Rengo | Legal Firma",
  description:
    "Transferencia de vehículos rápida en Rancagua, Rengo y toda la Región de O'Higgins. Compraventa de autos, cambio de dueño y trámites vehiculares 100% seguros con firma digital.",
  keywords: [
    "transferencia de vehículos en Rancagua",
    "transferencia de autos en Rengo",
    "compraventa de vehículos Región de O'Higgins",
    "transferencia de autos Rancagua Rengo",
    "trámites de vehículos O'Higgins",
    "transferencia rápida de autos Rancagua",
    "transferencia de vehículos",
    "cambio de dueño de auto",
    "traspaso de autos",
    "trámites de vehículos",
    "compra y venta de autos",
    "transferencia de automóviles",
  ],
  openGraph: {
    title: "Transferencia de Vehículos en Rancagua y Rengo | Legal Firma O'Higgins",
    description:
      "Servicios profesionales de transferencia de vehículos, autos y compraventa en Rancagua, Rengo y Región de O'Higgins. Trámites rápidos y con respaldo legal.",
    type: "website",
    url: "https://www.legalfirma.com",
    siteName: "Legal Firma",
    locale: "es_CL",
  },
  alternates: {
    canonical: "https://www.legalfirma.com",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Legal Firma",
    "description":
      "Servicios profesionales de transferencia de vehículos en Rancagua, Rengo y toda la Región de O'Higgins.",
    "areaServed": [
      {
        "@type": "City",
        "name": "Rancagua",
      },
      {
        "@type": "City",
        "name": "Rengo",
      },
      {
        "@type": "AdministrativeArea",
        "name": "Región del Libertador General Bernardo O'Higgins",
      },
    ],
    "serviceType": [
      "Transferencia de vehículos en Rancagua",
      "Transferencia de autos en Rengo",
      "Compraventa de vehículos Región de O'Higgins",
      "Trámites de vehículos O'Higgins",
    ],
    "telephone": "+56984369223",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Malloa",
      "addressRegion": "Región de O'Higgins",
      "addressCountry": "CL",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
    </>
  );
}
