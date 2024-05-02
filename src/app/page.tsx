"use client"
import React, { useState } from 'react';
import Audio from "./components/Audio"
import Navbar from "./components/Navbar";
import { BsRecord2 } from "react-icons/bs";
import { IoMdCloudUpload } from "react-icons/io";

export default function Home() {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleRecordClick = () => {
    setShowModal(true);  // Toggle visibility of the modal
  };

  const closeModal = () => {
    setShowModal(false); // Function to close the modal
  };

  // Function to close the modal if the click was outside the modal content
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLDivElement && e.target.id === "modal-backdrop") {
      closeModal();
    }
  };

  return (
    <div className="bg-gray-100">  
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-center mb-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-6xl font-bold">
            Create <span className="text-blue-900">Neural Paths</span>, not just memories
          </h1>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">Let the knowledge sink in.</p>
        </div>

        <div className="container flex items-center justify-center flex-col rounded-2xl w-1/2 h-1/4 bg-white shadow-xl">
          <div
            className="flex items-center justify-center mb-4 bg-indigo-900 text-white rounded-2xl w-1/2 h-1/4 font-bold hover:bg-violet-600 cursor-pointer"
            onClick={handleRecordClick}
          >
            <div className="mr-2">Record Your Explanation</div>
            <BsRecord2 size={37} className="text-white" />
          </div>

        </div>

        {showModal && (
          <div id="modal-backdrop" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={handleOutsideClick}>
              <div className="bg-white p-5 rounded-lg" onClick={(e) => e.stopPropagation()}>
                <Audio />
                <button onClick={closeModal} className="mt-2">Close</button>
              </div>
          </div>
        )}
      </div>
    </div>
  );
}
