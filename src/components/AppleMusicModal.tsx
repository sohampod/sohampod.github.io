import React from 'react';
import { Dialog, DialogContent } from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

interface AppleMusicModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppleMusicModal: React.FC<AppleMusicModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="fixed inset-0 flex items-center justify-center p-4 z-50">
        <div className="max-w-md w-[400px] h-[500px] bg-black/80 backdrop-blur-xl border border-white/10 rounded-[20px] overflow-hidden shadow-2xl flex flex-col">
          {/* Top Bar */}
          <div className="flex items-center h-[44px] px-[20px] bg-black/20 backdrop-blur-sm border-b border-white/10 flex-shrink-0">
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
              <span className="text-[13px] font-[590] text-white select-none tracking-[-0.08px]">
                Apple Music
              </span>
            </div>
          </div>

          {/* Apple Music Embed */}
          <div className="flex-1 p-4 flex items-center justify-center">
            <iframe
              allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
              height="400"
              width="350"
              style={{
                overflow: 'hidden',
                background: 'transparent',
                borderRadius: '12px',
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
