import React from 'react';
import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog';
import { ModalTopBar } from '@/components/ModalTopBar';

interface PhotosModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PhotosModal: React.FC<PhotosModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="fixed inset-0 bg-black/30 backdrop-blur-lg" />
      
      <DialogContent 
        className="
          max-w-6xl w-[95vw] h-[80vh] p-0 border-none shadow-2xl rounded-[12px] overflow-hidden
          data-[state=open]:animate-in data-[state=closed]:animate-out 
          data-[state=closed]:fade-out data-[state=open]:fade-in 
          data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 
          data-[state=closed]:slide-out-to-top-[2%] data-[state=open]:slide-in-from-top-[2%]
          duration-300
        "
      >
        <div className="flex flex-col h-full bg-[#ffffff]">
          <ModalTopBar title="Design Portfolio" onClose={onClose} />

          {/* Two Column Layout for Dribbble and Behance */}
          <div className="flex flex-1 min-h-0 p-6 gap-6 bg-gray-50">
            {/* Dribbble Column */}
            <div className="flex-1 flex flex-col bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-200 bg-white">
                <h3 className="text-lg font-semibold text-gray-800">Dribbble</h3>
                <p className="text-sm text-gray-600">UI/UX Design Shots</p>
              </div>
              <div className="flex-1 overflow-hidden">
                <iframe
                  src="https://dribbble.com/sohampod"
                  className="w-full h-full border-0"
                  title="Dribbble Portfolio"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Behance Column */}
            <div className="flex-1 flex flex-col bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-200 bg-white">
                <h3 className="text-lg font-semibold text-gray-800">Behance</h3>
                <p className="text-sm text-gray-600">Creative Projects</p>
              </div>
              <div className="flex-1 overflow-hidden">
                <iframe
                  src="https://www.behance.net/sohampoddar"
                  className="w-full h-full border-0"
                  title="Behance Portfolio"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};