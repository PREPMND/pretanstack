import { useNavigate } from 'react-router-dom';
import { KEY } from 'C:/Users/DELL/pretanstack\pretsq\.env';
export default function Navbar(){
    let navigate=useNavigate();
    console.log({KEY});
    
    return(
        <>
        <div className='flex *:flex bg-amber-400 p-4 justify-between *:justify-between *:gap-4
        items-center *:items-center text-white font-semibold'>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g fill="none"><path fill="#29cb91" d="M13 14a5 5 0 1 0-5 1.9V17H7a2 2 0 0 0-2 2v1l-.5 1.5L5 23v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2l1-4.5l-1-4.5a2 2 0 0 0-2-2h-1v-1a5 5 0 1 0-4-2zM2 19.5a.5.5 0 0 1 1 0v.5l.5 1.5L3 23v1.5a.5.5 0 0 1-1 0zm23.553-1.276a1 1 0 0 0-.553.894L24 23.5l1 4.382a1 1 0 0 0 .553.894l3 1.5A1 1 0 0 0 30 29.382V17.618a1 1 0 0 0-1.447-.894z"/><path fill="#d3d3d3" d="M8 25a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z"/><path fill="#e086a4" d="M12 26a1 1 0 1 1-2 0a1 1 0 0 1 2 0"/><path fill="#000" d="M15 26a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1"/><path fill="#fff" d="M10 11a1 1 0 1 1-2 0a1 1 0 0 1 2 0m15 8h-2v9h2zM5 20H3v3h2zm15-8a1 1 0 1 0 0-2a1 1 0 0 0 0 2"/></g></svg>
                 <input type="text" id="search" placeholder=' Search...' className='ml-4 p-1 pl-2 rounded-md text-black
                 '/>
            </div>
            <div>
                <div>
                    <button onClick={()=>navigate('/movie')} className='bg-emerald-800 active:scale-95 active:bg-emerald-500 px-2 py-1 rounded-md ml-4 active:text-slate-50'>Movies</button>
                </div>
                <div>
                    <button onClick={()=>navigate('/favourites')} className='bg-emerald-800 active:scale-95 active:bg-emerald-500 px-2 py-1 rounded-md ml-4 active:text-slate-50'>Favourites</button>
                </div>
                <div>
                    <button onClick={()=>navigate('/about')} className='bg-emerald-800 active:scale-95 active:bg-emerald-500 px-2 py-1 rounded-md ml-4 active:text-slate-50'>About</button>
                </div>

            </div>
        </div>


        </>
    )
}