import React, { useState, useRef } from 'react';

// DockIcon component is now defined within this single file.
interface DockIconProps {
  src: string;
  alt: string;
  scale: number;
  isHovered: boolean;
  onClick: () => void;
}

const DockIcon: React.FC<DockIconProps> = ({ src, alt, scale, isHovered, onClick }) => {
  return (
    <div
      className="relative flex items-center justify-center transition-transform duration-100 ease-out"
      style={{
        transform: `scale(${scale})`,
        height: '4rem', // Fixed size to prevent layout shift
        width: '4rem',
      }}
      onClick={onClick}
    >
      <img
        src={src}
        alt={alt}
        className="h-12 w-12 rounded-lg"
        style={{ transform: `scale(${scale})` }}
      />
      {isHovered && (
        <span className="absolute -top-4 bg-white/10 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded-md whitespace-nowrap">
          {alt}
        </span>
      )}
    </div>
  );
};

// IMessageModal component is now defined within this single file.
const IMessageModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-3xl" onClick={onClose}>
      <div
        className="w-full max-w-lg rounded-2xl border border-[rgba(255,255,255,0.2)] bg-white/10 p-6 shadow-2xl backdrop-blur-3xl transition-transform duration-300 transform scale-100 opacity-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">Messages</h2>
          <button onClick={onClose} className="p-1 rounded-full text-white hover:bg-white/20 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div className="mt-4 text-white">
          <p>I'm not available via iMessage at the moment. Please feel free to reach out via email.</p>
        </div>
      </div>
    </div>
  );
};

// PhotosModal component is now defined within this single file.
const PhotosModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-3xl" onClick={onClose}>
      <div
        className="w-full max-w-lg rounded-2xl border border-[rgba(255,255,255,0.2)] bg-white/10 p-6 shadow-2xl backdrop-blur-3xl transition-transform duration-300 transform scale-100 opacity-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">Photos</h2>
          <button onClick={onClose} className="p-1 rounded-full text-white hover:bg-white/20 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div className="mt-4 text-white">
          <p>This is a placeholder for the Photos app.</p>
        </div>
      </div>
    </div>
  );
};

// TimelineModal component is now defined within this single file.
const TimelineModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const milestones = [
    {
      date: 'Q1 2024',
      title: 'Project Kick-off',
      description: 'Defined project scope, goals, and core functionalities. Assembled the development team and established the initial roadmap.'
    },
    {
      date: 'Q2 2024',
      title: 'Prototype Development',
      description: 'Completed the first functional prototype. Focused on core user flows and tested initial design concepts with user groups.'
    },
    {
      date: 'Q3 2024',
      title: 'Beta Launch',
      description: 'Launched the private beta to a select group of users. Collected feedback and began iterating on key features.'
    },
    {
      date: 'Q4 2024',
      title: 'Full Public Release',
      description: 'After extensive testing and refinements, the project was officially launched to the public. Focused on performance and scalability.'
    }
  ];
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-3xl" onClick={onClose}>
      <div
        className="w-full max-w-2xl rounded-2xl border border-[rgba(255,255,255,0.2)] bg-white/10 p-6 shadow-2xl backdrop-blur-3xl transition-transform duration-300 transform scale-100 opacity-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">Project Timeline</h2>
          <button onClick={onClose} className="p-1 rounded-full text-white hover:bg-white/20 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div className="mt-6 space-y-8 text-white">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="flex flex-col items-center">
                <span className="h-3 w-3 rounded-full bg-blue-500 flex-shrink-0"></span>
                {index < milestones.length - 1 && (
                  <div className="h-full w-0.5 mt-2 bg-blue-500/50"></div>
                )}
              </div>
              <div className="flex flex-col">
                <p className="text-sm font-light uppercase text-gray-300">{milestone.date}</p>
                <h3 className="text-lg font-bold">{milestone.title}</h3>
                <p className="mt-1 text-sm text-gray-200">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main Dock Component
interface DockApp {
  id: string;
  name: string;
  icon: string;
}

