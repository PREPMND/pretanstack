
export default function Favourites(props){
    const {favourites , setFavourites} = props;
    const {heart, setheart} = props;
    return(
        
        <>
        <div>
            <div className="h-[calc(100vh-120px)] bg-neutral-900 ">
                <div className="text-white text-center pt-32 text-2xl font-semibold">Your favourite movies will appear here !</div>
                <div>
                    <div>{favourites?.map((movie)=>{
                        return(
                            <div key={movie.id} className="flex items-center justify-between w-[90%] mx-auto mt-5 p-3 bg-neutral-800 rounded-lg">
                                <div className="flex items-center">
                                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-16 h-24 rounded-md mr-4" />
                                    <div>
                                        <h2 className="text-lg font-semibold">{movie.title}</h2>
                                        <p className="text-sm text-gray-400">{movie.release_date}</p>   
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