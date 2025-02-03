import React from 'react';
import myimg from '../../images/myimage.jpg';
import Cards from './Cards';

function About() {
  return (
    <div className='min-h-screen bg-purple-200'>
      {/* About Section */}
      <div className='flex justify-center items-center py-12'>
        <div className='w-[90%] max-w-4xl h-auto p-6 bg-gray-100'>
          <h1 className='text-4xl font-semibold text-center mb-4'>About Me</h1>
          <div className='flex flex-col md:flex-row'>
            <img
              src={myimg}
              alt="girl"
              className="flex-1 h-auto max-w-[400px] mx-auto mb-4 md:mb-0 object-cover object-top hover:scale-110 transition-transform duration-300"
            />
            <p className='flex-1 text-lg text-center text-gray-400 font-semibold tracking-wide mt-[20px] md:mt-12 md:ml-4'>
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
      <Cards />
    </div>
  );
}

export default About;
