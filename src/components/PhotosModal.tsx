import React from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X, Grid3X3, Heart, Share, Trash2 } from 'lucide-react';

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
      <DialogContent className="max-w-6xl w-[90vw] h-[85vh] p-0 bg-white border-none shadow-2xl rounded-xl overflow-hidden">
        {/* macOS title bar */}
        <div className="flex items-center h-11 px-3 bg-[#f6f6f6] border-b border-[#e0e0e0]">
          <div className="flex items-center gap-2">
            <div className="flex gap-2">
              <button 
                className="w-3 h-3 rounded-full bg-[#ff5f57] hover:bg-[#ff3b30] transition-colors" 
                onClick={onClose}
              />
              <button className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ff9500] transition-colors" />
              <button className="w-3 h-3 rounded-full bg-[#28ca42] hover:bg-[#28cd41] transition-colors" />
            </div>
          </div>
          
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <span className="text-sm font-medium text-[#333] select-none">Photos</span>
          </div>
        </div>

        {/* Main content */}
        <div className="flex h-full">
          {/* Sidebar */}
          <div className="w-52 bg-[#f8f8f8] border-r border-[#e0e0e0] pt-2">
            <div className="px-3 space-y-3">
              <div>
                <div className="text-xs font-semibold text-[#8e8e93] uppercase tracking-wide mb-1.5">Library</div>
                <div className="space-y-0.5">
                  <div className="px-2 py-1.5 bg-[#007aff] text-white rounded-md text-sm font-medium cursor-pointer">
                    All Photos
                  </div>
                  <div className="px-2 py-1.5 text-[#333] rounded-md text-sm hover:bg-[#e8e8e8] cursor-pointer transition-colors">
                    Favorites
                  </div>
                  <div className="px-2 py-1.5 text-[#333] rounded-md text-sm hover:bg-[#e8e8e8] cursor-pointer transition-colors">
                    Recently Added
                  </div>
                  <div className="px-2 py-1.5 text-[#333] rounded-md text-sm hover:bg-[#e8e8e8] cursor-pointer transition-colors">
                    Screenshots
                  </div>
                </div>
              </div>
              
              <div>
                <div className="text-xs font-semibold text-[#8e8e93] uppercase tracking-wide mb-1.5">Albums</div>
                <div className="space-y-0.5">
                  <div className="px-2 py-1.5 text-[#333] rounded-md text-sm hover:bg-[#e8e8e8] cursor-pointer transition-colors">
                    Recents
                  </div>
                  <div className="px-2 py-1.5 text-[#333] rounded-md text-sm hover:bg-[#e8e8e8] cursor-pointer transition-colors">
                    Travel
                  </div>
                  <div className="px-2 py-1.5 text-[#333] rounded-md text-sm hover:bg-[#e8e8e8] cursor-pointer transition-colors">
                    Family
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Photos area */}
          <div className="flex-1 bg-white">
            <div className="px-4 py-2 border-b border-[#f0f0f0]">
              <h2 className="text-lg font-semibold text-[#1d1d1f]">All Photos</h2>
              <p className="text-xs text-[#86868b]">{photos.length} photos</p>
            </div>

            {/* Photos grid */}
            <div className="p-3 h-full overflow-auto">
              <div className="grid grid-cols-6 gap-0.5">
                {photos.map((photo, index) => {
                  // Create varied aspect ratios for more realistic layout
                  const isPortrait = (index + 1) % 7 === 0 || (index + 1) % 11 === 0;
                  const isLandscape = (index + 1) % 5 === 0 || (index + 1) % 13 === 0;
                  
                  return (
                    <div
                      key={photo.id}
                      className={`bg-[#f5f5f7] rounded-sm hover:scale-[1.02] transition-all duration-200 cursor-pointer border border-transparent hover:border-[#007aff] hover:shadow-lg ${
                        isPortrait ? 'row-span-2' : isLandscape ? 'col-span-2' : 'aspect-square'
                      }`}
                      style={{
                        aspectRatio: isPortrait ? '3/4' : isLandscape ? '4/3' : '1'
                      }}
                    >
                      <div className="w-full h-full rounded-sm bg-gradient-to-br from-[#f5f5f7] via-[#efefef] to-[#e8e8ed] flex items-center justify-center relative overflow-hidden">
                        {/* Subtle photo-like gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-white/40 opacity-30"></div>
                        <div className="text-[#86868b] text-xs font-medium z-10">
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