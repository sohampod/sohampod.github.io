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
      <DialogContent className="max-w-7xl w-[95vw] h-[90vh] p-0 bg-[#f6f6f6] border-none shadow-2xl rounded-lg overflow-hidden">
        {/* macOS window header */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#ececec] border-b border-[#d1d1d1]">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <button 
                className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff3b30] transition-colors" 
                onClick={onClose}
              />
              <button className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:bg-[#ff9500] transition-colors" />
              <button className="w-3 h-3 rounded-full bg-[#27ca3f] hover:bg-[#28cd41] transition-colors" />
            </div>
            <span className="ml-2 text-[13px] font-medium text-[#333] select-none">Photos</span>
          </div>
          
          {/* Toolbar */}
          <div className="flex items-center gap-4">
            <button className="p-1 hover:bg-[#d1d1d1] rounded transition-colors">
              <Grid3X3 className="w-4 h-4 text-[#666]" />
            </button>
            <button className="p-1 hover:bg-[#d1d1d1] rounded transition-colors">
              <Heart className="w-4 h-4 text-[#666]" />
            </button>
            <button className="p-1 hover:bg-[#d1d1d1] rounded transition-colors">
              <Share className="w-4 h-4 text-[#666]" />
            </button>
            <button className="p-1 hover:bg-[#d1d1d1] rounded transition-colors">
              <Trash2 className="w-4 h-4 text-[#666]" />
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="flex h-full">
          <div className="w-64 bg-[#f2f2f2] border-r border-[#d1d1d1] p-4">
            <div className="space-y-1">
              <div className="text-[11px] font-semibold text-[#666] uppercase tracking-wider mb-2">Library</div>
              <div className="py-1 px-2 bg-[#007aff] text-white rounded text-[13px] font-medium cursor-pointer">
                All Photos
              </div>
              <div className="py-1 px-2 text-[#333] rounded text-[13px] hover:bg-[#e5e5e5] cursor-pointer transition-colors">
                Favorites
              </div>
              <div className="py-1 px-2 text-[#333] rounded text-[13px] hover:bg-[#e5e5e5] cursor-pointer transition-colors">
                Recently Added
              </div>
              <div className="py-1 px-2 text-[#333] rounded text-[13px] hover:bg-[#e5e5e5] cursor-pointer transition-colors">
                Screenshots
              </div>
            </div>
            
            <div className="mt-6 space-y-1">
              <div className="text-[11px] font-semibold text-[#666] uppercase tracking-wider mb-2">Albums</div>
              <div className="py-1 px-2 text-[#333] rounded text-[13px] hover:bg-[#e5e5e5] cursor-pointer transition-colors">
                Recents
              </div>
              <div className="py-1 px-2 text-[#333] rounded text-[13px] hover:bg-[#e5e5e5] cursor-pointer transition-colors">
                Travel
              </div>
              <div className="py-1 px-2 text-[#333] rounded text-[13px] hover:bg-[#e5e5e5] cursor-pointer transition-colors">
                Family
              </div>
            </div>
          </div>

          {/* Main content area */}
          <div className="flex-1 bg-white">
            {/* Content header */}
            <div className="px-6 py-4 border-b border-[#e5e5e5] bg-white">
              <h2 className="text-[22px] font-medium text-[#333]">All Photos</h2>
              <p className="text-[13px] text-[#666] mt-1">{photos.length} photos</p>
            </div>

            {/* Photos grid */}
            <div className="p-6 bg-white h-full overflow-auto">
              <div className="grid grid-cols-6 gap-2">
                {photos.map((photo) => (
                  <div
                    key={photo.id}
                    className="aspect-square bg-[#f8f8f8] rounded-sm hover:shadow-md transition-all duration-200 cursor-pointer group border border-[#e5e5e5]"
                  >
                    <div className="w-full h-full rounded-sm bg-gradient-to-br from-[#f0f0f0] to-[#e8e8e8] flex items-center justify-center">
                      <div className="text-[#999] text-[10px] font-medium">
                        Photo {photo.id}
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