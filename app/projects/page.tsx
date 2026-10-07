import { PageContainer } from '@/components/PageContainer';
import { ProjectList } from '@/components/ProjectList';

export default function ProjectsPage() {
  return (
    <PageContainer title="Projects" description="Highlighting some builds">
      <ProjectList />
    </PageContainer>
  );
}
