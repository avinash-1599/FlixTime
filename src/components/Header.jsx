import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeUser } from '../utils/userSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleSignOut = async () => {
    try {
      const response = await fetch("http://localhost:5001/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${user.token}`,
        },
      });

      if (response.ok) {
        dispatch(removeUser());
        navigate('/');
      } else {
        console.log("Error logging out:", await response.json());
      }
    } catch (error) {
      console.error("Logout request failed:", error);
    }
  };

  return (
    <header className="flex justify-between items-center fixed top-0 left-0 w-full px-8 py-4 bg-gradient-to-b from-black z-50">
      {/* Logo */}
      <div>
        <h1 className="text-4xl font-extrabold text-red-600 tracking-wide font-sans drop-shadow-md">
          FLIX<span className="text-white">TIME</span>
        </h1>
      </div>

      {/* Navigation */}
      {user._id && (
        <div className="flex items-center space-x-6">
          <ul className="flex space-x-6 text-white font-medium text-md">
            <li className="hover:text-red-500 cursor-pointer transition">Home</li>
            <li className="hover:text-red-500 cursor-pointer transition">TV Shows</li>
            <li className="hover:text-red-500 cursor-pointer transition">Movies</li>
            <li className="hover:text-red-500 cursor-pointer transition">New & Popular</li>
            <li className="hover:text-red-500 cursor-pointer transition">My List</li>
          </ul>
          <button
            onClick={handleSignOut}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded transition"
          >
            Sign Out
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;