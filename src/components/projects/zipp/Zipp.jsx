import React from 'react'
import { FiExternalLink, FiGithub, FiClipboard, FiCloud, FiShare2, FiLock } from 'react-icons/fi'
import Img1 from '../../../assets/zipp/1.png'
import Img2 from '../../../assets/zipp/2.png'
import Img3 from '../../../assets/zipp/3.png'
import Img4 from '../../../assets/zipp/4.png'

const Zipp = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b0b0d] to-[#0f1113] text-gray-200 px-6 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg">
              <FiClipboard />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-display">Zipp</h1>
              <p className="text-gray-400 text-sm mt-1">Cloud Clipboard & File Sharing Platform</p>
            </div>
          </div>
          
          <div className="flex gap-3 flex-wrap">
            <a
              href="https://zipp.piyushx.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2"
            >
              <FiExternalLink />
              View Live
            </a>
            <a
              href="https://github.com/PIYUSH-GIRI23/zipp"
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
            Zipp is a cloud-based clipboard application that allows users to store, sync, and share text 
            and media files across multiple devices. With a focus on simplicity and speed, Zipp makes it 
            easy to access your content from anywhere.
          </p>
          <p className="text-gray-300 leading-relaxed">
            The platform integrates Cloudinary for efficient media storage, implements hybrid authentication 
            with OAuth and JWT, and uses Redis for caching to ensure lightning-fast performance.
          </p>
        </section>

        {/* Key Features */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="glass-card">
              <div className="text-emerald-500 text-3xl mb-3">
                <FiCloud />
              </div>
              <h3 className="font-semibold text-lg mb-2">Cloud Storage</h3>
              <p className="text-sm text-gray-400">
                Store text, images, and files securely in the cloud with Cloudinary integration
              </p>
            </div>
            <div className="glass-card">
              <div className="text-emerald-500 text-3xl mb-3">
                <FiShare2 />
              </div>
              <h3 className="font-semibold text-lg mb-2">Cross-Device Sync</h3>
              <p className="text-sm text-gray-400">
                Access your clipboard from any device with instant synchronization
              </p>
            </div>
            <div className="glass-card">
              <div className="text-emerald-500 text-3xl mb-3">
                <FiLock />
              </div>
              <h3 className="font-semibold text-lg mb-2">Secure Access</h3>
              <p className="text-sm text-gray-400">
                Hybrid authentication with OAuth and JWT for maximum security
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="glass-card mb-8">
          <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {['React.js', 'Express.js', 'MongoDB', 'Redis', 'Cloudinary', 'OAuth', 'JWT', 'Node.js', 'Tailwind CSS'].map((tech) => (
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
                  alt={`Zipp Screenshot ${idx + 1}`} 
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
              <span>Integrated rate limiting, hybrid authentication model, Cloudinary, API Gateway and OAuth</span>
            </li>
            <li className="flex items-start gap-3 text-gray-300">
              <span className="text-emerald-500 mt-1">•</span>
              <span>Improved user productivity by ~90% with instant upload/downloads and optimized file sync speed by ~70%</span>
            </li>
            <li className="flex items-start gap-3 text-gray-300">
              <span className="text-emerald-500 mt-1">•</span>
              <span>Built with scalability in mind using microservices architecture</span>
            </li>
            <li className="flex items-start gap-3 text-gray-300">
              <span className="text-emerald-500 mt-1">•</span>
              <span>Responsive design optimized for mobile and desktop experiences</span>
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

export default Zipp
