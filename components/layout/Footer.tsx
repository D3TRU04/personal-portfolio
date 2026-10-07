import { FadeIn } from '@/components/FadeIn';
import { buttonVariants } from '@/components/ui/button';
import { SITE_NAME, SOCIAL_LINKS } from '@/data/site';
import { cn } from '@/lib/utils';

export function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center py-8">
        <FadeIn>
          {SOCIAL_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={cn(buttonVariants({ variant: 'link' }), 'text-muted-foreground link-with-animation')}
            >
              <span className="text-secondary">{label}</span>
            </a>
          ))}
        </FadeIn>
      </div>
      <div className="border-t border-neutral-300 dark:border-neutral-600 px-6 py-4">
        <p className="text-xs text-secondary tracking-widest px-6">
          &copy; {new Date().getFullYear()} {SITE_NAME.toUpperCase()}
        </p>
      </div>
    </footer>
  );
}
