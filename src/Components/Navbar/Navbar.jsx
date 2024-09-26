
import { useState } from "react";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Navbar = () => {
    // ========custom useState hooks part====
    const [show , setShow] = useState(true)

    // =========function part stat=========
    // =========toggle menu===============
    const handelShow=()=>{
        setShow(!show)
    }
  return (

    <>
    <nav className='main_manu pt-[33px]'>
            <div className="container">
                <div className="manu_row flex justify-between items-center">
                    <div className="manu_logo">
                            <img src="Images/logo.png" alt="logo" />
                    </div>
                    <div className="manu_bar relative">
                    <RiBarChartHorizontalLine onClick={handelShow} className="rotate-180 active:text-brandcolr text-3xl"/>
                    {
                        show&&
                    <ul className="w-[200px] flex flex-col gap-5 p-5 bg-brandcolr rounded-[10px] absolute right-0">
                        <li><Link className="text-lg font-medium font-inter px-10 text-white hover:bg-yellow-300 p-[5px] rounded-md text-blue-900" to={'#'} >Home</Link></li>
                        <li><Link className="text-lg font-medium font-inter px-10 text-white hover:bg-yellow-300 p-[5px] rounded-md text-blue-900" to={'#'} >About</Link></li>
                        <li><Link className="text-lg font-medium font-inter px-10 text-white hover:bg-yellow-300 p-[5px] rounded-md text-blue-900" to={'#'} >Product</Link></li>
                        <li><Link className="text-lg font-medium font-inter px-10 text-white hover:bg-yellow-300 p-[5px] rounded-md text-blue-900" to={'#'} >Contact</Link></li>
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