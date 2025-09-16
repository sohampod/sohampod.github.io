import React from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X } from 'lucide-react';

interface AppleMusicModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppleMusicModal: React.FC<AppleMusicModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl w-[95vw] h-[90vh] p-0 border-none shadow-2xl rounded-[12px] overflow-hidden">
        <div className="flex flex-col h-full bg-[#ffffff]">
          {/* Top Bar */}
          <div className="flex items-center h-[44px] px-[20px] bg-[#f7f7f7] border-b border-[#d9d9d9] flex-shrink-0">
            <div className="flex items-center gap-[8px]">
              <button
                className="w-[12px] h-[12px] rounded-full bg-[#ff5f57] hover:bg-[#ff3b30] transition-colors flex items-center justify-center"
                onClick={onClose}
              >
                <X className="w-[6px] h-[6px] text-[#bf4943] opacity-0 hover:opacity-100 transition-opacity" />
              </button>
              <button className="w-[12px] h-[12px] rounded-full bg-[#ffbd2e] hover:bg-[#ff9500] transition-colors" />
              <button className="w-[12px] h-[12px] rounded-full bg-[#28ca42] hover:bg-[#28cd41] transition-colors" />
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <span className="text-[13px] font-[590] text-[#000000] select-none tracking-[-0.08px]">
                Apple Music
              </span>
            </div>
          </div>

          {/* Apple Music Embed */}
          <div className="flex-1 p-4 flex items-center justify-center bg-[#ffffff]">
            <iframe
              allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
              height="450"
              style={{
                width: '100%',
                maxWidth: '660px',
                overflow: 'hidden',
                background: 'transparent',
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