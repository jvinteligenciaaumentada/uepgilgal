import React from 'react';

interface BottomBarProps {
  visible: boolean;
  onPreRegister: () => void;
}

export const BottomBar: React.FC<BottomBarProps> = ({ visible, onPreRegister }) => {
  if (!visible) return null;

  return (
    <footer className="fixed bottom-0 left-0 w-full z-[100] bg-black/60 backdrop-blur-md border-t border-white/10 py-3 px-4 md:px-8 transition-transform duration-500 flex flex-col md:flex-row items-center justify-between gap-4 animate-[slideUp_0.5s_ease-out]">
      
      {/* Left Group: Contact & Socials */}
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
        
        {/* Contact Info */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-[10px] md:text-xs text-gray-300 font-orbitron">
          <a 
            href="https://maps.google.com/?q=Calle+la+Florida+32,Cua+1211,Miranda,Venezuela" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#9ACD32] transition-colors p-1"
            aria-label="Ver ubicación en Google Maps: Cúa, Miranda"
          >
            <i className="fas fa-map-marker-alt text-[#9ACD32]" aria-hidden="true"></i>
            <span>Cúa, Miranda</span>
          </a>
          
          <a 
            href="tel:+584241376644" 
            className="flex items-center gap-2 hover:text-[#9ACD32] transition-colors p-1"
            aria-label="Llamar al +58 424-1376644"
          >
            <i className="fas fa-phone text-[#9ACD32]" aria-hidden="true"></i>
            <span>+58 424-1376644</span>
          </a>
          
          <div className="hidden lg:flex items-center gap-2 cursor-default p-1" aria-label="Horario de atención">
            <i className="fas fa-clock text-[#9ACD32]" aria-hidden="true"></i>
            <span>Lun-Jue 6:30am-4:00pm | Vie 6:30am-12m</span>
          </div>
        </div>

        {/* Vertical Divider (Desktop) */}
        <div className="hidden md:block w-px h-6 bg-white/20"></div>

        {/* Social Media Icons */}
        <div className="flex gap-4">
          <a 
            href="https://instagram.com/uepgilgal" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#E1306C] transition-colors transform hover:scale-110"
            aria-label="Síguenos en Instagram @uepgilgal"
          >
            <i className="fab fa-instagram text-lg" aria-hidden="true"></i>
          </a>
          <a 
            href="https://facebook.com/uepgilgal" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#1877F2] transition-colors transform hover:scale-110"
            aria-label="Síguenos en Facebook"
          >
            <i className="fab fa-facebook text-lg" aria-hidden="true"></i>
          </a>
          <a 
            href="https://www.youtube.com/@UEPGilgalCua" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#FF0000] transition-colors transform hover:scale-110"
            aria-label="Visita nuestro canal de YouTube"
          >
            <i className="fab fa-youtube text-lg" aria-hidden="true"></i>
          </a>
        </div>
      </div>

      {/* CTA Button */}
      <button 
        onClick={onPreRegister}
        className="bg-[#9ACD32] hover:bg-[#76ff03] text-black font-bold text-xs md:text-sm px-6 py-2 rounded-full shadow-[0_0_10px_rgba(154,205,50,0.3)] hover:shadow-[0_0_20px_rgba(154,205,50,0.6)] transition-all duration-300 transform hover:scale-105 flex items-center gap-2 focus:ring-2 focus:ring-white shrink-0"
        aria-label="Iniciar proceso de pre-inscripción"
      >
        <i className="fas fa-user-plus" aria-hidden="true"></i>
        PRE-INSCRÍBETE
      </button>
    </footer>
  );
};