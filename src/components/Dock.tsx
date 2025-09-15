import React, { useState } from 'react';
import { DockIcon } from './ui/dock-icon';
import { IMessageModal } from './iMessageModal';
import { PhotosModal } from './PhotosModal';
import { TimelineModal } from './TimelineModal';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@radix-ui/react-tooltip';
import { RolodexModal } from './RolodexModal';
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
    id: 'app6',
    name: 'Contacts',
