import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar.jsx";
import NavRoutes from "./routing.jsx";
import { useState } from "react";
export default function Layout(props) {
    const { selected , setselected}=props;
    const {selectedtoprated, setselectedtoprated} = props
    const { selectedtrending , setselectedtrending}=props;
    const { selectedglobal , setselectedglobal}=props
    const {searchnav , setsearchnav}=props;
    return (
        <>
            <Navbar searchnav={searchnav} setsearchnav={setsearchnav} selected={selected} setselected={setselected} selectedtoprated={selectedtoprated} setselectedtoprated={setselectedtoprated} selectedtrending={selectedtrending} setselectedtrending={setselectedtrending} selectedglobal={selectedglobal} setselectedglobal={setselectedglobal} />
            <Outlet />
        </>
    )
}