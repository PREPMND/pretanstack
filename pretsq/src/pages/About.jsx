import { GitGraph } from "lucide-react";
import { useState } from "react";
export default function About() {
    const [select, setselect] =useState(false);
  return (
    <>
      <div className="h-screen overflow-hidden bg-neutral-900 w-full text-rose-50 text-xl font-[Segoe-UI-Emoji] md:text-3xl">
        <section className="flex justify-between pt-4 md:px-5 px-4 h-full w-full">
        <div>
          <div onMouseEnter={()=>setselect(true)}
               onMouseLeave={()=>setselect(false)}
          className="transition-transform duration-100 ease-in-out hover:translate-x-3">PrepWatch</div>
          <div className={`${select==true?"opacity-100":"opacity-0"} absolute  w-[70%] h-[45%] md:w-[40%] bg-rose-50 m-3`}>

          </div>
        </div>
        <div>About Us</div>
          
        </section>
        <div className="text-3xl text-white">
            BiGbIG
        </div>
      </div>
    </>
  );
}
