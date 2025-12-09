import React from 'react';

export const QuoteSection: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center md:justify-start min-h-[60px] md:min-h-[100px]">
      <blockquote className="text-white text-base sm:text-2xl lg:text-[32px] leading-relaxed lg:leading-[38px] w-full max-w-[658px] text-center md:text-left">
        creativity and suffering are somehow inherently linked.
      </blockquote>
    </section>
  );
};
