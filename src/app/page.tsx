"use client"
import Audio from "./components/Audio"
import Navbar from "./components/Navbar";
import { BsRecord2 } from "react-icons/bs";
import { IoMdCloudUpload } from "react-icons/io";
import { useState } from 'react';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const handleRecordClick = () => {
    // Show the modal or trigger any action
    setShowModal(true);
  };
  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-center mb-4">
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-6xl font-bold">
            Create <span className="text-blue-900">Neural Paths</span>, not just memories
          </h1>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">Let the knowledge sink in.</p>
        </div>
        {/* White box */}
        <div className="container flex items-center justify-center flex-col rounded-2xl w-1/2 h-1/4 bg-white shadow-xl">
          {/* First container */}
          <div
            className="flex items-center justify-center mb-4 bg-indigo-900 text-white rounded-2xl w-1/2 h-1/4 font-bold hover:bg-violet-600 cursor-pointer"
            onClick={handleRecordClick}
          >
            <div className="mr-2">Record Your Explanation</div>
            <BsRecord2 size={26} className="text-white" />
          </div>
          {/* Second container */}
          <div className="flex items-center justify-center bg-indigo-900 text-white text-sm rounded-2xl w-1/2 h-1/4 font-bold hover:bg-violet-600">
            <div className="mr-2">Upload</div>
            <IoMdCloudUpload size={24} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
