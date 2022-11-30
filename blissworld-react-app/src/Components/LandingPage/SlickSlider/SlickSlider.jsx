import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../SlickSlider/data.json";
import { AiFillFacebook,AiOutlineInstagram ,AiOutlineTwitter,AiFillDribbbleCircle} from 'react-icons/ai';



function SlickSlider() {

  console.log(data);

  let settings={
    dot:true,
    infinite:true,
    speed:500,
    slideToShow:3,
    slidetoScroll:1,
    cssEase:"linear",
  }
  return (
    <Slider {...settings}>
   <div className='card-wrapper'>
       <div className='card'>
           <div className='card-image'>
                <img src={data[0].image1} alt="" />
            </div  >
               <ul className='social-icons'>
                  <li><a href="abc"> <AiFillFacebook/> </a> </li>
                   <li><a href="abc"><AiOutlineInstagram/></a> </li>
                   <li><a href="abc"><AiOutlineTwitter/></a> </li>
                   <li><a href="abc"><AiFillDribbbleCircle/></a> </li>
               </ul>
             </div>
          </div>
    </Slider>
  )
}

export default SlickSlider