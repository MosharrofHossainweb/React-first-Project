import { Link } from "react-router-dom"

const Banner = () => {
  return (
    <>
        <div className="container">
            <div className="banner mt-[173px] w-full flex justify-between">
                <div className="banner_img">
                    <img className="h-[532px] w-[469px] ml-[59px] " src="Images\bannner_img.png" alt="banner_img" />
                </div>
                <div className="banner_info w-[540px]">
                    <h2 className="text-[#F2994A] text-left">Normal to oily skin</h2>
                    <h2 className="w-[526px] h-[47px] text-[62px] text-[#333333] text-left font-ptSerif">Men’s Sunscreen
                    hand & body</h2>
                    <p className="banner_p pt-[130px] text-left text-[#A0A79A] font-inter">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    </p>
                    <div className="add_cart">
                        <Link className="">Add to cart</Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Banner