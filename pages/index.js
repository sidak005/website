import { useState } from 'react';

export default function Home() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Welcome to My Next.js Website!
      </h1>
      <p className="text-lg text-gray-700 text-center mb-8">
        This is my first website built with Next.js.
      </p>
      <div className="text-center">
        <button
          onClick={() => setClicked(!clicked)}
          className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          {clicked ? 'Clicked!' : 'Click Me'}
        </button>
      </div>
    </div>
  );
}