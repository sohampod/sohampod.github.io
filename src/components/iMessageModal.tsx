import React from 'react';
import { Dialog, DialogContent } from '@radix-ui/react-dialog';

interface IMessageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IMessageModal: React.FC<IMessageModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-xl w-[95vw] h-[90vh] p-0 border-none shadow-2xl rounded-[12px] overflow-hidden">
        <div className="flex flex-col h-full bg-white">
          {/* Top Bar */}
          <div className="flex items-center h-[44px] px-[20px] bg-[#f7f7f7] border-b border-[#d9d9d9] flex-shrink-0">
            <div className="flex items-center gap-[8px]">
              <button
                className="w-[12px] h-[12px] rounded-full bg-[#ff5f57] hover:bg-[#ff3b30] transition-colors"
                onClick={onClose}
              />
              <button className="w-[12px] h-[12px] rounded-full bg-[#ffbd2e] hover:bg-[#ff9500] transition-colors" />
              <button className="w-[12px] h-[12px] rounded-full bg-[#28ca42] hover:bg-[#28cd41] transition-colors" />
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <span className="text-[13px] font-[590] text-[#000000] select-none tracking-[-0.08px]">
                iMessage
              </span>
            </div>
            {/* The extra X icon is removed */}
          </div>
          {/* Main Content Area */}
          <div className="flex flex-1 min-h-0">
            {/* Sidebar */}
            <div className="w-[200px] bg-[#f0f0f0] border-r border-[#d9d9d9] flex flex-col p-2 overflow-y-auto">
              {/* Sidebar Content */}
              <div className="h-full w-full bg-gray-300 rounded-lg animate-pulse" />
            </div>
            {/* Chat Area */}
            <div className="flex-1 bg-white flex flex-col p-4 overflow-y-auto">
              <div className="h-full w-full bg-gray-200 rounded-lg animate-pulse" />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
