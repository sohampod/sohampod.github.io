import React from 'react';

interface ProjectIconProps {
  src: string;
  alt: string;
  title: string;
  onClick?: () => void;
  className?: string;
}

export const ProjectIcon: React.FC<ProjectIconProps> = ({
  src,
  alt,
  title,
  onClick,
  className = ""
}) => {
  return (
    <div 
      className={`flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity ${className}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick?.();
        }
      }}
    >
      <img
        src={src}
        alt={alt}
        className="aspect-[1] object-contain w-10 sm:w-12"
      />
      <div className="mt-1 text-[10px] sm:text-xs md:text-sm text-[rgba(255,255,240,1)] font-normal text-center leading-[1.2] max-w-[60px] sm:max-w-[80px] truncate">
        {title}
      </div>
    </div>
  );
};
