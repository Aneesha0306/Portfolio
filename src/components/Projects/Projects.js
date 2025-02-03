import React from 'react'

function Projects() {
  return (
    <div className='flex flex-col w-full h-auto bg-lavender flex justify-center items-center'>
      <div className='w-[70%] max-w-4xl h-auto p-6 bg-gray-100 mt-[50px]'>
        <h1 className='text-4xl font-semibold text-left mb-4 ml-4' style={{ color: 'rgb(102, 83, 101)' }}>Projects</h1>
        <h2 className="ml-4 font-bold text-gray-700">News Article Summarizer with Sentiment Analysis</h2>
        <p className='ml-4'>
          This project is a Python-based desktop application that combines Natural Language Processing (NLP) with sentiment analysis to extract,
          summarize, and evaluate news articles. Built using Tkinter for the graphical user interface (GUI) and libraries like Newspaper3k and
          TextBlob, the app provides an intuitive tool for analyzing and summarizing articles from URLs.<br /><br />

          <i>Key Features:</i>
          <ul className='ml-6 mt-4'>
            <li><strong>URL Parsing & Content Extraction</strong>: Automatically fetches and parses article content, including the title, author, publication date,
              and summary, by simply entering a URL.</li>
            <li><strong>Text Summarization</strong>: Uses Newspaper3k's NLP capabilities to generate a concise summary of the article, enhancing
              content consumption efficiency.</li>
            <li><strong>Sentiment Analysis</strong>: Integrates TextBlob to analyze the article’s sentiment, providing a polarity score (positive, neutral, or negative)
              to assess the article's tone.</li>
            <li><strong>User-friendly Interface</strong>: Built with Tkinter, the application offers a clean, intuitive interface where users can quickly input URLs and retrieve summarized content and sentiment insights.</li>
          </ul>
          <br />

          <a className='font-semibold text-left' href="https://github.com/Aneesha0306/news_summarizer">Github link</a>
        </p>
      </div>

      <div className='w-[70%] max-w-4xl h-auto p-6 bg-gray-100 mt-[50px] mb-[50px]'>
        <h1 className='text-4xl font-semibold text-left mb-4 ml-4' style={{ color: 'rgb(102, 83, 101)' }}>Certifications</h1>
        <h2 className="ml-4 font-bold text-gray-700">Summer Training Program in AI & Machine Learning</h2>
        <h3 className="ml-4 font-italic text-gray-700 mb-6">Institute: IIT Hyderabad | Organized by: Technobytes</h3>
        <p className='ml-4'>During the summer training program at IIT Hyderabad, I gained foundational knowledge in Artificial Intelligence (AI) and
           Machine Learning (ML). The program focused on both theoretical concepts and hands-on project work. Some of the key projects 
          I worked on include:<br />

          <b>Voice Cloning using RVC</b>: I learned the fundamentals of voice cloning and implemented it using the RVC framework to replicate voices.<br />

          <b>Film Creation using Generative AI Tools</b>: I explored various generative AI tools to create a short film, integrating different 
          AI techniques to bring together visual storytelling and machine learning.<br /></p>

        <h2 className="ml-4 font-bold text-gray-700 mt-[50px] mb-[20px]">Certified Entry-Level Python Programmer (PCEP)</h2>
        <h3 className="ml-4 font-italic text-gray-700 mb-6">Issued by: Python Institute<br /> Date: March 5, 2024</h3>
        <p className='ml-4'>This certification validates my proficiency in Python programming, covering key areas such as variables, data types, 
          control structures, functions, and object-oriented programming.<br /></p>

      </div>
    </div>
  )
}

export default Projects
