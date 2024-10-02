import { IoMdStar } from "react-icons/io";

const Review = () => {
  return (
    <>
      <section className="review mb-8 md:mb-[120px] px-4">
        <div className="container max-w-[90%] mx-auto">
          <h2 className="font-ptSerif w-full font-normal text-[#C51605] text-[24px] sm:text-[30px] md:text-[36px] lg:text-[48px] text-center mb-4 md:mb-[21px]">
            Review
          </h2>
          
          <div className="review_info flex justify-center items-center mb-6">
            <p className="text-[16px] sm:text-[18px] font-medium font-inter w-full md:w-[80%] lg:w-[60%] text-center text-[#A0A79A]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.
            </p>
          </div>
          
          <div className="review_box flex flex-col lg:flex-row justify-center gap-8 lg:gap-[105px] mt-8 md:mt-[90px]">
            {/* First Review */}
            <div className="review_one w-full max-w-[400px] mx-auto lg:mx-0 px-4">
              <ul className="flex justify-center items-center gap-2 lg:gap-3 mb-3">
                {[...Array(5)].map((_, i) => (
                  <li key={i}><IoMdStar className="text-[#F2994A] text-2xl md:text-3xl" /></li>
                ))}
              </ul>
              <p className="text-[18px] md:text-[20px] font-medium font-ptSerif text-center w-full text-[#C51605]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <h2 className="text-[20px] md:text-[26px] lg:text-[36px] font-normal font-ptSerif text-secondaryColor text-center w-full mt-2">
                Ebrahim Ahmed
              </h2>
              <h2 className="font-ptSerif font-normal text-[16px] md:text-[20px] text-[#F2994A] text-center">
                Actor
              </h2>
            </div>

            {/* Second Review */}
            <div className="review_one w-full max-w-[400px] mx-auto lg:mx-0 px-4">
              <ul className="flex justify-center items-center gap-2 lg:gap-3 mb-3">
                {[...Array(5)].map((_, i) => (
                  <li key={i}><IoMdStar className="text-[#F2994A] text-2xl md:text-3xl" /></li>
                ))}
              </ul>
              <p className="text-[18px] md:text-[20px] font-medium font-ptSerif text-center w-full text-[#C51605]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <h2 className="text-[20px] md:text-[26px] lg:text-[36px] font-normal font-ptSerif text-secondaryColor text-center w-full mt-2">
              Tanvir Shantoh
              </h2>
              <h2 className="font-ptSerif font-normal text-[16px] md:text-[20px] text-[#F2994A] text-center">
                Actor
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Review;
