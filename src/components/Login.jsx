import React, { useState, useRef } from 'react'
import Header from './Header'
import { validateData } from '../utils/validate';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [errorMsg, setErrorMsg] = useState(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    const handleButtonClick = async () => {
        // form validation
        const nameInput = name?.current?.value;
        const inputEmail = email?.current?.value;
        const inputPassword = password?.current?.value;

        const message = validateData(nameInput, inputEmail, inputPassword);

        setErrorMsg(message);

        if(message) return;

        if(!isSignInForm){
            // sign up logic

            const response = await axios.post("http://localhost:5001/signup", {
                name: nameInput,
                email: inputEmail,
                password: inputPassword,
              });
      
              console.log("Signup Success:", response.data);
              dispatch(addUser(response.data.user));
              navigate("/browse");

        }else{
            // login logic
            const response = await axios.post("http://localhost:5001/login", {
                email: inputEmail,
                password: inputPassword,
              });
      
              console.log("Login Success:", response.data);
              //localStorage.setItem("token", response.data.user.token);
              dispatch(addUser(response.data.user));
              navigate("/browse");
        }
    }


  return (
    <div>
        <Header />
        <div className='absolute'>
            <img src="https://d3ghupt9z9s6o0.cloudfront.net/app/uploads/2017/04/13100509/Netflix-Background.jpg" alt="login-bg" />
        </div>
        <form onSubmit={(e) => e.preventDefault()} className='absolute w-3/12 p-12 bg-black text-white my-36 mx-auto right-0 left-0'>
            <h1 className="text-3xl font-bold mb-6">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

        {!isSignInForm && <input
        type="text"
        ref={name}
        placeholder="Full Name"
        className="w-full p-3 mb-6 rounded bg-gray-800 text-white border border-gray-600"
        />}

        <input
        type="text"
        ref={email}
        placeholder="Email Address"
        className="w-full p-3 mb-4 rounded bg-gray-800 text-white border border-gray-600"
        />

        <input
            type="password"
            ref={password}
            placeholder="Password"
            className="w-full p-3 mb-6 rounded bg-gray-800 text-white border border-gray-600"
        />

        <p className='py-2 text-red-500 font-bold text-lg'>{errorMsg}</p>

        <button onClick={handleButtonClick} className="w-full p-3 bg-red-700 rounded-lg font-semibold hover:bg-red-800 transition">
            {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="my-6 text-center">
            {!isSignInForm ? (
                <>
                Already registered ?{' '}
                <u className="cursor-pointer hover:text-red-400" onClick={toggleSignInForm}>
                    Sign In Here
                </u>
                </>
            ) : (
                <>
                New to <span className="text-red-400 font-semibold">FlixTime</span> ?{' '}
                <u className="cursor-pointer hover:text-red-400" onClick={toggleSignInForm}>
                    Sign Up Here
                </u>
                </>
            )}
        </p>
        </form>
    </div>
  )
}

export default Login

