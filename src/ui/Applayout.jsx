import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

function Applayout() {
    return (
        <div className="bg-stone-100">
             <Navbar />
             <Outlet />
             <Footer />
            
        </div>
    )
}

export default Applayout
