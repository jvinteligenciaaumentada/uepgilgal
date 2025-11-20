import React, { useEffect, useState } from 'react';

export const BiosLoader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [visible, setVisible] = useState(true);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Start animation
    setTimeout(() => setWidth(100), 100);

    // Hide after delay
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 500); // Wait for fade out
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black z-[10000] flex flex-col justify-center px-10 font-mono text-[#9ACD32] text-lg animate-fade-out" style={{ animationDelay: '1.5s' }}>
      <div className="mb-2">&gt; SISTEMA GILGAL ONLINE...</div>
      <div className="w-[200px] h-1 bg-[#333] relative overflow-hidden">
        <div 
          className="h-full bg-[#9ACD32] shadow-[0_0_10px_#9ACD32] transition-[width] duration-[1500ms] ease-linear"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};
