"use client";

import { useEffect, useState } from 'react';

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(true);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    // Add event listeners
    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Subtle background glow effect */}
      <div
        className="pointer-events-none fixed z-0"
        style={{
          left: position.x - 100,
          top: position.y - 100,
          transform: isHovering ? 'scale(1.2)' : 'scale(1)',
        }}
      >
        <div 
          className={`h-48 w-48 rounded-full transition-all duration-500 ease-out ${isHovering ? 'opacity-15' : 'opacity-5'}`}
          style={{
            background: 'radial-gradient(circle, var(--accent-500) 0%, transparent 70%)',
            filter: 'blur(20px)',
          }}
        />
      </div>

      {/* Additional subtle layer for more depth */}
      <div
        className="pointer-events-none fixed z-0"
        style={{
          left: position.x - 150,
          top: position.y - 150,
          transform: isHovering ? 'scale(1.1)' : 'scale(1)',
        }}
      >
        <div 
          className={`h-80 w-80 rounded-full transition-all duration-700 ease-out ${isHovering ? 'opacity-8' : 'opacity-3'}`}
          style={{
            background: 'radial-gradient(circle, var(--accent-400) 0%, transparent 70%)',
            filter: 'blur(30px)',
          }}
        />
      </div>
    </>
  );
}
