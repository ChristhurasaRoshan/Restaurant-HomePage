import React from 'react';
import { popularItems } from "../data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Popular = () => {
    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };
      
  return (
    <>
    <div className="px-24 py-10">
        <div className="flex items-center mb-4">
            <h2 className="text-3xl font-bold text-orange-400">Popular</h2>
            <hr className="w-40 border-t-4 mx-4 border-orange-400"/>
        </div>
        <p className="text-xl font-bold text-left mb-8 text-black">Our Menu Items</p>
        <Slider {...settings}>
          {popularItems.map((item, index) => (
            <div key={index} className="p-4">
              <div className="bg-white shadow-lg overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                <div className="flex justify-between items-center">
                <div className="pl-6">
                  <h3 className="text-md font-bold mb-2">{item.name}</h3>
                  <p className="text-xl text-gray-700 mb-2">${item.price}</p>
                </div>
                <img src="/assets/cart.png" alt="Offer" className="h-20 bg-orange-400 p-4" />
              </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex justify-center mt-10">
          <button className="bg-orange-400 text-white py-2 px-4 rounded-md font-semibold hover:bg-orange-500 transition duration-300">View all</button>
        </div>
      </div>
    </>
  );
}

export default Popular;
