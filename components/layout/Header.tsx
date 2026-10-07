import Link from 'next/link';
import { FadeIn } from '@/components/FadeIn';
import { buttonVariants } from '@/components/ui/button';
import { NAV_LINKS } from '@/data/site';
import { cn } from '@/lib/utils';

export function Header() {
  return (
    <header className="flex justify-center py-8 pt-6 pb-0">
      {NAV_LINKS.map(({ label, href }) => (
        <Link key={href} href={href} className={cn(buttonVariants({ variant: 'link' }), 'link-with-animation')}>
          <FadeIn>{label}</FadeIn>
        </Link>
      ))}
    </header>
  );
}
