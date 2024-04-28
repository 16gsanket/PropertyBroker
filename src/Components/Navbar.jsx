import {
  HiMailOpen,
  HiMoon,
  HiOutlineHeart,
  HiOutlineHome,
  HiOutlineUser,
  HiSearchCircle,
} from "react-icons/hi";
import { HiBuildingOffice2, HiOutlineSun } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

function Navbar({handle_night_mode , nightMode}) {
  return (
    <div className="w-full h-[10vh]  flex align-middle justify-around items-center bg-stone-100 dark:bg-stone-950 dark:text-stone-300">
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

      <div className="flex gap-2 ">

      {/* <div className="border border-stone-400 rounded-full p-1">
        <HiOutlineUser />
      </div> */}
      <div className="border  rounded-full p-1" onClick={handle_night_mode}>
      {
        nightMode  ? <HiOutlineSun /> :<HiMoon /> 
      
      }
      </div>
      </div>
        
    </div>
  );
}

export default Navbar;
