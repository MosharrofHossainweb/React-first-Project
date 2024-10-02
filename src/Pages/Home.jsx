import Banner from "../Components/Banner/Banner"
import Footer from "../Components/Common/Footer/Footer"
import Lb from "../Components/Common/LB/Lb"
import Review from "../Components/Common/Review/Review"
import Subscrib from "../Components/Common/Subscribe/Subscrib"
import Cream from "../Components/Cream/Cream"
import Handwash from "../Components/Handwash/Handwash"
import Why from "../Components/Why/Why"


const Home = () => {
  return (
    <>
      <Banner/>
      <Why/>
      <Handwash/>
      <Cream/>
      <Lb/>
      <Review/>
      <Subscrib/>
      <Footer/>
    </>
  )
}

export default Home
