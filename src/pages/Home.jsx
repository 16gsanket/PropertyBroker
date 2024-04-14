import Banner from "../Components/Banner"
import Footer from "../Components/Footer"
import HowWeServe from "../Components/How-We-Serve"
import Main from "../Components/Main"


function Home() {
    return (
        <div className="h-auto w-full bg-stone-100 relative ">
           
            <Banner />
            <Main />
            <HowWeServe />
            

        </div>
    )
}

export default Home
