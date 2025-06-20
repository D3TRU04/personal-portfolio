// Imports for the projects page
import Link from 'next/link';
import { ProjectList } from 'components/ProjectList';
import { Footer } from '../../components/Footer';

// The main component for the projects page
const ProjectsPage = () => {
  return (
    <div>
      {/* Main content container */}
      <article className="max-w-xl pt-8 mx-auto text-sm loading-element">
        <div className="text-start">
          {/* Page title and description */}
          <h1 className="mb-1 font-semibold ">Projects</h1>
          <p className="text-secondary">
            Highlighting some builds
          </p>
        </div>
        {/* Horizontal line for visual separation */}
        <hr className="my-6" />

        {/* Renders the list of projects */}
        <ProjectList />
      </article>
      {/* Centered footer */}
      <div className="flex items-center justify-center">
        <Footer />
      </div>
    </div>
  );
};

export default ProjectsPage;
