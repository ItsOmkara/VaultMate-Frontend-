import React from "react";
import Header from "../components/Header";
export default function About() {
  return (
    <><Header />
    <div className="max-w-5xl mx-auto px-6 py-12">
          {/* Heading */}
          <h1 className="text-3xl font-bold text-purple-800 mb-6">About</h1>

          {/* Card Section */}
          <div className="card bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')] bg-cover bg-center">
              {/* <p className="text-gray-700 leading-relaxed mb-4">
                  Welcome to <span className="font-semibold">YourAppName</span>!
                  We are passionate about creating innovative and user-friendly solutions that make life easier.
                  Our mission is to combine simplicity with performance, so you can enjoy a seamless experience.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                  This platform was built with love and a lot of coffee ☕ by a team of
                  developers who believe in the power of clean design and efficient code.
                  Whether you are here to explore, connect, or grow, we’re excited to have you on board.
              </p>
              <p className="text-gray-700 leading-relaxed">
                  We believe in constant improvement, so if you have any feedback, feel free to share it with us anytime.
                  Together, let’s make this journey amazing! 🚀
              </p> */}
              <div className="max-w-3xl mx-auto px-6 py-12">
      {/* <h1 className="text-3xl font-bold text-purple-900 mb-4">About This App</h1> */}
      
      <p className="text-gray-700 mb-4 leading-relaxed">
        Hi, I'm <span className="font-semibold text-purple-800">Omkar </span>, 
        and I built this application to help people track and manage their finances 
        in a simple, easy-to-use way. My goal was to create a clean interface 
        where users can quickly add, view, and organize their transactions.
      </p>

      <p className="text-gray-700 mb-4 leading-relaxed">
        This project was developed using <span className="font-medium">React</span>, 
        <span className="font-medium"> Tailwind CSS</span>, <span className="font-medium"> Springboot</span> and 
        <span className="font-medium"> MySQL</span> on the backend.  
        I’ve also added features like secure authentication and profile management.
      </p>

      <p className="text-gray-700 leading-relaxed">
        Special thanks to my mentors, friends, and everyone who tested the app 
        and gave feedback.  
        I hope this project helps you take better control of your money.
      </p>
    </div>
          </div>
      </div></>
  );
}
