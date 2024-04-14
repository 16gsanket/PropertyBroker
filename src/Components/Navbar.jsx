import { HiMailOpen, HiOutlineHeart, HiOutlineHome, HiOutlineUser, HiSearchCircle } from "react-icons/hi";

function Navbar() {
    return (
        <div className="w-full h-[10vh]  flex align-middle justify-around items-center bg-stone-100">
            <h2>NearEstate</h2>

            <div className="flex align-middle items-center justify-center text-xl w-5/12  gap-5 ">
                <div ><HiOutlineHome  className="hover:text-2xl transition-all duration-250 "/>
              
                </div>
            
            <div><HiSearchCircle className="hover:text-2xl transition-all duration-250 "/></div>
            <div><HiMailOpen className="hover:text-2xl transition-all duration-250 "/></div>
            <div><HiOutlineHeart className="hover:text-2xl transition-all duration-250 "/></div>
            </div>

            <div className="border border-stone-400 rounded-full p-1">
            <HiOutlineUser />
            </div>
            
        </div>
    )
}

export default Navbar
