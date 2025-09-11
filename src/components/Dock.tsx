import React, { useState } from 'react';
import { DockIcon } from '@/components/ui/dock-icon';
import { IMessageModal } from '@/components/iMessageModal';

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
    name: 'Application 1',
    icon: 'https://api.builder.io/api/v1/image/assets/TEMP/0720e85bda36af5cf72bffadc72b433d809fd19b?placeholderIfAbsent=true'
  },
  {
    id: 'app2',
    name: 'Application 2',
    icon: 'https://api.builder.io/api/v1/image/assets/TEMP/8d4d39199399d8c52d26d3e6a437315176acec38?placeholderIfAbsent=true'
  },
  {
    id: 'app3',
    name: 'Application 3',
    icon: 'https://api.builder.io/api/v1/image/assets/TEMP/0314866760e369841c1e5abb8fce2ce5bcbc7e18?placeholderIfAbsent=true'
  },
  {
    id: 'app4',
    name: 'Application 4',
    icon: 'https://api.builder.io/api/v1/image/assets/TEMP/cf06eb75be61de7f90f45fea8c755e8dda461547?placeholderIfAbsent=true'
  },
  {
    id: 'app5',
    name: 'Application 5',
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

  const handleAppClick = (app: DockApp) => {
    if (app.id === 'app1') {
      setIsMessageModalOpen(true);
    } else {
      console.log(`Opening ${app.name}`);
    }
  };

  return (
    <nav 
      className="bg-[rgba(255,255,255,0.002)] shadow-[0px_0px_31px_rgba(0,0,0,0.25)] self-center w-[529px] max-w-full mt-[42px] rounded-[17px] max-md:mt-10"
      role="navigation"
      aria-label="Application dock"
    >
      <div className="border flex gap-4 items-center px-4 py-[7px] rounded-[17px] border-[rgba(255,255,255,0.1)] border-solid w-fit bg-[rgba(255,255,255,0.05)] backdrop-blur-sm">
        {dockApps.slice(0, -2).filter(app => app.id !== 'finder').map((app) => (
          <DockIcon
            key={app.id}
            src={app.icon}
            alt={app.name}
            onClick={() => handleAppClick(app)}
          />
        ))}
        
        {/* Separator */}
        <div className="flex items-center">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/1e16124ee43a3ce418d64092cbba50cede15404e?placeholderIfAbsent=true"
            alt=""
            className="aspect-[0.02] object-contain w-px shrink-0"
            role="separator"
          />
        </div>
        
        {/* Trash */}
        <DockIcon
          src={dockApps[dockApps.length - 1].icon}
          alt={dockApps[dockApps.length - 1].name}
          onClick={() => handleAppClick(dockApps[dockApps.length - 1])}
        />
      </div>
      
      <IMessageModal 
        isOpen={isMessageModalOpen}
        onClose={() => setIsMessageModalOpen(false)}
      />
    </nav>
  );
};
