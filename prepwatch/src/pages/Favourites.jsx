
export default function Favourites(props){
    const {favourites , setFavourites} = props;
    const {heart, setheart} = props;
    return(
        
        <>
        <div>
            <div className="h-[calc(100vh-120px)] bg-neutral-900 ">
                <div className="text-white text-center pt-12 text-2xl font-semibold">Your favourite movies will appear here !</div>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2"
                    >{localStorage.getItem("favourites") && JSON.parse(localStorage.getItem("favourites"))?.map((movie)=>{
                        return(
                            <div key={movie.id} className="flex items-center justify-between w-[90%] mx-auto mt-5 p-3 bg-neutral-800 rounded-lg">
                                <div onClick={()=>{
                                    window.open(`https://cineby.gd/movie/${movie.id}`)
                                }} 
                                className="flex w-full items-center">
                                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-16 h-24 rounded-md mr-4" />
                                    <div className="">
                                        <h2 className="text-lg text-white transition-colors duration-300 ease-in-out hover:text-stone-400  font-semibold">{movie.title}</h2>
                                        <p className="text-sm text-gray-400">{movie.release_date}</p>   
                                        <div className={`${movie.adult===true?"flex":"hidden"} bg-red-500 text-white w-8 px-2 py-1 rounded text-xs right-1 top-3`}>18+</div>
                                    </div>
                                    
                                </div>
                            </div>
                        )
                    })}</div>
                </div>
            </div>
        </div>
        </>
    )
}