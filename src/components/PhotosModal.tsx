import React from 'react';
import { Dialog, DialogContent, DialogOverlay } from '@/components/ui/dialog';
import { X } from 'lucide-react';

interface PhotosModalProps {
  isOpen: boolean;
  onClose: () => void;
}

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
  // Adding more photos to force a scrollbar
  { id: 13, src: '', alt: 'Photo 13' },
  { id: 14, src: '', alt: 'Photo 14' },
  { id: 15, src: '', alt: 'Photo 15' },
  { id: 16, src: '', alt: 'Photo 16' },
  { id: 17, src: '', alt: 'Photo 17' },
  { id: 18, src: '', alt: 'Photo 18' },
];

export const PhotosModal: React.FC<PhotosModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogOverlay className="fixed inset-0 bg-black/30 backdrop-blur-lg" />
      
      <DialogContent 
        className="
          max-w-7xl w-[95vw] h-[90vh] p-0 border-none shadow-2xl rounded-[12px] overflow-hidden
          
          /* New animation classes for the macOS effect */
          data-[state=open]:animate-in data-[state=closed]:animate-out 
          data-[state=closed]:fade-out data-[state=open]:fade-in 
          data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 
          data-[state=closed]:slide-out-to-top-[2%] data-[state=open]:slide-in-from-top-[2%]
          duration-300
        "
      >
        <div className="flex flex-col h-full bg-[#ffffff]">
          {/* Top Bar: Reduced height (h-8) and centered content removed */}
          <div className="flex items-center h-8 px-3 bg-[#f7f7f7] border-b border-[#d9d9d9] flex-shrink-0">
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
            {/* Title content removed for authentic macOS look */}
          </div>

          {/* Main Content Area: Sidebar + Photos Grid (remains the same) */}
          <div className="flex flex-1 min-h-0">
            {/* Sidebar (remains the same) */}
            <div className="w-[225px] bg-[#f5f5f5] border-r border-[#d4d4d4] flex flex-col flex-shrink-0">
              <div className="flex-1 overflow-y-auto pt-[8px]">
                {/* Library Section */}
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
                {/* Albums Section */}
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

            {/* Photos Grid (remains the same) */}
            <div className="flex-1 bg-[#ffffff] flex flex-col min-w-0">
              {/* Photos Header */}
              <div className="px-[24px] py-[16px] bg-[#ffffff] flex-shrink-0">
                <h2 className="text-[28px] font-[700] text-[#1d1d1f] tracking-[-0.374px] leading-[1.14286] mb-[2px]">All Photos</h2>
                <p className="text-[13px] text-[#86868b] font-[400]">{photos.length} photos</p>
              </div>
              {/* Photo Cards Container */}
              <div className="flex-1 px-[24px] pb-[24px] overflow-y-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-[3px] auto-rows-min">
                  {photos.map((photo, index) => {
                    const isPanorama = (index + 1) % 9 === 0;
                    const isPortrait = (index + 1) % 7 === 0 && !isPanorama;
                    const isLandscape = (index + 1) % 11 === 0 && !isPanorama && !isPortrait;

                    return (
                      <div
                        key={photo.id}
                        className={`bg-[#f6f6f6] rounded-[2px] hover:scale-[1.02] transition-all duration-150 cursor-pointer relative group overflow-hidden ${
                          isPanorama ? 'col-span-full aspect-[3/1]' :
                          isPortrait ? 'row-span-2 aspect-[3/4] col-span-1' :
                          isLandscape ? 'col-span-2 aspect-[4/3]' :
                          'aspect-square'
                        }`}
                      >
                        <div className="w-full h-full bg-gradient-to-br from-[#f8f8f8] via-[#f0f0f0] to-[#e8e8e8] flex items-center justify-center relative">
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-white/60 opacity-40"></div>
                          <div className="absolute inset-0 border-[3px] border-[#0066cc] rounded-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-150"></div>
                          <div className="text-[#86868b] text-[11px] font-[500] z-10 select-none">
                            {photo.id}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
