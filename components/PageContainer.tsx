import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type PageContainerProps = {
  title?: string;
  description?: string;
  // Widens the column for pages with large embedded content
  wide?: boolean;
  children: ReactNode;
};

export function PageContainer({ title, description, wide = false, children }: PageContainerProps) {
  return (
    <article className={cn('pt-8 mx-auto text-sm loading-element', wide ? 'max-w-4xl' : 'max-w-xl')}>
      {title && (
        <>
          <div className="text-start">
            <h1 className="mb-1 font-semibold">{title}</h1>
            {description && <p className="text-secondary">{description}</p>}
          </div>
          <hr className="my-6" />
        </>
      )}
      {children}
    </article>
  );
}
