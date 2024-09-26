import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar"
import Banner from "../Components/Banner"


const LayoutOne = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Outlet/>
    </>
  )
}

export default LayoutOne
