"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const LINKS = [
  { name: "Inicio", href: "#hero" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Servicios", href: "#servicios" },
  { name: "Simulador", href: "#simulador" },
  { name: "Por qué elegirnos", href: "#porque-elegirnos" },
  { name: "Reseñas", href: "#resenas" },
  { name: "Preguntas", href: "#faq" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

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

  // ScrollSpy y efecto de navbar scrolleada
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
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
      {/* Barra de Navegación con efecto dinámico al scrollear */}
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "bg-black/95 backdrop-blur-xl shadow-2xl py-2 border-b border-white/15"
            : "bg-black/80 backdrop-blur-md py-4 border-b border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 sm:h-20">
          {/* Logo interactivo */}
          <a
            href="#hero"
            className="flex-shrink-0 flex items-center transition-all duration-300 hover:scale-105 active:scale-95"
            aria-label="Ir a inicio"
          >
            <Image
              src="/img/logo/legal_firma_logo.png"
              alt="Logo Legal Firma"
              width={65}
              height={85}
              priority
              className="w-auto h-12 sm:h-16 md:h-18 object-contain drop-shadow-[0_4px_12px_rgba(255,255,255,0.15)] transition-transform duration-300"
            />
          </a>

          {/* Desktop Menu con microinteracciones */}
          <nav
            aria-label="Navegación principal"
            className="hidden md:flex items-center gap-5 lg:gap-7 text-white font-medium text-sm lg:text-base"
          >
            {LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative py-1.5 transition-colors duration-200 group text-sm lg:text-base ${
                    isActive
                      ? "text-[#e23b50] font-semibold"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.name}
                  {/* Micro barra animada inferior */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#a2172b] transition-all duration-300 rounded-full ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </a>
              );
            })}

            {/* Botón Contacto con brillo en hover */}
            <a
              href="#contacto"
              className="relative overflow-hidden group bg-gradient-to-r from-[#a2172b] to-[#c21f37] hover:from-[#b51930] hover:to-[#a2172b] text-white px-5 py-2.5 rounded-xl font-semibold shadow-lg shadow-red-950/40 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-red-800/50 active:translate-y-0"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <span>Contacto</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
              <span className="absolute top-0 -left-full w-full h-full bg-white/20 skew-x-12 group-hover:left-full transition-all duration-700 ease-in-out pointer-events-none" />
            </a>
          </nav>

          {/* Botón menú hamburguesa con microinteracción */}
          <button
            type="button"
            className="md:hidden text-white p-2.5 rounded-xl bg-white/5 hover:bg-white/10 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-red-500"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú de navegación"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
                className="h-6 w-6"
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

      {/* Menú móvil desplegable con backdrop blur y transiciones suaves */}
      <div
        className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl md:hidden flex flex-col justify-between p-6 transition-all duration-300 ease-in-out ${
          menuOpen
            ? "opacity-100 pointer-events-auto translate-x-0"
            : "opacity-0 pointer-events-none translate-x-full"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="flex justify-between items-center pb-4 border-b border-white/10">
          <Image
            src="/img/logo/legal_firma_logo.png"
            alt="Logo Legal Firma"
            width={55}
            height={75}
            className="w-auto h-12 object-contain"
          />
          <button
            type="button"
            className="text-white p-2.5 rounded-xl bg-white/10 active:scale-95 transition-all focus:outline-none"
            onClick={() => setMenuOpen(false)}
            aria-label="Cerrar menú"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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

        {/* Links móviles con animaciones táctiles */}
        <div className="flex flex-col items-center justify-center gap-4 my-auto overflow-y-auto py-6">
          {LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-lg font-medium transition-all py-2.5 px-6 rounded-xl text-center w-full max-w-xs ${
                  isActive
                    ? "bg-[#a2172b]/20 text-[#e23b50] font-bold border border-[#a2172b]/30"
                    : "text-white hover:bg-white/10 active:scale-98"
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
            className="w-full max-w-sm bg-gradient-to-r from-[#a2172b] to-[#c21f37] text-white py-3.5 rounded-xl font-semibold shadow-lg text-center text-lg active:scale-98 transition-transform"
            onClick={() => setMenuOpen(false)}
          >
            Contacto Inmediato →
          </a>
        </div>
      </div>
    </>
  );
}
