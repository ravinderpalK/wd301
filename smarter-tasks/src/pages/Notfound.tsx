import React from "react";

export const NotFound: React.FC = () => {
  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <div className="flex flex-col items-center">
          <h1 className="text-8xl  font-bold text-gray-800">404</h1>
          <p className="text-xl">Pag Not Found</p>
        </div>
      </div>
    </>
  )
}