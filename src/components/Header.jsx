import { BsWhatsapp } from "react-icons/bs";

import logo from "../assets/logo.jpg";
import googleLogo from "../assets/google-logo.png";
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const location = useLocation();

    function toggleNav() {
        setIsNavVisible(!isNavVisible);
    }

    // Calculate the dynamic className for the header based on isNavVisible
    const headerClassName = isNavVisible ? "w-full h-[40vh]" : "w-full h-[16.5vh]";

    useEffect(() => {
        function handleResize() {
            // Check the screen width and update isNavVisible accordingly
            if (window.innerWidth >= 1024) {
                setIsNavVisible(false);
            }
        }

        // Add a resize event listener to detect screen width changes
        window.addEventListener('resize', handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    // Function to determine if a link should be active
    function isActiveLink(path) {
        return location.pathname === path;
    };

    return (
        <>
        {/* Top Header Section */}
        <header className="bg-[#e7171f] flex flex-col flex-wrap justify-center lg:px-10 xl:px-52">
            <div className="lg:flex lg:items-center lg:justify-start justify-center text-center gap-2 mt-1 z-50">
                <BsWhatsapp className="lg:block hidden text-[#e7171f] mb-3"/>
                <p className="text-lg text-black"> +91-7015574125, +91-8810385787</p>
            </div>
            <ul className="md:flex md:justify-end md:items-center flex justify-center flex-wrap lg:gap-3 gap-1 z-50 mt-[-15px] pr-5">
                <li className="bg-[#a7090f] text-white text-lg py-[2px] px-[10px] mx-1">Toll Free Panel</li>
                <li className="bg-[#a7090f] text-white text-lg py-[2px] px-[10px] mx-1">Missed call Panel</li>
                <li className="bg-[#a7090f] text-white text-lg py-[2px] px-[10px] mx-1">SMS Panel</li>
                <li className="bg-[#a7090f] text-white text-lg py-[2px] px-[10px] mx-1">Whatsapp Panel</li>
                <li className="bg-[#a7090f] text-white text-lg py-[2px] px-[10px] mx-1">Payment</li>
            </ul>
            <div className="md:flex flex-col md:items-end md:justify-center flex items-center gap-1 pb-3 mt-[-12px] pr-5">
                <select name="" id="" className="w-40 h-[19px] text-xs font-medium ">
                    <option value="">Select Language</option>
                    <option value="">English</option>
                    <option value="">Hindi</option>
                </select>
                <div>
                    <a href="https://translate.google.com/" target="_blank" className="flex items-center justify-center text-xs pt-1 no-underline">
                        <span className="text-[#666666]">Powered by</span>
                        <img src={googleLogo} alt="google-logo" className="cursor-pointer ml-[2px]"/>
                        <span className="cursor-pointer text-[#444444] font-bold">Translate</span>
                    </a>
                </div>
            </div>

            {/* Blank Container */}
            <div className="absolute left-0 top-0 z-0 w-full h-[500px] bg-white ml-[-300px] rotate-[52deg] transform lg:block hidden"></div>
        </header>

        {/* Navigation Section */}
        <nav className={`relative flex items-center justify-between gap-5 lg:px-48 px-5 ${headerClassName}`}>

            <div className="absolute sm:left-32 left-5 top-2 ">
                <img src={logo} alt="logo" className="w-[100%] cursor-pointer rounded-full"/>
            </div>

            <div className={`${isNavVisible ? "absolute sm:left-32 left-5 top-[7.5rem] right-7" : "absolute top-10 right-5 lg:block hidden"}`}>
                <ul className={`${isNavVisible ? "flex flex-col gap-3 text-lg" : "flex items-center justify-center gap-10 text-lg"}`}>
                    <Link to="/" className=" no-underline">
                        <li className={`py-[6px] px-3 cursor-pointer text-[#404040] ${isActiveLink("/") ? "bg-[#e7171f] text-white" : "hover:bg-[#f2f1f1]"}`}>Home</li>
                    </Link>
                    <Link to="/about" className=" no-underline">
                        <li className={`py-[6px] px-3 cursor-pointer text-[#404040] ${isActiveLink("/about") ? "bg-[#e7171f] text-white" : "hover:bg-[#f2f1f1]"}`}>About Us</li>
                    </Link>
                    <Link to="/software" className=" no-underline">
                        <li className={`py-[6px] px-3 cursor-pointer text-[#404040] ${isActiveLink("/software") ? "bg-[#e7171f] text-white" : "hover:bg-[#f2f1f1]"}`}>Cloude Software</li>
                    </Link>
                </ul>
            </div>

            <div onClick={toggleNav} className="absolute right-7 top-9 border border-gray-300 p-1 px-3 rounded-[4px] lg:hidden block cursor-pointer">
                <div className="bg-[url(./assets/hamberger.svg)] bg-cover bg-center w-8 h-8"></div>
            </div>
        </nav>
        </>
    );
}

export default Header;