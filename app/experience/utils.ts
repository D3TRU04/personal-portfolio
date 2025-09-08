type ExperienceData = {
  role: string;
  company: string;
  date: string;
  logo: string;
};

export function getExperience(): ExperienceData[] {
  return [
    {
      role: 'Cybersecurity',
      company: 'UT Austin Information Security Office',
      date: 'Fall 2025',
      logo: '/images/utiso-logo.png',
    },
    {
      role: 'Engineering',
      company: 'Studio23Labs',
      date: '2025',
      logo: '/images/studio23labs-logo.png',
    },
    {
      role: 'XRPL Builder Residency Fellow',
      company: 'Ripple',
      date: 'Summer 2025',
      logo: '/images/ripple-logo.png',
    },
    {
      role: 'Engineering',
      company: 'narb',
      date: 'Summer 2025',
      logo: '/images/narb-logo.png',
    },
    {
      role: 'Engineering',
      company: 'TheBigLease',
      date: '2024 - 2025',
      logo: '/images/thebiglease-logo.png',
    },
    {
      role: 'Research',
      company: 'Computational Media Lab (UT Austin)',
      date: '2024 - 2025',
      logo: '/images/cml-logo.png',
    },
    {
      role: 'Marketing',
      company: 'School Simplified',
      date: '2022 - 2023',
      logo: '/images/schoolsimplified-logo.png',
    },
    {
      role: 'Research',
      company: 'Real-Time Systems Lab (University of Houston)',
      date: 'Summer 2022',
      logo: '/images/uh-logo.png',
    },
  ];
} 