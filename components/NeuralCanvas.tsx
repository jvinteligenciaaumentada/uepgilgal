import React, { useEffect, useRef } from 'react';
import { NODES } from '../constants';
import { Particle } from '../types';

export const NeuralCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      particles.current = [];
      // Exactamente 60 partículas
      for (let i = 0; i < 60; i++) {
        // Select random colors from existing nodes
        const randomNode = NODES[Math.floor(Math.random() * NODES.length)];
        particles.current.push({
          x: Math.random() * canvas.width, // Instant deployment across screen
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3, // Slight movement
          vy: (Math.random() - 0.5) * 0.3,
          c: randomNode.color,
        });
      }
    };

    const animate = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const dx = mouse.current.x - p.x;
        const dy = mouse.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Mouse interaction (Synapse effect)
        if (dist < 150) {
          p.x += dx * 0.02;
          p.y += dy * 0.02;
          ctx.beginPath();
          ctx.strokeStyle = p.c;
          ctx.globalAlpha = 1 - dist / 150;
          ctx.lineWidth = 0.5;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.current.x, mouse.current.y);
          ctx.stroke();
        }

        // Draw particle
        ctx.globalAlpha = 0.6;
        ctx.fillStyle = p.c;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    resizeCanvas();
    initParticles();
    const animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
};