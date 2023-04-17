import { useState, useRef, React } from "react";

// export default function useOnScreen(ref) {
//     const [isIntersecting, setIntersecting] = useState(false)

// //     const animatedProps = useSpring({
// //         opacity: IsVisible ? 1 : 0,
// //     });

//     const observer = useMemo(() => new IntersectionObserver(
//         ([entry]) => setIntersecting(entry.isIntersecting)
//     ), [ref])

//     useEffect(() => {
//         observer.observe(ref.current)
//         return () => observer.disconnect()
//     }, [])

//     return isIntersecting
// }