import BuzonImage from '@/assets/img/buzon_two.png';
import TrianguloImage from '@/assets/img/triangulo.png';
import Image from 'next/image';
import RecuerdeBackground from '@/assets/img/background_item.png';

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

                    <section className='recuerde'>
                        <img src={ RecuerdeBackground.src } alt="" />
                        <section className='text'>
                            <span>no te culpo,</span>
                            <p>este san Valentín</p>
                            <strong>todos quieren algo que les recuerde a mí</strong>
                        </section>
                    </section>
                    <h2>¿Preparad@ para frobÁrmela? </h2>
                </section>
                <section className='premios'>
                    {/*<section className='all'>
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
                    </section>*/}
                    <section className='menu two'>
                        <section>
                            <h3>¡Primero conozcámonos un poco más!</h3>
                        </section>
                    </section>
                </section>
            </section>
        </>
    )

}

export default InscriptionComponent;