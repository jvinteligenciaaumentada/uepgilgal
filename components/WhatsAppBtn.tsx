import React from 'react';

export const WhatsAppBtn: React.FC = () => {
  return (
    <a 
      href="https://wa.me/584241376644" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-[2000] flex items-center gap-3 group"
      aria-label="Contactar por WhatsApp al +58 424-1376644"
    >
      <span className="bg-white text-black px-3 py-1 rounded-lg font-bold text-xs shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block">
        Contáctanos
      </span>
      <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.3)] hover:scale-110 hover:shadow-[0_0_15px_#25D366] transition-all duration-300 animate-pulse">
        <i className="fab fa-whatsapp text-3xl text-white" aria-hidden="true"></i>
      </div>
    </a>
  );
};