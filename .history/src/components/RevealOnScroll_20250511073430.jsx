export const RevealOnScroll=(children)=>{
const ref=useRef(null)
useEffect(()=>{
 const observer =new IntersectionObserver((entry)=>{
if(entry.isIntersecting){
    
}
 })   
})
    return (<div ref={ref} className="reveal">{children}</div>);
};