import { MdOutlineBedroomParent } from "react-icons/md";
import { FaRulerCombined } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function Flat({ flat }) {
  return (
    <div className="h-60 w-full bg-stone-50 py-1 flex align-middle justify-center items-center rounded-3xl overflow-hidden">
      <img src={flat.image} alt="" className="h-5/6 w-5/12 rounded-lg" />
      <div className="  h-5/6 w-7/12   p-1 flex flex-col justify-between md:flex-row md:gap-3 ">
        <div className=" flex flex-col align-middle justify-around ">
          <div>
            <h2 className="text-xl text-stone-900 font-semibold hover:text-indigo-600 hover:cursor-pointer">{flat.Name}</h2>
            <h3 className="text-lg text-stone-600 flex items-center">
              <span>
                <FaLocationDot />
              </span>
              {flat.location}
            </h3>
          </div>

          <div className="flex gap-3 text-lg">
            <div className="bg-[#8d94eb] px-1 rounded-lg flex items-center gap-1 justify-center align-middle" >
            <MdOutlineBedroomParent />
            <span>2</span>
            </div>

            <div className="bg-[#8d94eb] px-1 rounded-lg flex items-center gap-1 justify-center align-middle" >
            <FaRulerCombined />
            </div>
              
          </div>
        </div>

        <div className="w-full md:w-16 h-fit  flex align-center justify-end items-center  ">
          <h3>$ {flat.price}</h3>
        </div>
      </div>
    </div>
  );
}

export default Flat;
