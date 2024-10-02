
import { useState } from "react";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Navbar = () => {
    // ========custom useState hooks part====
    const [show , setShow] = useState(false)

    // =========function part stat=========
    // =========toggle menu===============
    const handelShow=()=>{
        setShow(!show)
    }
  return (

    <>
    <nav className='main_manu pt-[10px] lg:pt-[33px] px-[10px] sm:px-2 xl:px-2'>
            <div className="container">
                <div className="manu_row flex justify-between items-center">
                    <div className="manu_logo">
                            <h2 className="font-inter text-brandcolr font-black text-[34px]">EbTan</h2>
                    </div>
                    <div className="manu_bar relative">
                    <RiBarChartHorizontalLine onClick={handelShow} className="rotate-180 active:text-brandcolr text-xl lg:text-3xl"/>
                    {
                        show&&
                    <ul className="w-[150px] lg:w-[200px] flex flex-col gap-5 p-5 bg-brandcolr rounded-[10px] absolute right-0">
                        <li><Link className="text-base lg:text-lg font-medium font-inter px-5 lg:px-10 text-white hover:bg-yellow-300 hover:text-blue-950 transition-all[.7sec] p-[5px] rounded-md text-blue-900" to={'#'} >Home</Link></li>
                        <li><Link className="text-base lg:text-lg font-medium font-inter px-5 lg:px-10 text-white hover:bg-yellow-300 hover:text-blue-950 transition-all[.7sec] p-[5px] rounded-md text-blue-900" to={'#'} >About</Link></li>
                        <li><Link className="text-base lg:text-lg font-medium font-inter px-5 lg:px-10 text-white hover:bg-yellow-300 hover:text-blue-950 transition-all[.7sec] p-[5px] rounded-md text-blue-900" to={'#'} >Product</Link></li>
                        <li><Link className="text-base lg:text-lg font-medium font-inter px-5 lg:px-10 text-white hover:bg-yellow-300 hover:text-blue-950 transition-all[.7sec] p-[5px] rounded-md text-blue-900" to={'#'} >Contact</Link></li>
                    </ul>
                
                        
                        
                    }
                    </div>
                </div>
            </div>
    </nav>
    </>
  )
}

export default Navbar