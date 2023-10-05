import React, { useState } from 'react';
import logo from "../assets/logo.jpg";

function Header() {
    const [isNavVisible, setIsNavVisible] = useState(false);

    function toggleNav() {
        setIsNavVisible(!isNavVisible);
    }

    // Calculate the dynamic className for the header based on isNavVisible
    const headerClassName = isNavVisible ? "w-full h-[40vh]" : "w-full h-[18vh]";

    return (
        <header className={`relative flex items-center justify-between gap-5 lg:px-48 px-5 ${headerClassName}`}>

            <div className="absolute left-5 top-2">
                <img src={logo} alt="logo" className="w-[100%] h-auto"/>
            </div>

            <nav className="lg:block hidden">
                <ul className="flex items-center justify-center gap-10 text-lg">
                    <li className="bg-[#e7171f] text-white py-1 px-3">Home</li>
                    <li className="bg-[#e7171f] text-white py-1 px-3">About Us</li>
                    <li className="bg-[#e7171f] text-white py-1 px-3">Cloude Software</li>
                </ul>
            </nav>

            <div className="absolute right-7 top-9 border border-gray-300 pt-1 px-3 rounded-[4px] lg:hidden block z-50">
                <button onClick={toggleNav}>
                    <div className="bg-[url(./assets/hamberger.svg)] bg-cover bg-center w-8 h-8"></div>
                </button>
            </div>

            <nav className={`absolute top-[120px] w-[92%] cursor-pointer ${isNavVisible ? 'block' : 'hidden'}`}>
                <ul className="flex flex-col gap-3 text-lg">
                    <li className="bg-[#e7171f] text-white py-2 px-3">Home</li>
                    <li className="bg-[#e7171f] text-white py-2 px-3">About Us</li>
                    <li className="bg-[#e7171f] text-white py-2 px-3">Cloude Software</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
