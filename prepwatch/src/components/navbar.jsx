import { useNavigate } from 'react-router-dom';
import {BookHeadphones, BookHeart, Box, List, Popcorn } from'lucide-react'
import { useState } from 'react';
export default function Navbar(props){
    let navigate=useNavigate();
    const {backdrop, setbackdrop} = props;
    const APIKEY=import.meta.env.VITE_TMBD_KEY;
    return(
        <>
        <div 
        
        className='flex select-none *:flex h-[64px] bg-amber-400 w-full p-4 justify-between *:justify-between md:*:gap-4 *:gap-2
        items-center *:items-center text-white font-semibold'>
            <div>
                <svg onClick={()=>navigate("/")}
                xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g fill="none"><path fill="#29cb91" d="M13 14a5 5 0 1 0-5 1.9V17H7a2 2 0 0 0-2 2v1l-.5 1.5L5 23v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2l1-4.5l-1-4.5a2 2 0 0 0-2-2h-1v-1a5 5 0 1 0-4-2zM2 19.5a.5.5 0 0 1 1 0v.5l.5 1.5L3 23v1.5a.5.5 0 0 1-1 0zm23.553-1.276a1 1 0 0 0-.553.894L24 23.5l1 4.382a1 1 0 0 0 .553.894l3 1.5A1 1 0 0 0 30 29.382V17.618a1 1 0 0 0-1.447-.894z"/><path fill="#d3d3d3" d="M8 25a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z"/><path fill="#e086a4" d="M12 26a1 1 0 1 1-2 0a1 1 0 0 1 2 0"/><path fill="#000" d="M15 26a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1"/><path fill="#fff" d="M10 11a1 1 0 1 1-2 0a1 1 0 0 1 2 0m15 8h-2v9h2zM5 20H3v3h2zm15-8a1 1 0 1 0 0-2a1 1 0 0 0 0 2"/></g></svg>
                 
             
            </div>
            <div>
                <div>
                    <button onClick={()=>navigate('/movie')} className='bg-emerald-800 active:scale-95 active:bg-emerald-500 px-2 py-1 rounded-md ml-4 mr-2  active:text-slate-50 '>Movies</button>
                </div>
                <div>
                    <button onClick={()=>navigate('/favourites')} className='bg-emerald-800 md:flex hidden active:scale-95 active:bg-emerald-500 px-2 py-1 rounded-md ml-4 active:text-slate-50'>Favourites</button>
                </div>
                <div>
                    <List
                    onClick={()=>{
                        setbackdrop(true);
                    }}
                    className={`md:hidden text-cyan-600 flex`}/>
                </div>
                <div>
                    <button onClick={()=>navigate('/about')} className='bg-emerald-800 active:scale-95 active:bg-emerald-500 px-2 py-1 rounded-md ml-4 md:flex hidden active:text-slate-50'>About</button>
                </div>

            </div>
        </div>
        {backdrop && (
  <div
    onClick={() => setbackdrop(false)}
    className="fixed select-none inset-0 z-50 bg-black/60"
  >
    {/* Side Menu */}
    <div
      onClick={(e) => e.stopPropagation()}
      className="absolute top-0 ml-83  right-[0] h-screen bg-neutral-800 w-[60%] md:w-[20%] flex flex-col text-[14px] md:text-[18px]   gap-6 items-start *:transition-colors *:duration-200 *:ease-in-out *:ml-2 pt-5 text-rose-50 rounded-l-3xl p-5 "
    >
      <div className="text-xl pl-2 text-gray-400 pb-4 w-full font-bold">MenuBar</div>
      <button className='hover:text-rose-100 w-full py-2 pl-2 flex items-center hover:bg-neutral-950 '
      onClick={() => { navigate('/movie'); setbackdrop(false); }}>
        <Popcorn className="mr-2 "/> 
        Movies
      </button>

      <button className='hover:text-rose-100 py-2 pl-2 w-full hover:bg-neutral-950 flex'
      onClick={() => { navigate('/favourites'); setbackdrop(false); }}>
        <BookHeart className="mr-2"/>
        Favourites
      </button>

      <button className='hover:text-rose-100 py-2 pl-2 w-full hover:bg-neutral-950 flex'
      onClick={() => { navigate('/about'); setbackdrop(false); }}>
        <Box className="mr-2"/>
        About
      </button>
      <button className='hover:text-rose-100 py-2 pl-2 w-full hover:bg-neutral-950 flex'
      onClick={() => { navigate('/'); setbackdrop(false); }}>
        <BookHeadphones className="mr-2"/>
        Home
      </button>
    </div>
  </div>
)}

        </>
    )
}