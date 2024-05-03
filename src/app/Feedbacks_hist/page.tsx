"use client"
import React, { useEffect, useState } from 'react';

interface ApiResponse {
  id: number;
  transcript: string;
  response: string;
}

function Responses() {
  const [responses, setResponses] = useState<ApiResponse[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/getFeedbacks')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        setResponses(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const handleClick = (response: ApiResponse) => {
    console.log("Clicked response:", response);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">Feedbacks</h1>
      {responses.map((response, index) => (
        <div key={index} 
             className="bg-white shadow-md rounded-lg p-6 my-4 cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out"
             onClick={() => handleClick(response)}
             style={{ borderLeft: '4px solid #4A5568', marginBottom: '1rem' }}>
          <p className="text-gray-800 font-medium mb-2">
            <strong>User explanation:</strong>
          </p>
          <p className="text-gray-800 mb-4">
            {response.transcript}
          </p>
          <p className="text-gray-600 font-medium mb-2">
            <strong>Feedback:</strong>
          </p>
          <p className="text-gray-600">
            {response.response}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Responses;
