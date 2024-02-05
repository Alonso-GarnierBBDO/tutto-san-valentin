import Image from "next/image";
import Chocolates from '@/assets/img/bodera.png';


const Footer = () => {

    return (
        <>
            <footer>
                <Image src={Chocolates.src} alt="Iconos de chocolates" width={Chocolates.width} height={Chocolates.height}/>
            </footer>
        </>
    )

}

export default Footer;