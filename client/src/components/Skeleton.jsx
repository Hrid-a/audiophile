
const Skeleton = () => {
    return (
        <div className="grid grid-cols-1   lg:grid-cols-2 gap-8 place-items-center h-[100svh]">
            <div className="max-w-[380px] w-72  space-y-5 animate-pulse">
                <p className="w-[60%] h-3 rounded-lg bg-[#334155]"></p>
                <div>
                    <p className="w-full h-8 mb-2 rounded-lg bg-[#334155]"></p>
                    <p className="w-full h-8 rounded-lg bg-[#334155]"></p>
                </div>
                <div className="animate-pulse">
                    <p className="w-[90%] h-2 rounded-lg bg-[#334155]"></p>
                    <p className="w-[90%] h-2 my-1 rounded-lg bg-[#334155]"></p>
                    <p className="w-[90%] h-2 rounded-lg bg-[#334155]"></p>
                </div>
                <div className="animate-pulse w-[160px] h-12 bg-[#334155] rounded-lg"></div>
            </div>
            <div className="animate-pulse w-64 lg:w-96  h-80 rounded-lg mx-auto lg:mx-0 bg-[#334155] ">

            </div>
        </div>
    )
}

export default Skeleton