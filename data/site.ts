export type SiteLink = {
  label: string;
  href: string;
};

export const SITE_NAME = 'Dan Truong';
export const SITE_HANDLE = 'd3tru04';

export const NAV_LINKS: SiteLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Resume', href: '/resume' },
  { label: 'Projects', href: '/projects' },
];

export const SOCIAL_LINKS: SiteLink[] = [
  { label: 'X', href: 'https://x.com/d3tru04' },
  { label: 'GitHub', href: 'https://github.com/D3TRU04' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dantruong04/' },
  { label: 'Email', href: 'mailto:dantruongg_@utexas.edu' },
];

// Served from /public; replace the PDF and update this path in one place
export const RESUME_PATH = '/resume/DanTruongResume2027.pdf';
