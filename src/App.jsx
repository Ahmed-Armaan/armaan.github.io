import { Mail, Github, Linkedin, Phone, FileText } from 'lucide-react';
import profileImage from './assets/image.jpeg';

function Portfolio() {
  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen font-sans">
      <header className="p-6 border-b border-gray-800 flex justify-between items-center sticky top-0 bg-black/60 backdrop-blur-lg z-50">
        <h1 className="text-3xl font-bold tracking-tight">Armaan Ahmed</h1>
        <nav className="flex gap-6 text-sm text-gray-400">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#tech-stack" className="hover:text-white">Tech Stack</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </header>

      <main className="p-8 max-w-4xl mx-auto">
        {/* About Section */}
        <section id="about" className="mb-16">
          <div className="rounded-xl bg-[#1a1a1a] p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center shadow-lg">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-4">👋 About</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                web dev | system programming<br />
                I am currently pursuing a B.Tech in Information Technology with a strong passion for both web development and systems programming.
                I enjoy building scalable, efficient software by bridging low-level system concepts with modern web technologies.
                My focus lies in combining languages like C and Go for backend and systems work, alongside React and TypeScript for frontend development — crafting solutions that are both performant and user-friendly.
              </p>
              <a href="https://drive.google.com/file/d/1BAETDUm9nmt8j7QxPPQwdYHK-S2es5YT/view?usp=drive_link" target="_blank" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white">
                <FileText size={18} /> View Resume
              </a>
            </div>
            <div className="w-40 h-40 rounded-full overflow-hidden flex-shrink-0 border border-gray-700">
              <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        <section id="projects" className="mb-16">
          <div className="rounded-xl bg-[#1a1a1a] p-6 md:p-10 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">🚀 Projects</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <a
                href="https://github.com/Ahmed-Armaan/leetbattle"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-gray-800 rounded-lg bg-[#1f1f1f] hover:shadow-lg hover:bg-[#292929] transition"
              >
                <h3 className="text-lg font-semibold mb-1">
                  LeetBattle -- Go, React, Ts, Websockets
                </h3>
                <p className="text-gray-400 text-sm">
                  A real time team 5v5 game based on solving leetcode.
                </p>
              </a>

              <a
                href="https://github.com/Ahmed-Armaan/gorrent_cli"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-gray-800 rounded-lg bg-[#1f1f1f] hover:shadow-lg hover:bg-[#292929] transition"
              >
                <h3 className="text-lg font-semibold mb-1">Gorrent_cli -- Go</h3>
                <p className="text-gray-400 text-sm">
                  A torrent client CLI for Linux built in Go.
                </p>
              </a>

              <a
                href="https://github.com/Ahmed-Armaan/multithreaded-HTTP-server"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-gray-800 rounded-lg bg-[#1f1f1f] hover:shadow-lg hover:bg-[#292929] transition"
              >
                <h3 className="text-lg font-semibold mb-1">
                  Multithreaded HTTP server -- C
                </h3>
                <p className="text-gray-400 text-sm">
                  A multithreaded HTTP server built in C.
                </p>
              </a>

              <a
                href="https://github.com/Ahmed-Armaan/ray_tracing_engine"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-gray-800 rounded-lg bg-[#1f1f1f] hover:shadow-lg hover:bg-[#292929] transition"
              >
                <h3 className="text-lg font-semibold mb-1">Ray tracing engine -- C++</h3>
                <p className="text-gray-400 text-sm">
                  An implementation of ray tracing algorithm in C++.
                </p>
              </a>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="tech-stack" className="mb-16">
          <div className="rounded-xl bg-[#1a1a1a] p-6 md:p-10 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">🛠️ Tech Stack</h2>
            <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
              <span className="bg-gray-700 rounded-full px-3 py-1">Go</span>
              <span className="bg-gray-700 rounded-full px-3 py-1">React</span>
              <span className="bg-gray-700 rounded-full px-3 py-1">TypeScript</span>
              <span className="bg-gray-700 rounded-full px-3 py-1">Tailwind CSS</span>
              <span className="bg-gray-700 rounded-full px-3 py-1">redis</span>
              <span className="bg-gray-700 rounded-full px-3 py-1">WebSocket</span>
              <span className="bg-gray-700 rounded-full px-3 py-1">Docker</span>
              <span className="bg-gray-700 rounded-full px-3 py-1">C</span>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <div className="rounded-xl bg-[#1a1a1a] p-6 md:p-10 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">📢 Contact</h2>
            <div className="flex flex-wrap gap-6 items-center text-gray-400 text-sm">
              <a href="mailto:ahmedarmaan2022@gmail.com" className="hover:text-white flex items-center gap-2">
                <Mail size={18} /> Email
              </a>
              <a href="https://github.com/Ahmed-Armaan" target="_blank" className="hover:text-white flex items-center gap-2">
                <Github size={18} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/armaan-ahmed-328b68255/" target="_blank" className="hover:text-white flex items-center gap-2">
                <Linkedin size={18} /> LinkedIn
              </a>
              <div className="flex items-center gap-2">
                <Phone size={18} /> +91 7667170335
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-center py-6 text-gray-500 border-t border-gray-800">
        &copy; {new Date().getFullYear()} Armaan Ahmed
      </footer>
    </div>
  );
}

export default Portfolio;
