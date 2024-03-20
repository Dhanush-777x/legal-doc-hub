import React from 'react';
import videoSource from '../Assets/hero-bg.mp4';
import Navbar from './Navbar';

import hyperledger from '../Assets/hyper-section-img.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileShield, faBan, faLock } from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {
    return (
        <div className="bg-background text-text min-h-screen relative overflow-hidden">
            {/* Hero Section with Video Background */}
            <section className="flex items-center justify-center py-12 sm:py-24 px-4 sm:px-6 relative h-screen z-10">
                <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover opacity-50">
                    <source src={videoSource} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <Navbar />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                    <div className="w-full max-w-l">
                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 px-10">Welcome to LegalChain</h1>
                        <p className="text-lg sm:text-2xl mb-8">
                            The blockchain solution for secure legal document management.
                        </p>
                        <button className="bg-green-500 text-black text-lg sm:text-xl px-8 sm:px-14 py-3 rounded-lg hover:scale-105 transition duration-300 ease-in-out">
                            Get Started
                        </button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features-section" className="container mx-auto py-16 sm:py-24 px-4 sm:px-6 relative z-5 flex justify-center items-center my-40">
                <div className="w-full max-w-screen-lg">
                    <h2 className="text-3xl sm:text-4xl font-bold my-12 text-center">Key Features</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-12">
                        <div className="bg-additional p-6 rounded-lg shadow-md flex flex-col items-center">
                            <div className="flex items-center justify-center rounded-full w-16 h-16 sm:w-20 sm:h-20 my-6 mx-auto">
                                <FontAwesomeIcon icon={faFileShield} className='text-4xl sm:text-6xl text-green-500' />
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-green-500 text-center">Secure Document Storage</h3>
                            <p className="text-sm sm:text-base text-white text-center">
                                Store legal documents securely on the blockchain with encryption.
                            </p>
                        </div>
                        <div className="bg-additional p-6 rounded-lg shadow-md flex flex-col items-center">
                            <div className="flex items-center justify-center rounded-full w-16 h-16 sm:w-20 sm:h-20 my-6 mx-auto">
                                <FontAwesomeIcon icon={faBan} className='text-4xl sm:text-6xl text-green-500' />
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-green-500 text-center">Immutable Records</h3>
                            <p className="text-sm sm:text-base text-white text-center">
                                Once added to the blockchain, documents cannot be altered or tampered with.
                            </p>
                        </div>
                        <div className="bg-additional p-6 rounded-lg shadow-md flex flex-col items-center">
                            <div className="flex items-center justify-center rounded-full w-16 h-16 sm:w-20 sm:h-20 my-6 mx-auto">
                                <FontAwesomeIcon icon={faLock} className='text-4xl sm:text-6xl text-green-500' />
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-green-500 text-center">Permissioned Access</h3>
                            <p className="text-sm sm:text-base text-white text-center">
                                Control access to documents based on user roles and permissions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto py-16 sm:py-24 px-4 sm:px-6 relative z-20 flex justify-center items-center my-40">
                <div className="w-full max-w-screen-lg flex flex-col sm:flex-row items-center justify-center">
                    {/* Text */}
                    <div className="w-full sm:w-1/2 mt-8 sm:mt-0">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-green-500">Using Hyperledger</h2>
                        <p className="text-lg sm:text-xl text-white">
                            Hyperledger is a powerful blockchain platform that offers various tools and frameworks for building enterprise-grade blockchain solutions. It provides features like permissioned access, smart contract support, and scalability, making it ideal for businesses requiring secure and efficient blockchain applications.
                        </p>
                    </div>
                    {/* Image */}
                    <div className="w-full sm:w-1/2">
                        <img src={hyperledger} alt="Hyperledger" className="w-full h-auto rounded-lg p-12" />
                    </div>
                </div>
            </section>



            {/* Footer */}
            <footer className="bg-green-500 text-black py-2">
                <div className="container mx-auto text-center">
                    <p>&copy; 2024 LegalChain. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
