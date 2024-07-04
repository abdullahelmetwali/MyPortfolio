/* eslint-disable react/prop-types */
const BotAnswers = ({ lastAnswers }) => {
  return (
    <div className="my-4 theanswers">
      {lastAnswers.map((answer, index) => (
        <p
          key={index}
          className={`bg-[#373737a1] px-4 py-2 my-2 w-fit rounded-lg `}
        >
          {answer}
        </p>
      ))}
    </div>
  );
};
export default BotAnswers;
