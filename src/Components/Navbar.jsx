import {
  HiMailOpen,
  HiOutlineHeart,
  HiOutlineHome,
  HiOutlineUser,
  HiSearchCircle,
} from "react-icons/hi";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full h-[10vh]  flex align-middle justify-around items-center bg-stone-100">
      <h2>NearEstate</h2>

      <div className="flex align-middle items-center justify-center text-xl w-5/12  gap-5 ">
        <NavLink to='/'>
          <div>
            <HiOutlineHome className="hover:text-2xl transition-all duration-250 active:text-2xl" />
          </div>
        </NavLink>
        <NavLink to="/appartments">
          <div className="active:text-2xl" >
            <HiBuildingOffice2 className="hover:text-2xl transition-all duration-250 " />
          </div>
        </NavLink>
        {/* <div><HiSearchCircle className="hover:text-2xl transition-all duration-250 "/></div> */}
        <NavLink to="/fillform">
        <div>
          <HiMailOpen className="hover:text-2xl transition-all duration-250 " />
        </div>
        </NavLink>

        <div>
          <HiOutlineHeart className="hover:text-2xl transition-all duration-250 " />
        </div>

      </div>

      <div className="border border-stone-400 rounded-full p-1">
        <HiOutlineUser />
      </div>
    </div>
  );
}

export default Navbar;
