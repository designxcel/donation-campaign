import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto py-5">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;