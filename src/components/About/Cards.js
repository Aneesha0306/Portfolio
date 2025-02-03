function Cards() {
  return (
    <div className='flex flex-col w-full h-auto bg-lavender flex justify-center items-center'>
      <div className='w-[70%] max-w-4xl h-auto p-6 bg-gray-100 '>
        <h1 className='text-4xl font-semibold text-left mb-4 ml-4' style={{ color: 'rgb(102, 83, 101)' }}>Education</h1>
        <p className="ml-4 font-semibold text-gray-700">
          Bachelors in Computer Science Engineering (Data Science)<br />
          Sophomore<br />
          Vellore Institute of Technology<br />
          CGPA - 9.25<br />
          <br />
          Pre-University in MPC<br />
          FIITJEE Junior College<br />
          Percentage - 97.5
        </p>
      </div>

      <div className='w-[70%] max-w-4xl h-auto p-6 bg-gray-100 mt-12'>
        <h1 className='text-4xl font-semibold text-left mb-4 ml-4' style={{ color: 'rgb(102, 83, 101)' }}>Skills</h1>
        <p className="ml-4 font-semibold text-gray-700">
          Programming Languages: Python, Java, C, Cpp<br />
          Data Structures & Algorithms<br />
          Object-Oriented Programming<br />
          Web Development: HTML, tailwind CSS<br />
          Version Control: Git, github<br />
          Soft Skills: Communication, teamwork<br />
        </p>
      </div>

      <div className='w-[70%] max-w-4xl h-auto p-6 bg-gray-100 mt-12 mb-12'>
        <h1 className='text-4xl font-semibold text-left mb-4 ml-4' style={{ color: 'rgb(102, 83, 101)' }}>Extra-Curriculars</h1>
        <p className="ml-4 font-bold text-gray-700">
          Core Committee Member of ISTE</p>
        <p className="ml-4 font-semibold text-gray-700 mb-12">
          AUGMENTRIX: Gaming Workshop | Technical Support<br /> 
          GRAVITAS - VIT's Technical Festival<br /><br />

          During GRAVITAS, VIT's prestigious technical festival, I took on the role of Technical Support for the AUGMENTRIX Gaming Workshop. 
          In this role, I was responsible for ensuring smooth technical operations throughout the session, troubleshooting issues, and assisting 
          participants with the setup and gameplay. My contribution helped maintain the workshop's focus on learning and engagement, 
          offering a seamless experience for all attendees.
        </p>

        <p className="ml-4 font-bold text-gray-700">
          Toastmasters Member | Presentation Mastery Path</p>

          <p className="ml-4 font-semibold text-gray-700">
            (Level 1 in Progress)<br /><br />

            I'm an active member of Toastmasters, currently working through the Presentation Mastery path to enhance my public speaking and 
            communication skills. This experience is helping me build confidence, structure impactful presentations, and receive valuable feedback 
            for continuous improvement.
            </p>
      </div>

    </div>
  );
}

export default Cards;
