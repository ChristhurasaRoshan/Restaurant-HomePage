import React from 'react';
import { testamonials } from "../data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from 'react-icons/fa';
import '../styles/Testamonials.css';



const Testamonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
      };
      
  return (
    <>
    <div className="px-24 py-20 bg-slate-100">
        <div className="flex items-center mb-4">
            <h2 className="text-3xl font-bold text-orange-400">Testamonials</h2>
            <hr className="w-40 border-t-4 mx-4 border-orange-400"/>
        </div>
        <p className="text-xl font-bold text-left mb-8 text-black">What People Say about Us</p>
        <Slider {...settings}>
          {testamonials.map((item, index) => (
            <div key={index} className="p-4">
              <div className="bg-white px-4 py-5 shadow-lg overflow-hidden rounded-tl-3xl rounded-br-3xl">
              <div className="flex items-center mb-6">
                <img src={item.image} alt={item.name} className="w-20 h-20 rounded-full mr-4" />
                <div className="flex text-orange-400">
                    {Array(5).fill().map((_, i) => (
                    <FaStar key={i} />
                    ))}
                    </div>
              </div>
                <p className="text-sm mb-4">{item.comment}</p>
                <h3 className="text-md font-bold text-orange-400 mb-2">{item.name}</h3>
              </div>
            </div>
          ))}
        </Slider>      
        </div>

    </>
  );
}

export default Testamonials;
