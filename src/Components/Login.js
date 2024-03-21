import React, { useState } from 'react';
import Navbar from './Navbar';

const LoginPage = () => {
    const [loginDetails, setLoginDetails] = useState({ username: '', password: '' });
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleLogin = () => {
        // Dummy login validation (replace this with your actual logic)
        const dummyUsername = 'username'; // Dummy username
        const dummyPassword = '123'; // Dummy password

        if (loginDetails.username === dummyUsername && loginDetails.password === dummyPassword) {
            setIsLoggedIn(true);
            // Redirect to dashboard upon successful login
            window.location.href = '/dashboard';
        } else {
            alert('Invalid credentials. Please try again.');
        }
    };

    return (
        <>
            <Navbar />
            <div className="bg-gray-900 text-text min-h-screen relative overflow-hidden flex justify centre login-section z-0">
                {/* Login Section */}
                <section className="container mx-auto py-16 sm:py-24 px-4 sm:px-6 relative z-20 flex justify-center items-center">
                    <div className="w-full max-w-md bg-white bg-opacity-10 p-8 rounded-lg shadow-lg backdrop-blur-lg border border-green-500 border-opacity-20">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-white">Login</h2>
                        <form className="">
                            <div className="flex flex-col mb-4">
                                <label htmlFor="username" className="text-lg font-semibold text-white mb-2">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={loginDetails.username}
                                    onChange={handleInputChange}
                                    className="px-4 py-2 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                                />
                            </div>
                            <div className="flex flex-col mb-8">
                                <label htmlFor="password" className="text-lg font-semibold text-white mb-2">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={loginDetails.password}
                                    onChange={handleInputChange}
                                    className="px-4 py-2 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                                />
                            </div>
                            {/* Conditionally change button behavior based on isLoggedIn state */}
                            <button
                                type="button" // Change type to button
                                className={`bg-green-500 w-full text-black text-lg px-6 py-3 rounded-md hover:scale-105 transition duration-300 ease-in-out ${
                                    isLoggedIn ? 'cursor-pointer' : ''
                                }`}
                                onClick={handleLogin}
                            >
                                {isLoggedIn ? 'Go to Dashboard' : 'Login'}
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </>
    );
};

export default LoginPage;
