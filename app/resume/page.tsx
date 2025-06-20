import { AboutPresent } from '../../components/AboutPresent';
import { Footer } from '../../components/Footer';

const ResumePage = () => {
  return (
    <div>
      <article className="max-w-4xl pt-8 mx-auto text-sm loading-element">
        <div className="text-start">
          <h1 className="mb-1 font-semibold">Resume</h1>
          <p className="text-secondary">
            View my resume
          </p>
        </div>
        <hr className="my-6" />

        <div className="mb-8">
          {/* File explorer-style container */}
          <div className="border border-gray-300 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-600">
            {/* Header for the file explorer */}
            <div className="flex items-center p-3 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700">
              <svg className="w-5 h-5 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clipRule="evenodd" />
                <path d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
              </svg>
              <span className="font-medium text-gray-700 dark:text-gray-300">Resume File</span>
            </div>

            {/* Container for the PDF viewer and download link */}
            <div className="p-4">
              {/* Information bar for the PDF file */}
              <div className="flex items-center justify-between p-3 mb-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center">
                  <svg className="w-8 h-8 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <p className="font-medium">Dan's Resume 2027 (1).pdf</p>
                    <p className="text-sm text-secondary">PDF Document • 117 KB</p>
                  </div>
                </div>
                {/* Download button for the resume */}
                <a 
                  href="/resume/Dan's Resume 2027 (1).pdf" 
                  download
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors text-sm"
                >
                  Download
                </a>
              </div>
              
              {/* Embedded PDF viewer */}
              <div className="border border-gray-200 rounded-lg overflow-hidden dark:border-gray-600">
                <iframe
                  src="/resume/Dan's Resume 2027 (1).pdf"
                  className="w-full h-[800px]"
                  title="Dan Truong Resume"
                />
              </div>
            </div>
          </div>
        </div>
      </article>
      <div className="flex items-center justify-center">
        <Footer />
      </div>
    </div>
  );
};

export default ResumePage; 