import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  // Use useRef for direct DOM manipulation to avoid re-renders on every pixel move
  const cursorRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        // Using transform translate3d is more performant than top/left
        // as it doesn't trigger layout recalculations, only compositing
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
      
      // Check interaction only if target changes (optimization could be deeper here but this is generally fast enough)
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('button') || target.closest('.satellite') || target.closest('.interactive');
      
      // Only update state if value actually changes
      setHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', onMouseMove);
    
    // Initial Position check
    if (cursorRef.current) {
        cursorRef.current.style.opacity = '1';
    }

    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[9999] border-2 rounded-full transition-colors duration-200 mix-blend-difference will-change-transform
        ${hovered ? 'w-[50px] h-[50px] bg-[#9ACD32]/20 border-[#9ACD32] mix-blend-normal' : 'w-5 h-5 border-white'}
      `}
      style={{ 
        // Initial off-screen position handled by transforms
        opacity: 0,
        transitionProperty: 'width, height, background-color, border-color, opacity',
      }}
    />
  );
};