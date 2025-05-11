export const RevealOnScroll=(children)=>{
const ref=useRef(null)
useEffect(()=>{
 const observer =new IntersectionObserver((entry)=>{
if(entry.isIntersecti)
 })   
})
    return (<div ref={ref} className="reveal">{children}</div>);
};