"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center text-center px-4 sm:px-6 md:px-12 pt-24 pb-16 md:py-32 overflow-hidden scroll-mt-24"
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/hero-background.png"
          alt="Fondo del área principal de Legal Firma mostrando servicios de firma electrónica y trámites de vehículos"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/65"></div>
        {/* Textura sutil moderna en Hero */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
      </div>

      {/* Contenido original */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-6 text-white max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-6xl font-bold animate-fadeUp">
          Bienvenido a Legal Firma
        </h1>

        <p className="text-lg sm:text-2xl text-gray-100 animate-fadeUp delay-150">
          Soluciones innovadoras para tu negocio: firma electrónica avanzada y
          gestión de trámites de vehículos.
        </p>

        <a
          href="#contacto"
          className="mt-4 rounded-full bg-[#a2172b] hover:bg-red-800 px-8 py-3.5 font-semibold transition-all shadow-lg transform hover:-translate-y-1 hover:scale-105 active:scale-100 animate-fadeUp delay-300 text-base sm:text-lg"
        >
          Contáctanos para más información
        </a>

        <p className="mt-4 text-sm sm:text-base text-gray-200 animate-fadeUp delay-450">
          Optimiza tus contratos y trámites legales con nuestra firma
          electrónica avanzada.
        </p>
      </div>

      {/* Animación */}
      <style jsx>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeUp {
          animation: fadeUp 0.8s ease forwards;
        }
        .animate-fadeUp.delay-150 {
          animation-delay: 0.15s;
        }
        .animate-fadeUp.delay-300 {
          animation-delay: 0.3s;
        }
        .animate-fadeUp.delay-450 {
          animation-delay: 0.45s;
        }
      `}</style>
    </section>
  );
}
