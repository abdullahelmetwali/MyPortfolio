/* eslint-disable react/prop-types */
const BotQuestions = ({ handleQuestionClick , botQuestions}) => {
    return (
         <div>
                    {botQuestions.map((ques, index) => (
                        <p key={index} className='border-[#5e5e5ec0] cursor-pointer border-[1px] px-4 py-2 my-1 w-fit rounded-full' onClick={() => handleQuestionClick(ques)}>{ques}</p>
                    ))}
                </div>
    )
}
export default BotQuestions