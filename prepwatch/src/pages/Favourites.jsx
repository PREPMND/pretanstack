
export default function Favourites(props){
    const {favourites , setFavourites} = props;
    const {heart, setheart} = props;
    return(
        
        <>
        <div>
            <div className="h-[calc(100vh-120px)] bg-neutral-900 ">
                <div className="text-white text-center pt-32 text-2xl font-semibold">Your favourite movies will appear here !</div>
                
            </div>
        </div>
        </>
    )
}