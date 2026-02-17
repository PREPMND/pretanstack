export default function Error(){
    return(
        <>
        <div className='flex flex-col items-center justify-center h-screen gap-4'>
            <h1 className='text-4xl font-bold transition-transform duration-700 ease-in-out translate-y-0 hover:-translate-y-2 text-red-500'>404</h1>
            <p className='text-lg text-gray-600'>Page Not Found</p>
            <p className=" text-gray-500">Try Checking The URL Again ! </p>
            <p className=" text-gray-500 absolute top-7 transition-transform duration-700 ease-in-out translate-x-0 hover:translate-x-2 ">
                Suggestively try "/" at the end of base url
            </p> 
        </div>
        </>
           

    )
}
