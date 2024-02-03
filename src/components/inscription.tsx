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
                    <h2>¿Preparad@ para robÁrmela? </h2>
                </section>
                <section className='premios'>
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