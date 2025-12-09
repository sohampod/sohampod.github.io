import React from 'react';
import { TopBar } from '@/components/TopBar';
import { ProjectGrid } from '@/components/ProjectGrid';
import { QuoteSection } from '@/components/QuoteSection';
import { Dock } from '@/components/Dock';

const Index = () => {
  return (
    <div className="bg-white overflow-hidden">
      <div className="flex flex-col relative h-screen w-full">
        {/* Background Image */}
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/ece3a9a4a90eb024df83793dac977ef2baa0c3d6?placeholderIfAbsent=true"
          alt="Desktop background"
          className="absolute inset-0 h-full w-full object-cover"
        />
        
        {/* Top Navigation Bar */}
        <div className="relative z-10 flex-shrink-0">
          <TopBar />
        </div>
        
        {/* Main Content Area - Takes remaining space */}
        <main className="relative z-10 flex-1 flex flex-col min-h-0 overflow-y-auto">
          {/* Project Grid - Centered on mobile, right-aligned on desktop */}
          <div className="flex-1 flex items-start justify-center md:justify-end w-full px-4 sm:pr-8 lg:pr-[76px] pt-6 sm:pt-12 lg:pt-16">
            <ProjectGrid />
          </div>
          
          {/* Quote Section - Centered on mobile, left-aligned on desktop */}
          <div className="w-full px-4 sm:pl-8 lg:pl-[76px] pb-4 mb-20 md:mb-16 text-center md:text-left">
            <QuoteSection />
          </div>
        </main>
        
        {/* Bottom Dock - Fixed at bottom */}
        <footer className="relative z-10 flex-shrink-0">
          <Dock />
        </footer>
      </div>
    </div>
  );
};

export default Index;
