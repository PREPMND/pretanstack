import { useNavigate } from 'react-router-dom';
export default function Navbar(){
    let navigate=useNavigate();
    return(
        <>
        <div className='flex *:flex bg-emerald-400 p-4 justify-between *:justify-between *:gap-4 
        items-center *:items-center text-white font-semibold'>
            <div>
                <div>Home</div>
                 <button onClick={()=>navigate(-1)}
                 className='bg-emerald-800 active:scale-95 active:bg-emerald-500 px-2 py-1 rounded-md ml-4 active:text-slate-50'
                 >Return</button>
            </div>
            <div>
                <div>
                    <button onClick={()=>navigate('/movie')} className='bg-emerald-800 active:scale-95 active:bg-emerald-500 px-2 py-1 rounded-md ml-4 active:text-slate-50'>Movies</button>
                </div>
                <div>
                    <button onClick={()=>navigate('/series')} className='bg-emerald-800 active:scale-95 active:bg-emerald-500 px-2 py-1 rounded-md ml-4 active:text-slate-50'>Series</button>
                </div>
                <div>
                    About
                </div>

            </div>
        </div>


        </>
    )
}