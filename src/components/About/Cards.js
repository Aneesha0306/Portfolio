import React from 'react'

function Cards() {
  return (
    <div>
      <div className='flex justify-evenly p-4'>
        {/*card1*/}
        <div className='w-[400px] h-[300px] p-4 text-white rounded-sm shadow-lg ml-8' style={{ backgroundColor: 'rgb(41, 41, 36)' }}>
          <h3 className='text-2xl font-bold pt-[75px] ml-12 mb-4' style={{ color: 'rgb(93, 92, 92)' }}>Education</h3>
          <div className='ml-12' style={{ color: 'rgb(143, 143, 143)' }}>
            <h2>Bachelors in Computer Science Engineering (Data Science)</h2>
            <h4 className='mb-2'>Vellore Institute of Technology, Vellore</h4>
          </div>
        </div>

        {/*card2*/}
        <div className='w-[400px] h-[300px] p-4 text-white rounded-sm shadow-lg ml-8' style={{ backgroundColor: 'rgb(41, 41, 36)' }}>
          <h3 className='text-2xl font-bold pt-[75px] ml-12 mb-4' style={{ color: 'rgb(93, 92, 92)' }}>Skills</h3>
          <div className='ml-12' style={{ color: 'rgb(143, 143, 143)' }}>
            <p>

            </p>
          </div>
        </div>

        {/*card3*/}
        <div className='w-[400px] h-[300px] p-4 bg-white text-black rounded-sm shadow-lg ml-8'>
          <h3 className='text-2xl font-bold pt-4 ml-12 mb-4' style={{ color: 'rgb(93, 92, 92)' }}>Extra Cirr</h3>
          <div className='ml-12' style={{ color: 'rgb(143, 143, 143)' }}>
            <h2 className='mb-4'>Revolutionizing the Courier Industry with Advanced</h2>
          </div>
        </div>




      </div>
    </div>
  )
}

export default Cards
