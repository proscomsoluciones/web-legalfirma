"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-center sm:text-left">
        <div>
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-white font-medium">Legal Firma</span>. Todos los derechos reservados.
          </p>
        </div>
        <div>
          <p>
            Sitio desarrollado por{" "}
            <a
              href="https://proscom.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-400 font-semibold transition-colors underline-offset-4 hover:underline"
            >
              Proscom.cl
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
