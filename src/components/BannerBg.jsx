import "../css/banner.css";
import Navbar from "./Navbar";

export default function BannerBg({ children }) {
    return (
        <div className="bg-banner mask">
            <Navbar></Navbar>
            <div className="position-relative">{children}</div>
        </div>
    )
}