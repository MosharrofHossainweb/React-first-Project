

const Subscrib = () => {
  return (
    <>
      <section className="subscribe bg-[#ECEBE6]">
        <div className="container">
                <div className="subcribe_row flex flex-wrap lg:gap-[80px] gap-[20px] mb-[77px] pt-[20px] lg:pt-[40px]">
                    <div className="sub_text">

                        <h2 className=" text-[22px] lg:text-[48px] px-2 lg:px-0 font-ptSerif font-normal text-[#333333] w-[200px] lg:w-[356px] ">Subscribe to the 
                        <span className="text-[#C51605]">daily updates</span></h2>
                    </div>
                    <div className="sub_seach flex ">
                        <div className="ser_box w-full h-[92px] md:w-[500px] border-[1px] border-[#A0A79A] rounded-[50px] flex items-center justify-between px-2 gap-[20px] lg:gap-[210px] ">
                                <input type="text" className="h-[26px] w-full lg:w-[100px] mt-[10px] bg-transparent outline-none " />
                                <button className="py-[13px] w-[198px] h-[52px] px-[35px] rounded-[50px] bg-brandcolr text-[18px] font-medium font-inter text-[#FFFFFF] active:scale-[1.1] ">Subscribe</button>
                        </div>
                    </div>
                </div>

        </div>
      </section>
    </>
  )
}

export default Subscrib
