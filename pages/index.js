import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-blue-600 mb-4">Sidak Harnoor Singh</h1>
        <p className="text-xl text-gray-700">Welcome to my website!</p>
      </header>

      {/* About Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">About Me</h2>
        <p className="text-lg text-gray-700">
          Hi! I'm Sidak Harnoor Singh, a second-year student at UNSW. I'm passionate about web development, coding, and building cool projects. 
        </p>
      </section>

      {/* GitHub Link */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">GitHub</h2>
        <p className="text-lg text-gray-700 mb-4">
          Check out my GitHub profile to see my projects and contributions.
        </p>
        <a
          href="https://github.com/sidak005"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Visit My GitHub
        </a>
      </section>

      {/* Resume */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Resume</h2>
        <p className="text-lg text-gray-700 mb-4">
          View my resume to learn more about my skills and experience.
        </p>
        <a
          href="/path/to/your/resume.pdf"
          download
          className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Download Resume
        </a>
      </section>

      {/* Projects Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-600 mb-2">Project 1</h3>
            <p className="text-gray-700 mb-4">
              A brief description of your first project.
            </p>
            <a
              href="https://github.com/your-username/project-1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Project
            </a>
          </div>

          {/* Project 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-600 mb-2">Project 2</h3>
            <p className="text-gray-700 mb-4">
              A brief description of your second project.
            </p>
            <a
              href="https://github.com/your-username/project-2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Project
            </a>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Location</h2>
        <p className="text-lg text-gray-700">
          I'm currently based in <span className="font-bold">Sydney, Australia</span>.
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center mt-12">
        <p className="text-gray-700">
          &copy; {new Date().getFullYear()} Sidak Singh. All rights reserved.
        </p>
      </footer>
    </div>
  );
}