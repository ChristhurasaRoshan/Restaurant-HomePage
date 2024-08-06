import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Popular from '../components/Popular';
import Testamonials from '../components/Testamonials';

export const Homepage = () => {
  

  return (
    <>
      {/* banner section */}
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/assets/home_background.png')" }}>
        <div className="absolute inset-0 flex flex-col justify-center items-start pl-40">
          <h1 className="text-8xl font-bold text-white mb-6">Welcome to</h1>
          <h2 className="text-8xl font-bold text-orange-400 mb-4">Grinders</h2>
          <p className="text-2xl text-white">Eat Natural and Healthy Food...</p>
        </div>
      </div>

      {/* offer section */}
      <div className="relative flex justify-center -mt-20 z-10">
        <div className="flex items-center justify-between px-8 bg-orange-400 rounded-2xl shadow-lg">
          <img src="/assets/offer.png" alt="Offer" className="h-48 -ml-20" />
          <div className="flex flex-col">
            <h3 className="text-5xl text-white font-bold mb-4">GET 50% OFFER</h3>
            <div className="flex justify-between items-center">
              <h3 className="text-5xl font-bold mb-2">Beef steaks</h3>
              <img src="/assets/play.png" alt="Offer" className="h-10" />
            </div>
          </div>
        </div>
      </div>

      {/* about section */}
      <div className="flex justify-center items-center py-16 gap-10">
        
        <div className="flex flex-col mb-8">
          <img src="/assets/ab-photo1.jpg" alt="Image 1" className="w-40 -ml-10 -mb-12 z-10 border-r-8 border-b-8 border-solid border-orange-400" />
          <img src="/assets/ab-photo2.jpg" alt="Image 2" className="w-96 ml-10" />
        </div>
        
        <div className="flex flex-col items-end w-1/3 text-right">
          <div className="flex items-center mb-8">
            <hr className="w-24 border-t-4 border-orange-400"/>
            <h2 className="text-3xl font-bold mx-4 text-orange-400">Our Story</h2>
          </div>
          <h2 className="text-3xl font-bold mb-4">There are many variations of passages of Lorem Ipsum available</h2>
          <p className="text-sm mb-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
          <p className="text-sm mb-6">If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
          <button className="bg-orange-400 text-white py-2 px-6 rounded-md font-semibold hover:bg-orange-500 transition duration-300">Explore More</button>
        </div>
      </div>

      {/* popular section */}
      <Popular/>
      

      {/* gallery section */}
      <div className="px-24 py-16 mt-10 bg-orange-400">
        <div className="flex items-center justify-center mb-4">
            <hr className="w-40 border-t-4 mx-4 border-white"/>
            <h2 className="text-3xl font-bold text-white">Gallery</h2>
            <hr className="w-40 border-t-4 mx-4 border-white"/>
        </div>
    
        <p className="text-xl font-bold text-center mb-8 text-black">People work in the restaurant are like a family</p>
        <div className="flex px-10 gap-6 justify-center items-center">
          <div className="flex flex-col gap-6 h-[500px]">
            <img src="/assets/gallery2.jpg" alt="Gallery 1" className="w-full h-1/2 object-cover" />
            <img src="/assets/gallery3.jpg" alt="Gallery 2" className="w-full h-1/2 object-cover" />
          </div>
          <div className="flex h-[600px]">
            <img src="/assets/gallery1.jpg" alt="Gallery 3" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col gap-6 h-[500px]">
            <img src="/assets/gallery2.jpg" alt="Gallery 4" className="w-full h-1/2 object-cover" />
            <img src="/assets/gallery3.jpg" alt="Gallery 5" className="w-full h-1/2 object-cover" />
          </div>
        </div>
        <div className="flex justify-center mt-10">
        <button className="bg-white text-orange-400 py-2 px-6 rounded-md font-semibold">View us</button>
        </div>
      </div>

      {/* testamonials section */}
      <Testamonials/>
      
       {/* contact section */}
      <div className="px-24 py-20">
          <div className="flex items-center justify-end mb-8">
            <hr className="w-24 border-t-4 border-orange-400"/>
            <h2 className="text-3xl font-bold mx-4 text-orange-400">Contact Us</h2>
          </div>
        <p className="text-xl font-bold text-right mb-8 text-black">Contact us for any inquiries or support; we're here to help!</p>
        <div className="flex">
          <div className="w-1/2 flex flex-col items-center justify-center p-4 ">
            <div className="relative border-r-8 border-solid border-orange-400">
              <img src="/assets/contact.jpg" alt="Contact Us" className="w-full h-auto " />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
                <h3 className="text-3xl mb-4">Get in  touch with us</h3>
                <button className="bg-orange-400 text-white px-4 py-2 rounded">Contact Us</button>
              </div>
            </div>
          </div>

          <div className="w-1/2 flex flex-col justify-around p-4">
            <div className="flex items-center mb-4">
              <div className="text-3xl bg-orange-400 text-white py-4 px-5 mr-4">
              <FontAwesomeIcon icon={faPhone} />
              <i className="fas fa-phone"></i>
              </div>
              <div className="flex flex-col text-black">
                <h2 className="text-2xl font-bold">Phone Number</h2>
                <p className="text-lg">+123456789</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              <div className="text-3xl bg-orange-400 text-white py-4 px-5 mr-4">
              <FontAwesomeIcon icon={faEnvelope}/>
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="flex flex-col text-black">
                <h2 className="text-2xl font-bold">Email Addresss</h2>
                <p className="text-lg">contact@grinders.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="text-3xl bg-orange-400 text-white py-4 px-5 mr-4">
              <FontAwesomeIcon icon={faMapMarkerAlt}/>
              <i className="fas fa-envelope"></i>
              </div>
              <div className="flex flex-col text-black">
                <h2 className="text-2xl font-bold">Our Location</h2>
                <p className="text-lg">224 Park Drive, Oakland, 
                CA 94618</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
