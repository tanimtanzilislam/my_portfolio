export const RevealOnScroll=(children)=>{
const ref=useRef(null)
useEffect(()=>{
 const observer =new IntersectionObserver((entry)=>{
if(entry.isIntersecting){
    ref.current.classList.add("visible");
}
 } {thresold}) ;  
});
    return (<div ref={ref} className="reveal">{children}</div>);
};