const dockApps: DockApp[] = [
  {
    id: 'finder',
    name: 'Finder',
    icon: 'https://api.builder.io/api/v1/image/assets/TEMP/b8bf148cd21b0202e2ebaecc611c36be1a387e72?placeholderIfAbsent=true'
  },
  {
    id: 'app1',
    name: 'Messages',
    icon: 'https://api.builder.io/api/v1/image/assets/TEMP/0720e85bda36af5cf72bffadc72b433d809fd19b?placeholderIfAbsent=true'
  },
  {
    id: 'app2',
    name: 'Mail',
    icon: 'https://api.builder.io/api/v1/image/assets/TEMP/8d4d39199399d8c52d26d3e6a437315176acec38?placeholderIfAbsent=true'
  },
  {
    id: 'app3',
    name: 'Photos',
    icon: 'https://api.builder.io/api/v1/image/assets/TEMP/0314866760e369841c1e5abb8fce2ce5bcbc7e18?placeholderIfAbsent=true'
  },
  {
    id: 'app4',
    name: 'FaceTime',
    icon: 'https://api.builder.io/api/v1/image/assets/TEMP/cf06eb75be61de7f90f45fea8c755e8dda461547?placeholderIfAbsent=true'
  },
  {
    id: 'app5',
    name: 'Calendar',
    icon: 'https://api.builder.io/api/v1/image/assets/TEMP/058265cacc3489f22f961135746cb2c57a9943d0?placeholderIfAbsent=true'
  },
  {
    id: 'app6',
    name: 'Application 6',
    icon: 'https://api.builder.io/api/v1/image/assets/TEMP/fd8217c417340dce4e235c72bccb617c649e2308?placeholderIfAbsent=true'
  },
  {
    id: 'app7',
    name: 'Application 7',
    icon: 'https://api.builder.io/api/v1/image/assets/TEMP/a1337cf666eaa6346cf0ac6a06de1bd74fc45efe?placeholderIfAbsent=true'
  },
  {
    id: 'trash',
    name: 'Trash',
    icon: 'https://api.builder.io/api/v1/image/assets/TEMP/993227f21a88eb8e7556fd58357efb7a435b4409?placeholderIfAbsent=true'
  }
];

export const Dock: React.FC = () => {
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [isPhotosModalOpen, setIsPhotosModalOpen] = useState(false);
  const [isTimelineModalOpen, setIsTimelineModalOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const calendlyUrl = 'https://calendly.com/sohampod/30min';
  const dockRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState<{ x: number | null }>({ x: null });

  const handleAppClick = (app: DockApp) => {
    if (app.id === 'app1') {
      setIsMessageModalOpen(true);
    } else if (app.id === 'app2') {
      window.open('mailto:soham.poddar23@gmail.com', '_blank');
    } else if (app.id === 'app3') {
      setIsPhotosModalOpen(true);
    } else if (app.id === 'app4') {
      window.open(calendlyUrl, '_blank');
    } else if (app.id === 'app5') {
      setIsTimelineModalOpen(true);
    } else {
      console.log(`Opening ${app.name}`);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!dockRef.current) return;
    const dockRect = dockRef.current.getBoundingClientRect();
    const x = e.clientX - dockRect.left;
    setMousePosition({ x });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: null });
  };

  const calculateScale = (index: number) => {
    if (mousePosition.x === null) return 1;

    const dockRect = dockRef.current.getBoundingClientRect();
    const iconWidth = 64; // The width of each DockIcon div (16*4)
    const iconCenter = index * (iconWidth + 8) + iconWidth / 2 + 16;
    const distance = Math.abs(mousePosition.x - iconCenter);
    const radius = 100; // Radius of effect
    const maxScale = 1.25;

    if (distance > radius) {
      return 1;
    }

    const scale = 1 + (maxScale - 1) * (1 - distance / radius);
    return Math.max(1, scale);
  };

  return (
    <nav
      className="bg-[rgba(255,255,255,0.002)] shadow-[0px_0px_31px_rgba(0,0,0,0.25)] mx-auto w-fit mt-[42px] rounded-[17px] max-md:mt-10"
      role="navigation"
      aria-label="Application dock"
    >
      <div
        ref={dockRef}
        className="border flex gap-2 items-end px-4 py-2 rounded-[17px] border-[rgba(255,255,255,0.1)] border-solid min-w-fit bg-[rgba(255,255,255,0.05)] backdrop-blur-sm"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {dockApps.slice(0, -2).filter(app => app.id !== 'finder').map((app, index) => {
          const scale = calculateScale(index);
          const isHovered = scale > 1.1; // Show tooltip if icon is significantly scaled
          
          return (
            <DockIcon
              key={app.id}
              src={app.icon}
              alt={app.name}
              onClick={() => handleAppClick(app)}
              scale={scale}
              isHovered={isHovered}
            />
          );
        })}

        {/* Separator */}
        <div className="flex items-center self-stretch">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/1e16124ee43a3ce418d64092cbba50cede15404e?placeholderIfAbsent=true"
            alt=""
            className="aspect-[0.02] object-contain w-px shrink-0 h-full"
            role="separator"
          />
        </div>

        {/* Trash */}
        <DockIcon
          src={dockApps[dockApps.length - 1].icon}
          alt={dockApps[dockApps.length - 1].name}
          onClick={() => handleAppClick(dockApps[dockApps.length - 1])}
          scale={1}
          isHovered={false}
        />
      </div>

      <IMessageModal
        isOpen={isMessageModalOpen}
        onClose={() => setIsMessageModalOpen(false)}
      />

      <PhotosModal
        isOpen={isPhotosModalOpen}
        onClose={() => setIsPhotosModalOpen(false)}
      />

      <TimelineModal
        isOpen={isTimelineModalOpen}
        onClose={() => setIsTimelineModalOpen(false)}
      />
    </nav>
  );
};
