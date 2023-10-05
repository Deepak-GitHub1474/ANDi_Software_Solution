import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.jpg";

import Footer from "../components/Footer";
import Header from "../components/Header";

function PageLayout({ children }){
    return (
        <div>
            <Header />

            <section className="mt-10 2xl:mx-24 xl:mx-5 mx-0">
                    <div className="carousel w-full">
                        <div id="item1" className="carousel-item w-full">
                            <img src={banner1} className="w-full" />
                        </div> 
                        <div id="item2" className="carousel-item w-full">
                            <img src={banner2} className="w-full" />
                        </div> 
                    </div> 
                    <div className="flex justify-center w-full py-2 gap-2">
                        <a href="#item1" className="btn btn-xs">1</a> 
                        <a href="#item2" className="btn btn-xs">2</a> 
                    </div>
                </section>

            {children}
            <Footer/>
        </div>
    );
}

export default PageLayout;
