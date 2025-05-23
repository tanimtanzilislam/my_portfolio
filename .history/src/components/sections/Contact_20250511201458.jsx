import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from 'emailjs-com '
export const Contact = () => {
     const[formData, setFormData]=useState({
        name:"",
        email:"",
        message:"",

     });
    const SERVICE_ID="service_ymetrnx";
    const TEMPLATE_ID="template_m5mmj7s";
    const PUBLIC_KEY="8ukUvl__jdAnA7Gc_";
    const handleSubmit=(e)=>{
        emailjs.sendForm(SERVICE_ID,TEMPLATE_ID,e.target,PUBLIC_KEY).then(()=>{
            alert("Messege Sent!")
        }).catch(()=>alert("Oops! Something went wrong.Please Try Again"))
    }
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full max-w-xl">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          <form className="space-y-6">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                
                placeholder="Name..."
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              
             
             />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="example@gmail.com"
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              
             
             />
            </div>

            <div className="relative">
              <textarea
               
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Your Message..."
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"

             />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-3 px-7 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:-shadow-[0_0_15px_rgba(59,130,246,0.4)">
                Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
