import React, { useState } from 'react';
import { ProjectIcon } from '@/components/ui/project-icon';
import { FinderModal } from '@/components/FinderModal';

interface Project {
  id: string;
  title: string;
  image: string;
  links: {
    name: string;
    url: string;
    type: 'github' | 'live' | 'demo' | 'documentation';
    icon?: string;
  }[];
}

const projects: Project[] = [
  {
    id: 'resume',
    title: 'resume.pdf',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/8b24475ceba17d421430769c195421c63929f4a2?placeholderIfAbsent=true',
    links: [
      { name: 'Download PDF', url: 'https://drive.google.com/uc?export=download&id=1evTHFUHJTR8VZp9Ns0Gi7a1BuVZo__H3', type: 'documentation', icon: '📄' },
      { name: 'View Online', url: 'https://drive.google.com/file/d/1evTHFUHJTR8VZp9Ns0Gi7a1BuVZo__H3/view?usp=sharing', type: 'live', icon: '👁️' }
    ]
  },
  {
    id: 'project1',
    title: 'project 1 (discord)',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/053a9f02e0dea8521ef246f2c170b44d66c19ffb?placeholderIfAbsent=true',
    links: [
      { name: 'TLDR; Case Study', url: 'https://www.figma.com/deck/e0fGZ4yg77hcKYDzUdQxxA/Discord-Case-Study?node-id=1-42&viewport=-73%2C-100%2C0.58&t=2IGbubGZaTfajX4M-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1', type: 'figma', icon: '🔗' },
      { name: 'Onboarding Flow', url: 'https://www.figma.com/proto/Erd0OPy2YDOTnWuKdLw4oO/Discord-Onboarding?node-id=535-6766&viewport=-6375%2C2668%2C0.61&scaling=scale-down&starting-point-node-id=535%3A6766&show-proto-sidebar=1', type: 'live', icon: '🌐' },
      { name: 'Discord Case Study', url: 'https://sohampod.super.site/discord-a-ux-case-study', type: 'documentation', icon: '📚' },
      { name: 'Presentation', url: 'https://www.youtube.com/watch?v=KnDjGeLF5iw&t', type: 'video', icon: '▶' }
    ]
  },
  {
    id: 'project2',
    title: 'project 2 (atherEV)',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/053a9f02e0dea8521ef246f2c170b44d66c19ffb?placeholderIfAbsent=true',
    links: [
      { name: 'TLDR; Ather Case Study', url: 'https://www.figma.com/deck/guBpY7Y7WqUYSTWGLY9Xfu/Ather-Slide-Deck?node-id=1-42&t=qxKMN5gv7yOUvVsd-1', type: 'figma', icon: '🔗' },
      { name: 'Ather Case Study', url: 'https://sohampod.super.site/ather-ev-a-ux-case-study', type: 'live', icon: '📚' },
      { name: 'Prototype', url: 'https://www.figma.com/proto/54Ldmu2FbAIUxWymNvwtNg/Ather-EV?kind=proto&node-id=97-424&page-id=0:1&scaling=scale-down&starting-point-node-id=97:424&viewport=1636,362,0.42', type: 'live', icon: '🌐' },
      { name: 'Presentation', url: 'https://www.youtube.com/watch?v=v393ghXUWbg', type: 'demo', icon: '▶' }
    ]
  },
  {
    id: 'project3',
    title: 'project 3 (theswagco)',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/053a9f02e0dea8521ef246f2c170b44d66c19ffb?placeholderIfAbsent=true',
    links: [
      { name: 'Presentation', url: 'https://www.figma.com/proto/zkr6MAcgUbu3jDmer8LjGp/UX-Case-Study-ReWorks?node-id=0-1&p=f&viewport=194%2C693%2C0.07&t=qki6xhNZcXR5ccOy-0&scaling=contain&content-scaling=fixed&starting-point-node-id=1%3A3', type: 'figma', icon: '🔗' },
      { name: 'The Swag Co (current site)', url: 'https://theswagco.com', type: 'live', icon: '🌐' },
      { name: 'Reworks.in (old site)', url: 'https://reworks.in/', type: 'live', icon: '🌐' }
    ]
  },
  {
    id: 'project4',
    title: 'project 4 (globacom)',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/053a9f02e0dea8521ef246f2c170b44d66c19ffb?placeholderIfAbsent=true',
    links: [
      { name: 'Relay CSP Deck', url: 'https://www.figma.com/deck/Mzinz9WNxlzJ5xkI1OM3KN/Relay-CSP?node-id=1-96&t=gsLzbUAUcFuWjjFH-1', type: 'figma deck', icon: '📋' },
      { name: '4 Website iterations', url: 'https://www.figma.com/proto/GVJXwNIoI4EuC9gxKeDLMU/globacom?node-id=1-2&p=f&t=L7Y71J9WtqhsJqfg-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1', type: 'iterations', icon: '🔗' },
      { name: '2 mobile iterations', url: 'https://www.figma.com/proto/GVJXwNIoI4EuC9gxKeDLMU/globacom?node-id=3-5423&p=f&t=sktF21TELUhqMYlK-1&scaling=min-zoom&content-scaling=fixed&page-id=3%3A5217&starting-point-node-id=3%3A5423&show-proto-sidebar=1', type: 'iterations', icon: '🔗' },
      { name: 'final draft', url: 'https://www.figma.com/proto/GVJXwNIoI4EuC9gxKeDLMU/globacom?node-id=3-6435&p=f&t=YCW8n91z3vA1G9fB-1&scaling=contain&content-scaling=fixed&page-id=3%3A6429&starting-point-node-id=3%3A6435', type: 'live', icon: '🌐' }
    ]
  },
  {
    id: 'project5',
    title: 'project 5 (tranquilstay)',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/053a9f02e0dea8521ef246f2c170b44d66c19ffb?placeholderIfAbsent=true',
    links: [
      { name: 'GitHub Repository', url: 'https://github.com/username/tranquilstay', type: 'github', icon: '🔗' },
      { name: 'Live Booking Site', url: 'https://tranquilstay.com', type: 'live', icon: '🏨' },
      { name: 'Mobile App', url: 'https://app.tranquilstay.com', type: 'demo', icon: '📱' }
    ]
  },
  {
    id: 'project6',
    title: 'project 6 (homefood)',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/053a9f02e0dea8521ef246f2c170b44d66c19ffb?placeholderIfAbsent=true',
    links: [
      { name: 'GitHub Repository', url: 'https://github.com/username/homefood', type: 'github', icon: '🔗' },
      { name: 'Live Platform', url: 'https://homefood.com', type: 'live', icon: '🍽️' },
      { name: 'Chef Dashboard', url: 'https://chef.homefood.com', type: 'demo', icon: '👨‍🍳' }
    ]
  },
  {
    id: 'project7',
    title: 'project 7 (this portfolio)',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/053a9f02e0dea8521ef246f2c170b44d66c19ffb?placeholderIfAbsent=true',
    links: [
      { name: 'GitHub Repository', url: 'https://github.com/username/portfolio', type: 'github', icon: '🔗' },
      { name: 'Live Portfolio', url: 'https://sohampod.dev', type: 'live', icon: '🌐' },
      { name: 'Design System', url: 'https://design.sohampod.dev', type: 'documentation', icon: '🎨' }
    ]
  },
  {
    id: 'project8',
    title: 'project 8 (serenezen)',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/053a9f02e0dea8521ef246f2c170b44d66c19ffb?placeholderIfAbsent=true',
    links: [
      { name: 'Presentation', url: 'https://www.figma.com/proto/4K7tWUuwAqiYiiozBqTBWv/Meditation-App--Serenezen-?page-id=2301%3A454&node-id=2301-486&p=f&viewport=45%2C266%2C0.08&t=emskZLLAfVIExx8S-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2301%3A486&show-proto-sidebar=1', type: 'figma', icon: '📄' },
      { name: 'Wireframes', url: 'https://www.figma.com/proto/4K7tWUuwAqiYiiozBqTBWv/Meditation-App--Serenezen-?page-id=2301%3A454&node-id=2301-5962&p=f&viewport=45%2C266%2C0.08&t=emskZLLAfVIExx8S-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2301%3A5962&show-proto-sidebar=1', type: 'figma', icon: '🛍️' },
      { name: 'High Fidelity Screens', url: 'https://www.figma.com/proto/4K7tWUuwAqiYiiozBqTBWv/Meditation-App--Serenezen-?page-id=2301%3A454&node-id=2301-6194&p=f&viewport=45%2C266%2C0.08&t=emskZLLAfVIExx8S-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=2301%3A6194&show-proto-sidebar=1', type: 'figma', icon: '📊' }
    ]
  }
];

export const ProjectGrid: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="flex w-full justify-end">
      {/* 2-column grid */}
      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-[300px]">
        {projects.map((project, index) => (
          <div key={project.id} className="flex justify-center">
            <ProjectIcon
              src={project.image}
              alt={`${project.title} project`}
              title={project.title}
              onClick={() => handleProjectClick(project)}
            />
          </div>
        ))}
      </div>
      
      <FinderModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        projectTitle={selectedProject?.title || ''}
        projectLinks={selectedProject?.links || []}
      />
    </section>
  );
};
