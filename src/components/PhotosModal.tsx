import React from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X } from 'lucide-react';
import photo1 from '@/assets/photo-1.jpg';
import photo2 from '@/assets/photo-2.jpg';
import photo3 from '@/assets/photo-3.jpg';
import photo4 from '@/assets/photo-4.jpg';
import photo5 from '@/assets/photo-5.jpg';
import photo6 from '@/assets/photo-6.jpg';

interface PhotosModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const photos = [
  { id: 1, src: photo1, alt: 'Nature Landscape' },
  { id: 2, src: photo2, alt: 'Mountain Forest' },
  { id: 3, src: photo3, alt: 'City Skyline' },
  { id: 4, src: photo4, alt: 'Gourmet Food' },
  { id: 5, src: photo5, alt: 'Vintage Car' },
  { id: 6, src: photo6, alt: 'Sunset Beach' },
];

export const PhotosModal: React.FC<PhotosModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl w-[95vw] h-[85vh] p-0 bg-background border-none shadow-2xl">
        {/* Mac-style window header */}
        <div className="flex items-center justify-between px-4 py-3 bg-background border-b border-border">
          <div className="flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" onClick={onClose} />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="ml-4 text-sm font-medium text-foreground">Photos</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:bg-muted rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Photos grid with scattered layout */}
        <div className="flex-1 p-6 bg-background overflow-hidden relative">
          <div className="relative h-full">
            {photos.map((photo, index) => (
              <div
                key={photo.id}
                className="absolute transition-all duration-300 hover:scale-105 hover:z-10 cursor-pointer group"
                style={{
                  left: `${(index % 3) * 30 + Math.random() * 15}%`,
                  top: `${Math.floor(index / 3) * 35 + Math.random() * 10}%`,
                  transform: `rotate(${(Math.random() - 0.5) * 20}deg)`,
                  zIndex: index,
                }}
              >
                <div className="bg-white p-2 shadow-lg rounded-sm group-hover:shadow-2xl transition-shadow">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-48 h-32 object-cover rounded-sm"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom toolbar */}
        <div className="flex items-center justify-between px-6 py-3 bg-muted/50 border-t border-border">
          <div className="text-sm text-muted-foreground">
            {photos.length} photos
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 text-sm bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors">
              View All
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};