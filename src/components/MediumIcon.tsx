// src/components/MediumIcon.tsx
import React from "react";

interface Props {
  onClick: () => void;
  className?: string;
  alt?: string;
  src?: string;
}

export const MediumIcon: React.FC<Props> = ({ onClick, className = "", alt = "Medium", src = "/placeholder.svg" }) => {
  return (
    <button
      onClick={onClick}
      aria-label={alt}
      className={`hover:scale-110 transition-transform duration-200 ${className}`}
    >
      <img src={src} alt={alt} className="aspect-[1] object-contain w-10" />
    </button>
  );
};
