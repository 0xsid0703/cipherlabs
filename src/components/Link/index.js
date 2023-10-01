/* eslint-disable react/prop-types */
import { useRouter } from 'next/router'; 

export default function Link ({children, to = '/', className, style, onClick, ...other}) {
    const router = useRouter();
    const goTo = () => {
        if (to) router.push (to)
        if(onClick) onClick ()
    }
    return (
        <div onClick={goTo} className={className} style={style}>
            { children }
        </div>
    )
}