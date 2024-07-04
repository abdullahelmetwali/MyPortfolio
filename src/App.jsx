import { BrowserRouter as Router , Routes , Route , NavLink, Navigate } from "react-router-dom"
import Work from "./views/Work"
import About from './views/About'
import ProjectDetails from "./components/ProjectDetails"
import { useEffect, useState } from "react"
import ContactBot from "./components/ContactBot"
import Fun from "./views/Fun"
import Footer from "./components/Footer"
const App = () => {
  const [scrollY, setScrollY] = useState(0);
  const [contactBotView , setContactBotView] = useState(false) 
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [contactBotView]);
  const botView = () => {
    setContactBotView(!contactBotView)
  }
  return (
   <>
   <Router>
    <header>
    <nav className="flex justify-center items-center py-12">
      <ul className={`w-fit flex gap-8 items-center fixed px-7 py-2 rounded-3xl z-20 ${scrollY > 80 ? 'blured' : ' bg-inherit'} mob:gap-3`}>
        <li><NavLink to={`/work`} className="text-lg px-4 py-1 rounded-3xl">Work</NavLink></li>
        <li><NavLink to={`/about`} className="text-lg px-4 py-1 rounded-3xl">About</NavLink></li>
        <li><NavLink to={`/fun`} className="text-lg px-4 py-1 rounded-3xl">Fun</NavLink></li>
        <li><p className="text-lg px-4 py-1 rounded-3xl cursor-pointer" onClick={()=> botView()}>Contact</p></li>
      </ul>
    </nav>
    </header>
    <Routes>
      <Route path="/" element={<Navigate to={`/work`} replace/>}/>
      <Route path="/work"  element={<Work/>}/> 
      <Route path="/about" element={<About/>}/>
      <Route path="/fun" element={<Fun/>}/>
      <Route path="/work/:projectName" element={<ProjectDetails/>}/>
    </Routes>
   </Router>
   <ContactBot contactBotView={contactBotView} botView={botView} />
   <Footer/>
   </>
  )
}

export default App
