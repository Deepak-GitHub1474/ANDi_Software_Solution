import React, { useState, useEffect } from 'react';
import logo from "../assets/logo.jpg";
import { Link } from 'react-router-dom';

function Header() {
    const [isNavVisible, setIsNavVisible] = useState(false);

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

    return (
        <header className={`relative flex items-center justify-between gap-5 lg:px-48 px-5 ${headerClassName}`}>

            <div className="absolute sm:left-32 left-5 top-2 ">
                <img src={logo} alt="logo" className="w-[100%] cursor-pointer rounded-full"/>
            </div>

            <nav className={`${isNavVisible ? "absolute top-[7.5rem] w-[92%] cursor-pointer" : "absolute top-10 right-5 lg:block hidden"}`}>
                <ul className={`${isNavVisible ? "flex flex-col gap-3 text-lg" : "flex items-center justify-center gap-10 text-lg"}`}>
                    <Link to="/"><li className="bg-[#e7171f] text-white py-[6px] px-3">Home</li></Link>
                    <Link to="/about"><li className="bg-[#e7171f] text-white py-[6px] px-3">About Us</li></Link>
                    <Link to="/software"><li className="bg-[#e7171f] text-white py-[6px] px-3">Cloude Software</li></Link>
                </ul>
            </nav>

            <div onClick={toggleNav} className="absolute right-7 top-9 border border-gray-300 p-1 px-3 rounded-[4px] lg:hidden block cursor-pointer">
                    <div className="bg-[url(./assets/hamberger.svg)] bg-cover bg-center w-8 h-8"></div>
            </div>
        </header>
    );
}

export default Header;
