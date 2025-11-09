import React, { useEffect, useRef } from 'react'
import { FiAward, FiBookOpen, FiCode, FiBriefcase, FiExternalLink } from 'react-icons/fi'
import Emveto from '../assets/emveto_logo.jpeg'
import Efinz from '../assets/efinz_logo.png'

const workExperience = [
  {
    logo: Efinz,
    company: 'Efinz',
    title: 'Web Developer Intern',
    date: 'Feb 2023 - Jul 2023',
    desc: 'At Efinz, I focussed on making a digital lending and agent-based financial platform with dedicated admin and agent control improving workflow automation and response time by 45%.'
  },
  {
    logo: Emveto,
    company: 'Emveto',
    title: 'Web Developer Intern',
    date: 'Oct 2024 - Nov 2024',
    desc: 'At Emveto, I worked on Email Automation and domain reputation management tools for high deliverability campaigns enhancing email reach and engagement by 60%.'
  }
]

const education = [
  {
    degree: '12th Board (CBSE)',
    institution: 'Spring Meadows Public School, New Delhi',
    date: '2020 - 2021',
    score: '94%',
    desc: 'Completed senior secondary education with distinction in Science stream.'
  },
  {
    degree: 'B.Tech in Information Technology',
    institution: 'Bhagwan Parshuram Institute of Technology, Rohini',
    date: '2022 - 2026',
    score: 'CGPA: 8.7/10',
    desc: 'Pursuing undergraduate degree with focus on full-stack development, data structures, algorithms, and software engineering principles.'
  }
]

const projects = [
  {
    name: 'Shrinkr',
    link: 'https://x.piyushx.tech',
    tech: 'React.js, Express.js, MongoDB, OAuth, Redis, JWT',
    desc: 'Built a scalable URL Shortener that helps users manage, track and view analytics of custom short links.',
    highlights: [
      'Implements JWT, Google Oauth Login, redis caching and easy sharing through QR Code.',
      'Achieved ~90% faster lookups with redis caching and reduced API latency significantly.'
    ]
  },
  {
    name: 'Zipp',
    link: 'https://zipp.piyushx.tech',
    tech: 'React.js, Express.js, Mongo DB, Redis, Cloudinary, Google OAuth',
    desc: 'Developed a cloud clipboard app for storing, syncing and sharing text and media across devices.',
    highlights: [
      'Integrated rate limiting, hybrid authentication model, cloudinary, API Gateway and OAuth.',
      'Improved user productivity by ~90% with instant upload/downloads and optimised file sync speed by ~70%'
    ]
  }
]

const achievements = [
  {
    title: 'Winner',
    desc: 'Smart India Hackathon 2023 (University Level)'
  },
  {
    title: 'LeetCode',
    desc: '1750+ rating, 550+ DSA problems solved'
  }
]

const softSkills = [
  { 
    icon: <FiCode />, 
    title: 'Attention to Detail', 
    desc: 'I take pleasure in creating designs and UIs with careful precision, emphasizing quality over quantity.' 
  },
  { 
    icon: <FiBookOpen />, 
    title: 'Continuous Learning', 
    desc: 'I strongly believe in improving myself, so I try my best to learn in any situation possible.' 
  },
  { 
    icon: <FiBriefcase />, 
    title: 'Self-Management', 
    desc: 'I understand people are busy and would love to get things done timely with little supervision.' 
  },
  { 
    icon: <FiAward />, 
    title: 'Problem Solving', 
    desc: 'I enjoy tackling complex challenges and finding elegant solutions through analytical thinking.' 
  }
]

const Experience = () => {
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
    const elements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in, .slide-up')
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
        <div className="mb-12 fade-in-up">
          <h1 className="text-4xl md:text-5xl font-display mb-4">Experience & Education</h1>
          <p className="text-gray-400 text-lg">
            My professional journey, educational background, certifications, and continuous learning path in software development.
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-16 fade-in-left">
          <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2">
            <FiBriefcase className="text-emerald-500" />
            Work Experience
          </h2>
          <div className="timeline">
            {workExperience.map((exp, idx) => (
              <div className="timeline-item slide-up" key={idx} style={{ animationDelay: `${idx * 0.2}s` }}>
                <div className="timeline-icon">
                  <img src={exp.logo} alt={exp.company} className="w-10 h-10 rounded-md object-cover" />
                </div>
                <div className="timeline-card glass-card">
                  <div>
                    <div className="font-semibold text-lg">{exp.company}</div>
                    <div className="text-sm text-gray-400">{exp.title}</div>
                    <div className="text-xs text-gray-500 mt-1">{exp.date}</div>
                  </div>
                  <p className="mt-3 text-gray-300 text-sm">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16 fade-in-right">
          <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2">
            <FiBookOpen className="text-emerald-500" />
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu, idx) => (
              <div key={idx} className="glass-card scale-in" style={{ animationDelay: `${idx * 0.15}s` }}>
                <h3 className="font-semibold text-lg text-gray-100">{edu.degree}</h3>
                <div className="text-emerald-400 text-sm mt-1">{edu.institution}</div>
                <div className="text-xs text-gray-500 mt-1">
                  {edu.date} | {edu.score}
                </div>
                <p className="text-sm text-gray-400 mt-3">{edu.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="mb-16 fade-in-up">
          <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2">
            <FiCode className="text-emerald-500" />
            Projects
          </h2>
          <div className="space-y-6">
            {projects.map((project, idx) => (
              <div key={idx} className="glass-card hover:bg-white/[0.04] transition slide-up" style={{ animationDelay: `${idx * 0.15}s` }}>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="font-semibold text-xl text-gray-100">{project.name}</h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-emerald-400 hover:text-emerald-300 transition whitespace-nowrap"
                  >
                    <FiExternalLink className="text-sm" />
                    Visit
                  </a>
                </div>
                <div className="text-sm text-emerald-400 mb-3">{project.tech}</div>
                <p className="text-sm text-gray-300 mb-3">{project.desc}</p>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="text-sm text-gray-400 flex items-start gap-2">
                      <span className="text-emerald-500 mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16 fade-in-left">
          <h2 className="text-3xl font-semibold mb-6 flex items-center gap-2">
            <FiAward className="text-emerald-500" />
            Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, idx) => (
              <div key={idx} className="glass-card hover:bg-white/[0.04] transition scale-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <h3 className="font-semibold text-lg text-gray-100 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-sm text-gray-400">{achievement.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mb-16 fade-in-right">
          <h2 className="text-3xl font-semibold mb-6">Soft Skills</h2>
          <p className="text-gray-400 mb-6">
            Certain skills I've picked along the way that deserve mentioning:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {softSkills.map((skill, idx) => (
              <div key={idx} className="glass-card hover:bg-white/[0.04] transition scale-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="flex items-start gap-4">
                  <div className="text-3xl text-emerald-500 mt-1">{skill.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-100 mb-2">{skill.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{skill.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

export default Experience
