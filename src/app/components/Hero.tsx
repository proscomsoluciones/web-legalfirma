"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[90vh] md:min-h-screen flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:py-32 overflow-hidden scroll-mt-24"
    >
      {/* Imagen de fondo optimizada con overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/hero-background.png"
          alt="Servicios de transferencia de vehículos y firma electrónica en Chile"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-black/85"></div>
      </div>

      {/* Contenido centrado y adaptable */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-5 sm:gap-6 text-white max-w-4xl mx-auto">
        <span className="inline-block py-1 px-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase bg-white/10 backdrop-blur-md border border-white/20 text-gray-200 animate-fadeUp">
          Rancagua • Rengo • Región de O&apos;Higgins
        </span>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight animate-fadeUp">
          Transferencia de Vehículos en{" "}
          <span className="text-[#e23b50]">Rancagua y Rengo</span>
        </h1>

        <p className="text-base sm:text-xl md:text-2xl text-gray-200 max-w-3xl font-light leading-relaxed animate-fadeUp delay-150">
          Soluciones ágiles para compraventa y trámites de vehículos en la Región
          de O&apos;Higgins: transferencia rápida de autos con firma electrónica
          avanzada y total respaldo legal.
        </p>

        <div className="mt-2 flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center animate-fadeUp delay-300">
          <a
            href="#contacto"
            className="w-full sm:w-auto text-center rounded-xl bg-[#a2172b] hover:bg-[#851222] px-7 py-3.5 font-semibold text-base sm:text-lg transition-all shadow-xl transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Contáctanos ahora
          </a>
          <a
            href="#servicios"
            className="w-full sm:w-auto text-center rounded-xl bg-white/15 hover:bg-white/25 border border-white/30 backdrop-blur-md px-7 py-3.5 font-semibold text-base sm:text-lg text-white transition-all"
          >
            Ver servicios
          </a>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-gray-300 animate-fadeUp delay-450">
          ✓ Sin filas innecesarias &nbsp;•&nbsp; ✓ Validez legal garantizada &nbsp;•&nbsp; ✓ Asesoría personalizada
        </p>
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(16px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeUp {
          animation: fadeUp 0.7s ease-out forwards;
        }
        .delay-150 {
          animation-delay: 0.15s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-450 {
          animation-delay: 0.45s;
        }
      `}</style>
    </section>
  );
}
