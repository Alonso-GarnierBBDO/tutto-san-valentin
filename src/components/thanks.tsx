import Image from "next/image";
import LogoTutto from '@/assets/img/tutto_logo.svg';
import ParticipandoText from '@/assets/img/participando.png';
import BackgroundDescription from '@/assets/img/background_description.png';
import ChocaloateImage from '@/assets/img/chocolate.png';
import ChocaloateImageEscritorio from '@/assets/img/chocolate_escritorio.png';
import ChocolateTutto from '@/assets/img/tutto_gracias.png';
import PlacerText from '@/assets/img/gracias.svg';


/**
 * Desde aqui se maneja el header en todas las carpetas
 * 
 */




const Thanks = ( { country, puntos, gracias, gracias_button } : { country: string, puntos: number, gracias : string, gracias_button : string } ) => {

    return (
        <>
            <header>
                <section className="nav">
                    <section>
                        <Image className="logo" src={LogoTutto.src} alt="Logo de tutto" width={100} height={100} priority/>
                    </section>
                </section>
                <section className="content">
                    <section className="box">
                        <Image className="placer_item" src={PlacerText.src} alt="Navidad es para dar...te placer" title="Navidad es para dar...te placer" width={PlacerText.width} height={PlacerText.height} priority/>
                    </section>
                    <section className="box">
                        <Image className="placer" src={PlacerText.src} alt="Navidad es para dar...te placer" title="Navidad es para dar...te placer" width={200} height={200} priority/>
                        {/*<section className="description">
                            <p>{ header.deseo }</p>
                            <Image src={BackgroundDescription.src} alt="Fondo de color solido" width={BackgroundDescription.width} height={BackgroundDescription.height} priority />
                        </section>*/}
                    </section>
                </section>
                <div className="wave"></div>
                <div className="wave_chocolate">
                    <Image className="" src={ChocaloateImage.src} width={250} height={250} alt="Chocolate Tutto" priority/>
                </div>
            </header>
        </>
    )

}

export default Thanks;