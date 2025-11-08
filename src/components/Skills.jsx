import React from 'react'
import { FiExternalLink } from 'react-icons/fi'
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
  { 
    img: Html, 
    name: 'HTML', 
    desc: 'Markup language for creating web pages and applications.',
    url: 'https://developer.mozilla.org/docs/Web/HTML'
  },
  { 
    img: Css, 
    name: 'CSS', 
    desc: 'Style sheet language for designing and styling web pages.',
    url: 'https://developer.mozilla.org/docs/Web/CSS'
  },
  { 
    img: Javascript, 
    name: 'JavaScript', 
    desc: 'Versatile programming language for dynamic and interactive web content.',
    url: 'https://developer.mozilla.org/docs/Web/JavaScript'
  },
  { 
    img: Typescript, 
    name: 'TypeScript', 
    desc: 'JavaScript superset with static typing for safer code.',
    url: 'https://www.typescriptlang.org/docs'
  },
  { 
    img: Bootstrap, 
    name: 'Bootstrap', 
    desc: 'CSS framework for building responsive and mobile-first websites.',
    url: 'https://getbootstrap.com/docs'
  },
  { 
    img: Tailwind, 
    name: 'Tailwind CSS', 
    desc: 'Utility-first CSS framework for rapidly building custom designs.',
    url: 'https://tailwindcss.com/docs'
  },
  { 
    img: Reactjs, 
    name: 'React', 
    desc: 'JavaScript library for building interactive user interfaces.',
    url: 'https://react.dev'
  },
  { 
    img: Redux, 
    name: 'Redux', 
    desc: 'Predictable state container for managing application state.',
    url: 'https://redux.js.org'
  },
  { 
    img: Node, 
    name: 'Node.js', 
    desc: 'JavaScript runtime for building scalable server-side applications.',
    url: 'https://nodejs.org/docs'
  },
  { 
    img: Express, 
    name: 'Express', 
    desc: 'Minimalist web framework for building Node.js applications.',
    url: 'https://expressjs.com'
  },
  { 
    img: Mongo, 
    name: 'MongoDB', 
    desc: 'NoSQL database for storing flexible, document-based data.',
    url: 'https://www.mongodb.com/docs'
  },
  { 
    img: Mysql, 
    name: 'MySQL', 
    desc: 'Relational database management system for structured data storage.',
    url: 'https://dev.mysql.com/doc'
  },
  { 
    img: Redis, 
    name: 'Redis', 
    desc: 'In-memory data store for caching and real-time operations.',
    url: 'https://redis.io/docs'
  },
  { 
    img: Cloudinary, 
    name: 'Cloudinary', 
    desc: 'Cloud service for media storage and transformation APIs.',
    url: 'https://cloudinary.com/documentation'
  },
  { 
    img: Python, 
    name: 'Python', 
    desc: 'High-level language for scripting, automation, and data science.',
    url: 'https://docs.python.org/3'
  },
  { 
    img: C, 
    name: 'C', 
    desc: 'Foundational programming language for systems and embedded software.',
    url: 'https://en.cppreference.com/w/c'
  },
  { 
    img: Cpp, 
    name: 'C++', 
    desc: 'Powerful language for performance-critical and object-oriented programming.',
    url: 'https://en.cppreference.com/w'
  },
  { 
    img: Git, 
    name: 'Git', 
    desc: 'Version control system for tracking code changes and collaboration.',
    url: 'https://git-scm.com/doc'
  }
]

const Skills = () => {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b0b0d] to-[#0f1113] text-gray-200 px-6 py-12">
      <section className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-display mb-4">Skills & Technologies</h1>
          <p className="text-gray-400 text-lg">
            A comprehensive overview of the technologies, frameworks, and tools I work with daily to build modern web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, idx) => (
            <div key={idx} className={`skill-card skill-enter`} style={{animationDelay: `${idx * 60}ms`}}>
              <div className="flex items-start gap-4">
                <div className="skill-icon-wrap">
                  <img src={skill.img} alt={skill.name} className="w-12 h-12 object-contain" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="skill-name text-gray-100 mb-1">{skill.name}</h3>
                  <p className="skill-desc mb-3">{skill.desc}</p>
                  <a
                    href={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="skill-doc-link"
                  >
                    Documentation
                    <FiExternalLink className="text-xs" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

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

export default Skills
