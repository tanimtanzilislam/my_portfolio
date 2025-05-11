export const RevealOnScroll=(children)=>{
const ref=useRef(null)
useEffect(()=>{
 const observer =new IntersectionObserver((entry)=>{
if(entry.isIntersecting){
    ref.current.classList.add("visible");
}
 } {thresold:0.2,rootMargin:""}) ;  
});
    return (<div ref={ref} className="reveal">{children}</div>);
};