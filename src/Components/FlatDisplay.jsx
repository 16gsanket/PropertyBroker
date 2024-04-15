import Flat from "./Flat"
import './scroll.css'
const FLAT_DEMO=[
    {image:'/home/testime.jpg', Name:'3 rooms, modern Appartment' , price:'23000' ,area:"mumbai", location:'Kalpak Vihar Wadala, near Dominos ',type:'appartment',for:'sale', id:'1'},
    {image:'/home/testime.jpg', Name:'3 rooms, modern Appartment' , price:'23000' ,area:"mumbai", location:'Kalpak Vihar Wadala, near Dominos ',type:'appartment',for:'rent', id:'2'},
    {image:'/home/testime.jpg', Name:'3 rooms, modern Appartment' , price:'23000' ,area:"thane", location:'Kalpak Vihar Wadala, near Dominos ',type:'pg',for:'rent', id:'3'},
    {image:'/home/testime.jpg', Name:'3 rooms, modern Appartment' , price:'23000' ,area:"sobo", location:'Kalpak Vihar Wadala, near Dominos ',type:'pg',for:'sale', id:'4'},
    {image:'/home/testime.jpg', Name:'3 rooms, modern Appartment' , price:'23000' ,area:"mulund", location:'Kalpak Vihar Wadala, near Dominos ',type:'pg',for:'rent', id:'5'},
    {image:'/home/testime.jpg', Name:'3 rooms, modern Appartment' , price:'23000' ,area:"subarban", location:'Kalpak Vihar Wadala, near Dominos ',type:'pg',for:'rent', id:'6'},
    {image:'/home/testime.jpg', Name:'3 rooms, modern Appartment' , price:'23000' ,area:"subarban", location:'Kalpak Vihar Wadala, near Dominos ',type:'pg',for:'rent', id:'7'},
    {image:'/home/testime.jpg', Name:'3 rooms, modern Appartment' , price:'23000' ,area:"thane", location:'Kalpak Vihar Wadala, near Dominos ',type:'appartment',for:'rent', id:'8'}
]




function FlatDisplay({ actiononroom , roomtype }) {


    return (
        <div className="bg-transparent h-auto w-full px-2 py-2 flex flex-col gap-2 overflow-y-scroll custom-scrollbar">
            {FLAT_DEMO.map(flat=>
                
                flat.for === actiononroom && flat.type === roomtype && <Flat flat={flat}/>

            )}
        </div>
    )
}



export default FlatDisplay
