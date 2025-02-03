import React from 'react';
import myimg from '../../images/myimage.jpg';

function Hero() {
  return (
    <div className="flex flex-col md:flex-row w-full h-auto bg-purple-200">
      <div className="flex-1 p-6">
        <img
          src={myimg}
          alt="girl"
          className="w-full h-auto max-w-[500px] mx-auto object-cover object-top hover:scale-110 transition-transform duration-300"
        />
      </div>

      <div className="flex-1 flex items-center justify-center text-center mt-6 md:mt-0">
        <div className="text-left p-4">
          <div className="text-2xl font-semibold mb-4 hover:scale-110 transition-transform duration-300">
            My name is Lakshmi Aneesha Ambati
          </div>

          <div className="font-semibold text-xl text-gray-700">
            Hi, I'm Lakshmi Aneesha Ambati, currently studying Computer Science. I'm still learning the ropes, 
            but I'm excited to tackle new challenges and grow my skills in tech. Welcome to my space — it's a work in progress, 
            just like me!
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
