// Defines the structure for organization data
type OrganizationData = {
  role: string;
  company: string;
  date: string;
  logo: string;
};

// Returns an array of organization data
export function getOrganizations(): OrganizationData[] {
  return [
    {
      role: 'Engineering',
      company: 'Texas Blockchain',
      date: '2024 - Present',
      logo: '/images/txb-logo.png',
    }
  ];
} 