import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

function Applayout({ handle_night_mode , nightMode}) {
    return (

        

        <div className="bg-stone-100 h-auto">
             <Navbar handle_night_mode={handle_night_mode} nightMode={nightMode}/>
             <Outlet />
             <Footer />
            
        </div>
    )
}

export default Applayout
