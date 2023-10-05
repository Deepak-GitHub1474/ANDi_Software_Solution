import Footer from "../components/Footer";
import Header from "../components/Header";

function PageLayout({ children }){
    return (
        <div>
            <Header />
            {children}
            <Footer/>
        </div>
    );
}

export default PageLayout;
