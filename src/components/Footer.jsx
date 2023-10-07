import { BsInstagram, BsFillChatFill, BsPinterest } from "react-icons/bs";
import { FaFacebookF, FaFlickr, FaLinkedinIn, FaMapMarkerAlt, FaPhoneVolume, FaReddit, FaTumblr } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { TfiYoutube } from 'react-icons/tfi';
import { RiChatSmile3Fill } from 'react-icons/ri';

const Footer = () => {

    const newDate = new Date();
    const year = newDate.getFullYear();

    return (

        <footer className="bg-[#051829E6] lg:h-[100vh] flex items-center justify-center gap-8 flex-wrap relative">

            <section className=" sm:w-[440px] w-[340px] border-[2px] border-white text-white lg:px-10 py-4 pl-6 pr-4 lg:mt-0 mt-16 ">
                <div>
                    <h1 className="lg:text-2xl sm:text-2xl text-xl">CONTACT</h1>
                    <div className="h-[5px] w-8 bg-[#e7171f] rounded-lg mt-3"></div>
                </div>
                <h3 className="text-xl text-[#aaa] max-w-[375px] mt-4 ">For any kind of query, contact us with the details below.</h3>
                <div className="flex  gap-1 mt-3">
                    <FaPhoneVolume className="text-[#e7171f] text-2xl mt-1"/>
                    <h3 className="sm:text-lg text-base  max-w-[290px]">+91-7015574125, +91-8810385787, +91-7206533219 , +91-9817622697</h3>
                </div>
                <div className="flex gap-2 mt-2 ">
                    <IoMdMail className="text-[#e7171f] text-xl mt-1"/>
                    <a href="" className="text-[#ffffff] text-lg no-underline ">andisoftwaresolutions@gmail.com</a>
                </div>
                <div className="flex gap-2 mt-3 ">
                    <FaMapMarkerAlt className="text-[#e7171f] text-xl mt-1"/>
                    <a href="" className="text-[#ffffff] sm:text-lg text-base no-underline  max-w-[220px]">ANDi Software Solutions Panipat & Noida</a>
                </div>
                <div>
                    <h3 className="text-[#e7171f] text-xl mb-2 mt-4">Follow us :</h3>
                    <div className="flex sm:gap-5 gap-[10px] text-2xl text-white">
                        <a href="#" className="hover:scale-125 transition-all ease-in-out duration-300">
                            <FaFacebookF className=" text-[#ffffff] lg:text-3xl sm:text-2xl text-md"/>
                        </a>
                        <a href="#" className="hover:scale-125 transition-all ease-in-out duration-300">
                            <BsInstagram className=" text-[#ffffff] lg:text-3xl sm:text-2xl text-md"/>
                        </a>
                        <a href="#" className="hover:scale-125 transition-all ease-in-out duration-300">
                            <TfiYoutube className=" text-[#ffffff] lg:text-3xl sm:text-2xl text-md"/>
                        </a>
                        <a href="#" className="hover:scale-125 transition-all ease-in-out duration-300">
                            <BsPinterest className=" text-[#ffffff] lg:text-3xl sm:text-2xl text-md"/>
                        </a>
                        <a href="#" className="hover:scale-125 transition-all ease-in-out duration-300">
                            <FaTumblr className=" text-[#ffffff] lg:text-3xl sm:text-2xl text-md"/>
                        </a>
                        <a href="#" className="hover:scale-125 transition-all ease-in-out duration-300">
                            <FaReddit className=" text-[#ffffff] lg:text-3xl sm:text-2xl text-md"/>
                        </a>
                        <a href="#" className="hover:scale-125 transition-all ease-in-out duration-300">
                            <FaLinkedinIn className=" text-[#ffffff] lg:text-3xl sm:text-2xl text-md"/>
                        </a>
                        <a href="#" className="hover:scale-125 transition-all ease-in-out duration-300">
                            <FaFlickr className=" text-[#ffffff] lg:text-3xl sm:text-2xl text-md"/>
                        </a>
                    </div>
                </div>
            </section>

            <section className="mx-4 lg:mb-0 mb-40 lg:mt-0 mt-6">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d325013.3336983484!2d76.92143497781701!3d29.152770140179495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ddbd321b7550d%3A0x85c88d61864b11b3!2sANDi%20Software%20Solutions!5e0!3m2!1sen!2sin!4v1696451205217!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style={{ border: '0' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="xl:w-[450px] md:w-[380px] w-[320px]"
                ></iframe>
            </section>

            <section className="bg-[#e1e1e1] lg:h-[7vh] sm:h-[12vh] h-[15vh] absolute bottom-0 left-0 right-0 flex justify-center items-center sm:p-0 p-4">
                <span className="text-black font-semibold sm:text-lg text-center">Copyright {year} © ANDi Software Solutions. All Rights reserved</span>
            </section>

            <div
                className="bg-[#025f94] text-[#ffffff] w-[60px] h-[60px] rounded-full flex items-center justify-center fixed right-5 bottom-5 z-50 cursor-pointer">
                <RiChatSmile3Fill className=" text-3xl"/>
            </div>

        </footer>
    );
}

export default Footer;
