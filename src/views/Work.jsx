import { NavLink } from "react-router-dom";
import appData from '../json/appData.json'
const Work = () => {
  const WorkProjects = appData.WorkProjects;
  document.title = 'Abdullah • Frontend Developer';
  return (
    <>
      <div className="text-center uncopyable fadeUp my-36 mob:my-16 mob:px-3">
        <h1 className="title uncopyable">
          <span>Hi. I&apos;m Abdullah.</span>
          <br />
          <span>A Frontend.</span>
        </h1>
        <h2 className="textAcorn fadeUp tracking-wider text-lg my-8">
          Turning design to code, engaging frontend solutions with Highly
          detail-focusing <br className="mob:hidden" /> and a deep understanding
          of user behavior.
        </h2>
      </div>
      <section className="grid grid-cols-3 content mob:fadeUp gap-4 my-24 px-10 mob:flex mob:flex-col mob:px-5">
        {WorkProjects.map((project, index) => (
          <NavLink
            key={index}
            to={`/work/${project.projectName.replaceAll(" ", "").toLowerCase()}`}
            className={`${(Math.floor(index / 2) % 2 === 0)
              ? (index % 2 === 0 ? 'col-span-2' : 'col-span-1')
              : (index % 2 === 0 ? 'col-span-1' : 'col-span-2')
              } bg-[#0f0e0e] textAcorn text-center rounded-xl p-4 fadeUp`}
          >
            <h3 className="text-3xl tracking-wide m-4 mob:text-2xl mob:m-2">
              {project.projectName}
            </h3>
            <p className="text-xl tracking-wide my-3 mob:text-base mob:my-2">
              {project.projectCaption}
            </p>
          </NavLink>
        ))}

      </section>
    </>
  );
};
export default Work;
