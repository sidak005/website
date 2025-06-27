"use client";

import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-neutral-900 text-white px-6">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[50vh] relative">
        <div className="absolute top-1/3 left-1/3 transform -translate-x-1/4 -translate-y-1/4 scale-[3.5]">
          <TextHoverEffect text="Sidak" />
        </div>
        <p className="mt-40 text-gray-300 text-2xl font-medium relative z-10">
          Aspiring Software Engineer | Building Cool Things
        </p>
      </section>

      {/* About + Links Section */}
      <section className="flex flex-col items-start mt-30 px-20">
        <h2 className="text-8xl font-bold mb-4">About Me</h2>
        <p className="max-w-9xl text-left text-gray-400 mb-6 text-xl">
          I am Sidak, a second-year Computer Science student passionate
          about web development, software, and building cool projects that make
          a difference. I am in my learning and exploring phase right now.
        </p>
        <div className="flex gap-6">
          <a
            href="https://github.com/sidak005"
            target="_blank"
            className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-300 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sidak-harnoor-singh-853aa2294/"
            target="_blank"
            className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-300 transition"
          >
            LinkedIn
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-300 transition"
          >
            Resume
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section className="flex flex-col items-start ml-20 mt-20">
        <h2 className="text-8xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Project Card */}
          <div className="p-6 bg-gray-800 rounded-xl hover:scale-105 transition-transform">
            <h3 className="text-2xl font-semibold mb-2">Password Manager</h3>
            <p className="text-gray-400 mb-4">
              A secure password manager built with Python and Tkinter, featuring
              encryption and a user-friendly GUI.
            </p>
            <a
              href="https://github.com/sidak005/password-manager"
              target="_blank"
              className="text-blue-400 underline"
            >
              View here
            </a>
          </div>
          {/* movie card */}
          <div className="p-6 bg-gray-800 rounded-xl hover:scale-105 transition-transform">
              <h3 className="text-2xl font-semibold mb-2">Movie List</h3>
              <p className="text-gray-400 mb-4">
              A very basic project to get an understanding of react by using an example of a movie list.
              </p>  
            <a
              href="https://github.com/sidak005/react-movieList"
              target="_blank"
              className="text-blue-400 underline"
            >
              View here
            </a>
          </div>
          {/* weather app */}
          <div className="p-6 bg-gray-800 rounded-xl hover:scale-105 transition-transform">
              <h3 className="text-2xl font-semibold mb-2">Weather App</h3>
              <p className="text-gray-400 mb-4">
              A weather app to get to know about the current weather as well as forecast for next days.
              </p>  
            <a
              href="https://github.com/sidak005/react-movieList"
              target="_blank"
              className="text-blue-400 underline"
            >
              View here
            </a>
          </div>
          {/* coming soon */}
          <div className="p-6 bg-gray-800 rounded-xl hover:scale-105 transition-transform">
              <h3 className="text-2xl font-semibold mb-2">Coming soon</h3>
              <p className="text-gray-400 mb-4">
              More projects to be added soon!!
              </p>  
            <a
              href="https://github.com/sidak005/react-movieList"
              target="_blank"
              className="text-blue-400 underline"
            >
              🔜🔜
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-gray-500 text-sm">
        Made by Sidak © 2025
      </footer>
    </main>
  );
}
