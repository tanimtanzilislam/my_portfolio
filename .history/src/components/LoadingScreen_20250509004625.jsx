export const LoadingScreen = () => {

    return <div className="fixed inset-0 z-50 bg-black text-gray-100  flex flex-col items-center justify-center">
        <div className="mb-4 text-4xl font mono font-bold"> 
            Hello world
            <span className="animated-blink ml-1"> | </span>
        </div>
        <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-">

        </div>
    </div>
}