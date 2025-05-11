export const RevealOnScroll=(children)=>{
const ref=useRef(null)
useEffect(()=>{
 const observer =new IntersectionObserver((entry)=>{
if(entry.isIntersecting){
    ref.current.classList.add("visible");
}
 }, {thresold:0.2,rootMargin:"0px 0px-50px 0px "}) ; 
 
 if(ref.current)
});
    return (<div ref={ref} className="reveal">{children}</div>);
};