// iMessageModal.tsx (example - adapt to your existing code)
import React from 'react';
import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog';
import { ModalTopBar } from '@/components/ModalTopBar'; // adjust path as needed

interface iMessageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const iMessageModal: React.FC<iMessageModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="fixed inset-0 backdrop-blur-overlay" />

      <DialogContent
        className="
          /* Keep your existing iMessageModal styles here */
          max-w-md w-[420px] h-[400px] p-0 border-none shadow-2xl rounded-[12px] overflow-hidden
          data-[state=open]:animate-in data-[state=closed]:animate-out 
          data-[state=closed]:fade-out data-[state=open]:fade-in 
          data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 
          data-[state=closed]:slide-out-to-top-[2%] data-[state=open]:slide-in-from-top-[2%]
          duration-300
          [&>[data-radix-dialog-close]]:hidden
        "
      >
        <div className="flex flex-col h-full bg-[#ffffff]">
          {/* Use the same top bar */}
          <ModalTopBar title="iMessage" onClose={onClose} />

          {/* Your existing iMessage modal content - this part remains unchanged */}
          <div className="flex-1 p-4">
            {/* Your iMessage content here */}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};