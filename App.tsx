import React, { useState, useEffect } from 'react';
import { NeuralCanvas } from './components/NeuralCanvas';
import { CustomCursor } from './components/CustomCursor';
import { BiosLoader } from './components/BiosLoader';
import { Satellite } from './components/Satellite';
import { HoloModal } from './components/HoloModal';
import { WhatsAppBtn } from './components/WhatsAppBtn';
import { BottomBar } from './components/BottomBar';
import { NODES } from './constants';
import { NodeData } from './types';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [visitedNodes, setVisitedNodes] = useState<Set<string>>(new Set());
  const [activeNode, setActiveNode] = useState<NodeData | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [zenMode, setZenMode] = useState(false);

  // Handle resizing for layout logic
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Onboarding Sequence
  useEffect(() => {
    if (!loading) {
      setShowOnboarding(true);
      const timer = setTimeout(() => {
        setShowOnboarding(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  // Progress percentage
  const progress = Math.round((visitedNodes.size / NODES.length) * 100);

  const handleNodeClick = (node: NodeData) => {
    setVisitedNodes(prev => new Set(prev).add(node.id));
    setActiveNode(node);
  };

  const handlePreRegister = () => {
    const admisionNode = NODES.find(n => n.id === 'insc');
    if (admisionNode) {
      handleNodeClick(admisionNode);
    }
  };

  // Calculate orbit parameters dynamically
  const orbitRadius = isMobile ? 135 : 260;
  const containerSize = isMobile ? 'w-[300px] h-[300px]' : 'w-[600px] h-[600px]';

  return (
    <main className={`relative w-full h-screen overflow-hidden bg-black text-white font-body ${zenMode ? 'grayscale' : ''}`}>
      
      {/* Accessibility Skip Link */}
      <a 
        href="#main-hub" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[9999] bg-[#9ACD32] text-black px-4 py-2 font-bold rounded"
      >
        Saltar al contenido principal
      </a>

      {/* 1. Setup */}
      <BiosLoader onComplete={() => setLoading(false)} />
      <CustomCursor />
      <NeuralCanvas />
      <WhatsAppBtn />

      {/* 2. Main HUD Layer */}
      {!loading && (
        <div className="relative z-10 w-full h-full flex justify-center items-center" id="main-hub">
          
          {/* Onboarding Overlay */}
          <div 
            className={`absolute inset-0 flex flex-col items-center justify-center z-[200] pointer-events-none transition-opacity duration-1000 ${showOnboarding ? 'opacity-100' : 'opacity-0'}`}
            aria-hidden="true"
          >
            <div className="bg-black/80 p-6 rounded-xl border border-[#9ACD32]/30 backdrop-blur text-center mx-4">
              <h2 className="font-orbitron text-[#9ACD32] text-xl md:text-2xl font-bold mb-2 animate-pulse">UEP GILGAL POTENCIANDO GENIOS</h2>
              <p className="font-body text-white text-sm tracking-wider">HAZ CLIC EN CUALQUIER INTELIGENCIA</p>
            </div>
          </div>

          {/* Top Controls */}
          <div className="absolute top-5 right-5 flex gap-3 z-50">
             <button 
               onClick={() => setZenMode(!zenMode)}
               className="w-10 h-10 rounded-full border border-white/20 bg-black/50 backdrop-blur-md flex items-center justify-center hover:bg-[#9ACD32] hover:text-black transition-colors interactive"
               title="Modo Lectura (Zen)"
               aria-label={zenMode ? "Desactivar modo lectura" : "Activar modo lectura"}
             >
               <i className="fas fa-universal-access" aria-hidden="true"></i>
             </button>
          </div>

          {/* Progress Indicator - Moved UP to avoid collision with WhatsApp Button */}
          <div className="absolute bottom-24 md:bottom-28 right-5 font-orbitron text-xs text-[#9ACD32] z-50 select-none hidden md:block text-right">
            SINAPSIS: <span className="font-bold">{progress}%</span>
          </div>

          {/* CORE SYSTEM */}
          <div className={`relative transition-all duration-1000 flex justify-center items-center ${containerSize}`}>
            
            {/* Orbit Ring - Decorative */}
            <div 
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-dashed border-white/10 rounded-full animate-spin-slow pointer-events-none
              ${isMobile ? 'w-[290px] h-[290px]' : 'w-[520px] h-[520px]'}
              `} 
              aria-hidden="true"
            />

            {/* Center Logo Group */}
            <div 
              className="relative z-[100] flex flex-col items-center justify-center cursor-default"
              role="img"
              aria-label="Logo UEP Gilgal"
            >
              {/* Big G */}
              <div 
                className={`
                  font-cinzel font-bold text-white select-none leading-none
                  ${isMobile ? 'text-[90px]' : 'text-[140px]'}
                `}
                style={{ 
                  textShadow: '0 0 25px rgba(255, 255, 255, 0.6), 0 0 50px rgba(154, 205, 50, 0.4)',
                  filter: 'drop-shadow(0 0 10px rgba(154, 205, 50, 0.3))',
                }}
              >
                G
              </div>
              
              {/* Tagline */}
              <div className="flex flex-col items-center mt-2 animate-pulse w-max">
                <span className="font-orbitron text-[#9ACD32] font-bold text-sm md:text-xl tracking-widest leading-tight text-center">
                  UEP GILGAL
                </span>
                <span className="font-orbitron text-[#9ACD32] text-[10px] md:text-xs tracking-[0.2em] opacity-80 text-center">
                  POTENCIANDO GENIOS
                </span>
              </div>
            </div>

            {/* Satellites - Navigation Nodes */}
            <nav className="absolute inset-0" aria-label="Menú de Inteligencias">
              <ul className="list-none m-0 p-0">
                {NODES.map((node, index) => {
                  const angle = -90 + (index * 30);
                  return (
                    <li key={node.id}>
                      <Satellite 
                        node={node}
                        angle={angle}
                        radius={orbitRadius}
                        isMobile={isMobile}
                        visited={visitedNodes.has(node.id)}
                        onClick={handleNodeClick}
                      />
                    </li>
                  );
                })}
              </ul>
            </nav>

          </div>

        </div>
      )}

      {/* 3. Bottom Bar */}
      {!loading && (
        <BottomBar 
          visible={!activeNode} 
          onPreRegister={handlePreRegister}
        />
      )}

      {/* 4. Modal Overlay */}
      {activeNode && (
        <HoloModal node={activeNode} onClose={() => setActiveNode(null)} />
      )}
    </main>
  );
};

export default App;