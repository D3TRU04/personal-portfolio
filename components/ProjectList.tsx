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
            <p className="tracking-tight text-secondary mb-2">
              {project.metadata.description.replace('(Work in progress)', '').trim()}
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
              ) : project.metadata.description.includes('(Work in progress)') ? (
                <span className="text-orange-500">Work in progress</span>
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
            </div>
            {/* <p className="tracking-tight text-neutral-900 dark:text-neutral-100">
              {project.metadata.count}
            </p> */}
          </div>
        ))}
    </div>
  );
}
