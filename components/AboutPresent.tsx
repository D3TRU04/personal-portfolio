'use client';

import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { SITE_HANDLE, SITE_NAME } from '@/data/site';

export function AboutPresent() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentDate(new Date()), 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex flex-col items-start mb-4 sm:mb-4">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex items-center h-[40px]">
          <div className="text-4xl font-light commit-mono">{SITE_HANDLE}</div>
        </div>
        <div className="flex flex-col items-end gap-0">
          <div className="h-[20px]">
            <span className="text-sm font-bold leading-relaxed tracking-wider text-foreground">
              {SITE_NAME}
            </span>
          </div>
          <div className="h-[20px] flex items-center">
            <time className="text-sm text-secondary">
              {format(currentDate, 'yyyy-MM-dd HH:mm:ss')}
            </time>
          </div>
        </div>
      </div>
    </div>
  );
}
