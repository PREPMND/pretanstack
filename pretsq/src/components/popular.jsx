import { useQuery } from "@tanstack/react-query";
import { fetchPopularMovies } from "../api/popularapi.jsx";

function Popular() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["popular-movies"],
    queryFn: () => fetchPopularMovies(),
  });

  if (isLoading) return( <>
  
  <p className='h-screen flex justify-center items-center '>Loading...</p></>)
  if (error) {console.log(error);
  
    return <p>Something went wrong</p>;}

  return (
    <div className="flex  overflow-x-scroll gap-4">
      {data?.slice(0, 10).map((movie) => (
        <div key={movie.id}>
          <img className='md:h-[160px]'
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <h3>{movie.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default Popular;