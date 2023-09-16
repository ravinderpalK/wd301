import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const jsonData = localStorage.getItem("userData");
  const data = JSON.parse(jsonData!);
  console.log(typeof (data));
  const logOut = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("authToken");
    navigate("/signin");
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className='relative max-w-lg w-full px-6 py-8 bg-white rounded-lg shadow-md '>
        <button className='absolute top-0 right-0 m-2' id='logout-link' onClick={logOut}>Logout</button>
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8 ">Dashboard</h1>
        <div className="block`x">
          <p>Name: {data.name}</p>
          <p>email: {data.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;