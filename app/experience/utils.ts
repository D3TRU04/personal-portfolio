type ExperienceData = {
  role: string;
  company: string;
  date: string;
  logo: string;
};

export function getExperience(): ExperienceData[] {
  return [
    {
      role: 'Engineering & Operations Intern',
      company: 'Nook',
      date: 'Spring 2026',
      logo: '/images/nook-logo.png',
    },
    {
      role: 'Software Engineer Intern',
      company: 'OneGov',
      date: 'Fall 2025',
      logo: '/images/onegov-logo.png',
    },
    {
      role: 'RSOC Student Analyst (Cybersecurity)',
      company: 'UT Austin Information Security Office',
      date: '2025 - 2026',
      logo: '/images/utiso-logo.png',
    },
    {
      role: 'Software Engineer Intern',
      company: 'Studio23Labs',
      date: 'Summer 2025',
      logo: '/images/studio23labs-logo.png',
    },
    {
      role: 'XRPL Builder Residency Fellow',
      company: 'Ripple',
      date: 'Summer 2025',
      logo: '/images/ripple-logo.png',
    },
    {
      role: 'Software Engineer',
      company: 'TheBigLease',
      date: '2024 - 2025',
      logo: '/images/thebiglease-logo.png',
    },
    {
      role: 'Research Intern',
      company: 'Computational Media Lab (UT Austin)',
      date: '2024 - 2025',
      logo: '/images/cml-logo.png',
    },
    {
      role: 'Graphic Design Intern',
      company: 'School Simplified',
      date: '2022 - 2023',
      logo: '/images/schoolsimplified-logo.png',
    },
    {
      role: 'Research Intern',
      company: 'Real-Time Systems Lab (University of Houston)',
      date: 'Summer 2022',
      logo: '/images/uh-logo.png',
    },
  ];
} 