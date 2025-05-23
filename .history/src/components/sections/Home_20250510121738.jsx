export const Home =()=>{
    return <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="text-center z-10 px-14">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right">Hi, I am Md.Tanzil Islam </h1>
                <p  className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
                    I'm a full stack developer who loves crafting clean,scalable web applications.My goal is to build solutions that offer both expectational performance and a delightful user experience                </p>
           
           <div className="flex justify-center space-x-4">
            <a href="#projects " className="bg-blue-500 text-white py-3 py-6 rounded font-medium">
                View Projects
            </a>
           </div>
        </div>
    </section>
} 