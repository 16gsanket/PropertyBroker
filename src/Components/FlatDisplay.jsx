import Flat from "./Flat"
import './scroll.css'
const FLAT_DEMO=[
    {image:'/home/testime.jpg', Name:'3 rooms, modern Appartment' , price:'23000' , location:'Kalpak Vihar Wadala, near Dominos '},
    {image:'/home/testime.jpg', Name:'3 rooms, modern Appartment' , price:'23000' , location:'Kalpak Vihar Wadala, near Dominos '},
    {image:'/home/testime.jpg', Name:'3 rooms, modern Appartment' , price:'23000' , location:'Kalpak Vihar Wadala, near Dominos '},
    {image:'/home/testime.jpg', Name:'3 rooms, modern Appartment' , price:'23000' , location:'Kalpak Vihar Wadala, near Dominos '},
    {image:'/home/testime.jpg', Name:'3 rooms, modern Appartment' , price:'23000' , location:'Kalpak Vihar Wadala, near Dominos '},
    {image:'/home/testime.jpg', Name:'3 rooms, modern Appartment' , price:'23000' , location:'Kalpak Vihar Wadala, near Dominos '},
    {image:'/home/testime.jpg', Name:'3 rooms, modern Appartment' , price:'23000' , location:'Kalpak Vihar Wadala, near Dominos '},
    {image:'/home/testime.jpg', Name:'3 rooms, modern Appartment' , price:'23000' , location:'Kalpak Vihar Wadala, near Dominos '}
]




function FlatDisplay() {


    return (
        <div className="bg-transparent h-auto w-full px-2 py-2 flex flex-col gap-2 overflow-y-scroll custom-scrollbar">
            {FLAT_DEMO.map(flat=>{
                return <Flat flat={flat}/>
            })}
        </div>
    )
}



export default FlatDisplay
