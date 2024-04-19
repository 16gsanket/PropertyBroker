import Button from "./Button";

function Footer() {
  return (
    <div className="h-[50dvh] w-full bg-stone-100 relative">
      <div className="h-full w-11/12 mx-auto bg-stone-200 rounded-3xl overflow-hidden relative">
        <div className="h-full w-full flex  align-middle justify-between items-center ">
          <div className="h-full w-7/12  flex flex-col align-middle justify-center items-center gap-5">
            <h2 className="text-lg font-semibold text-stone-700">Subscribe to Our NewsLetter</h2>
            <Button type='primary'>Subscribe</Button>
            {/* <button>Subscribe</button> */}
          </div>
          <div className="h-full w-5/12 flex align-middle justify-center items-center gap-2">
            <ul className="flex flex-col gap-2">
              <li className="hover:text-purple-800 hover:cursor-pointer text-stone-800">About Us</li>
              <li className="hover:text-purple-800 hover:cursor-pointer text-stone-800">Contact Us</li>
              <li className="hover:text-purple-800 hover:cursor-pointer text-stone-800">Visit Us</li>
              <li className="hover:text-purple-800 hover:cursor-pointer text-stone-800">Media</li>
            </ul>
          </div>
        </div>
        <div className="h-9 w-full  absolute bottom-0">
          <h1 className="text-lg text-stone-700 text-center ">Made With 💌 in Bharat</h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
