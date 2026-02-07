import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar.jsx";
import NavRoutes from "./routing.jsx";
export default function Layout(props){
    const [selectedtoprated,setselectedtoprated]=useState(null)
        const [selectedtrending, setselectedtrending] = useState(null)
        const [selected, setselected] = useState(null)
        const [selectedglobal , setselectedglobal]=useState(null);
    return(
        <>
        <Navbar selected={props.selected} setselected={props.setselected} selectedtoprated={props.selectedtoprated} setselectedtoprated={props.setselectedtoprated} selectedtrending={props.selectedtrending} setselectedtrending={props.setselectedtrending} selectedglobal={props.selectedglobal} setselectedglobal={props.setselectedglobal}/>
        <Outlet/>
        </>
    )
}