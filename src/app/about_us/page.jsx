import React from 'react'
import { PageWrapper } from "./../page_wraper";

export default function page() {
  return (
    <PageWrapper>
    <div className="bg-gray-100">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-center mb-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-6xl font-bold">
            What do we <span className="text-blue-900"> do?</span>
            </h1>
        </div>
        {/* White box */}
        <div className="container flex items-center justify-center flex-col rounded-2xl w-1/8 h-1/4 bg-white shadow-xl mb-20">
            <p className="text-2xl text-center font-bold">Welcome to our innovative educational software! Powered by AI, our platform analyzes student-generated videos, offering personalized feedback to over 420,69 students to pinpoint areas for improvement. Students receive tailored recommendations for study materials, fostering effective learning and mastery of subjects. Join us in revolutionizing education with our intelligent, student-centric approach.</p>
        </div>



        <div className="text-center mt-12 mb-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-6xl font-bold">
                Our <span className="text-blue-900">Goal</span>
            </h1>
        </div>
        {/* White box */}
        <div className="container flex items-center justify-center flex-col rounded-2xl w-1/8 h-1/4 bg-white shadow-xl ">
            <p className="text-2xl text-center font-bold">Our main goal is to change how education works by using smart AI to give each student a personalized learning journey. With the Feynman Method at the heart of what we do, we help students really understand complex topics. Our platform gives feedback and suggests materials that fit each students unique learning style. Our aim is to help students learn better and love learning for life, making education more enjoyable and effective for everyone.</p>
        </div>
        
      </div>
    </div>
    </PageWrapper>
  )
}                              

