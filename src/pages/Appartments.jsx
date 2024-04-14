import Filters from "../Components/Filters"
import Flat from "../Components/Flat"
import {
    MapContainer,
    TileLayer,
    Popup,
    Marker,
    useMap,
    useMapEvent,
  } from "react-leaflet";

const FLAT_DEMO=[
    {image:'/home/testime.jpg', Name:'3 rooms, modern Appartment' , price:'23000' , location:'Kalpak Vihar Wadala, near Dominos ', id:'1'},
    {image:'/home/testime.jpg', Name:'3 rooms, modern Appartment' , price:'23000' , location:'Kalpak Vihar Wadala, near Dominos ', id:'2'},
    {image:'/home/testime.jpg', Name:'3 rooms, modern Appartment' , price:'23000' , location:'Kalpak Vihar Wadala, near Dominos ', id:'3'},
    {image:'/home/testime.jpg', Name:'3 rooms, modern Appartment' , price:'23000' , location:'Kalpak Vihar Wadala, near Dominos ', id:'4'},
    {image:'/home/testime.jpg', Name:'3 rooms, modern Appartment' , price:'23000' , location:'Kalpak Vihar Wadala, near Dominos ', id:'5'},
    {image:'/home/testime.jpg', Name:'3 rooms, modern Appartment' , price:'23000' , location:'Kalpak Vihar Wadala, near Dominos ', id:'6'},
    {image:'/home/testime.jpg', Name:'3 rooms, modern Appartment' , price:'23000' , location:'Kalpak Vihar Wadala, near Dominos ', id:'7'},
    {image:'/home/testime.jpg', Name:'3 rooms, modern Appartment' , price:'23000' , location:'Kalpak Vihar Wadala, near Dominos ', id:'8'}
]

function Appartments() {
    const position = [19.0760, 72.8777];
    return (
        <>
            <Filters />
        <div className="h-auto w-full bg-stone-100 flex align-middle justify-around items-center">


        <div className="bg-transparent h-screen sm:w-7/12 w-11/12 px-2 py-2 flex flex-col gap-2 overflow-y-scroll custom-scrollbar">
            {FLAT_DEMO.map(flat=>{
                return <Flat flat={flat}/>
            })}
        </div>
        <div className=" sm:h-screen sm:w-4/12 bg-green-300 overflow-hidden">
        
      <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy;  <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
  

        </div>
            
        </div>
        </>
    )
}

export default Appartments
