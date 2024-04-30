"use client"
import React from 'react'
import { PageWrapper } from "./../page_wraper";

export default function page() {
    return (
      <PageWrapper>
      <div className="bg-gray-100">
        <div className="flex flex-col h-screen">
          <div className="text-center mb-12 mt-56">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-6xl font-bold">
                  Contact<span className="text-blue-900"> us</span> 
              </h1>
          </div>
          <div className="flex justify-center items-center">
          {/* White box */}
          <div className="container flex items-center justify-center flex-col rounded-2xl w-1/3 h-full bg-white shadow-xl mx-2 mt-4">
              <p className="text-2xl text-center font-bold m-3">Support (LinkedIn):<br/></p>
              <p>
                <a className="text-2xl text-center font-bold m-3 text-blue-900 hover:text-blue-700" href = "https://www.linkedin.com/in/cesaralansilva/">Omar Michel Carmona Villalobos</a><br/> 
                <a className="text-2xl text-center font-bold m-3 text-blue-900 hover:text-blue-700" href = "https://www.linkedin.com/in/cesaralansilva/">Miguel Ángel Barrientos Ballesteros</a><br/>
                <a className="text-2xl text-center font-bold m-3 text-blue-900 hover:text-blue-700" href = "https://www.linkedin.com/in/cesaralansilva/">Cesar Alán Silva Ramos</a><br/>
                <a className="text-2xl text-center font-bold m-3 text-blue-900 hover:text-blue-700" href = "https://www.linkedin.com/in/juli%C3%A1n-enrique-espinoza-valenzuela-a145a2287/">Julian Enrique Espinoza Valenzuela</a><br/>
                <a className="text-2xl text-center font-bold m-3 text-blue-900 hover:text-blue-700" href = "https://www.linkedin.com/in/cesaralansilva/">Gabriel Alvarez Arzate</a></p>  
          </div>
          {/* White box */}
          <div className="container flex items-center justify-center flex-col rounded-2xl w-1/3 h-full bg-white shadow-xl mx-2 mt-4">
              <p className="text-2xl text-center font-bold m-3">GitHub repository:<br/><br/><a className= "bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" href ="https://github.com/casrhub/axons-web-app/tree/main">Axons web develop</a></p>
          </div>
          {/* White box */}
          <div className="container flex items-center justify-center flex-col rounded-2xl w-1/3 h-full bg-white shadow-xl mx-2 mt-4">
            <p className="text-2xl text-center font-bold m-3">Team Members:<br/></p>
            <p className="text-2xl text-center font-bold m-3">Omar Michel Carmona Villalobos |<span className = "text-blue-900"> A01644146</span><br/> 
            Miguel Ángel Barrientos Ballesteros |<span className = "text-blue-900"> A01637150</span><br/>
            Cesar Alán Silva Ramos |<span className = "text-blue-900"> A01252916</span><br/>
            Julian Enrique Espinoza Valenzuela |<span className = "text-blue-900"> A01254679</span><br/>
            Gabriel Alvarez Arzate  |<span className = "text-blue-900"> A01642991</span></p>
          </div>
          </div>
          
        </div>
      </div>
      </PageWrapper>
    )
  }               