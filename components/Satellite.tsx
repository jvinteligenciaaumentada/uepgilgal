import React, { CSSProperties } from 'react';
import { NodeData } from '../types';

interface SatelliteProps {
  node: NodeData;
  angle: number;
  radius: number;
  isMobile: boolean;
  visited: boolean;
  onClick: (node: NodeData) => void;
}

export const Satellite: React.FC<SatelliteProps> = ({ node, angle, radius, isMobile, visited, onClick }) => {
  
  // Dimensions based on device
  const headSize = isMobile ? 'w-9 h-9' : 'w-12 h-12';
  const bodySize = isMobile ? 'w-12 h-6' : 'w-16 h-8';
  const headOffset = isMobile ? 18 : 24; // Half of head width
  const bodyOffset = isMobile ? 26 : 36; // Approx half of total height combo
  const iconSize = isMobile ? 'text-sm' : 'text-lg';

  const getStyle = (): CSSProperties => {
    const rad = (angle * Math.PI) / 180;
    const x = Math.cos(rad) * radius;
    const y = Math.sin(rad) * radius;
    
    return {
      position: 'absolute',
      left: `calc(50% + ${x}px - ${headOffset}px)`, 
      top: `calc(50% + ${y}px - ${bodyOffset}px)`, 
      transform: `rotate(${angle + 90}deg)`, 
      zIndex: 60,
    };
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(node);
    }
  };

  return (
    <div 
      className={`satellite flex flex-col items-center justify-center cursor-pointer transition-all duration-300 group outline-none focus:scale-110 ${visited ? 'visited' : ''}`}
      style={getStyle()}
      onClick={() => onClick(node)}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Abrir sección ${node.name}`}
    >
      {/* Head (Circle) - Outer Element */}
      <div 
        className={`${headSize} rounded-full flex items-center justify-center z-20 shadow-lg group-hover:scale-110 transition-transform duration-300 relative bg-[var(--node-color)] border border-black/10`}
        style={{ '--node-color': node.color } as React.CSSProperties}
      >
        <i 
          className={`fas ${node.icon} text-black ${iconSize}`} 
          style={{ transform: `rotate(-${angle + 90}deg)` }} 
          aria-hidden="true"
        />
        {visited && (
          <div 
            className="absolute -top-1 -right-1 bg-white text-black w-3 h-3 md:w-4 md:h-4 rounded-full text-[8px] md:text-[10px] font-bold flex items-center justify-center border border-black shadow-sm"
            aria-label="Visitado"
          >
            ✓
          </div>
        )}
      </div>

      {/* Shoulders/Body (Semi-circle) - Inner Element (pointing to center) */}
      <div 
        className={`${bodySize} rounded-t-[100px] -mt-1 z-10 shadow-md group-hover:scale-105 transition-transform duration-300 bg-[var(--node-color)] border border-black/10 border-b-0`}
        style={{ '--node-color': node.color } as React.CSSProperties}
      />

      {/* Label - Only visible on hover for desktop. Hidden on mobile to keep circle clean. */}
      {!isMobile && (
        <span 
          className="absolute top-[90px] bg-black/80 backdrop-blur-sm text-[var(--node-color)] px-3 py-1 rounded border border-[var(--node-color)] text-xs font-orbitron whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity pointer-events-none z-50"
          style={{ 
            '--node-color': node.color,
            transform: `rotate(-${angle + 90}deg)` 
          } as React.CSSProperties}
        >
          {node.name}
        </span>
      )}
    </div>
  );
};