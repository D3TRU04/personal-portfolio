// components/Projects.tsx
import Link from 'next/link';
import { getProjects } from 'app/projects/utils';

export async function ProjectList() {
  const allProjects = await getProjects();
  // console.log(allProjects);

  return (
    <div className="loading-element">
      {allProjects
        .sort((a, b) => {
          if (a.metadata.count < b.metadata.count) {
            return -1;
          }
          return 1;
        })
        .map((project, index) => (
          <div className="mb-8" key={index}>
            <p className=" w-[100px] tabular-nums"></p>
            <h2 className="inline-block mb-1 font-semibold">
              {project.metadata.title}
            </h2>
            {project.metadata.badge && (
              <span className="inline-block px-2 py-0.5 mb-2 text-xs font-semibold rounded-full border border-gray-400 dark:border-gray-400 bg-gradient-to-r from-gray-300 via-white to-gray-300 text-gray-700 dark:from-gray-500 dark:via-gray-300 dark:to-gray-500 dark:text-gray-900">
                {project.metadata.badge}
              </span>
            )}
            <p className="tracking-tight text-secondary mb-2">
              {project.metadata.description.replace('(Work in progress!)', '').trim()}
            </p>
            <div className="flex gap-4 text-sm">
              {project.metadata.githubLink ? (
                <a 
                  href={project.metadata.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="link-with-animation text-orange-500 hover:text-orange-600"
                >
                  GitHub Link
                </a>
              ) : project.metadata.description.includes('(Work in progress!)') ? (
                <span className="text-orange-500">Work in progress!</span>
              ) : null}
              
              {project.metadata.websiteLink && (
                <a
                  href={project.metadata.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-with-animation text-orange-500 hover:text-orange-600"
                >
                  Website Link
                </a>
              )}

              {project.metadata.submissionLink && (
                <a
                  href={project.metadata.submissionLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-with-animation text-orange-500 hover:text-orange-600"
                >
                  Submission Link
                </a>
              )}

              {project.metadata.articleLink && (
                <a
                  href={project.metadata.articleLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-with-animation text-orange-500 hover:text-orange-600"
                >
                  Article Link
                </a>
              )}
            </div>
            {project.metadata.preview && (
              <a
                href={project.metadata.preview.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-3 rounded-lg border border-neutral-200 dark:border-neutral-700 overflow-hidden hover:border-orange-500 dark:hover:border-orange-500 transition-colors"
              >
                {project.metadata.preview.image && (
                  <img
                    src={project.metadata.preview.image}
                    alt="Preview"
                    className="w-full h-64 object-cover"
                  />
                )}
                <div className="p-3">
                  <p className="text-sm font-semibold">{project.metadata.preview.title}</p>
                  <p className="text-xs text-secondary mt-1">{project.metadata.preview.summary}</p>
                  <p className="text-xs text-orange-500 mt-1">{project.metadata.preview.source}</p>
                </div>
              </a>
            )}
            {/* <p className="tracking-tight text-neutral-900 dark:text-neutral-100">
              {project.metadata.count}
            </p> */}
          </div>
        ))}
    </div>
  );
}
