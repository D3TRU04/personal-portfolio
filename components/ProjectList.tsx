import { ProjectCard } from '@/components/ProjectCard';
import { PROJECTS } from '@/data/projects';

export function ProjectList() {
  return (
    <div className="loading-element">
      {PROJECTS.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}
