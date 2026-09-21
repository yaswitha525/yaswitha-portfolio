import React, { useState } from 'react';

export const HeroCenterVisual: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex items-center justify-center cursor-pointer select-none group py-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      title="Intelligent Core • AI & Neural Systems"
    >
      {/* Outer ambient soft glow aura */}
      <div
        className={`absolute w-28 h-28 rounded-full bg-white/10 blur-xl transition-all duration-700 pointer-events-none ${
          isHovered ? 'scale-130 bg-amber-200/20' : 'scale-100'
        }`}
      />

      {/* Floating SVG constellation container */}
      <div className="relative w-22 h-22 transition-transform duration-500 ease-out transform group-hover:scale-110 animate-float-gentle">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full overflow-visible drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
        >
          <defs>
            {/* Gradients */}
            <linearGradient id="orbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="45%" stopColor="#e0e7ff" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#FED049" stopOpacity="0.9" />
            </linearGradient>

            <linearGradient id="ringGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.7" />
              <stop offset="50%" stopColor="#d8b4fe" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.6" />
            </linearGradient>

            <linearGradient id="ringGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fed049" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.5" />
            </linearGradient>

            <filter id="coreGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Elliptical Orbital Ring 1 (Tilted -28deg) */}
          <g transform="rotate(-28 50 50)">
            <ellipse
              cx="50"
              cy="50"
              rx="40"
              ry="16"
              fill="none"
              stroke="url(#ringGrad1)"
              strokeWidth="1.2"
              strokeDasharray="4 2"
              className={isHovered ? 'animate-spin' : ''}
              style={{
                animationDuration: '24s',
                transformOrigin: '50px 50px',
              }}
            />
            {/* Satellite Node on Ring 1 */}
            <circle cx="86" cy="50" r="2.8" fill="#ffffff" filter="url(#coreGlow)">
              <animate
                attributeName="r"
                values="2.2;3.2;2.2"
                dur="3s"
                repeatCount="indefinite"
              />
            </circle>
          </g>

          {/* Elliptical Orbital Ring 2 (Tilted +38deg) */}
          <g transform="rotate(38 50 50)">
            <ellipse
              cx="50"
              cy="50"
              rx="38"
              ry="14"
              fill="none"
              stroke="url(#ringGrad2)"
              strokeWidth="1.2"
            />
            {/* Satellite Node on Ring 2 */}
            <circle cx="16" cy="50" r="2.4" fill="#FED049">
              <animate
                attributeName="opacity"
                values="0.5;1;0.5"
                dur="2.4s"
                repeatCount="indefinite"
              />
            </circle>
          </g>

          {/* Elliptical Orbital Ring 3 (Horizontal subtle axis) */}
          <ellipse
            cx="50"
            cy="50"
            rx="44"
            ry="9"
            fill="none"
            stroke="rgba(255, 255, 255, 0.35)"
            strokeWidth="0.9"
            strokeDasharray="2 3"
          />

          {/* Synaptic connection filaments from center to nodes */}
          <line
            x1="50"
            y1="50"
            x2="78"
            y2="34"
            stroke="rgba(255, 255, 255, 0.4)"
            strokeWidth="0.8"
            strokeDasharray="1 2"
          />
          <line
            x1="50"
            y1="50"
            x2="24"
            y2="62"
            stroke="rgba(254, 208, 73, 0.45)"
            strokeWidth="0.8"
            strokeDasharray="1 2"
          />
          <line
            x1="50"
            y1="50"
            x2="50"
            y2="18"
            stroke="rgba(255, 255, 255, 0.35)"
            strokeWidth="0.7"
          />

          {/* Outer floating node top */}
          <circle cx="50" cy="18" r="2" fill="#ffffff" opacity="0.85" />

          {/* Central Intelligent Nucleus / AI Orb */}
          {/* Outer soft aura */}
          <circle
            cx="50"
            cy="50"
            r="16"
            fill="url(#orbGrad)"
            opacity="0.25"
            filter="url(#coreGlow)"
            className="animate-pulse-glow"
          />

          {/* Mid core */}
          <circle
            cx="50"
            cy="50"
            r="10"
            fill="url(#orbGrad)"
            filter="url(#coreGlow)"
          />

          {/* Inner sparkling center */}
          <circle cx="48" cy="48" r="3.2" fill="#ffffff" opacity="0.95" />

          {/* 4-point constellation twinkle cross */}
          <path
            d="M 50 41 L 51 49 L 59 50 L 51 51 L 50 59 L 49 51 L 41 50 L 49 49 Z"
            fill="#ffffff"
            opacity={isHovered ? '0.95' : '0.75'}
            className="transition-opacity duration-300"
          />
        </svg>
      </div>
    </div>
  );
};
