import React from 'react'
import { FiExternalLink, FiGithub, FiTerminal, FiZap, FiPackage, FiCommand } from 'react-icons/fi'
import Img1 from '../../../assets/cli-todo/1.png'
import Img2 from '../../../assets/cli-todo/2.png'
import Img3 from '../../../assets/cli-todo/3.png'

const CliTodo = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b0b0d] to-[#0f1113] text-gray-200 px-6 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg">
              <FiTerminal />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-display">CLI Todo</h1>
              <p className="text-gray-400 text-sm mt-1">Minimal, Fast, Terminal-First Todo Application</p>
            </div>
          </div>
          
          <div className="flex gap-3 flex-wrap">
            <a
              href="https://cli.todo.piyushx.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2"
            >
              <FiExternalLink />
              View Documentation
            </a>
            <a
              href="https://github.com/PIYUSH-GIRI23/cli-todo-app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost flex items-center gap-2 text-gray-200"
            >
              <FiGithub />
              View Code
            </a>
          </div>
        </div>

        {/* Overview */}
        <section className="glass-card mb-8">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            CLI Todo is a lightweight command-line todo application written in C++ that installs system-wide, 
            stores data in a single file, and keeps your workflow fast and keyboard driven. Perfect for 
            developers who live in the terminal and want a minimal, distraction-free task management tool.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Built with simplicity in mind, it includes install & uninstall scripts for easy setup and removal. 
            The tool is designed to be minimal and fast — ideal for terminal-first workflows.
          </p>
        </section>

        {/* Key Features */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="glass-card">
              <div className="text-emerald-500 text-3xl mb-3">
                <FiZap />
              </div>
              <h3 className="font-semibold text-lg mb-2">Lightning Fast</h3>
              <p className="text-sm text-gray-400">
                Written in C++ for maximum performance and minimal resource usage
              </p>
            </div>
            <div className="glass-card">
              <div className="text-emerald-500 text-3xl mb-3">
                <FiCommand />
              </div>
              <h3 className="font-semibold text-lg mb-2">Intuitive Commands</h3>
              <p className="text-sm text-gray-400">
                Simple commands: add, list, delete, uninstall — easy to remember and use
              </p>
            </div>
            <div className="glass-card">
              <div className="text-emerald-500 text-3xl mb-3">
                <FiPackage />
              </div>
              <h3 className="font-semibold text-lg mb-2">System-Wide Install</h3>
              <p className="text-sm text-gray-400">
                One-command installation with easy setup and uninstall scripts
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="glass-card mb-8">
          <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {['C++', 'Shell Script', 'Bash', 'Linux', 'Command Line'].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-lg text-sm border border-emerald-500/20">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Installation */}
        <section className="glass-card mb-8">
          <h2 className="text-2xl font-semibold mb-4">Quick Start</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-emerald-400">Install</h3>
              <div className="bg-[#0b0b0d] rounded-lg p-4 border border-white/10 font-mono text-sm">
                <code className="text-gray-300">bash install.sh</code>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-emerald-400">Usage</h3>
              <div className="bg-[#0b0b0d] rounded-lg p-4 border border-white/10 font-mono text-sm space-y-2">
                <div><code className="text-gray-300">mytodo add "Your task here"</code></div>
                <div><code className="text-gray-300">mytodo list</code></div>
                <div><code className="text-gray-300">mytodo delete &lt;task_number&gt;</code></div>
                <div><code className="text-gray-300">mytodo --help</code></div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2 text-emerald-400">Uninstall</h3>
              <div className="bg-[#0b0b0d] rounded-lg p-4 border border-white/10 font-mono text-sm">
                <code className="text-gray-300">mytodo uninstall</code>
              </div>
            </div>
          </div>
        </section>

        {/* Screenshots */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[Img1, Img2, Img3].map((img, idx) => (
              <div key={idx} className="glass-card p-2">
                <img 
                  src={img} 
                  alt={`CLI Todo Screenshot ${idx + 1}`} 
                  className="w-full rounded-lg"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Project Structure */}
        <section className="glass-card mb-8">
          <h2 className="text-2xl font-semibold mb-4">Project Structure</h2>
          <div className="bg-[#0b0b0d] rounded-lg p-4 border border-white/10 font-mono text-sm">
            <pre className="text-gray-300">
{`cli-todo-app/
├── install.sh      # Install script for system-wide setup
├── mytodo.cpp      # C++ source for the CLI todo tool
├── readme.md       # Documentation
└── uninstall.sh    # Uninstall script`}
            </pre>
          </div>
        </section>

        {/* Highlights */}
        <section className="glass-card mb-8">
          <h2 className="text-2xl font-semibold mb-4">Project Highlights</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-gray-300">
              <span className="text-emerald-500 mt-1">•</span>
              <span>Written in C++ for maximum performance and minimal resource usage</span>
            </li>
            <li className="flex items-start gap-3 text-gray-300">
              <span className="text-emerald-500 mt-1">•</span>
              <span>System-wide installation with easy setup and removal scripts</span>
            </li>
            <li className="flex items-start gap-3 text-gray-300">
              <span className="text-emerald-500 mt-1">•</span>
              <span>Single-file data storage for simplicity and portability</span>
            </li>
            <li className="flex items-start gap-3 text-gray-300">
              <span className="text-emerald-500 mt-1">•</span>
              <span>Keyboard-driven workflow perfect for terminal-first developers</span>
            </li>
            <li className="flex items-start gap-3 text-gray-300">
              <span className="text-emerald-500 mt-1">•</span>
              <span>Currently targets Ubuntu-based Linux systems with plans for broader support</span>
            </li>
          </ul>
        </section>

        {/* Prerequisites */}
        <section className="glass-card mb-8">
          <h2 className="text-2xl font-semibold mb-4">Prerequisites</h2>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-emerald-500 mt-1">•</span>
              <span>g++ (C++17 or newer recommended)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-500 mt-1">•</span>
              <span>bash (for running the install/uninstall scripts)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-500 mt-1">•</span>
              <span>Ubuntu-based Linux system (tested and verified)</span>
            </li>
          </ul>
        </section>
      </div>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto mt-16 py-8 text-sm text-gray-500 border-t border-white/6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <div>Mail to: giri.piyush2003@gmail.com</div>
          <div>Delhi, India</div>
        </div>
        <div className="mt-4 text-center md:text-left">Copyright © 2025 Piyush Giri All rights reserved</div>
      </footer>
    </main>
  )
}

export default CliTodo
