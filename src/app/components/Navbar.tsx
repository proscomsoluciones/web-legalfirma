"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const LINKS = [
  { name: "Inicio", href: "#hero" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Servicios", href: "#servicios" },
  { name: "Por qué elegirnos", href: "#porque-elegirnos" },
  { name: "Reseñas", href: "#resenas" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Bloquear scroll de fondo al abrir menú móvil
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  // ScrollSpy
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      LINKS.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section instanceof HTMLElement) {
          if (
            scrollPos >= section.offsetTop &&
            scrollPos < section.offsetTop + section.offsetHeight
          ) {
            setActiveSection(link.href.substring(1));
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Barra de Navegación */}
      <header className="fixed top-0 left-0 w-full z-40 bg-black/90 backdrop-blur-md transition-all duration-300 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20 md:h-24">
          {/* Logo */}
          <a
            href="#hero"
            className="flex-shrink-0 flex items-center transition-opacity hover:opacity-90"
            aria-label="Ir a inicio"
          >
            <Image
              src="/img/logo/legal_firma_logo.png"
              alt="Logo Legal Firma"
              width={60}
              height={80}
              priority
              className="w-auto h-14 sm:h-16 md:h-20 object-contain drop-shadow"
            />
          </a>

          {/* Desktop Menu */}
          <nav
            aria-label="Navegación principal"
            className="hidden md:flex items-center gap-5 lg:gap-8 text-white font-medium text-sm lg:text-base"
          >
            {LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`transition-colors duration-200 py-1 border-b-2 ${
                    isActive
                      ? "text-[#a2172b] border-[#a2172b]"
                      : "border-transparent text-gray-200 hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <a
              href="#contacto"
              className="bg-[#a2172b] hover:bg-[#851222] text-white px-5 py-2.5 rounded-lg font-semibold shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Contacto
            </a>
          </nav>

          {/* Botón menú hamburguesa (móvil) */}
          <button
            type="button"
            className="md:hidden text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú de navegación"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Menú móvil desplegable */}
      <div
        className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-xl md:hidden flex flex-col justify-between p-6 transition-all duration-300 ease-in-out ${
          menuOpen
            ? "opacity-100 pointer-events-auto translate-x-0"
            : "opacity-0 pointer-events-none translate-x-full"
        }`}
        aria-hidden={!menuOpen}
      >
        {/* Cabecera del menú móvil */}
        <div className="flex justify-between items-center pb-4 border-b border-white/10">
          <Image
            src="/img/logo/legal_firma_logo.png"
            alt="Logo Legal Firma"
            width={48}
            height={64}
            className="w-auto h-12 object-contain drop-shadow"
          />
          <button
            type="button"
            className="text-white p-2 rounded-lg hover:bg-white/10 focus:outline-none"
            onClick={() => setMenuOpen(false)}
            aria-label="Cerrar menú"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Links móviles */}
        <div className="flex flex-col items-center justify-center gap-5 my-auto overflow-y-auto py-6">
          {LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-xl font-medium transition-colors py-2 px-4 rounded-lg text-center ${
                  isActive
                    ? "text-[#a2172b] font-bold"
                    : "text-white hover:text-gray-300"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Botón CTA móvil */}
        <div className="w-full pt-4 border-t border-white/10 flex justify-center">
          <a
            href="#contacto"
            className="w-full max-w-sm bg-[#a2172b] hover:bg-[#851222] text-white py-3.5 rounded-xl font-semibold shadow-lg text-center text-lg transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Contacto Inmediato
          </a>
        </div>
      </div>
    </>
  );
}
