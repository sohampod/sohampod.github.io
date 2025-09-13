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
        <div className="flex items-center h-[52px] px-[20px] bg-[#f7f7f7] border-b border-[#d9d9d9] flex-shrink-0">
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
        <div className="flex flex-1 min-h-0"> {/* Use flex-1 and min-h-0 here */}
          {/* Sidebar - exact macOS styling */}
          {/* Added flex-shrink-0 to prevent sidebar from shrinking */}
          <div className="w-[225px] bg-[#f5f5f5] border-r border-[#d4d4d4] flex flex-col flex-shrink-0">
            <div className="flex-1 pt-[8px] overflow-auto"> {/* Added overflow-auto for scrollable sidebar content */}
              {/* Library section */}
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
          <div className="flex-1 bg-[#ffffff] flex flex-col min-w-0"> {/* Added min-w-0 to allow shrinking */}
            {/* Content header */}
            <div className="px-[24px] py-[16px] bg-[#ffffff] flex-shrink-0">
              <h2 className="text-[28px] font-[700] text-[#1d1d1f] tracking-[-0.374px] leading-[1.14286] mb-[2px]">All Photos</h2>
              <p className="text-[13px] text-[#86868b] font-[400]">{photos.length} photos</p>
            </div>

            {/* Photos grid - exact macOS layout */}
            <div className="flex-1 px-[24px] pb-[24px] overflow-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-[3px] auto-rows-min">
                {photos.map((photo, index) => {
                  // Create realistic photo layout variations
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
                        {/* Photo-like gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-white/60 opacity-40"></div>

                        {/* Selection border on hover */}
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
      </DialogContent>
    </Dialog>
  );
};
