import Banner from "../Components/Banner"
import Footer from "../Components/Footer"
import Gmaps from "../Components/Gmaps"
import HowWeServe from "../Components/How-We-Serve"
import Main from "../Components/Main"


function Home({nightMode}) {
    return (
        <div className="h-auto w-full bg-stone-100 relative dark:bg-stone-950">
           
            <Banner nightMode={nightMode}/>
            <Main />
            <HowWeServe />
            

        </div>
    )
}

export default Home
