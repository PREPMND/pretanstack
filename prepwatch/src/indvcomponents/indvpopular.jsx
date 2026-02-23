import { useQuery } from "@tanstack/react-query"
import { fetchPopularMovies } from "../api/popularapi"
import { useParams } from "react-router-dom";
import { ChangeTitle } from "../App";
import { Popcorn } from "lucide-react"
import { fetchMovieCredits, fetchMovieVideos } from "../api/apiextra";
export default function IndvPopular(props) {
    const { id } = useParams();
    const { selected, setselected } = props;
    const { data: videos, isLoading, error } = useQuery({
        queryKey: ["teaser", id],
        queryFn: () => fetchMovieVideos(id),
    })
    const { data: credits } = useQuery({
        queryKey: ["videos", id],
        queryFn: () => fetchMovieCredits(id),
    })
    const trailer = videos?.results?.find((vid) => vid.type === "Trailer"  && vid.site === "YouTube");
    console.log(trailer)
    return (
        <>
            <div className="bg-neutral-900 min-h-[calc(100vh-64px)] md:h-full">
                <div className=" font-Inter w-full text-white flex flex-col pl-3">
                    <div className="mt-2 text-2xl text-center font-light">
                        <div>{selected.title}</div>

                    </div>
                    <div className=" h-fit mt-3 flex justify-center overflow-hidden relative">

                        <img className="aspect-[3/2] rounded-lg hover:scale-[1.02] object-center transition-transform duration-200 ease-in-out object-cover md:h-[50%] md:w-[50%]  w-[70%] h-[70%] "
                            src={`https://image.tmdb.org/t/p/original${selected.backdrop_path}`}
                            alt={selected.title} />

                    </div >
                    <div className="flex mt-5 m-auto justify-center max-w-[70%]"
                    >{selected.overview}</div>
                    <div className="text-center text-3xl text-red-100 font-[700] mt-10 " >Players</div>
                    <div className="flex justify-center">
                        <div className="flex items-start flex-col justify-center">
                            <div
                                onClick={() => {
                                    window.open(`https://dorawatch.one/${ChangeTitle(selected.title)}`)
                                }}
                                className="mt-6 flex justify-center items-center gap-3">
                                <Popcorn className="" strokeWidth={0.5} />
                                <div className="text-center font-Inter elastic"

                                > Movie Player - DoraWatch</div>
                            </div>
                            <div
                                onClick={() => {
                                    window.open(`https://cineby.gd/movie/${selected.id}`)
                                }}
                                className="mt-4 flex justify-center  items-center gap-3">
                                <Popcorn className="" strokeWidth={0.5} />
                                <div className="text-center font-Inter elastic"

                                >Movie Player - Cineby</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-white p-6">
                    {trailer && (
                        <div className="mb-8 aspect-[2/3]">
                            <h2 className="text-xl mb-3">Trailer</h2>
                            <iframe
                                className="w-[70%] object-cover   rounded-lg"
                                src={`https://www.youtube.com/embed/${trailer.key}`}
                                title="Trailer"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    )}

                    {/* 🎭 Cast */}
                    <div>
                        <h2 className="text-xl mb-3">Top Cast</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {credits?.cast?.slice(0, 8).map((actor) => (
                                <div key={actor.id} className="text-center">
                                    <img
                                        className="rounded-lg mb-2"
                                        src={
                                            actor.profile_path
                                                ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                                                : "https://via.placeholder.com/185x278"
                                        }
                                        alt={actor.name}
                                    />
                                    <p className="text-sm font-semibold">{actor.name}</p>
                                    <p className="text-xs text-gray-400">{actor.character}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}