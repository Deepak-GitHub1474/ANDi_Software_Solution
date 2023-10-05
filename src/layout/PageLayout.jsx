
import Header from "../components/Header";

function PageLayout({ children }){
    return (
        <div>
            <Header />
            {children}

        </div>
    );
}

export default PageLayout;
