import Image from "next/image";
import LogoTutto from '@/assets/img/tutto_logo.svg';
import PlacerText from '@/assets/img/placer.png';
import BackgroundDescription from '@/assets/img/lazo.png';
import ChocaloateImage from '@/assets/img/chocolate.png';
// import ChocaloateImageEscritorio from '@/assets/img/chocolate_escritorio.png';
import TrianguloImage from '@/assets/img/triangulo.png';

/**
 * Desde aqui se maneja el header en todas las carpetas
 * 
 */

type Content =  {
    header: {
        deseo: string,
    }
}

const Header = ( { header } : Content ) => {

    return (
        <>
            <header>
                <section className="nav">
                    <div>
                        <hr />
                        <Image src={TrianguloImage.src} width={TrianguloImage.width} height={TrianguloImage.height} alt="Triangulo Imagen"/>
                    </div>
                    <section>
                        <Image className="logo" src={LogoTutto.src} alt="Logo de tutto" width={100} height={100} priority/>
                    </section>
                    <div>
                        <Image src={TrianguloImage.src} width={TrianguloImage.width} height={TrianguloImage.height} alt="Triangulo Imagen"/>
                        <hr />
                    </div>
                </section>
                <section className="content">
                    <section className="box">
                        {/* <Image src={ChocaloateImageEscritorio.src} width={250} height={250} priority alt="Chocolate tutto" title="Chocolate tutto"/> */}
                        <Image className="placer_item" src={PlacerText.src} alt="Navidad es para dar...te placer" title="Navidad es para dar...te placer" width={PlacerText.width} height={PlacerText.height} priority/>
                    </section>
                    <section className="box">
                        <Image className="placer" src={PlacerText.src} alt="Navidad es para dar...te placer" title="Navidad es para dar...te placer" width={200} height={200} priority/>
                        <section className="description">
                            <p>{ header.deseo }</p>
                            <Image src={BackgroundDescription.src} alt="Fondo de color solido" width={BackgroundDescription.width} height={BackgroundDescription.height} priority />
                        </section>
                    </section>
                </section>
                <div className="wave"></div>
                <div className="wave_chocolate">
                    <Image className="" src={ChocaloateImage.src} width={250} height={250} alt="Chocolate Tutto" priority/>
                </div>
                <div className="escarcha"></div>
                {/* <div className="chocolate_container">
                    <Image className="chocolate" src={ChocaloateImage.src} width={250} height={250} alt="Chocolate Tutto" priority/>
                </div> */}
            </header>
        </>
    )

}

export default Header;