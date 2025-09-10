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
    <header className="relative bg-[rgba(255,255,255,0.1)] backdrop-blur-md flex w-full items-center gap-[40px_100px] justify-between flex-wrap px-20 py-2 max-md:max-w-full max-md:px-5 shadow-lg">
      <nav className="self-stretch flex items-center gap-5 text-base text-[rgba(255,255,240,1)] font-medium whitespace-nowrap my-auto">
        <div className="self-stretch my-auto">
          sohampod
        </div>
      </nav>
      <div className="self-stretch flex min-w-60 items-center gap-10 my-auto">
        <div className="self-stretch flex items-center gap-3 my-auto" role="group" aria-label="System indicators">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/6eab313fd52c6997414a0714355b87138320af82?placeholderIfAbsent=true"
            alt="WiFi indicator"
            className="aspect-[1] object-contain w-[17px] self-stretch shrink-0 my-auto"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/270ada48e2de133678354e2dd0e5f434637215c4?placeholderIfAbsent=true"
            alt="Battery indicator"
            className="aspect-[2] object-contain w-[26px] self-stretch shrink-0 my-auto"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/bd57e130094b3c3563ae977d101ed6b988c78287?placeholderIfAbsent=true"
            alt="Bluetooth indicator"
            className="aspect-[1.33] object-contain w-4 self-stretch shrink-0 my-auto"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/5712f0035e0db27569b28e9fbde5426d37bdc138?placeholderIfAbsent=true"
            alt="Volume indicator"
            className="aspect-[1] object-contain w-[13px] self-stretch shrink-0 my-auto"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/7bcbf6a06d9eeb33409310005fa5328a41989652?placeholderIfAbsent=true"
            alt="System indicator"
            className="aspect-[1] object-contain w-3.5 self-stretch shrink-0 my-auto"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/a0b245d9396a4354d70fe65efd0ef29772e6dd82?placeholderIfAbsent=true"
            alt="System indicator"
            className="aspect-[1] object-contain w-3.5 self-stretch shrink-0 my-auto"
          />
        </div>
        <div className="self-stretch flex items-center gap-4 text-base text-[rgba(255,255,240,1)] font-[457] leading-none my-auto">
          <time className="self-stretch my-auto">
            {formatDate(currentTime)}
          </time>
          <time className="self-stretch my-auto">
            {formatTime(currentTime)}
          </time>
        </div>
      </div>
    </header>
  );
};
