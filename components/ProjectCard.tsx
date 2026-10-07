import type { Project } from '@/data/projects';

type ProjectLinkKey = 'githubLink' | 'websiteLink' | 'submissionLink' | 'articleLink';

// Display order and label for each kind of project link
const PROJECT_LINKS: { key: ProjectLinkKey; label: string }[] = [
  { key: 'githubLink', label: 'GitHub Link' },
  { key: 'websiteLink', label: 'Website Link' },
  { key: 'submissionLink', label: 'Submission Link' },
  { key: 'articleLink', label: 'Article Link' },
];

export function ProjectCard({ project }: { project: Project }) {
  const { preview } = project;

  return (
    <div className="mb-8">
      <h2 className="inline-block mb-1 font-semibold">{project.title}</h2>
      {project.badge && (
        <span className="inline-block px-2 py-0.5 mb-2 text-xs font-semibold rounded-full border border-gray-400 dark:border-gray-400 bg-gradient-to-r from-gray-300 via-white to-gray-300 text-gray-700 dark:from-gray-500 dark:via-gray-300 dark:to-gray-500 dark:text-gray-900">
          {project.badge}
        </span>
      )}
      <p className="tracking-tight text-secondary mb-2">{project.description}</p>
      <div className="flex gap-4 text-sm">
        {project.status === 'wip' && <span className="text-orange-500">Work in progress!</span>}
        {PROJECT_LINKS.map(({ key, label }) => {
          const href = project[key];
          return (
            href && (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-with-animation text-orange-500 hover:text-orange-600"
              >
                {label}
              </a>
            )
          );
        })}
      </div>
      {preview && (
        <a
          href={preview.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-3 rounded-lg border border-neutral-200 dark:border-neutral-700 overflow-hidden hover:border-orange-500 dark:hover:border-orange-500 transition-colors"
        >
          {preview.image && (
            <img src={preview.image} alt="Preview" className="w-full h-64 object-cover" />
          )}
          <div className="p-3">
            <p className="text-sm font-semibold">{preview.title}</p>
            <p className="text-xs text-secondary mt-1">{preview.summary}</p>
            <p className="text-xs text-orange-500 mt-1">{preview.source}</p>
          </div>
        </a>
      )}
    </div>
  );
}
