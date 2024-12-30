import React from 'react'
import me from '../../images/girl.jpeg'

function About() {
  return (
    <div className='flex justify-center items-center min-h-screen bg-purple-200'>
      <div className='w-[90%] max-w-4xl h-[600px] p-6 bg-gray-100'>
        <h1 className='text-4xl font-semibold text-center mb-4'>About Me</h1>
        <div className='flex'>
          <img
            src={me}
            alt="me"
            className="flex-1 h-[450px] mr-[20px] object-cover object-top hover:scale-110 transition-transform duration-300"
          />
          <p className='flex-1 text-lg text-center text-gray-400 font-semibold tracking-wide mt-[20px]'>
            Hi there! I'm Lakshmi Aneesha Ambati, just getting started on my journey into the world of tech.
            While I'm still learning the ropes, I'm passionate about developing my skills and diving deeper into the exciting challenges
            the field offers. I'm currently working on building up skills in Machine learning, Web Development and I'm eager to take on new
            projects and continue growing along the way.
            If you're looking for someone who's ready to learn, adapt, and bring fresh ideas to the table,
            I'd love to collaborate. Let's create something awesome together!
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
