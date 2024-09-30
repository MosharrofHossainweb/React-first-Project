import CountUp from 'react-countup';

const CommontCounter = ({ counterNumber, counterIcon, counterText, countPlus }) => {
  return (
    <>
     <div className="common_counter_row">
        <div className="single_common_counter flex gap-[50px]">
          <div className="single_common_counter flex flex-col text-4xl mt-[42px]">
            <div className="single_icon flex gap-[10px] text-3xl">
              <div className="text-[#F2994A] text-3xl pt-[17px] font-bold">
                {counterIcon}
              </div>

              <CountUp end={counterNumber} className="font-black font-inter text-secondaryColor pt-[13px]" />
              {<h2 className='text-5xl font-bold pb-[5px]'>{countPlus}</h2>}

            </div>
            <p className="text-[18px] font-normal font-inter text-[#A0A79A]">{counterText}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CommontCounter;
 