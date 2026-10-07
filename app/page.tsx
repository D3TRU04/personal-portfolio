import { AboutPresent } from '@/components/AboutPresent';
import { AsciiBackground } from '@/components/AsciiBackground';
import { EntryList } from '@/components/EntryList';
import { PageContainer } from '@/components/PageContainer';
import { EXPERIENCE } from '@/data/experience';
import { ORGANIZATIONS } from '@/data/organizations';

export default function Home() {
  return (
    <>
      {/* Kept outside PageContainer, whose reveal animation would clip it */}
      <AsciiBackground />
      <PageContainer>
        {/* Displays the introductory section with name and current time */}
        <AboutPresent />
        <hr className="my-10" />
        <div className="text-left">
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

          <h2 className="mb-4 text-xl font-bold">Work Experience</h2>
          <EntryList entries={EXPERIENCE} />

          <h2 className="mt-8 mb-4 text-xl font-bold">Organizations</h2>
          <EntryList entries={ORGANIZATIONS} />
        </div>
      </PageContainer>
    </>
  );
}
