// Component imports for the home page sections
import { AboutPresent } from '../components/AboutPresent';
import { Footer } from '../components/Footer';
import { Experience } from '../components/Experience';
import { Organizations } from '../components/Organizations';

// The main component for the home page
export default async function Home() {
  return (
    <section>
      <div>
        {/* The main article container for the page content */}
        <article className="max-w-xl pt-8 mx-auto text-sm loading-element">
          {/* Displays the introductory section with name and current time */}
          <AboutPresent />
          {/* A horizontal line for visual separation */}
          <hr className="my-10" />
          <div className="text-left">
            {/* About Me section */}
            <h2 className="mb-2 text-xl font-bold">About Me</h2>
            <p className="mb-8 text-secondary">
              Hello, my name is Dan Truong, and I'm currently a junior at the University of Texas at Austin studying Mathematics
              and Computer Science. Beyond academics, my interests range from cameras, playing pool, and playing golf. I'm also deeply passionate
              about startups, web3, and artificial intelligence.
            </p>
            
            {/* A call to action for visitors to connect */}
            <p className="text-secondary mb-8">
              Feel free to{' '}
              <a href="https://linkedin.com/in/dantruong04" className="underline text-orange-500 hover:text-orange-600">DM</a> me
              to connect or discuss any of these topics!
            </p>

            {/* Work Experience section */}
            <h2 className="mb-4 text-xl font-bold">Work Experience</h2>
            <Experience />

            {/* Organizations section */}
            <h2 className="mt-8 mb-4 text-xl font-bold">Organizations</h2>
            <Organizations />
          </div>
        </article>
      </div>
      {/* Footer section, centered on the page */}
      <div className="flex items-center justify-center">
        <Footer />
      </div>
    </section>
  );
}