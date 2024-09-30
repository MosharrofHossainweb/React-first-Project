import CommonHead from "../Common/CommonHead"
import CommontButton from "../Common/CommontButton"
import CommontCounter from "../Common/CommontCounter"
import { FaStar } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa"
import { BsEmojiSmileFill } from "react-icons/bs";

const Banner = () => {
  return (
    <>
        <section className="banner">
            <div className="container">
                <div className="banner_row sm:flex flex-col sm:gap-[20px]  md:flex-row-reverse gap-[72px] mt-2 lg:mt-[173px]">
                    <div className="banner_image">
                        <img src="Images\bannner_img.png" alt="banner_imgaes" />
                    </div>
                    <div className="banner_text w-[540px] pl-[10px] ">
                        <CommonHead commonHeadtext={'Normal to oily skin'}/>
                        <h1 className="text-[22px] lg:text-[72px] mt-5 font-normal font-ptSerif text-secondaryColor w-[300px] lg:w-[540px] ">Men’s Sunscreen
                        hand & body</h1>
                        <p className="font-inter text-[14px] lg:text-[18px] mt-[20px] mb-5 lg:mb-[64px] text-[#A0A79A] w-[300px] lg:w-[526px] ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'</p>
                                <CommontButton commonButtontext={'Add to Cart'} commonButtonEffect={'hover:bg-blue-900 active:scale-[1.1]'}/>
                                   <div className="counter_format flex gap-[30px]">
        
                                <div className="div flex relative">
        
                                <CommontCounter counterNumber={4} counterIcon={<FaStar />}counterText={'Rating'}/>  <CommontCounter counterNumber={6}/>
                                 <h2 className="text-3xl pt-[58px] absolute right-[34px] ">,</h2>
                                    </div>
                                <div className="counter flex gap-[49px]">
        
                                <CommontCounter counterNumber={200} counterIcon={<FaShoppingBag />} countPlus={'+'} counterText={'Product solds'} />
                                <CommontCounter counterNumber={99} counterIcon={<BsEmojiSmileFill />} countPlus={'+'} counterText={'Review'} />
                                </div>
                           </div>
                    </div>
                    </div>
            </div>
        </section>    
    </>
  )
}

export default Banner