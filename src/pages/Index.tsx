import React from 'react';
import { TopBar } from '@/components/TopBar';
import { ProjectGrid } from '@/components/ProjectGrid';
import { QuoteSection } from '@/components/QuoteSection';
import { Dock } from '@/components/Dock';

const Index = () => {
  return (
    <div className="bg-white overflow-hidden">
      <div className="flex flex-col relative h-screen w-full items-stretch pb-14">
        {/* Background Image */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/ece3a9a4a90eb024df83793dac977ef2baa0c3d6?placeholderIfAbsent=true"
          alt="Desktop background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        
        {/* Top Navigation Bar */}
        <TopBar />
        
        {/* Main Content Area */}
        <main className="relative flex flex-col items-start flex-1 overflow-y-auto">
          {/* Project Grid */}
          <ProjectGrid />
          
          {/* Quote Section */}
          <div className="w-full max-w-[658px] px-4 sm:px-8 lg:ml-[76px] lg:px-0">
            <QuoteSection />
          </div>
        </main>
        
        {/* Bottom Dock */}
        <footer className="relative flex justify-center">
          <Dock />
        </footer>
      </div>
    </div>
  );
};

export default Index;
