import Popular from '../components/popular';
import Trending from '../components/trending';
import TopRated from '../components/toprated';
import { LoaderPinwheel } from 'lucide-react';
const Mainpage = (props) => {
    const { selected, setselected } = props;
    const { selectedtoprated, setselectedtoprated } = props
    const { selectedtrending, setselectedtrending } = props;
    const { selectedglobal, setselectedglobal } = props;
    const {favourites, setfavourites} = props;
    const {heart, setheart} = props;
    const {page ,setpage}=props;
  return (
    <div>
      {page!=="ant" && <div className='max-h-[calc(100vh-120px)]'>
        <div className={`w-full  bg-neutral-900 z-40 flex items-center justify-center text-yellow-50 font-[Inter] font-[600] ${page!==null?"hidden":"block"}`}>
          <LoaderPinwheel className="animate-spin mr-3"/>
          <div>Loading...</div>
          <div className='absolute bottom-0 font-sans text-stone-400 md:text-[14px]text-[8px]'>Results are on their way ! Check your network connection.</div>
        </div>
      </div>}
      
      <div>
        <Popular heart={heart} setheart={setheart} favourites={favourites} setfavourites={setfavourites} page={page} setpage={setpage} selectedglobal={selectedglobal} setselectedglobal={setselectedglobal} selected={selected} setselected={setselected} />
        <Trending heart={heart} setheart={setheart} favourites={favourites} setfavourites={setfavourites} selectedtrending={selectedtrending} setselectedtrending={setselectedtrending} selectedglobal={selectedglobal} setselectedglobal={setselectedglobal}/>
        <TopRated heart={heart} setheart={setheart} favourites={favourites} setfavourites={setfavourites} selectedtoprated={selectedtoprated} setselectedtoprated={setselectedtoprated} selectedglobal={selectedglobal} setselectedglobal={setselectedglobal}/>
      </div>
    </div>
  )
}

export default Mainpage
