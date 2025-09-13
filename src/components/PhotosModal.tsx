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
        <div className="flex items-center justify-between h-11 px-3 bg-[#f6f6f6] border-b border-[#e0e0e0]">
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
          
          <div className="flex items-center gap-3">
            <button className="p-1.5 hover:bg-[#e0e0e0] rounded-md transition-colors">
              <Grid3X3 className="w-4 h-4 text-[#666]" />
            </button>
            <button className="p-1.5 hover:bg-[#e0e0e0] rounded-md transition-colors">
              <Heart className="w-4 h-4 text-[#666]" />
            </button>
            <button className="p-1.5 hover:bg-[#e0e0e0] rounded-md transition-colors">
              <Share className="w-4 h-4 text-[#666]" />
            </button>
            <button className="p-1.5 hover:bg-[#e0e0e0] rounded-md transition-colors">
              <Trash2 className="w-4 h-4 text-[#666]" />
            </button>
          </div>
        </div>

        {/* Main content */}
        <div className="flex h-full">
          {/* Sidebar */}
          <div className="w-52 bg-[#f8f8f8] border-r border-[#e0e0e0]">
            <div className="p-4 space-y-4">
              <div>
                <div className="text-xs font-semibold text-[#8e8e93] uppercase tracking-wide mb-2">Library</div>
                <div className="space-y-1">
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
                <div className="text-xs font-semibold text-[#8e8e93] uppercase tracking-wide mb-2">Albums</div>
                <div className="space-y-1">
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
            {/* Content header */}
            <div className="px-5 py-3 border-b border-[#f0f0f0]">
              <h2 className="text-xl font-semibold text-[#1d1d1f]">All Photos</h2>
              <p className="text-sm text-[#86868b] mt-0.5">{photos.length} photos</p>
            </div>

            {/* Photos grid */}
            <div className="p-5 h-full overflow-auto">
              <div className="grid grid-cols-8 gap-1">
                {photos.map((photo) => (
                  <div
                    key={photo.id}
                    className="aspect-square bg-[#f5f5f7] rounded hover:scale-105 transition-transform duration-200 cursor-pointer group border border-transparent hover:border-[#007aff]"
                  >
                    <div className="w-full h-full rounded bg-gradient-to-br from-[#f5f5f7] to-[#e8e8ed] flex items-center justify-center">
                      <div className="text-[#86868b] text-xs font-medium">
                        {photo.id}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};