import Carousel from "../components/Carousel";

import Footer from "../components/Footer";
import Header from "../components/Header";

function PageLayout({ children }){
    return (
        <div>
            <Header />
            
            <marquee behavior="scroll" direction="left">
                <p className="text-[#0056b3] text-xl font-semibold">Freelancers/Franchise/Reseller Required in all major cities</p>
            </marquee>

            <Carousel/>

            {children}

            <Footer/>
        </div>
    );
}

export default PageLayout;
