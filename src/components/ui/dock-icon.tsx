// src/components/ui/dock-icon.tsx
import React from "react";

interface DockIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  src: string;
  alt?: string;
  size?: number;           // physical size in px (default 40)
  visualScale?: number;    // visual multiplier for icons that appear too big (0.9 = 90%)
}

export const DockIcon: React.FC<DockIconProps> = ({
  src,
  alt = "",
  size = 40,
  visualScale = 1,
  className = "",
  onClick,
  ...rest
}) => {
  const px = `${size}px`;
  const innerSize = `${Math.round(size * visualScale)}px`;

  return (
    <button
      onClick={onClick}
      aria-label={alt}
      className={`flex items-center justify-center p-0 bg-transparent border-none outline-none ${className}`}
      style={{ width: px, height: px }}
      {...rest}
    >
      <div
        style={{
          width: innerSize,
          height: innerSize,
          display: "inline-block",
        }}
      >
        <img
          src={src}
          alt={alt}
          draggable={false}
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            objectFit: "contain",
          }}
        />
      </div>
    </button>
  );
};

export default DockIcon;
