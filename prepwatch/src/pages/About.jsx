import { CatIcon, GitGraph } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function About() {
    const [select, setselect] =useState(false);
    const [selectabout, setselectabout] =useState(false);
    const [selectinfo, setselectinfo] =useState(false);
    const navigate = useNavigate();
  return (
    <>
      <div className="h-screen overflow-hidden select-none bg-neutral-900 w-full text-rose-50 text-xl font-[Segoe-UI-Emoji] md:text-3xl">
        <section className="flex *:hover:cursor-pointer justify-between pt-4 md:px-5 px-4 overflow-x-hidden max-h-full w-full">
        <div>
          <div onMouseEnter={()=>setselect(true)}
               onMouseLeave={()=>setselect(false)}
          className="transition-transform duration-100 ease-in-out hover:translate-x-3">PrepWatch</div>
          <div className={`${select==true?"opacity-100":"opacity-0"} absolute  w-[70%] min-h-fit md:w-[40%] bg-rose-50 m-3 text-black rounded-lg p-4 text-sm md:text-base transition-opacity duration-300 ease-in-out`}>
           A production level movie web app built using React, Tailwind CSS, and The Movie Database (TMDb) API. It offers a visually appealing experience for movie enthusiasts to explore a vast collection of films, discover trending titles, and manage their favorites.<span className={`md:flex hidden`}> With a user-friendly interface and responsive design, PrepWatch provides an immersive platform for users to stay updated on the latest releases and find their next cinematic adventure. The app's integration with TMDb ensures access to comprehensive movie data, making it a go-to destination for film lovers seeking an engaging and informative movie browsing experience.</span>
           <p>
            React Query /@TanStack has been used for way more efficient data fetching than traditional react. ReactRouter is used for versatile and dynamic routing.
           </p>
          </div>
        </div>
        <div >    
          <span 
          onMouseEnter={()=>setselectabout(true)}
          onMouseLeave={()=>setselectabout(false)}
          className="hover:text-rose-200">About Us</span>
        <div className={`${selectabout==true?"opacity-100":"opacity-0"} items-center absolute right-0 w-[70%] min-h-fit md:w-[40%] bg-rose-50 m-3 z-50 text-black rounded-lg p-4 text-sm md:text-base transition-opacity duration-300 ease-in-out   `}><div className="flex items-center ">
           <a href="https://github.com/PREPMND/pretanstack" target="_blank" className="text-[14px] sm:text-xl md:text-3xl  w-full"><div className="flex  gap-3">GitHub <span className="sm:flex hidden">Repository</span></div> <span className="text-[16px] lg:flex hidden text-stone-600 ">Click to open</span></a>
           <CatIcon className="animate-pulse text-rose-500 ml-4 w-fit absolute right-4" fill="black" size={40} /></div>
           <div>
            <img src="https://preview.redd.it/progetto-meme-del-mascellone-che-mette-la-mano-sulla-spalla-v0-rceycnd8y99f1.png?width=4880&format=png&auto=webp&s=cc3ab8d0e02861fbd11ae773a3a6a110b63884f2" alt="meme" className="rounded-lg mt-4"/>
           </div>
          </div>
        </div>
          
        </section>
        <div 
        onMouseEnter={()=>setselectinfo(true)}
        onMouseLeave={()=>setselectinfo(false)}
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 transition-transform hover:-translate-x-1 duration-[1200ms] ease-in-out ">Hover Over Them , Info's There</div>
        <div className="flex justify-center items-center h-screen">
          <img src="https://static.boredpanda.com/blog/wp-content/uploads/2025/10/funny-cat-memes-go-hard-cover_675.jpg" alt="cat meme" className={`${selectinfo?"opacity-100":"opacity-0"} w-[200px] md:w-[300px] rounded-lg  transition-opacity duration-300 ease-in-out`} />
        </div>
        <div className="absolute bottom-0 w-full text-center p-4 text-sm text-stone-500">
          
        </div>
        <div className="text-center flex justify-center w-full">
        <button onClick={()=>{navigate("/")}}
        className="absolute mb-12 text-2xl bottom-0 px-3 py-2 rounded-2xl transition-all ease-in-out  hover:text-indigo-950 duration-500 hover:bg-indigo-300 bg-neutral-500">
          Back To Home
        </button>
      </div>
      </div>
      
    </>
  );
}
