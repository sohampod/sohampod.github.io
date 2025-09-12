import React from 'react';

interface DockIconProps {
  src: string;
  alt: string;
  onClick?: () => void;
  className?: string;
}

export const DockIcon = React.forwardRef<HTMLButtonElement, DockIconProps>(({
  src,
  alt,
  onClick,
  className = ""
}, ref) => {
  return (
    <button
      ref={ref}
      className={`hover:scale-110 transition-transform duration-200 ${className}`}
      onClick={onClick}
      aria-label={alt}
    >
      <img
        src={src}
        alt={alt}
        className="aspect-[1] object-contain w-10"
      />
    </button>
  );
});

DockIcon.displayName = "DockIcon";
