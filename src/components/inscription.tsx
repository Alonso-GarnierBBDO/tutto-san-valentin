import BuzonImage from '@/assets/img/buzon_two.png';
import TrianguloImage from '@/assets/img/triangulo.png';
import Image from 'next/image';

type Content = {
    content: {
        textOne: string,
        textTwo: string,
    },
    existen: {
        one: boolean,
        two: boolean,
        three: boolean
    },
    premiosText: {
        one: string,
        two: string,
        three: string
    },
    text: string,
}

const InscriptionComponent = ( { content, existen, premiosText, text } : Content ) => {

    return (
        <>
            <section className="content_inscription">
                <section className="content">
                    <div className="image">
                        <Image src={BuzonImage.src} width={BuzonImage.width} height={BuzonImage.height} alt='Imagen de buzon'/>
                    </div>
                    <div className="item_question">
                        <p>{content.textOne}</p>
                        <p><strong>{content.textTwo}</strong></p>
                    </div>
                </section>
                <section className='premios'>
                    <section className='menu'>
                        <div>
                            <hr />
                            <Image src={TrianguloImage.src} width={TrianguloImage.width} height={TrianguloImage.height} alt="Triangulo Imagen"/>
                        </div>
                        <section>
                            <h3>{text}</h3>
                        </section>
                        <div>
                            <Image src={TrianguloImage.src} width={TrianguloImage.width} height={TrianguloImage.height} alt="Triangulo Imagen"/>
                            <hr />
                        </div>
                    </section>
                    <section className='all'>
                        {
                            existen.one ? (
                                <div className='item one'>
                                    <p>{premiosText.one}</p>
                                </div>
                            ) : ''
                        }
                        {
                            existen.two ? (
                                <>
                                    {
                                        !existen.one && existen.two ? (
                                            <div className='item two doble'>
                                                <p>{premiosText.two}</p>
                                            </div>
                                        ) : (
                                            <div className='item two'>
                                                <p>{premiosText.two}</p>
                                            </div>
                                        )
                                    }
                                </>
                            ) : ''
                        }
                        {
                            existen.three ? (
                                <div className='item three'>
                                    <p>{premiosText.three}</p>
                                </div>
                            ) : ''
                        }
                    </section>
                    <section className='menu two'>
                        <div>
                            <hr />
                            <Image src={TrianguloImage.src} width={TrianguloImage.width} height={TrianguloImage.height} alt="Triangulo Imagen"/>
                        </div>
                        <section>
                            <h3>¡Primero conozcámonos un poco más!</h3>
                        </section>
                        <div>
                            <Image src={TrianguloImage.src} width={TrianguloImage.width} height={TrianguloImage.height} alt="Triangulo Imagen"/>
                            <hr />
                        </div>
                    </section>
                </section>
            </section>
        </>
    )

}

export default InscriptionComponent;