
import CommonHead from '../Common/CommonHead'
import CommonAcro from '../Common/Commonaccro/CommonAcro'
import CommontButton from '../Common/CommontButton'

const Cream = () => {
  return (
    <>
        <section className='cream '>
            <div className="container">
                <div className="cream_row flex flex-wrap md:gap-[100px] px-3">
                    <div className="common_image">
                        <img src="Images\cream.png" alt="cream" className='px-2' />
                    </div>
                    <div className="common_info w-[313px] px-2">
                        <CommonHead commonHeadtext={'Only skins types'}/>
                        <h2 className='font-ptSerif font-normal text-[48px] text-secondaryColor '>Men’s day
                        cream</h2>
                        <CommonAcro acrotext={'How to use'} />
                        <CommonAcro acrotext={'Ingredients'} />
                        <CommonAcro acrotext={'Benefits'} />  
                        <div className="card_price flex  items-center gap-[17px] mt-3 md:mt-[37px]">
                          <CommontButton commonButtontext={'Add to Cart'} commonButtonEffect={'hover:bg-blue-900 active:scale-[1.1]'} />
                          <h2 className='text-[26px] w-[80px] lg:text-[30px] font-ptSerif font-normal text-[#C51605]'>৳ 500</h2>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Cream