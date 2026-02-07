import { fetchMovies } from "../api/movies"
export default function Movie(){
    return(
        
        <>
        <div>
            <div>
                data?.slice(0,10).map((movie)=>{
                    return(
                        <div key={movie.id}>
                            {movie.title}
                        </div>
                    )
                })
            </div>
        </div>
        </>
    )
}