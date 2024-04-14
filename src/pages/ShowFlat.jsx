function ShowFlat() {
    return (
        <div className="h-auto w-full bg-stone-100">
            <div className="md:h-[60vh] sm:h-[50vh] w-11/12 h-[70vh] rounded-3xl bg-stone-300 mx-auto my-1"></div>
            <div className="md:h-[50vh] sm:h-[40vh] h-[50dvh] w-11/12 rounded-2xl border border-stone-500 mx-auto my-2 sm:flex  sm:align-middle sm:justify-around sm:items-center ">
                <div className=" sm:h-full sm:w-7/12  w-full h-3/6 px-2">
                    <h1>Flat Title</h1>
                    <p>Flat Description</p>
                    <h3>Flat Location</h3>

                </div>

                <div className="sm:h-full sm:w-4/12 h-3/6 w-full relative px-2">
                    <h6>Brief Information</h6>
                    <div className="h-10 w-full bg-stone-200 rounded-xl px-2 py-1">
                        ammentities 
                    </div>
                    <h2>Estimated: Price</h2>

                    <button className="absolute bottom-1">Contact </button>

                </div>
            </div>
        </div>
    )
}

export default ShowFlat
