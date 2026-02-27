import { fetchSearch } from "../api/apiextra.jsx"
import { useQuery} from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { RotateCcw, WifiOff, WifiHigh } from "lucide-react"
export default function SubSearch(props) {
    const { search, setsearch } = props;
    const [status, setStatus] = useState(navigator.onLine ? "Online" : "Offline");
    useEffect(() => {
        const goOnline = () => setStatus("Online");
        const goOffline = () => setStatus("Offline");

        window.addEventListener("online", goOnline);
        window.addEventListener("offline", goOffline);

        return () => {
            window.removeEventListener("online", goOnline);
            window.removeEventListener("offline", goOffline);
        };
    }, []);
    

    const [spinning, setSpinning] = useState(false);

    const { data } = useQuery({
        queryKey: ["search", search],
        queryFn: () => fetchSearch(search),
        enabled: search.length > 0 && status === "Online",
    })
    const sortedData = data ? [...data].sort((a, b) => b.popularity - a.popularity) : [];

    return (

        <>
            <div className="w-full relative">
                <div className={``} >
                    <div className='bg-neutral-900 pt-2 flex md:pt-2 pb-2 md:justify-center h-auto items-center '>
                        <input type="text" id="search" placeholder=' Search...' className='p-1 py-[4px] bg-neutral-700 md:w-[350px] md:py-2 ml-12 mx-5 rounded-md text-white '
                            value={search}
                            onChange={(e) => {setsearch(e.target.value) }}
                        />
                        <span onClick={() => {setsearch("")}} className={`${search.length > 0 ? "block" : "hidden"} cursor-pointer text-red-50`}>✖</span>
                        <RotateCcw
                            onClick={() => {
                                if (status === "Online") {
                                    setSpinning(true);
                                    setTimeout(() => {
                                    window.location.reload()},[500])
                                }else{setSpinning(false)}

                            }}
                            className={`text-amber-300 ml-5 ${spinning ? "animate-spin" : "animate-none"}`}
                            size={18}
                        />



                        <div className={`${status === "Offline" ? "block" : "hidden"} text-rose-600 text-[8px]  md:text-sm right-24 absolute `}><div className="md:flex hidden">Looks like you're Offline </div></div>
                        <div className="absolute left-2 md:right-5 md:left-auto">
                            {status === "Offline" && (<WifiOff className="m-auto animate-pulse text-white mb-2 md:mb-1 "  />)}
                            {status === "Online" && (<WifiHigh className="m-auto text-green-500 mb-2  md:mb-1" size={30} />)}
                        </div>
                    </div>

                </div>
                {data && (<div className={` z-50 flex-col justify-center pt-1 m-auto absolute  place-items-center md:w-[70%]  md:left-1/2 md:-translate-x-1/2 top-full ml-17 md:ml-0 text-stone-200 min-h-60 font-bold text-lg `}>
                    {sortedData?.slice(0, 4).map((movie) => {
                        return (
                            <div className="bg-neutral-900 p-2 border-b-2 ml-12 mx-5 m-auto border-white/10 w-[90%] md:w-[70%] hover:bg-neutral-800 cursor-pointer gap-2 md:gap-3 overflow-y-auto scrollbar-hide"
                                key={movie.id}>
                                <div className="flex items-center w-max truncate gap-7">
                                    <div className="aspect-[2/3] md:w-[70px] w-[55px] rounded object-cover overflow-hidden overflow-x-hidden ">
                                        <img className="object-cover w-full" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                                    </div>
                                    <div className="flex items-center justify-between md:w-[500px]">
                                        <h2 onClick={() => {
                                            window.open(`https://cineby.gd/movie/${movie.id}`)
                                        }}
                                            className="truncate text-[14px] sm:text-[20px] hover:text-neutral-400">{movie.title}</h2>
                                        <div className="hidden md:block text-[10px] text-rose-200 md:text-[14px]">{movie.release_date}</div>
                                    </div>

                                </div>
                            </div>)

                    })}
                </div>)

                }</div>
        </>
    )
}