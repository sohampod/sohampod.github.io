import React from 'react';

export const QuoteSection: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center min-h-[200px] mt-8 sm:mt-16 lg:mt-[197px] px-4">
      <blockquote className="text-white text-lg sm:text-2xl lg:text-[32px] leading-relaxed lg:leading-[38px] w-full max-w-[658px] text-center">
        creativity and suffering are somehow inherently linked.
      </blockquote>
    </section>
  );
};
