import React, { useState, useEffect } from 'react';

export const TopBar: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <header className="relative bg-[rgba(255,255,255,0.1)] backdrop-blur-md flex w-full items-center justify-between px-3 sm:px-5 md:px-20 py-1.5 sm:py-2 shadow-lg">
      <nav className="flex items-center text-sm sm:text-base text-[rgba(255,255,240,1)] font-medium whitespace-nowrap">
        <div>sohampod</div>
      </nav>
      <div className="flex items-center gap-2 sm:gap-4 md:gap-10">
        {/* System indicators - hidden on very small screens */}
        <div className="hidden sm:flex items-center gap-2 md:gap-3" role="group" aria-label="System indicators">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/6eab313fd52c6997414a0714355b87138320af82?placeholderIfAbsent=true"
            alt="WiFi indicator"
            className="w-[14px] md:w-[17px] object-contain"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/270ada48e2de133678354e2dd0e5f434637215c4?placeholderIfAbsent=true"
            alt="Battery indicator"
            className="w-[22px] md:w-[26px] object-contain"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/bd57e130094b3c3563ae977d101ed6b988c78287?placeholderIfAbsent=true"
            alt="Bluetooth indicator"
            className="w-3 md:w-4 object-contain"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/5712f0035e0db27569b28e9fbde5426d37bdc138?placeholderIfAbsent=true"
            alt="Volume indicator"
            className="w-[11px] md:w-[13px] object-contain"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/7bcbf6a06d9eeb33409310005fa5328a41989652?placeholderIfAbsent=true"
            alt="System indicator"
            className="w-3 md:w-3.5 object-contain"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/a0b245d9396a4354d70fe65efd0ef29772e6dd82?placeholderIfAbsent=true"
            alt="System indicator"
            className="w-3 md:w-3.5 object-contain"
          />
        </div>
        <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm md:text-base text-[rgba(255,255,240,1)] font-[457] leading-none">
          <time className="hidden sm:block">{formatDate(currentTime)}</time>
          <time>{formatTime(currentTime)}</time>
        </div>
      </div>
    </header>
  );
};
