import React from 'react'
import { CiMail } from 'react-icons/ci'
import { FiMenu, FiX } from 'react-icons/fi'
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (open) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [open]);

  const handleNavigate = (path) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <header className="sticky top-0 z-50 glass-nav">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-3 cursor-pointer" onClick={()=> navigate('/') }>
          <img src="/logo.png" alt="logo" className="h-9 w-auto rounded-sm shadow-sm" />
          <span className="text-sm font-medium text-gray-200">Piyush Giri</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-gray-200/90 font-medium">
          <button
            type="button"
            onClick={() => navigate('/about')}
            className="hover:underline hover:text-white transition text-left"
          >
            About
          </button>
          <button
            type="button"
            onClick={() => navigate('/projects')}
            className="hover:underline hover:text-white transition text-left"
          >
            Projects
          </button>
          <button
            type="button"
            onClick={() => navigate('/skills')}
            className="hover:underline hover:text-white transition text-left"
          >
            Skills
          </button>
          <button
            type="button"
            onClick={() => navigate('/experience')}
            className="hover:underline hover:text-white transition text-left"
          >
            Experience
          </button>
        </nav>

        <div className="flex items-center gap-3">
          <a href="mailto:giri.piyush2003@gmail.com" className="btn-nav hidden sm:inline-flex">Hire me</a>
          <a href="mailto:giri.piyush2003@gmail.com" className="text-2xl text-gray-200/90 hover:text-white" aria-label="Email">
            <CiMail/>
          </a>
          <button
            type="button"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={() => setOpen(o => !o)}
            className="md:hidden text-2xl text-gray-200/90 hover:text-white focus:outline-none"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden absolute inset-x-0 top-full bg-[#0b0b0d]/95 backdrop-blur-sm border-t border-white/10">
          <div className="px-6 py-6 flex flex-col gap-4 text-gray-200 font-medium">
            <button onClick={() => handleNavigate('/about')} className="text-left hover:text-white">About</button>
            <button onClick={() => handleNavigate('/projects')} className="text-left hover:text-white">Projects</button>
            <button onClick={() => handleNavigate('/skills')} className="text-left hover:text-white">Skills</button>
            <button onClick={() => handleNavigate('/experience')} className="text-left hover:text-white">Experience</button>
            <a href="mailto:giri.piyush2003@gmail.com" className="btn-nav w-fit">Hire me</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
