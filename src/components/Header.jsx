import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeUser } from '../utils/userSlice';

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(store => store.user);

  const handleSignOut = async () => {
    console.log('Sign Out')
      try {
        const response = await fetch("http://localhost:5001/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `${user.token}`, // Send token in the header
            },
        });

        if (response.ok) {
            console.log("Logged out successfully");
            dispatch(removeUser());
            navigate('/');
        } else {
            console.log("Error logging out:", await response.json());
        }
      } catch (error) {
        console.error("Logout request failed:", error);
      }
  } 

  return (
    <div className='flex justify-between fixed top-0 left-0 w-full px-5 py-3 bg-gradient-to-b from-black z-10'>
        <div>
          <img 
            className='w-40 h-24'
            src="https://is1-ssl.mzstatic.com/image/thumb/Purple124/v4/56/39/16/56391643-25a6-6cbe-89a3-eb064ae2ff06/source/512x512bb.jpg" 
            alt="logo" 
          />
        </div>
        
        {user._id && (<div className='flex items-center'>
          <ul className='flex'>
            <li className='px-3 cursor-pointer'>Home</li>
            <li className='px-3 cursor-pointer'>TV Shows</li>
            <li className='px-3 cursor-pointer'>Movies</li>
            <li className='px-3 cursor-pointer'>New & Popular</li>
            <li className='px-3 cursor-pointer'>My List</li>
          </ul>
          <button onClick={handleSignOut} className="ml-4 bg-black text-white cursor-pointer px-4 py-2 rounded">Sign Out</button>
        </div>)}
    </div>
  )
}

export default Header
