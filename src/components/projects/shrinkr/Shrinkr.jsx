import React from 'react'
import { FiExternalLink, FiGithub, FiLink, FiBarChart2, FiZap, FiShield } from 'react-icons/fi'
import Img1 from '../../../assets/shrinkr/1.png'
import Img2 from '../../../assets/shrinkr/2.png'
import Img3 from '../../../assets/shrinkr/3.png'
import Img4 from '../../../assets/shrinkr/4.png'

const Shrinkr = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b0b0d] to-[#0f1113] text-gray-200 px-6 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg">
              <FiLink />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-display">shrinkr</h1>
              <p className="text-gray-400 text-sm mt-1">URL Shortener & Analytics Platform</p>
            </div>
          </div>
          
          <div className="flex gap-3 flex-wrap">
            <a
              href="https://x.piyushx.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2"
            >
              <FiExternalLink />
              View Live
            </a>
            <a
              href="https://github.com/PIYUSH-GIRI23/shrinkr-client"
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
            shrinkr is a scalable URL shortening platform that enables users to create custom short links, 
            track analytics, and manage their links efficiently. Built with modern web technologies, it provides 
            a seamless experience for both personal and professional use.
          </p>
          <p className="text-gray-300 leading-relaxed">
            The platform features JWT authentication, Google OAuth login, Redis caching for fast lookups, 
            and comprehensive analytics to help users understand their link performance.
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
                ~90% faster lookups with Redis caching and optimized database queries
              </p>
            </div>
            <div className="glass-card">
              <div className="text-emerald-500 text-3xl mb-3">
                <FiBarChart2 />
              </div>
              <h3 className="font-semibold text-lg mb-2">Analytics Dashboard</h3>
              <p className="text-sm text-gray-400">
                Track clicks on your link (Handled effeiciently even with high traffic)
              </p>
            </div>
            <div className="glass-card">
              <div className="text-emerald-500 text-3xl mb-3">
                <FiShield />
              </div>
              <h3 className="font-semibold text-lg mb-2">Secure & Private</h3>
              <p className="text-sm text-gray-400">
                JWT authentication, OAuth integration, and secure link management
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="glass-card mb-8">
          <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {['React.js', 'Express.js', 'MongoDB', 'Redis', 'JWT', 'OAuth', 'Node.js', 'Tailwind CSS'].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-lg text-sm border border-emerald-500/20">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Screenshots */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[Img1, Img2, Img3, Img4].map((img, idx) => (
              <div key={idx} className="glass-card p-2">
                <img 
                  src={img} 
                  alt={`shrinkr Screenshot ${idx + 1}`} 
                  className="w-full rounded-lg"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Highlights */}
        <section className="glass-card mb-8">
          <h2 className="text-2xl font-semibold mb-4">Project Highlights</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-gray-300">
              <span className="text-emerald-500 mt-1">•</span>
              <span>Implements JWT, Google OAuth Login, Redis caching and easy sharing through QR Code</span>
            </li>
            <li className="flex items-start gap-3 text-gray-300">
              <span className="text-emerald-500 mt-1">•</span>
              <span>Achieved ~90% faster lookups with Redis caching and reduced API latency significantly</span>
            </li>
            <li className="flex items-start gap-3 text-gray-300">
              <span className="text-emerald-500 mt-1">•</span>
              <span>Built a comprehensive analytics dashboard for tracking link performance</span>
            </li>
            <li className="flex items-start gap-3 text-gray-300">
              <span className="text-emerald-500 mt-1">•</span>
              <span>Responsive design that works seamlessly across all devices</span>
            </li>
          </ul>
        </section>
      </div>

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

export default Shrinkr
