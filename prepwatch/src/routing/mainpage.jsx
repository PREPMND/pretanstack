import Popular from '../components/popular';
import Trending from '../components/trending';
import TopRated from '../components/toprated';
const Mainpage = (props) => {
    const { selected, setselected } = props;
    const { selectedtoprated, setselectedtoprated } = props
    const { selectedtrending, setselectedtrending } = props;
    const { selectedglobal, setselectedglobal } = props;
    
    const {page ,setpage}=props;
  return (
    <div>
      <div>
        <div className={`w-full h-[calc(100vh-120px)] bg-neutral-900 z-40 flex items-center justify-center text-yellow-50 font-[Inter] font-[600] ${false?"hidden":"block"}`}>Loading...</div>
      </div>
      {/*
      <div>
        <Popular page={page} setpage={setpage} selectedglobal={selectedglobal} setselectedglobal={setselectedglobal} selected={selected} setselected={setselected} />
        <Trending selectedtrending={selectedtrending} setselectedtrending={setselectedtrending} selectedglobal={selectedglobal} setselectedglobal={setselectedglobal}/>
        <TopRated selectedtoprated={selectedtoprated} setselectedtoprated={setselectedtoprated} selectedglobal={selectedglobal} setselectedglobal={setselectedglobal}/>
      </div>*/}
    </div>
  )
}

export default Mainpage
