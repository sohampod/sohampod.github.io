// src/components/ui/dock-icon.tsx
import React from "react";

interface DockIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  src: string;
  alt?: string;
  size?: number; // optional override in pixels
}

export const DockIcon: React.FC<DockIconProps> = ({ src, alt = "", size = 48, className = "", onClick }) => {
  const s = `${size}px`;
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center p-0 bg-transparent border-none outline-none ${className}`}
      aria-label={alt}
      style={{ width: s, height: s }}
    >
      <img
        src={src}
        alt={alt}
        style={{ width: s, height: s }}
        className="object-contain block"
        draggable={false}
      />
    </button>
  );
};
