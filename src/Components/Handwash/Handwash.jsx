import React from 'react';
import CountUp from 'react-countup';
import CommonHead from '../Common/CommonHead';
import { FaBox } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { BsEmojiSmileFill } from "react-icons/bs";
import CommontButton from '../Common/CommontButton';

const CommontCounter = ({ counterNumber, counterIcon, counterText, countPlus }) => (
  <div className="counter_item flex flex-col items-center">
    <div className="icon text-4xl text-[#F2994A]">
      {counterIcon}
    </div>
    <div className="counter_number font-black font-inter text-secondaryColor text-[32px]">
      <CountUp end={counterNumber} />{countPlus}
    </div>
    <div className="counter_text text-[14px] lg:text-[18px] font-normal font-inter text-[#A0A79A]">
      {counterText}
    </div>
  </div>
);

const Handwash = () => {
  return (
    <section className='handwash w-full bg-[#ECEBE6] pb-[100px] lg:pb-[149px] mt-[60px] lg:mt-[121px] mb-[60px] lg:mb-[110px]'>
      <div className="container mx-auto px-4 lg:px-0">
        <div className="wash_item_row flex flex-col lg:flex-row lg:gap-[121px] pt-[100px] lg:pt-[205px] items-center">
          <div className="handwash_text w-full lg:px-5 lg:w-[599px] text-center lg:text-left">
            <CommonHead commonHeadtext={'All skins types'} />
            <div className="common_counter_row flex justify-center lg:justify-start gap-[20px] lg:gap-[80px] pt-[20px] flex-wrap">
              <CommontCounter counterNumber={48} counterIcon={<FaBox />} counterText={'Products'} />
              <CommontCounter counterNumber={200} counterIcon={<FaShoppingBag />} countPlus={'+'} counterText={'Products sold'} />
              <CommontCounter counterNumber={99} counterIcon={<BsEmojiSmileFill />} countPlus={'+'} counterText={'Reviews'} />
            </div>
            <h2 className='pt-[20px] lg:pt-[40px] pb-[20px] lg:pb-[40px] text-[24px] lg:text-[36px] font-ptSerif font-normal text-[#C51605]'>
              Men’s Hand wash lorem
            </h2>
            <div className="card_price flex flex-col lg:flex-row items-center gap-[20px]">
              <CommontButton commonButtontext={'Add to Cart'} commonButtonEffect={'hover:bg-blue-900 active:scale-[1.1]'} />
              <h2 className='text-[26px] lg:text-[30px] font-ptSerif font-normal text-[#C51605]'>৳ 700</h2>
            </div>
          </div>
          <div className="handwash_image mt-[40px] lg:mt-0 w-full lg:w-auto">
            <img src="Images/hadn_wash.png" alt="Handwash product" className="mx-auto lg:mx-0 max-w-[300px] lg:max-w-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Handwash;
