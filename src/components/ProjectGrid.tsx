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
      { name: 'Download PDF', url: '#resume-download', type: 'documentation', icon: '📄' },
      { name: 'View Online', url: '#resume-view', type: 'live', icon: '👁️' }
    ]
  },
  {
    id: 'project1',
    title: 'project 1 (discord)',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/053a9f02e0dea8521ef246f2c170b44d66c19ffb?placeholderIfAbsent=true',
    links: [
      { name: 'GitHub Repository', url: 'https://github.com/username/discord-project', type: 'github', icon: '🔗' },
      { name: 'Live Demo', url: 'https://discord-project-demo.com', type: 'live', icon: '🌐' },
      { name: 'Documentation', url: 'https://docs.discord-project.com', type: 'documentation', icon: '📚' }
    ]
  },
  {
    id: 'project2',
    title: 'project 2 (atherEV)',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/053a9f02e0dea8521ef246f2c170b44d66c19ffb?placeholderIfAbsent=true',
    links: [
      { name: 'GitHub Repository', url: 'https://github.com/username/ather-ev', type: 'github', icon: '🔗' },
      { name: 'Live Website', url: 'https://ather-ev-project.com', type: 'live', icon: '🌐' },
      { name: 'Case Study', url: 'https://case-study-ather-ev.com', type: 'demo', icon: '📖' }
    ]
  },
  {
    id: 'project3',
    title: 'project 3 (theswagco)',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/053a9f02e0dea8521ef246f2c170b44d66c19ffb?placeholderIfAbsent=true',
    links: [
      { name: 'GitHub Repository', url: 'https://github.com/username/theswagco', type: 'github', icon: '🔗' },
      { name: 'Live Store', url: 'https://theswagco.com', type: 'live', icon: '🛒' },
      { name: 'Admin Panel', url: 'https://admin.theswagco.com', type: 'demo', icon: '⚙️' }
    ]
  },
  {
    id: 'project4',
    title: 'project 4 (globacom)',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/053a9f02e0dea8521ef246f2c170b44d66c19ffb?placeholderIfAbsent=true',
    links: [
      { name: 'GitHub Repository', url: 'https://github.com/username/globacom', type: 'github', icon: '🔗' },
      { name: 'Live Website', url: 'https://globacom-project.com', type: 'live', icon: '🌐' },
      { name: 'API Documentation', url: 'https://api.globacom-project.com', type: 'documentation', icon: '📋' }
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
    title: 'project 8 (thokbajaar)',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/053a9f02e0dea8521ef246f2c170b44d66c19ffb?placeholderIfAbsent=true',
    links: [
      { name: 'GitHub Repository', url: 'https://github.com/username/thokbajaar', type: 'github', icon: '🔗' },
      { name: 'Live Marketplace', url: 'https://thokbajaar.com', type: 'live', icon: '🛍️' },
      { name: 'Seller Dashboard', url: 'https://seller.thokbajaar.com', type: 'demo', icon: '📊' }
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
    <section className="flex w-full justify-end mr-[76px] mt-[100px] max-md:mr-2.5 max-md:mt-10">
      {/* 2-column grid aligned to right */}
      <div className="grid grid-cols-2 gap-8 max-w-[300px]">
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
