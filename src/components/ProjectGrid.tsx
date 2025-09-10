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
    <section className="flex w-full max-w-[1650px] flex-col mr-[76px] mt-[100px] max-md:max-w-full max-md:mr-2.5 max-md:mt-10">
      {/* Resume - standalone */}
      <div className="flex w-[85px] flex-col items-stretch text-sm text-[rgba(255,255,240,1)] font-normal whitespace-nowrap text-center leading-[1.2] px-1.5">
        <ProjectIcon
          src={projects[0].image}
          alt="Resume PDF file"
          title={projects[0].title}
          onClick={() => handleProjectClick(projects[0])}
        />
      </div>

      {/* First row - Projects 1 & 2 */}
      <div className="flex w-[281px] max-w-full gap-[29px] text-sm text-[rgba(255,255,240,1)] font-normal text-center leading-[1.2] mr-[63px] mt-6 max-md:mr-2.5">
        <ProjectIcon
          src={projects[1].image}
          alt="Discord project"
          title={projects[1].title}
          onClick={() => handleProjectClick(projects[1])}
          className="flex-1"
        />
        <ProjectIcon
          src={projects[2].image}
          alt="Ather EV project"
          title={projects[2].title}
          onClick={() => handleProjectClick(projects[2])}
          className="flex-1 mt-3.5"
        />
      </div>

      {/* Second row - Projects 3 & 4 */}
      <div className="flex w-[292px] max-w-full gap-10 text-sm text-[rgba(255,255,240,1)] font-normal text-center leading-[1.2] mt-[37px] max-md:mr-1">
        <ProjectIcon
          src={projects[3].image}
          alt="The Swag Co project"
          title={projects[3].title}
          onClick={() => handleProjectClick(projects[3])}
          className="flex-1"
        />
        <ProjectIcon
          src={projects[4].image}
          alt="Globacom project"
          title={projects[4].title}
          onClick={() => handleProjectClick(projects[4])}
          className="flex-1 mt-[18px]"
        />
      </div>

      {/* Third row - Projects 5, 6, 7, 8 with quote */}
      <div className="flex w-[1140px] max-w-full items-stretch gap-[21px] font-normal text-center flex-wrap mt-8">
        <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
          <div className="w-[126px] max-w-full text-sm text-[rgba(255,255,240,1)] leading-[1.2]">
            <ProjectIcon
              src={projects[5].image}
              alt="Tranquil Stay project"
              title={projects[5].title}
              onClick={() => handleProjectClick(projects[5])}
            />
            <div className="mt-[31px]">
              <ProjectIcon
                src={projects[7].image}
                alt="This portfolio project"
                title={projects[7].title}
                onClick={() => handleProjectClick(projects[7])}
              />
            </div>
          </div>
        </div>
        <div className="text-sm text-[rgba(255,255,240,1)] leading-[1.2] mt-10">
          <ProjectIcon
            src={projects[6].image}
            alt="Home Food project"
            title={projects[6].title}
            onClick={() => handleProjectClick(projects[6])}
          />
          <div className="mt-14 max-md:mr-[3px] max-md:mt-10">
            <ProjectIcon
              src={projects[8].image}
              alt="Thok Bajaar project"
              title={projects[8].title}
              onClick={() => handleProjectClick(projects[8])}
            />
          </div>
        </div>
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
