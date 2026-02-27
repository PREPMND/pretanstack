import Navbar from "./components/navbar"
import NavRoutes from "./routing/routing"
import { BrowserRouter } from "react-router-dom"  
import { useState } from "react"


export default function App(){
    const [selectedtoprated,setselectedtoprated]=useState(null)
    const [selectedtrending, setselectedtrending] = useState(null)
    const [selected, setselected] = useState(null)
    const [selectedglobal , setselectedglobal]=useState(null);
    const [searchnav , setsearchnav ]=useState(null);
    const [page,setpage]=useState(null);
    const [favourites, setfavourites] = useState([]);
    const [heart, setheart] = useState([]);
    const [backdrop, setbackdrop] = useState(false);
    return(
        <>
        
        <BrowserRouter>
           
           
           <NavRoutes backdrop={backdrop} setbackdrop={setbackdrop} favourites={favourites} setfavourites={setfavourites} heart={heart} setheart={setheart} page={page} setpage={setpage} selectedglobal={selectedglobal} setselectedglobal={setselectedglobal} selectedtoprated={selectedtoprated} setselectedtoprated={setselectedtoprated} selectedtrending={selectedtrending} setselectedtrending={setselectedtrending} selected={selected } setselected={setselected}/>
           
        </BrowserRouter>
        
        </>
    )
}
export function ChangeTitle(moviename){
    return moviename
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g,"")
    .replace(/\s+/g,"-")
    .replace(/-+/g,"-");


}
