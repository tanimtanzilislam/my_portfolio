export const About = () => {

    const frontendSkills=["React","laravel","TailwindCss"];
    return (
      <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}About Me
          </h2>
          <div className=" rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
                passionate developer with expertise in building scalable web applications and creating innovative solutions
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div  className="rounded-xl hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">Frontend</h3>
                    <div className="flex fles-wrap gap-2"></div>

                </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  