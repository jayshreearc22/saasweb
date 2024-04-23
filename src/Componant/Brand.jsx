import React from 'react';
import acme1 from "../Componant/images/Brand/acme1.png"
import quantum2 from "../Componant/images/Brand/quantum2.png"
import echo3 from "../Componant/images/Brand/echo3.png"
import celestia4 from "../Componant/images/Brand/celestia4.png"
import pulse5 from "../Componant/images/Brand/pulse5.png"
import apex5 from "../Componant/images/Brand/apex5.png"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

function Brand() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container w-[92%]  mt-7">
      <Slider {...settings}>
        <div className='blur-sm'>
         <a href=""><img src={acme1}/></a> 
        </div>
        <div>
        <a href=""><img src={quantum2}/></a>
        </div>
        <div>
        <a href=""><img src={echo3}/></a>
        </div>
        <div>
        <a href=""><img src={celestia4}/></a>
        </div>
        <div>
        <a href=""><img src={pulse5}/></a>
        </div>
        <div>
        <a href=""><img src={apex5}/></a>
        </div>
        <div className='blur-sm'>
        <a href=""><img src={acme1}/></a>
        </div>
        
      </Slider>
    </div>
  );
}

export default Brand;
