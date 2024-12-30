import React from 'react'
import girl from '../../images/girl.jpeg'

function Hero() {
  return (
    <div className="flex w-full h-[650px]" style={{ backgroundColor: 'rgb(186, 152, 185)' }}>
      <div className="flex-1 p-6">
                <img
                    src={girl}
                    alt="girl"
                    className="w-[600px] h-[600px] object-cover object-top hover:scale-110 transition-transform duration-300"
                />
            </div>
            <div className="flex-1 flex  text-center mt-[250px]">
                <div className="text-left">
                    <div className="text-2xl font-semibold mb-4 ml-[50px] mr-[40px] hover:scale-110 transition-transform duration-300">My name is Lakshmi Aneesha Ambati</div>

                    <div className='ml-[50px] mr-[40px] font-semibold text-xl' style={{ color: 'rgb(47, 49, 55)' }}>
                    Hi, I'm Lakshmi Aneesha Ambati, currently studying Computer Science. I'm still learning the ropes, 
                    but I'm excited to tackle new challenges and grow my skills in tech. Welcome to my space — it's a work in progress, 
                    just like me!</div>
                </div>
            </div>
    </div>
  )
}

export default Hero
