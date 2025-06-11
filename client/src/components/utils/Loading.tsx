import React from 'react'

const Loading:React.FC = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div
        className="w-16 h-16 border-4 border-t-blue-700 border-r-gray-300 border-b-gray-300 border-l-gray-300 rounded-full animate-spin"
        aria-label="Loading"
      ></div>
    </div>
  )
}

export default Loading
