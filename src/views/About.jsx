import { useEffect, useRef, useState } from "react"
import appData from '../json/appData.json'
const About = () => {
  const temp = useRef(null);
  const weather = useRef(null);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [outSideWork, setOutSideWork] = useState([])
  const workItems = appData.WorkItems
  useEffect(() => {
    document.title = 'Abdullah • About'
    const url = 'https://api.weatherapi.com/v1/current.json?key=009289972cfc4cbc9cc143815240107&q=Cairo&aqi=no'
    fetch(url).then(res => res.json()).then(res => {
      temp.current = res.current.temp_c
      weather.current = res.current.condition.text
    })
    // For a unique items
    const lastArray = new Set();
    const OutSideWork = appData.OutSideWork;
    // Looping for two randoms
    while (lastArray.size < 2) {
      const randomIndex = Math.floor(Math.random() * OutSideWork.length);
      lastArray.add(OutSideWork[randomIndex]);
    }
    const resultArray = [...lastArray];
    setOutSideWork(resultArray);
  }, [])
  return (
    <>
      <div className="text-center uncopyable fadeUp my-36 mob:my-16 mob:px-3">
        <h1 className="title uncopyable">
          I&apos;m Abdullah.
        </h1>
      </div>
      <main className="p-10 fadeUp grid grid-cols-2 justify-items-center items-center mob:grid-cols-1 mob:gap-10 mob:items-center">
        <div className="w-1/2 mob:w-full">
          <img loading="lazy" src="/imgs/me.jpg" alt="memoji" className=" brightness-[0.6] rounded rounded-tl-full rounded-tr-full" />
        </div>
        <div>
          <h2 className="textAcorn text-[4vw] w-fit mob:text-[7vw]">
            I&apos;m a Frontend Developer <br /> based in
            <span className="capitalize mx-1"> {weather.current || 'Sunny'} {temp.current || '32.3'}&deg;C </span>

            Mansoura, Egypt .
          </h2>
          <article className="textUbuntu text-[#78797c] tracking-wide text-[1.7vw] mob:text-[4vw]">
            I&apos;m here to mix creativity with technical expertise, in addition learning and evolving in the fast-paced world of frontend development.
          </article>
        </div>
      </main>
      <h2 className="textAcorn text-center text-6xl tracking-wide my-24 fadeUp">
        Small Breif
      </h2>
      <main className="grid grid-cols-2 p-24 mx-10 rounded-xl gap-10 my-10 bg-[#0f0e0e] mob:grid-cols-1 mob:px-4">
        {
          workItems.map((item, index) => (
            <div key={index}>
              <h3 className="textAcorn text-3xl opacity-50">0{index + 1}</h3>
              <h3 className="my-5 textAcorn text-3xl">{item.title}</h3>
              <p className="textUbuntu text-xl">{item.article}</p>
            </div>
          ))
        }
      </main>
      <h2 className="textAcorn text-center text-6xl tracking-wide my-24 fadeUp">
        Work Mode OFF
      </h2>
      <section>
        <main className="flex justify-center items-center gap-5 px-16 h-fit mob:px-8">
          {
            outSideWork.map((item, index) => (
              <div key={index} className={`relative ${index === 0 ? 'w-3/4 mob:w-full' : 'w-1/4 mob:hidden'}`}>
                <div>
                  <div
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                  >
                    <img loading="lazy" src={item.img} className="object-cover w-full h-[40rem] rounded-xl object-center" />
                  </div>
                </div>
                <div
                  className={`itemTitle transition-all duration-300 absolute left-3 bg-[#0f0e0ec3] px-4 py-1 rounded-xl textUbuntu ${hoverIndex === index ? 'bottom-3 opacity-100' : 'bottom-0 opacity-0'
                    }`}
                >
                  <p>{item.title}</p>
                </div>
              </div>
            ))
          }
        </main>
      </section>
      <div className="px-20 text-3xl  text-left my-16 textAcorn tracking-wide mob:text-2xl mob:px-8">
        <p >
          Outside of work, you&apos;ll find me relaxing by the sea, creating memories, perfecting the art of making my super COFFEE, hitting the GYM to recover from JavaScript headaches, and dominating FIFA matches as effortlessly as REAL MADRID conquers the Champions League .
        </p>
      </div>
    </>
  )
}
export default About

