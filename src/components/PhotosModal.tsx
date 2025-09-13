import React from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X } from 'lucide-react';

interface PhotosModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Placeholder for user photos - they'll upload later
const photos = [
  { id: 1, src: '', alt: 'Photo 1' },
  { id: 2, src: '', alt: 'Photo 2' },
  { id: 3, src: '', alt: 'Photo 3' },
  { id: 4, src: '', alt: 'Photo 4' },
  { id: 5, src: '', alt: 'Photo 5' },
  { id: 6, src: '', alt: 'Photo 6' },
  { id: 7, src: '', alt: 'Photo 7' },
  { id: 8, src: '', alt: 'Photo 8' },
  { id: 9, src: '', alt: 'Photo 9' },
  { id: 10, src: '', alt: 'Photo 10' },
  { id: 11, src: '', alt: 'Photo 11' },
  { id: 12, src: '', alt: 'Photo 12' },
];

export const PhotosModal: React.FC<PhotosModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl w-[95vw] h-[90vh] p-0 bg-[#ffffff] border-none shadow-2xl rounded-[12px] overflow-hidden flex flex-col">
        {/* macOS title bar - exact replica */}
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
            <span className="text-[13px] font-[590] text-[#000000] select-none tracking-[-0.08px]">Photos</span>
          </div>
        </div>

        {/* Main content area */}
        <div className="flex flex-1 min-h-0">
          {/* Sidebar - exact macOS styling */}
          <div className="w-[225px] bg-[#f5f5f5] border-r border-[#d4d4d4] flex flex-col flex-shrink-0">
            <div className="flex-1 overflow-y-auto">
              {/* Library section - removed pt-[8px] to fix the gap */}
              <div className="px-[16px] mb-[16px]">
                <div className="text-[11px] font-[600] text-[#6d6d6d] uppercase tracking-[0.6px] mb-[6px] select-none">Library</div>
                <div className="space-y-[1px]">
                  <div className="flex items-center px-[8px] py-[3px] bg-[#0066cc] text-white rounded-[4px] text-[13px] font-[400] cursor-pointer select-none">
                    <span>All Photos</span>
                    <span className="ml-auto text-[11px] opacity-80">12</span>
                  </div>
                  <div className="flex items-center px-[8px] py-[3px] text-[#000000] rounded-[4px] text-[13px] font-[400] hover:bg-[#e5e5e5] cursor-pointer transition-colors select-none">
                    <span>Favorites</span>
                  </div>
                  <div className="flex items-center px-[8px] py-[3px] text-[#000000] rounded-[4px] text-[13px] font-[400] hover:bg-[#e5e5e5] cursor-pointer transition-colors select-none">
                    <span>Recently Added</span>
                  </div>
                  <div className="flex items-center px-[8px] py-[3px] text-[#000000] rounded-[4px] text-[13px] font-[400] hover:bg-[#e5e5e5] cursor-pointer transition-colors select-none">
                    <span>Screenshots</span>
                  </div>
                </div>
              </div>

              {/* Albums section */}
              <div className="px-[16px]">
                <div className="text-[11px] font-[600] text-[#6d6d6d] uppercase tracking-[0.6px] mb-[6px] select-none">Albums</div>
                <div className="space-y-[1px]">
                  <div className="flex items-center px-[8px] py-[3px] text-[#000000] rounded-[4px] text-[13px] font-[400] hover:bg-[#e5e5e5] cursor-pointer transition-colors select-none">
                    <span>Recents</span>
                    <span className="ml-auto text-[11px] text-[#6d6d6d]">8</span>
                  </div>
                  <div className="flex items-center px-[8px] py-[3px] text-[#000000] rounded-[4px] text-[13px] font-[400] hover:bg-[#e5e5e5] cursor-pointer transition-colors select-none">
                    <span>Travel</span>
                    <span className="ml-auto text-[11px] text-[#6d6d6d]">24</span>
                  </div>
                  <div className="flex items-center px-[8px] py-[3px] text-[#000000] rounded-[4px] text-[13px] font-[400] hover:bg-[#e5e5e5] cursor-pointer transition-colors select-none">
                    <span>Family</span>
                    <span className="ml-auto text-[11px] text-[#6d6d6d]">15</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main photos area */}
          <div className="flex-1 bg-[#ffffff] flex flex-col min-w-0">
            {/* Content header */}
            <div className="px-[24px] py-[16px] bg-[#ffffff] flex-shrink-0">
              <h2
