// components/ModalTopBar.tsx
import React from 'react';

interface ModalTopBarProps {
  title: string;
  onClose: () => void;
}

export const ModalTopBar: React.FC<ModalTopBarProps> = ({ title, onClose }) => {
  return (
    <div className="flex items-center h-8 px-3 bg-[#f7f7f7] border-b border-[#d9d9d9] flex-shrink-0 relative">
      {/* Traffic Lights */}
      <div className="flex items-center gap-[8px]">
        <button
          className="w-[12px] h-[12px] rounded-full bg-[#ff5f57] hover:bg-[#ff3b30] transition-colors"
          onClick={onClose}
        />
        <button className="w-[12px] h-[12px] rounded-full bg-[#ffbd2e] hover:bg-[#ff9500] transition-colors" />
        <button className="w-[12px] h-[12px] rounded-full bg-[#28ca42] hover:bg-[#28cd41] transition-colors" />
      </div>

      {/* Centered Title */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <span className="text-[13px] font-[590] text-[#000000] select-none tracking-[-0.08px]">
          {title}
        </span>
      </div>
    </div>
  );
};