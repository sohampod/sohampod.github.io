import React from 'react';
import { Dialog, DialogContent, DialogOverlay, DialogClose } from '@/components/ui/dialog';
import { X } from 'lucide-react';

interface AppleMusicModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppleMusicModal: React.FC<AppleMusicModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      {/* Correction: Using a pure blur without a dark background. */}
      <DialogOverlay className="fixed inset-0 backdrop-blur-overlay" />
      
      {/* Hiding the default close button that might be added by the component library. */}
      <DialogClose className="hidden" aria-hidden="true" />

      <DialogContent 
        className="
          max-w-md w-[420px] h-[265px] p-0 border-none shadow-2xl rounded-[12px] overflow-hidden
          data-[state=open]:animate-in data-[state=closed]:animate-out 
          data-[state=closed]:fade-out data-[state=open]:fade-in 
          data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 
          data-[state=closed]:slide-out-to-top-[2%] data-[state=open]:slide-in-from-top-[2%]
          duration-300
        "
      >
        <div className="flex flex-col h-full bg-[#ffffff]">
          {/* Top Bar: Re-added the centered title and removed the X icon from the red button. */}
          <div className="flex items-center h-8 px-3 bg-[#f7f7f7] border-b border-[#d9d9d9] flex-shrink-0 relative">
            
            {/* Traffic Lights */}
            <div className="flex items-center gap-[8px]">
              <button
                className="w-[12px] h-[12px] rounded-full bg-[#ff5f57] hover:bg-[#ff3b30] transition-colors flex items-center justify-center"
                onClick={onClose}
              />
              <button className="w-[12px] h-[12px] rounded-full bg-[#ffbd2e] hover:bg-[#ff9500] transition-colors" />
              <button className="w-[12px] h-[12px] rounded-full bg-[#28ca42] hover:bg-[#28cd41] transition-colors" />
            </div>
            
            {/* Restored the centered title */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className="text-[13px] font-[590] text-[#000000] select-none tracking-[-0.08px]">
                Apple Music
              </span>
            </div>
          </div>

          {/* Apple Music Embed */}
          <div className="flex-1 p-3 flex items-center justify-center bg-[#ffffff]">
            <iframe
              allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
              height="175"
              width="380"
              style={{
                overflow: 'hidden',
                background: 'transparent',
                borderRadius: '8px',
              }}
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
              src="https://embed.music.apple.com/us/song/neighbors/1440934978"
            ></iframe>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
