import { useEffect } from "react"

export const Navbar =(menuOpen,setMenuOpen)=>{
    useEffect(()=>{
        document.body.style.overflow = menuOpen ? "hidden"  ""
    })

    return <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                <a href="#home" className="font-mono text-xl font-bold text-white">
                    {" "}
                    pedro<span className="text-blue-500"></span>
                </a>
                <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden">
                    &#9776;
                </div>
            </div>
<div className="hidden md:flex items-center space-x-8">
    <a href="#home" className="tex-gray-300 hove:text-white transition-colors">Home</a>
    <a href="#about" className="tex-gray-300 hove:text-white transition-colors">About</a>
    <a href="#projects" className="tex-gray-300 hove:text-white transition-colors">Projects</a>
    <a href="#contact" className="tex-gray-300 hove:text-white transition-colors">Contact</a>
</div>
        </div>
    </nav>
    
}