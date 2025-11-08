import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { FiExternalLink, FiGithub, FiLink, FiClipboard, FiTerminal } from 'react-icons/fi'

const projectsData = [
  {
    id: 1,
    name: 'Zipp',
    description: 'Cloud clipboard app for storing, syncing and sharing text and media across devices',
    icon: <FiClipboard />,
    color: 'from-blue-500 to-cyan-500',
    link: '/projects/zipp',
    github: 'https://github.com/PIYUSH-GIRI23/zipp',
    liveLink: 'https://zipp.piyushx.tech'
  },
  {
    id: 2,
    name: 'Shrinkr',
    description: 'Scalable URL Shortener that helps users manage, track and view analytics of custom short links',
    icon: <FiLink />,
    color: 'from-purple-500 to-pink-500',
    link: '/projects/shrinkr',
    github: 'https://github.com/PIYUSH-GIRI23/shrinkr-client',
    liveLink: 'https://x.piyushx.tech'
  },
  {
    id: 3,
    name: 'CLI Todo',
    description: 'Minimal, fast, terminal-first todo application written in C++ for command-line productivity',
    icon: <FiTerminal />,
    color: 'from-green-500 to-emerald-500',
    link: '/projects/cli-todo',
    github: 'https://github.com/PIYUSH-GIRI23/cli-todo-app',
    liveLink: 'https://cli.todo.piyushx.tech'
  }
]

const Projects = () => {
  const observerRef = useRef(null)

  useEffect(() => {
    // Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    // Observe all elements with animation classes
    const elements = document.querySelectorAll('.fade-in-up, .project-card')
    elements.forEach((el) => observerRef.current.observe(el))

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b0b0d] to-[#0f1113] text-gray-200 px-6 py-12">
      <section className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 fade-in-up">
          <h1 className="text-4xl md:text-5xl font-display mb-4">Projects</h1>
          <p className="text-gray-400 text-lg max-w-3xl">
            I've worked on tons of little projects over the years but these are the ones that I'm most
            proud of. Many of them are open-source, so if you see something that piques your
            interest, check out the code and contribute if you have ideas on how it can be improved.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, idx) => (
            <Link
              key={project.id}
              to={project.link}
              className="project-card group"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="project-card-inner">
                {/* Icon/Logo */}
                <div className="project-icon-wrapper">
                  <div className={`project-icon-bg bg-gradient-to-br ${project.color}`}>
                    <div className="text-white text-3xl">
                      {project.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-100 mb-2 group-hover:text-emerald-400 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Links */}
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="project-link-btn"
                  >
                    <FiExternalLink className="text-sm" />
                    <span>Live</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="project-link-btn"
                  >
                    <FiGithub className="text-sm" />
                    <span>Code</span>
                  </a>
                </div>

                {/* Hover Overlay Arrow */}
                <div className="project-card-arrow">
                  <FiExternalLink className="text-2xl" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* More Projects Coming Soon */}
        <div className="mt-12 text-center fade-in-up">
          <div className="glass-card inline-block px-6 py-4">
            <p className="text-gray-400 text-sm">
              More exciting projects coming soon... 🚀
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto mt-16 py-8 text-sm text-gray-500 border-t border-white/6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <div>Mail to: giri.piyush2003@gmail.com</div>
          <div>WhatsApp: +91 93545 68798</div>
        </div>
        <div className="mt-4 text-center md:text-left">Copyright © 2025 Piyush Giri All rights reserved</div>
      </footer>
    </main>
  )
}

export default Projects
