import React from 'react'
import { RiSearchLine } from "react-icons/ri";
import { RiSendPlaneLine } from "react-icons/ri";
import { CiFacebook } from "react-icons/ci";
const Footer = () => {
  return (
    <>
      <footer className='footer bg-[#C51605]'>
                <div className="container">
                    <h2 className='tex-[22px] lg:text-[34px] text-[#FFFFFF] font-black flex justify-center items-center lg:pt-[64px] mb:[15px] lg:mb-[43px]'>EbTan Cosmetics</h2>
                    <ul className=' flex justify-center items-center pb-[10px] lg:pb-[20px] lg:pb-[50px] gap-[33px]'>
                        <li className='text-[14px] lg:text-[18px] text-[#FFFFFF] font-inter font-medium'>Home</li>
                        <li className='text-[14px] lg:text-[18px] text-[#FFFFFF] font-inter font-medium'>About</li>
                        <li className='text-[14px] lg:text-[18px] text-[#FFFFFF] font-inter font-medium'>Product</li>
                        <li className='text-[14px] lg:text-[18px] text-[#FFFFFF] font-inter font-medium'>Contact</li>
                    </ul>
                    <ul className='flex justify-center items-center gap-[29px] pb-[19px]'>
                        <li className='text-2xl lg:text-4xl bg-white rounded-[50px] '><RiSearchLine /></li>
                        <li className='text-2xl lg:text-4xl bg-white rounded-[50px] '><RiSendPlaneLine /></li>
                        <li className='text-2xl lg:text-4xl bg-white rounded-[50px] '><CiFacebook /></li>
                    </ul>
                    <h2 className='font-inter text-[14px] lg:text-[18px] text-white font-medium flex justify-center items-center pb-[30px] lg:pb-[64px]'>© 2024 All Rights Reserved.</h2>
                </div>
      </footer>
    </>
  )
}

export default Footer
