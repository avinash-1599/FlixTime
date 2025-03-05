import React, { useState, useRef } from 'react'
import Header from './Header'
import { validateData } from '../utils/validate';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/config/firebase';

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const [errorMsg, setErrorMsg] = useState(null);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    const handleButtonClick = () => {
        // form validation
        const nameInput = name.current.value;
        const inputEmail = email.current.value;
        const inputPassword = password.current.value;

        const message = validateData(nameInput, inputEmail, inputPassword);

        setErrorMsg(message);

        if(message) return;

        if(!isSignInForm){
            // sign up logic
            createUserWithEmailAndPassword(auth, inputEmail, inputPassword)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("User Signed Up", user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Error", errorCode, errorMessage)
                setErrorMsg(errorCode + " : " + errorMessage);
            });
        }else{
            // login logic
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

