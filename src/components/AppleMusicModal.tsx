// AppleMusicModal.tsx (updated)
import React from 'react';
import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog';
import { ModalTopBar } from '@/components/ModalTopBar'; // adjust path as needed

interface AppleMusicModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppleMusicModal: React.FC<AppleMusicModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="fixed inset-0 backdrop-blur-overlay" />

      <DialogContent
        className="
          max-w-md w-[420px] h-[265px] p-0 border-none shadow-2xl rounded-[12px] overflow-hidden
          data-[state=open]:animate-in data-[state=closed]:animate-out 
          data-[state=closed]:fade-out data-[state=open]:fade-in 
          data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 
          data-[state=closed]:slide-out-to-top-[2%] data-[state=open]:slide-in-from-top-[2%]
          duration-300
          [&>[data-radix-dialog-close]]:hidden
        "
      >
        <div className="flex flex-col h-full bg-[#ffffff]">
          {/* Use the reusable top bar */}
          <ModalTopBar title="Apple Music" onClose={onClose} />

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