import CommonAcro from "../Commonaccro/CommonAcro"
import CommonHead from "../CommonHead"
import CommontButton from "../CommontButton"

const Lb = () => {
  return (
    <>
      <section className='cream '>
            <div className="container">
                <div className="cream_row flex flex-wrap md:gap-[50px] mb-[141px] gap-4 mt-[153px] px-1">
                    
                    <div className="common_info w-[479px] px-2">
                        <CommonHead commonHeadtext={'Only skins types'}/>
                        <h2 className='font-ptSerif w-[300px] lg:w-[470px] font-normal text-[22px] md:text-[48px] text-secondaryColor '>Men lip balm lasting 
                        (25 gr)</h2>
                        <CommonAcro acrotext={'How to use'} />
                        <CommonAcro acrotext={'Ingredients'} />
                        <CommonAcro acrotext={'Benefits'} />  
                        <div className="card_price flex lg:flex-row items-center gap-[20px] mt-3 md:mt-[37px]">
                          <CommontButton commonButtontext={'Add to Cart'} commonButtonEffect={'hover:bg-blue-900 active:scale-[1.1]'} />
                          <h2 className='text-[26px] lg:text-[30px] font-ptSerif font-normal text-[#C51605]'>৳ 300</h2>
                        </div>
                        
                    </div>
                    <div className="common_image">
                        <img src="Images\lb.png" alt="lb" className='px-2 w-[400px]'/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Lb
