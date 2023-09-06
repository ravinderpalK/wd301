import React from "react"
import { useNavigate } from "react-router-dom"

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const goback = () => {
    navigate("/home")
  }
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex flex-col items-center">
        <h1 className="text-8xl mb-10 font-bold text-gray-800">404</h1>
        <button id="backToHomeButton" onClick={goback} className="border p-2 rounded-md bg-gray-600 text-gray-100">Back To Home</button>
      </div>
    </div>
  )
}

export default NotFound;