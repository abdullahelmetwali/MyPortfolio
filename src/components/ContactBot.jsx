/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import appData from "../json/appData.json";
import BotQuestions from "./BotContent/BotQuestions";
import BotIntro from "./BotContent/BotIntro";
import BotAnswers from "./BotContent/BotAnswers";
import CloseSvg from "/icons/CloseSvg.svg";

const ContactBot = (props) => {
  const BotData = appData.BotData;
  const contactBotView = props.contactBotView;
  const botView = props.botView;

  const [lastQuestion, setLastQuestion] = useState(null);
  const [lastAnswers, setLastAnswers] = useState([]);
  const [nowQuestion, setNowQuestion] = useState("");
  const [nowAnswers, setNowAnswers] = useState([]);
  const [visibleAnswers, setVisibleAnswers] = useState([]);
  const [showBotQuestions, setShowBotQuestions] = useState(false);
  const botScroller = useRef(null);

  useEffect(() => {
    if (botScroller.current) {
      botScroller.current.scrollTop = botScroller.current.scrollHeight;
    }
  }, [lastQuestion, nowQuestion, visibleAnswers]);

  const handleQuestionClick = (question) => {
    setLastQuestion(nowQuestion);
    const filteredAnsw = nowAnswers.filter(ans => ans !== "abdullahelmetwali@icloud.com")
    setLastAnswers(filteredAnsw)
    const quesObj =
      BotData.botAnswers.find((answer) => answer.question === question) || {};
    setNowQuestion(question);
    setNowAnswers(quesObj.answers || []);
    setShowBotQuestions(false);

    // Add answers one by one
    setVisibleAnswers([]);
    quesObj.answers?.map((answer, index) => {
      setTimeout(
        () => {
          setVisibleAnswers((prev) => [...prev, answer]);
        },
        (index + 1) * 1000 // Show each answer one by one every second
      ); 
    });
  };

  return (
    <section
      className={` -bottom-full right-3 w-1/3 h-auto mob:w-[98%] mob:right-1 contactBot mob:h-[75dvh] ${contactBotView ? "bottom-0" : "-bottom-full"}`}
    >
      <header className="bg-[#373737fe] flex justify-between items-center  w-full tracking-wide rounded-tr-xl textAcorn rounded-tl-xl p-4">
        <div>
          <h2 className="textAcorn text-xl">Here&apos;s, Abdullah&apos;s Bot.</h2>
          <p className="text-sm">Ask me a question.</p>
        </div>
        <img 
          src={CloseSvg}
          onClick={() => botView()}
          className=" cursor-pointer"
        />
      </header>
      <main className="p-4 h-[480px] overflow-y-scroll" ref={botScroller}>
        <BotIntro botIntro={BotData.botIntro} />
        <BotQuestions
          botQuestions={BotData.botQuestions}
          handleQuestionClick={handleQuestionClick}
        />
        {lastQuestion && (
          <div className="flex w-full justify-end my-4">
            <span className="border px-3 py-1 bg-slate-300 text-black rounded-lg">
              {lastQuestion}
            </span>
          </div>
        )}
        <BotAnswers lastAnswers={lastAnswers} />
        <div className="my-4">
          {nowQuestion && (
            <div>
              <div className="flex w-full justify-end">
                <span className="border px-3 py-1 bg-slate-300 text-black rounded-lg transition-all">
                  {nowQuestion}
                </span>
              </div>
              {visibleAnswers.map((answer, answerInd) => (
            <div key={answerInd} className="grid">
              {
              answer !== "abdullahelmetwali@icloud.com" ? <p className="bg-[#373737a1] px-4 py-2 my-1 w-fit rounded-lg" key={answerInd}> {answer} </p> 
              : <a href={`mailto:${answer}`} target="_blank" className='border-[#5e5e5ec0] cursor-pointer border-[1px] px-4 py-2 my-1  w-fit rounded-full'> Send Message </a> 
            }
            </div>
          ))}
            </div>
              
          )}
        </div>
        {showBotQuestions && (
          <BotQuestions
            botQuestions={BotData.botQuestions}
            handleQuestionClick={handleQuestionClick}
          />
        )}
      </main>
    </section>
  );
};

export default ContactBot;