'use client';

import React from 'react';
import Image from 'next/image';
import { getOrganizations } from 'app/organizations/utils';

export const Organizations: React.FC = () => {
  const organizationData = getOrganizations();

  return (
    <div>
      {organizationData.map((org, index) => (
        <div key={index} className="flex items-center mb-6">
          <Image src={org.logo} alt={`${org.company} logo`} width={40} height={40} className="mr-4" />
          <div className="flex-grow">
            <h3 className="font-semibold">{org.role}</h3>
            <p className="text-secondary">{org.company}</p>
          </div>
          <p className="text-secondary">{org.date}</p>
        </div>
      ))}
    </div>
  );
}; 