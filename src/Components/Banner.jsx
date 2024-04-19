function Banner({nightMode}) {
  return (
    <div
      style={{
        backgroundImage:  !nightMode ? 'url("/home/himg1.jpg")' : 'url("/home/himg4.jpg")',
        backgroundSize: "cover",
        backgroundPosition: !nightMode ? "center" : "bottom",
      }}
      className="h-[40vh] w-11/12 bg-stone-700 mx-auto overflow-hidden rounded-3xl relative "
    >
        
        <div className="text-stone-100  font-bold tracking-wider absolute top-7 left-5">
            <h2 className="text-2xl">Search In</h2>
            <select name="city" id="" className="bg-transparent text-lg outline-none">
                <option value="mumbai" className="bg-indigo-500 text-md">Mumbai</option>
                <option value="thane" className="bg-indigo-500 text-md">Thane</option>
                <option value="sobo" className="bg-indigo-500 text-md">Sobo</option>
            </select>
        </div>

    </div>
  );
}

//This si the Updated line to check form desktop to laptop

export default Banner;
