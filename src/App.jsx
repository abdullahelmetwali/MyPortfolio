import { BrowserRouter as Router, Routes, Route, NavLink, useParams, useLocation } from "react-router-dom"
import Work from "./views/Work"
import About from './views/About'
import ProjectDetails from "./components/ProjectDetails"
import { useEffect, useState } from "react"
import ContactBot from "./components/ContactBot"
import Fun from "./views/Fun"
import Footer from "./components/Footer"
const App = () => {
  const [scrollY, setScrollY] = useState(0);
  const [contactBotView, setContactBotView] = useState(false);
  const param = useParams()
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [contactBotView, param]);
  const botView = () => {
    setContactBotView(!contactBotView)
  }
  return (
    <>
      <Router>
        <LocationWrapper />
        <header>
          <nav className="flex justify-center items-center py-12">
            <ul className={`w-fit flex gap-8 items-center fixed px-7 py-2 rounded-3xl z-20 ${scrollY > 80 ? 'blured' : ' bg-inherit'} mob:gap-3`}>
              <li><NavLink to={`/`} className={`text-lg px-4 py-1 rounded-3xl ${location.pathname === '/work' ? 'active' : ''}`}>Work</NavLink></li>
              <li><NavLink to={`/about`} className="text-lg px-4 py-1 rounded-3xl">About</NavLink></li>
              <li><NavLink to={`/fun`} className="text-lg px-4 py-1 rounded-3xl">Fun</NavLink></li>
              <li><p className="text-lg px-4 py-1 rounded-3xl cursor-pointer" onClick={() => botView()}>Contact</p></li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Work />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/fun" element={<Fun />} />
          <Route path="/work/:projectName" element={<ProjectDetails />} />
        </Routes>
      </Router>
      <ContactBot contactBotView={contactBotView} botView={botView} />
      <Footer />
    </>
  )
};

const LocationWrapper = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
};
export default App
