import Banner from "../Components/Banner"
import Footer from "../Components/Footer"
import HowWeServe from "../Components/How-We-Serve"
import Main from "../Components/Main"
import Navbar from "../Components/Navbar"

function Home() {
    return (
        <div className="h-auto w-full bg-stone-100 relative ">
            <Navbar />
            <Banner />
            <Main />
            <HowWeServe />
            <Footer />
        </div>
    )
}

export default Home
