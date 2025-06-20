// components/AboutPresent.tsx
'use client';

import { useState, useEffect } from 'react';
import { format } from 'date-fns';
export function AboutPresent() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [prevTime, setPrevTime] = useState({
    hours: format(new Date(), 'HH'),
    minutes: format(new Date(), 'mm'),
    seconds: format(new Date(), 'ss')
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
      setPrevTime({
        hours: format(currentDate, 'HH'),
        minutes: format(currentDate, 'mm'),
        seconds: format(currentDate, 'ss')
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex flex-col items-start mb-4 sm:mb-4">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex items-center h-[40px]">
          <div className="text-4xl font-thin patriot-bold">d3tru04</div>
        </div>
        <div className="flex flex-col items-end gap-0">
          <div className="h-[20px]">
            <span className="text-sm font-bold leading-relaxed tracking-wider text-foreground">
              Dan Truong
            </span>
          </div>
          <div className="h-[20px] flex items-center">
            <time className="text-sm text-secondary">
              {format(currentDate, 'yyyy-MM-dd')} {format(currentDate, 'HH')}:{format(currentDate, 'mm')}:{format(currentDate, 'ss')}
            </time>
          </div>
        </div>
      </div>
    </div>
  );
}
