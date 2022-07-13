import MainFooter from "../Components/MainFooter";
import MainHeader from "../Components/MainHeader";

export default function ({ children }) {
    return (
        <div className="container">
            <MainHeader />
            {children}
            <MainFooter />
        </div>
    );
}
