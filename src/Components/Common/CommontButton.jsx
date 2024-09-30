
import { RiShoppingCart2Line } from "react-icons/ri";
const CommontButton = ({ commonButtontext ,commonButtonEffect}) => {
  return (
    <>
        <button className={`lg:w-[211px] w-[170px]  h-[35px] lg:h-[54px] bg-brandcolr text-14px lg:text-[18px] font-inter font-medium text-white rounded-md flex justify-center gap-[16px] lg:gap-[26px]
            pt-[5px] lg:pt-[12px] ${commonButtonEffect} `}>< RiShoppingCart2Line className="text-2xl" />{commonButtontext}</button>
    </>
  )
}

export default CommontButton