export const RevealOnScroll=(children)=>{
const ref=useRef(null)
useEffect(()=>{
 const observer =new IntersectionObserver((entry)=>{
if(entry.is)
 })   
})
    return (<div ref={ref} className="reveal">{children}</div>);
};