import { useQuery } from "@tanstack/react-query";
import { fetchPopularMovies } from "../api/popularapi.jsx";

function Popular() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["popular-movies"],
    queryFn: () => fetchPopularMovies(),
  });

  if (isLoading) return (<>

    <p className='h-screen flex justify-center items-center '>Loading...</p></>)
  if (error) {
    console.log(error);

    return <p>Something went wrong</p>;
  }

  return (
    <>    
    <button>Popular Movies</button>
    <div className="flex overflow-x-scroll overflow-y-hidden mb-5 mt-3">
      {data?.slice(0, 7).map((movie) => (
        <div className="flex-nowrap flex-shrink-0 px-3"
          key={movie.id}>
          <img className='md:h-full md:w-[220px] object-cover relative rounded scale'
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <h3>{movie.title}</h3>
        </div>
      ))}
    </div>
    </>

  );
}

export default Popular;