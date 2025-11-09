import React from 'react'
import Emveto from '../assets/emveto_logo.jpeg'
import Efinz from '../assets/efinz_logo.png'
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
import Avatar from '../assets/avatar.png'

import { useNavigate } from 'react-router-dom'
const AnimatedBoxes = () => {
  return (
    <div className="relative w-full h-full">
      {/* A few decorative floating boxes */}
      <div className="animated-box box-1" />
      <div className="animated-box box-2" />
      <div className="animated-box box-3" />
      <div className="animated-box box-4" />
    </div>
  )
}

const skills = [
  { img: Html, name: 'HTML', url: 'https://developer.mozilla.org/docs/Web/HTML' },
  { img: Css, name: 'CSS', url: 'https://developer.mozilla.org/docs/Web/CSS' },
  { img: Javascript, name: 'JavaScript', url: 'https://developer.mozilla.org/docs/Web/JavaScript' },
  { img: Typescript, name: 'TypeScript', url: 'https://www.typescriptlang.org/docs' },
  { img: Bootstrap, name: 'Bootstrap', url: 'https://getbootstrap.com/docs/' },
  { img: Tailwind, name: 'Tailwind CSS', url: 'https://tailwindcss.com/docs' },
  { img: Reactjs, name: 'React', url: 'https://react.dev/learn' },
  { img: Redux, name: 'Redux', url: 'https://redux.js.org/' },
  { img: Node, name: 'Node.js', url: 'https://nodejs.org/en/docs' },
  { img: Express, name: 'Express', url: 'https://expressjs.com/' },
  { img: Mongo, name: 'MongoDB', url: 'https://www.mongodb.com/docs/' },
  { img: Mysql, name: 'MySQL', url: 'https://dev.mysql.com/doc/' },
  { img: Redis, name: 'Redis', url: 'https://redis.io/docs/' },
  { img: Cloudinary, name: 'Cloudinary', url: 'https://cloudinary.com/documentation' },
  { img: Python, name: 'Python', url: 'https://docs.python.org/3/' },
  { img: C, name: 'C', url: 'https://en.cppreference.com/w/c' },
  { img: Cpp, name: 'C++', url: 'https://en.cppreference.com/w/' },
  { img: Git, name: 'Git', url: 'https://git-scm.com/doc' }
]

const experiences = [
  {logo: Efinz, company: 'Efinz', title: 'Web Developer Intern', date: 'Feb 2023 - Jul 2023', desc: 'At Efinz, I focussed on making a digital lending and agent-based financial platform with dedicated admin and agent control improving workflow automation and response time by 45%.'},
  {logo: Emveto, company: 'Emveto', title: 'Web Developer Intern', date: 'Oct 2024 - Nov 2024', desc: 'At Emveto, I worked on Email Automation and domain reputation management tools for high deliverability campaigns enhancing email reach and engagement by 60%.'}
]

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b0b0d] to-[#0f1113] text-gray-200 px-6 py-12">
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-display leading-tight">Software engineer<br/> & full stack developer</h1>
          <p className="text-gray-400 max-w-xl">I am Piyush Giri, an experienced full-stack developer passionate about learning and building projects beneficial to developers and the world at large.</p>

          <div className="flex items-center gap-4">
            <a className="social-link" target="_blank" href="https://www.github.com/PIYUSH-GIRI23">GitHub</a>
            <a className="social-link" target="_blank" href="https://www.linkedin.com/in/piyush-giri-031b71254/">LinkedIn</a>
            <a className="social-link" target="_blank" href="https://x.com/GIRIPIYUSH2310">Twitter</a>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <li onClick={()=>navigate('/projects')} className="cursor-pointer btn-primary">View projects</li>
            <a href="mailto:giri.piyush2003@gmail.com" className="btn-ghost text-white">Hire me</a>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="glass-hero p-8 rounded-2xl w-full max-w-md">
            <div className="w-full h-64 bg-gradient-to-br from-white/3 to-transparent rounded-lg flex items-center justify-center">
              <img src={Avatar} alt="avatar" className="w-36 h-36 rounded-full object-cover border border-white/6 shadow-lg"/>
            </div>
            <p className="mt-4 text-sm text-gray-300/90">Creative developer with a love for elegant interfaces and tiny delightful interactions.</p>
          </div>

          {/* Animated decorative boxes positioned to the right */}
          <div className="absolute right-0 top-6 w-72 h-72 pointer-events-none">
            <AnimatedBoxes />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-6xl mx-auto mt-14">
        <h2 className="text-2xl font-semibold mb-6">Skills</h2>
        <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-9 gap-4">
          {skills.map((s, i) => (
            <a
              key={i}
              className="skill-chip glass-skill skill-link"
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${s.name} documentation`}
              data-name={s.name}
            >
              <img src={s.img} alt={s.name} className="skill-img" />
            </a>
          ))}
        </div>
      </section>

      {/* Experience timeline */}
      <section id="experience" className="max-w-6xl mx-auto mt-16 pb-12">
        <h2 className="text-2xl font-semibold mb-6">Work Experience</h2>
        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div className={`timeline-item`} key={idx}>
              <div className="timeline-icon">
                <img src={exp.logo} alt={exp.company} className="w-10 h-10 rounded-md object-cover" />
              </div>

              <div className="timeline-card glass-card">
                <div>
                  <div className="font-semibold">{exp.company}</div>
                  <div className="text-sm text-gray-400">{exp.title}</div>
                  <div className="text-xs text-gray-500 mt-1">{exp.date}</div>
                </div>
                <p className="mt-3 text-gray-300 text-sm">{exp.desc}</p>
              </div>
            </div>
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

export default Homepage
