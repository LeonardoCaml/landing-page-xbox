import Image from "next/image"
import arrow from '../../public/arrow.png'

export default function Arrow(){
    return(
        <Image src={arrow} alt='arrow' width={10} className="rotate-90"/>
    )
}