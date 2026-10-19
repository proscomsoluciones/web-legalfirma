"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function FloatingWhatsApp() {
  const [tooltipOpen, setTooltipOpen] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 pointer-events-auto">
      {/* Tooltip moderno de bienvenida */}
      <AnimatePresence>
        {tooltipOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative bg-white text-gray-800 text-xs sm:text-sm font-medium py-2.5 px-4 rounded-2xl shadow-2xl border border-gray-100 flex items-center gap-3 max-w-[250px] mb-1"
          >
            <span>👋 ¿Necesitas ayuda con tu transferencia vehicular?</span>
            <button
              onClick={() => setTooltipOpen(false)}
              className="text-gray-400 hover:text-gray-600 p-0.5 cursor-pointer"
              aria-label="Cerrar aviso"
            >
              <XMarkIcon className="w-3.5 h-3.5" />
            </button>
            {/* Flechita inferior del tooltip */}
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white rotate-45 border-r border-b border-gray-100" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón flotante de WhatsApp con onda de pulso */}
      <div className="relative flex items-center justify-center">
        {/* Onda expansiva de animación */}
        <span className="absolute w-full h-full rounded-full bg-green-500 opacity-60 animate-ping pointer-events-none" />

        <motion.a
          href="https://wa.me/56984369223?text=Hola!%20Quisiera%20hacer%20una%20consulta%20sobre%20una%20transferencia%20de%20veh%C3%ADculo."
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          className="relative w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-600/40 cursor-pointer transition-colors duration-300"
          aria-label="Contactar por WhatsApp a Legal Firma"
          title="Chatea con un asesor legal por WhatsApp"
        >
          <FaWhatsapp className="w-8 h-8 sm:w-9 sm:h-9" />
        </motion.a>
      </div>
    </div>
  );
}
