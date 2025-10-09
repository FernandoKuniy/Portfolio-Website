"use client";

export default function Background({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen">
      {/* Radial gradient overlay */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background: 'radial-gradient(circle at 20% -20%, var(--accent-800)/.35, transparent 60%)'
        }}
      />
      
      {/* Grid pattern overlay */}
      <div className="pointer-events-none absolute inset-0 grid-pattern" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
