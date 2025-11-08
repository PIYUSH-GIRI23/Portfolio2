
import './App.css'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/Homepage.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Shrinkr from './components/projects/shrinkr/Shrinkr.jsx'
import Zipp from './components/projects/zipp/Zipp.jsx'
import CliTodo from './components/projects/cli-todo/CliTodo.jsx'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/shrinkr' element={<Shrinkr />} />
          <Route path='/projects/zipp' element={<Zipp />} />
          <Route path='/projects/cli-todo' element={<CliTodo />} />
        </Routes>
      </BrowserRouter>  
    </>
  )
}

export default App
