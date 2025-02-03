import React from 'react';

function Contact() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-purple-200">
      <div className="w-[90%] max-w-4xl h-[400px] p-8 bg-white rounded-xl shadow-lg">
        <h1 className="text-4xl font-semibold text-center mb-6 text-purple-600">Contact Me</h1>
        <p className="text-lg text-center mt-[70px]">
          <span className="block">Email: <a href="mailto:aneeshaambati117@gmail.com" className="text-purple-500 hover:underline">aneeshaambati117@gmail.com</a></span>
          <span className="block">Contact: <a href="tel:+918008700615" className="text-purple-500 hover:underline">+91 8008700615</a></span>
        </p>
        <div className="text-center">
          <p className="text-lg text-gray-600">Feel free to reach out via email or phone!</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
