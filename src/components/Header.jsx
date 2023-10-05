import logo from "../assets/logo.jpg"

function Header() {
    return (
        <header className="w-full h-[18vh] flex items-center justify-between gap-5 lg:px-48 px-5">
            <div >
                <img src={logo} alt="logo" className="w-[100%] h-auto"/>
            </div>
            <nav>
                <ul className="flex items-center justify-center gap-10 text-lg">
                    <li className="bg-[#e7171f] text-white py-1 px-3">Home</li>
                    <li className="bg-[#e7171f] text-white py-1 px-3">About Us</li>
                    <li className="bg-[#e7171f] text-white py-1 px-3">Cloude Software</li>
                </ul>
            </nav>
        </header>
        
    );
};

export default Header;
