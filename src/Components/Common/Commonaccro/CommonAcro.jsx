import React, { useState } from 'react';
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";

const CommonAcro = ({ acrotext }) => {
    const [show, setShow] = useState(false);

    return (
        <>
            <div className="accro_head">
                <h2 
                    onClick={() => setShow(!show)} 
                    className='text-[16px] md:text-[22px] font-normal text-secondaryColor font-ptSerif flex items-center gap-[10px] pt-[18px] cursor-pointer'
                >
                    {show ? <IoMdArrowDropupCircle className='text-blue-500' /> : <IoMdArrowDropdownCircle/>}
                    {acrotext}
                </h2>
                
                {show && (
                    <p className='w-[300px] lg:w-[300px] bg-[#ECEBE6] p-3 mt-3 mb-1 rounded-lg text-sm md:text-lg font-medium'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text.
                    </p>
                )}
            </div>
        </>
    );
};

export default CommonAcro;
