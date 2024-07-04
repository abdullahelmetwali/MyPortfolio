import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import appData from '../json/appData.json'
const Work = () => {
  const navigate = useNavigate();
  const [scrollY, setScrollY] = useState(0);
  const screenWidth = useRef(null)
  const WorkProjects = appData.WorkProjects;
  useEffect(() => {
    document.title =  'Abdullah • Frontend Developer'
    screenWidth.current = window.screen.width
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY,screenWidth]);
  return (
    <>
      <div className="text-center uncopyable fadeUp my-36 mob:my-16 mob:px-3">
        <h1 className="title uncopyable">
          <span>Hi. I&apos;m Abdullah .</span>
          <br />
          <span>A Frontend .</span>
        </h1>
        <h2 className="textAcorn fadeUp tracking-wider text-lg my-8">
          Turning design to code, engaging frontend solutions with Highly
          detail-focusing <br className="mob:hidden" /> and a deep understanding
          of user behavior.
        </h2>
      </div>
      <section className="grid grid-cols-3 content mob:fadeUp gap-4 my-24 px-10 mob:flex mob:flex-col">
        {WorkProjects.map((project, index) => (
          <div
            key={index}
            className={`box-${index + 1} bg-[#0f0e0e] textAcorn text-center rounded-xl p-4 cursor-pointer fadeUp ${ screenWidth.current > 1100 && scrollY > 92  ? ((index + 1) % 2 !== 0 ? "fadeLeft" : "fadeRight") : ""}`}
            style={{ gridArea: `box-${index + 1}` }}
            onClick={() =>
              navigate(
                `/work/${project.projectName.replaceAll(" ", "").toLowerCase()}`
              )
            }
          >
            <h3 className="text-3xl tracking-wide m-4">
              {project.projectName}
            </h3>
            <p className="text-xl tracking-wide my-3">
              {project.projectCaption}
            </p>
          </div>
        ))}
      </section>
    </>
  );
};
export default Work;
