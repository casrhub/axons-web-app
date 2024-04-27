import React from 'react'
import { IoMdCloudUpload } from "react-icons/io";

export default function page() {
  return (
    <div className="bg-gray-100">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="text-center mb-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-6xl font-bold">
                Our <span className="text-blue-900">Goal</span>
            </h1>
        </div>
        {/* White box */}
        <div className="container flex items-center justify-center flex-col rounded-2xl w-1/8 h-1/2 bg-white shadow-xl">
            <p className="text-2xl text-center font-bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae natus consequuntur hic nisi? Quasi quaerat labore delectus odio dicta consectetur doloribus, unde est eveniet illum id veritatis rerum explicabo praesentium!</p>
        </div>
      </div>
    </div>
  )
}                              


