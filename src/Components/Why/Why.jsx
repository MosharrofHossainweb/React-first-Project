const Why = () => {
    return (
      <>
        <section className="why pt-[100px] lg:pt-[191px]">
          <div className="container mx-auto px-4">
            <div className="why_head w-full flex justify-center">
              <h2 className="font-ptSerif text-[22px] lg:text-[48px] text-[#C51605]">Why choose us</h2>
            </div>
            <div className="why_p w-full flex justify-center items-center text-center">
              <p className="font-inter font-normal w-[300px] lg:w-[526px] pt-[21px] pb-[60px] text-[#A0A79A] text-[14px] lg:text-[18px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
              </p>
            </div>
            <div className="why_text_box flex flex-col sm:flex-row flex-wrap justify-center gap-[20px]">
              {/* Card 1 */}
              <div className="text_box1 w-full sm:w-[300px] lg:w-[380px] h-[280px] bg-[#F0EFEA] p-6">
                <img src="Images\group1.png" alt="Dermatologist Tested" className="w-[50px] h-auto  pt-[32px]" />
                <h2 className="font-inter text-[18px] lg:text-[22px] text-secondaryColor font-bold pt-[20px] text-start">
                  Dermatologist Tested
                </h2>
                <p className="text-[14px] lg:text-[18px] text-[#A0A79A] text-start pt-[10px]">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>
              {/* Card 2 */}
              <div className="text_box2 w-full sm:w-[300px] lg:w-[380px] h-[280px] bg-[#F0EFEA] p-6">
                <img src="Images\Group 2.png" alt="Allergy Tested" className="w-[50px] h-auto pt-[32px]" />
                <h2 className="font-inter text-[18px] lg:text-[22px] text-secondaryColor font-bold pt-[20px] text-start">
                  Allergy Tested
                </h2>
                <p className="text-[14px] lg:text-[18px] text-[#A0A79A] text-start pt-[10px]">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>
              {/* Card 3 */}
              <div className="text_box3 w-full sm:w-[300px] lg:w-[380px] h-[280px] bg-[#F0EFEA] p-6">
                <img src="Images\Group 3.png" alt="Non-comedogenic" className="w-[50px] h-auto  pt-[32px]" />
                <h2 className="font-inter text-[18px] lg:text-[22px] text-secondaryColor font-bold pt-[20px] text-start">
                  Non-comedogenic
                </h2>
                <p className="text-[14px] lg:text-[18px] text-[#A0A79A] text-start pt-[10px]">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default Why;
  