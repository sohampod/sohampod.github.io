import React, { useState } from 'react';
import { DockIcon } from './ui/dock-icon';
import { IMessageModal } from './iMessageModal';
import { PhotosModal } from './PhotosModal';
import { TimelineModal } from './TimelineModal';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@radix-ui/react-tooltip';
import { AppleMusicModal } from './AppleMusicModal';

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
    name: 'iMessage',
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
    name: 'Video Chat',
    icon: 'https://api.builder.io/api/v1/image/assets/TEMP/cf06eb75be61de7f90f45fea8c755e8dda461547?placeholderIfAbsent=true'
  },
  {
    id: 'app5',
    name: 'Calendar',
    icon: 'https://api.builder.io/api/v1/image/assets/TEMP/058265cacc3489f22f961135746cb2c57a9943d0?placeholderIfAbsent=true'
  },
  {
    id: 'trash',
    name: 'Apple Music',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Apple_Music_icon.svg/2048px-Apple_Music_icon.svg.png'
  }
];

export const Dock: React.FC = () => {
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [isPhotosModalOpen, setIsPhotosModalOpen] = useState(false);
  const [isTimelineModalOpen, setIsTimelineModalOpen] = useState(false);
  const [isRolodexModalOpen, setIsRolodexModalOpen] = useState(false);
  const [isAppleMusicModalOpen, setIsAppleMusicModalOpen] = useState(false);

  const handleAppClick = (app: DockApp) => {
    if (app.id === 'app1') {
      setIsMessageModalOpen(true);
    } else if (app.id === 'app2') {
      window.open('mailto:soham.poddar23@gmail.com', '_blank');
    } else if (app.id === 'app3') {
      setIsPhotosModalOpen(true);
    } else if (app.id === 'app4') {
      window.open('https://calendly.com/sohampod/30min', '_blank');
    } else if (app.id === 'app5') {
      setIsTimelineModalOpen(true);
    } else if (app.id === 'app6') {
      setIsRolodexModalOpen(true);
    } else if (app.id === 'trash') { // Now opens the Apple Music Modal when clicking the trash icon
      setIsAppleMusicModalOpen(true);
    } else {
      console.log(`Opening ${app.name}`);
    }
  };

  return (
    <nav
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-[rgba(255,255,255,0.05)] backdrop-blur-xl shadow-2xl mx-auto w-fit px-4 py-2 rounded-[17px] border border-[rgba(255,255,255,0.1)]"
      role="navigation"
      aria-label="Application dock"
    >
      <div className="flex gap-4 items-center">
        {dockApps.filter(app => app.id !== 'finder' && app.id !== 'trash').map((app) => (
          app.id === 'app2' ? (
            <TooltipProvider delayDuration={0} key={app.id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <DockIcon
                    src={app.icon}
                    alt={app.name}
                    onClick={() => handleAppClick(app)}
                  />
                </TooltipTrigger>
                <TooltipContent side="top" align="center">
                  <p>soham.poddar23@gmail.com</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <DockIcon
              key={app.id}
              src={app.icon}
              alt={app.name}
              onClick={() => handleAppClick(app)}
            />
          )
        ))}
        {/* Separator */}
        <div className="flex items-center">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/1e16124ee43a3ce418d64092cbba50cede15404e?placeholderIfAbsent=true"
            alt=""
            className="aspect-[0.02] object-contain w-px shrink-0 h-10"
            role="separator"
          />
        </div>
        {/* Apple Music Icon (formerly trash) */}
        <DockIcon
          src={dockApps.find(app => app.id === 'trash')?.icon}
          alt={dockApps.find(app => app.id === 'trash')?.name}
          onClick={() => handleAppClick(dockApps.find(app => app.id === 'trash'))}
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
      <RolodexModal
        isOpen={isRolodexModalOpen}
        onClose={() => setIsRolodexModalOpen(false)}
      />
      <AppleMusicModal
        isOpen={isAppleMusicModalOpen}
        onClose={() => setIsAppleMusicModalOpen(false)}
      />
    </nav>
  );
};
