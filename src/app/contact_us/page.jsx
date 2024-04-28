"use client"
import React from 'react'
import { PageWrapper } from "./../page_wraper";

export default function page() {
    return (
      <PageWrapper>
      <div className="bg-gray-100">
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="text-center mb-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-6xl font-bold">
                  Contact<span className="text-blue-900"> us</span> 
              </h1>
          </div>
          <div className="flex justify-center items-center w-1/8 h-1/3">
          {/* White box */}
          <div className="container flex items-center justify-center flex-col rounded-2xl w-full h-full bg-white shadow-xl mx-4 mt-4">
              <p className="text-2xl text-center font-bold m-3">Support Lorem, ipsum dolor sit amet consectetur <br/>Tel</p>
          </div>
          {/* White box */}
          <div className="container flex items-center justify-center flex-col rounded-2xl w-full h-full bg-white shadow-xl mx-4 mt-4">
              <p className="text-2xl text-center font-bold m-3">Git hub repository:<br/><br/>Tel</p>
          </div>
          {/* White box */}
          <div className="container flex items-center justify-center flex-col rounded-2xl w-full h-full bg-white shadow-xl mx-4 mt-4">
              <p className="text-2xl text-center font-bold m-3">Team Members<br/><br/>Tel</p>
          </div>
          </div>
          
        </div>
      </div>
      </PageWrapper>
    )
  }               
