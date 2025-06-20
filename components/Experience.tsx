'use client';

import React from 'react';
import Image from 'next/image';
import { getExperience } from 'app/experience/utils';

export const Experience: React.FC = () => {
  const experienceData = getExperience();

  return (
    <div>
      {experienceData.map((exp, index) => (
        <div key={index} className="flex items-center mb-6">
          <Image src={exp.logo} alt={`${exp.company} logo`} width={40} height={40} className="mr-4" />
          <div className="flex-grow">
            <h3 className="font-semibold">{exp.role}</h3>
            <p className="text-secondary">{exp.company}</p>
          </div>
          <p className="text-secondary">{exp.date}</p>
        </div>
      ))}
    </div>
  );
}; 