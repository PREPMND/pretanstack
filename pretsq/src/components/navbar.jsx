export default function Navbar(){
    return(
        <>
        <div className='flex *:flex bg-emerald-400 p-4 justify-between *:justify-between *:gap-4 text-white'>
            <div>
                <div>Home</div>
                 <button className='bg-emerald-800 active:scale-95 active:bg-emerald-600 px-2 py-1 rounded-md ml-4'
                 >Return</button>
            </div>
            <div>
                <div>
                    Movies
                </div>
                <div>
                    Series
                </div>
                <div>
                    About
                </div>

            </div>
        </div>


        </>
    )
}