import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.jpg";
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
    const isActiveLink = (path) => {
        return location.pathname === path;
    };

    return (
        <header className={`relative flex items-center justify-between gap-5 lg:px-48 px-5 ${headerClassName}`}>

            <div className="absolute sm:left-32 left-5 top-2 ">
                <img src={logo} alt="logo" className="w-[100%] cursor-pointer rounded-full"/>
            </div>

            <nav className={`${isNavVisible ? "absolute sm:left-32 left-5 top-[7.5rem] right-7" : "absolute top-10 right-5 lg:block hidden"}`}>
                <ul className={`${isNavVisible ? "flex flex-col gap-3 text-lg" : "flex items-center justify-center gap-10 text-lg"}`}>
                    <Link to="/">
                        <li className={`py-[6px] px-3 cursor-pointer ${isActiveLink("/") ? "bg-[#e7171f] text-white" : "hover:bg-[#f2f1f1]"}`}>Home</li>
                    </Link>
                    <Link to="/about">
                        <li className={`py-[6px] px-3 cursor-pointer ${isActiveLink("/about") ? "bg-[#e7171f] text-white" : "hover:bg-[#f2f1f1]"}`}>About Us</li>
                    </Link>
                    <Link to="/software">
                        <li className={`py-[6px] px-3 cursor-pointer ${isActiveLink("/software") ? "bg-[#e7171f] text-white" : "hover:bg-[#f2f1f1]"}`}>Cloude Software</li>
                    </Link>
                </ul>
            </nav>

            <div onClick={toggleNav} className="absolute right-7 top-9 border border-gray-300 p-1 px-3 rounded-[4px] lg:hidden block cursor-pointer">
                <div className="bg-[url(./assets/hamberger.svg)] bg-cover bg-center w-8 h-8"></div>
            </div>
        </header>
    );
}

export default Header;