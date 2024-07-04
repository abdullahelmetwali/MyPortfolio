import { useNavigate, useParams } from "react-router-dom";
import jsonData from "../json/appData.json";
import { useEffect, useMemo, useState } from "react";

const ProjectDetails = () => {
  const navigate = useNavigate();
  const { projectName } = useParams();
  const WorkProjects = jsonData.WorkProjects;
  const displayedProject = WorkProjects?.find(
    (proj) => proj.projectName.replaceAll(" ", "").toLowerCase() === projectName
  );

 const [pageTitle , setPageTitle] = useState('')


  const nextProject = useMemo(() => {
    const getNextElement = () => {
      const projectIndex = WorkProjects.indexOf(displayedProject);
      if (projectIndex !== -1 && projectIndex + 1 < WorkProjects.length) {
        return WorkProjects[projectIndex + 1].projectName;
      } else if (projectIndex + 1 === WorkProjects.length) {
        return WorkProjects[0].projectName;
      }
      return null;
    };
    return getNextElement();
  }, [displayedProject , WorkProjects]);

  useEffect(() => {
    setPageTitle(displayedProject.projectName)
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
    document.title = `Abdullah • ${pageTitle}`;
  }, [displayedProject.projectName , pageTitle]);
  return (
    <>
      <section className="fadeUp text-center uncopyable">
        <div className="my-36 mob:my-12">
          <h1 className="title px-3">
            <span>{displayedProject.projectName} .</span>
          </h1>
        </div>
        <div className="p-10">
          <img loading="lazy"
            src={displayedProject.projectMainImg}
            alt={displayedProject.projectName}
            className="rounded-xl"
          />
        </div>
      </section>
      <main className="fadeUp px-20 mob:px-10">
        <div className="my-5">
          <h2 className="text-5xl textAcorn">Overview .</h2>
          <article className="text-2xl uncopyable textUbuntu text-[#78797c] tracking-wide mob:text-xl">
            {displayedProject.projectOverView}
          </article>
        </div>
        <hr />
        <div className="my-5">
          <h2 className="text-4xl textAcorn mob:text-[2.1rem]">
            Technologies Used .
          </h2>
          <ul className="flex flex-wrap gap-1 text-2xl uncopyable mob:text-2xl textUbuntu text-[#78797c]">
            {displayedProject.projectTechnologies.map((tech, index) => (
              <li key={index}>
                {tech}{" "}
                {displayedProject.projectTechnologies.length !== index + 1
                  ? "| "
                  : ""}
              </li>
            ))}
          </ul>
        </div>
        <hr />
        <div className="my-5">
          <h2 className="text-4xl textAcorn">Code-Detail .</h2>
          <div className="text-2xl textUbuntu text-[#78797c]">
            <a href={displayedProject.projectRepo} target="_blank">
              GitHub Repo |{" "}
            </a>
            <a href={displayedProject.projectLiveServer} target="_blank">
              LiveServer
            </a>
          </div>
        </div>
        <hr />
        <div className="my-20 text-8xl mob:text-4xl nextProject p-8 rounded-full mob:px-4">
          <h1
            className="cursor-pointer"
            onClick={() => {
              navigate(
                `/work/${nextProject.replaceAll(" ", "").toLowerCase()}`
              ),
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
            }}
          >
            {nextProject} .
          </h1>
        </div>
      </main>
    </>
  );
};
export default ProjectDetails;