/* eslint-disable react/prop-types */
const BotIntro = ({ botIntro }) => {
    return (
        <div className='my-4 INRO'>
                    {botIntro.map((intro, index) => (
                        <p className='bg-[#373737a1] cursor-pointer w-fit px-4 py-1 my-1 rounded-lg' key={index} onClick={() => console.log(intro)}>{intro}</p>
                    ))}
                </div>
    )
}
export default BotIntro