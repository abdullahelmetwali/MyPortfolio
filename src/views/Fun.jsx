import { useEffect } from 'react';
import appData from '../json/appData.json'
const Fun = () => {
  useEffect(() => {
    document.title =  'Abdullah • Fun'
  })
    const FunProjects = appData.FunProjects;
    return (
       <>
        <div className="text-center uncopyable fadeUp my-36 mob:my-16 mob:px-3">
        <h1 className="title uncopyable">
            Fun.
        </h1>
        <h2 className="textAcorn fadeUp tracking-wider text-lg my-8">
          Collection of sites I&apos;ve created, for fun .
        </h2>
      </div>
      <section className='grid grid-cols-1 justify-center px-[25%] mob:px-[10%] gap-10 my-24 fadeUp'>
        {
          FunProjects.map((proj , index) => (
            <div key={index} className='p-5 rounded-2xl bg-[#0f0e0e] transform transition-all duration-300 ease-in-out delay-75 hover:scale-90'>
             <a target="_blank" href={proj.projectLiveServer} className='flex gap-20 items-center mob:gap-10'>
               <div>
                <h2 className='textAcorn text-2xl tracking-wide mob:text-xl'>{proj.projectName}</h2>
                <p className='textUbuntu text-xl tracking-wide mob:text-base'>{proj.projectCaption}</p>
              </div>
              <div className='w-1/3 mob:w-full'><img src={proj.projectMainImg} alt={proj.projectName} className=' bg-[#343434] rounded-2xl'/></div>
             </a>
            </div>
          ))
        }
      </section>
       </>
    )
}
export default Fun