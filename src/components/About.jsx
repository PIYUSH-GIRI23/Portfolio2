import React, { useEffect, useRef } from 'react'
import { CiMail } from 'react-icons/ci'
import { FiDownload, FiExternalLink } from 'react-icons/fi'
import Profile from '../assets/profile2.png'
import Bootstrap from '../assets/skills/bootstrap.png'
import C from '../assets/skills/c.png'
import Cloudinary from '../assets/skills/cloudinary.png'
import Cpp from '../assets/skills/cpp.png'
import Css from '../assets/skills/css.png'
import Express from '../assets/skills/express.png'
import Git from '../assets/skills/git.png'
import Html from '../assets/skills/html.png'
import Javascript from '../assets/skills/javascript.png'
import Mongo from '../assets/skills/mongo.png'
import Mysql from '../assets/skills/mysql.png'
import Node from '../assets/skills/node.png'
import Python from '../assets/skills/python.png'
import Reactjs from '../assets/skills/reactjs.png'
import Redis from '../assets/skills/redis.png'
import Redux from '../assets/skills/redux.png'
import Tailwind from '../assets/skills/tailwind.png'
import Typescript from '../assets/skills/typescript.png'

const skills = [
  { img: Html, name: 'HTML', url: 'https://developer.mozilla.org/docs/Web/HTML' },
  { img: Css, name: 'CSS', url: 'https://developer.mozilla.org/docs/Web/CSS' },
  { img: Javascript, name: 'JavaScript', url: 'https://developer.mozilla.org/docs/Web/JavaScript' },
  { img: Typescript, name: 'TypeScript', url: 'https://www.typescriptlang.org/docs' },
  { img: Bootstrap, name: 'Bootstrap', url: 'https://getbootstrap.com/docs' },
  { img: Tailwind, name: 'Tailwind CSS', url: 'https://tailwindcss.com/docs' },
  { img: Reactjs, name: 'React', url: 'https://react.dev' },
  { img: Redux, name: 'Redux', url: 'https://redux.js.org' },
  { img: Node, name: 'Node.js', url: 'https://nodejs.org/docs' },
  { img: Express, name: 'Express', url: 'https://expressjs.com' },
  { img: Mongo, name: 'MongoDB', url: 'https://www.mongodb.com/docs' },
  { img: Mysql, name: 'MySQL', url: 'https://dev.mysql.com/doc' },
  { img: Redis, name: 'Redis', url: 'https://redis.io/docs' },
  { img: Cloudinary, name: 'Cloudinary', url: 'https://cloudinary.com/documentation' },
  { img: Python, name: 'Python', url: 'https://docs.python.org/3' },
  { img: C, name: 'C', url: 'https://en.cppreference.com/w/c' },
  { img: Cpp, name: 'C++', url: 'https://en.cppreference.com/w' },
  { img: Git, name: 'Git', url: 'https://git-scm.com/doc' }
]

const tools = [
  { name: 'Visual Studio Code', desc: 'Text Editor', url: 'https://code.visualstudio.com/docs' },
  { name: 'PyCharm', desc: 'Python IDE', url: 'https://www.jetbrains.com/pycharm/learn' },
  { name: 'IntelliJ IDEA', desc: 'Java IDE', url: 'https://www.jetbrains.com/idea/learn' },
  { name: 'Postman', desc: 'API Testing', url: 'https://learning.postman.com/docs' }
]

const platforms = [
  { name: 'GitHub', desc: 'Version Control & Collaboration', url: 'https://docs.github.com' },
  { name: 'Vercel', desc: 'Deployment Platform', url: 'https://vercel.com/docs' }
]

const About = () => {
  const resumeLink = 'https://drive.google.com/file/d/1LInGq4Kz9q8IgzV7zakRUvlt8sapjsRB/view?usp=sharing'
  const resumeDownloadLink = 'https://drive.google.com/uc?export=download&id=1LInGq4Kz9q8IgzV7zakRUvlt8sapjsRB'

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

    // Observe all elements with fade-in-up class
    const elements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in')
    elements.forEach((el) => observerRef.current.observe(el))

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b0b0d] to-[#0f1113] text-gray-200 px-6 py-12">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className="space-y-6 fade-in-left">
          <h1 className="text-4xl md:text-5xl font-display leading-tight">
            I'm Piyush Giri. I live in India, where I build the future.
          </h1>
          <p className="text-gray-400 leading-relaxed">
            I am a self-driven, career-oriented software engineer specializing in full stack
            development currently pursuing a bachelors degree in
            computer science. My expertise lies in building interactive web applications. 
            Primarily working with technologies like JavaScript, TypeScript and MERN Stack.
          </p>
          <p className="text-gray-400 leading-relaxed">
            I strongly believe in continuous learning and improving myself, so I try my best to
            learn in any situation possible, unfavorable or not.
          </p>
          <blockquote className="glass-card italic text-gray-300/90 text-sm leading-relaxed mt-6 pl-4 border-l-2 border-emerald-500/30">
            If you ever spot me in the wild, don't hesitate to say hello! Let's
            grab a drink and geek-out over the latest advancements in web development or discuss our favorite programming language. ⚡
          </blockquote>
        </div>

        <div className="glass-hero p-8 rounded-2xl space-y-6 fade-in-right">
          <div className="w-full flex justify-center">
            <img
              src={Profile}
              alt="Piyush Giri"
              className="w-48 h-48 rounded-full object-cover border-2 border-white/10 shadow-lg"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <FiExternalLink />
              View Resume
            </a>
            <a
              href={resumeDownloadLink}
              download
              className="btn-ghost flex items-center gap-2 w-full sm:w-auto justify-center text-gray-200"
            >
              <FiDownload />
              Download
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-300/90">
            <CiMail className="text-2xl" />
            <a
              href="mailto:giri.piyush2003@gmail.com"
              className="hover:text-emerald-400 transition"
            >
              giri.piyush2003@gmail.com
            </a>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="max-w-6xl mx-auto mt-16 fade-in-up">
        <h2 className="text-3xl font-semibold mb-6">Technologies</h2>
        <p className="text-gray-400 mb-8 text-sm">
          Tools, technologies and gadgets I use on a daily basis but not limited to.
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4">
          {skills.map((s, i) => (
            <a
              key={i}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="skill-chip glass-skill skill-link scale-in"
              style={{ animationDelay: `${i * 0.05}s` }}
              aria-label={`${s.name} documentation`}
              data-name={s.name}
            >
              <img src={s.img} alt={s.name} className="skill-img" />
            </a>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="max-w-6xl mx-auto mt-16 fade-in-up">
        <h2 className="text-3xl font-semibold mb-6">Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map((tool, idx) => (
            <a
              key={idx}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card hover:bg-white/[0.04] transition block"
            >
              <h3 className="font-semibold text-lg text-gray-100">{tool.name}</h3>
              <p className="text-sm text-gray-400 mt-1">{tool.desc}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Platforms */}
      <section className="max-w-6xl mx-auto mt-16 fade-in-up">
        <h2 className="text-3xl font-semibold mb-6">Platforms</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {platforms.map((platform, idx) => (
            <a
              key={idx}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card hover:bg-white/[0.04] transition block"
            >
              <h3 className="font-semibold text-lg text-gray-100">{platform.name}</h3>
              <p className="text-sm text-gray-400 mt-1">{platform.desc}</p>
            </a>
          ))}
        </div>
      </section>

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

export default About
