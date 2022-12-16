import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('auth-token')) {
            navigate('/');
        }
    }, []);
    

    const register = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8000/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ firstName: fName, lastName: lName, email, password })
        });
        const json = await response.json();
        console.log(json);
        if (json.message === "User created successfully") {
            navigate('/login');
        }
        else {
            toast.error(json.message);
        }
    }
  return (
    <>
        <div className="h-screen md:flex">
            <div
                className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 i justify-around items-center hidden">
                <div>
                    <h1 className="text-white font-bold text-4xl font-sans">TakeCare</h1>
                    <p className="text-white mt-1">The most popular peer to peer mental care app</p>
                    <button type="submit" className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button>
                </div>
                <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
                <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
            </div>
            <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
                <form className="bg-white" onSubmit={register}>
                    <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello There!</h1>
                    <p className="text-sm font-normal text-gray-600 mb-7">Welcome To TakeCare</p>
                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clip-rule="evenodd" />
                        </svg>
                        <input value={fName} onChange={(e) => setFName(e.target.value)} className="pl-2 outline-none border-none" type="text" name="fname" id="fname" placeholder="First name" />
                    </div>
                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clip-rule="evenodd" />
                        </svg>
                        <input value={lName} onChange={(e) => setLName(e.target.value)} className="pl-2 outline-none border-none" type="text" name="lname" id="lname" placeholder="Last name" />
                    </div>
                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} className="pl-2 outline-none border-none" type="text" name="email" id="email" placeholder="Email Address" />
                        </div>
                            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                    fill="currentColor">
                                    <path fill-rule="evenodd"
                                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                        clip-rule="evenodd" />
                                </svg>
                                <input value={password} onChange={(e) => setPassword(e.target.value)} className="pl-2 outline-none border-none" type="password" name="password" id="password" placeholder="Password" />
                            </div>
                        <button type="submit" className="block w-[300px] bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Register</button>
                        <Link to={'/login'} className="text-sm ml-2 hover:text-blue-500 cursor-pointer">Already Have an account?</Link>
                </form>
            </div>
        </div>
        <ToastContainer toastStyle={{ backgroundColor: "#202d40", color: 'white' }} />
    </>
  )
}

export default Signup