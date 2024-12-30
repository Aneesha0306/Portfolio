import React from 'react'
import github from '../images/githublogo.png'
import linkedin from '../images/linkedinlogo.png'
function Header() {
  return (
    <div className='flex'>
        <div className='flex p-5 text-white w-full' style={{ backgroundColor: 'rgb(186, 152, 185)' }}>
            <div className='mr-[500px] text-bold text-xl pt-4'>Lakshmi Aneesha Ambati</div>
            <div className='space-x-8 pt-5 '>
                <a href='/' className='inline-block hover:scale-125 transition-transform duration-300'>Home</a>
                <a href='/about' className='inline-block hover:scale-125 transition-transform duration-300'>About Me</a>
                <a href='/projects' className='inline-block hover:scale-125 transition-transform duration-300'>Projects</a>
                <a href='/contact' className='inline-block hover:scale-125 transition-transform duration-300'>Contact</a>
            </div>

            <a href="https://github.com/Aneesha0306" className='pt-5'>
            <img
                    src={github}
                    alt="github logo"
                    className="w-[30px] h-[30px] ml-[300px] object-cover object-top hover:scale-125 transition-transform duration-300"
                />
            
            </a>

            <a href="https://www.linkedin.com/in/aneesha-ambati-3b76492b1" className='pt-5'>
            <img
                    src={linkedin}
                    alt="linkedin logo"
                    className="w-[30px] h-[30px] ml-[30px] object-cover object-top hover:scale-125 transition-transform duration-300"
                />
            
            </a>
    </div>
      
    </div>
  )
}

export default Header
