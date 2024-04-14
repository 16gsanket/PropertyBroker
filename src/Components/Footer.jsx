import Button from "./Button";

function Footer() {
  return (
    <div className="h-[50dvh] w-full bg-stone-100 relative">
      <div className="h-full w-11/12 mx-auto bg-stone-200 rounded-3xl overflow-hidden relative">
        <div className="h-full w-full flex  align-middle justify-between items-center ">
          <div className="h-full w-7/12  flex flex-col align-middle justify-center items-center">
            <h2>Subscribe to Our NewsLetter</h2>
            <Button type='primary'>Subscribe</Button>
            {/* <button>Subscribe</button> */}
          </div>
          <div className="h-full w-5/12 flex align-middle justify-center items-center">
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Visit Us</li>
              <li>Media</li>
            </ul>
          </div>
        </div>
        <div className="h-9 w-full  absolute bottom-0">
          <h1 className="text-lg text-center">Made With 💌 in Bharat</h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
