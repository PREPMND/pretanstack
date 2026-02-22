import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar.jsx";
import NavRoutes from "./routing.jsx";
import { useState } from "react";
import SubSearch from "../components/subsearch.jsx";
export default function Layout(props) {
    const { selected , setselected}=props;
    const {selectedtoprated, setselectedtoprated} = props
    const { selectedtrending , setselectedtrending}=props;
    const { selectedglobal , setselectedglobal}=props
    const [search , setsearch]=useState("");
    const {favourites, setfavourites} = props;
    const {heart, setheart} = props;
    const {backdrop, setbackdrop} = props;
    return (
        <>  
        
            <Navbar backdrop={backdrop} setbackdrop={setbackdrop} heart={heart} setheart={setheart} favourites={favourites} setfavourites={setfavourites} search={search} setsearch={setsearch} selected={selected} setselected={setselected} selectedtoprated={selectedtoprated} setselectedtoprated={setselectedtoprated} selectedtrending={selectedtrending} setselectedtrending={setselectedtrending} selectedglobal={selectedglobal} setselectedglobal={setselectedglobal} /> 
            <SubSearch search={search} setsearch={setsearch}  />
            <Outlet />
        </>
    )
}