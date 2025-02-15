export default function About() {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
          About Me
        </h1>
        <p className="text-lg text-gray-700 text-center mb-8">
          Hi! I'm a beginner learning Next.js.
        </p>
        <div className="text-center">
          <a
            href="/"
            className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Go back to Home
          </a>
        </div>
      </div>
    );
  }