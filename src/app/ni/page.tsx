import Header from '@/components/header';
import InscriptionComponent from '@/components/inscription';
import FormularioComponent from '@/components/formulario';
import Footer from '@/components/footer';

function NI(){

    const content = {
        incription : {
            textOne: "<span>no te culpo,</span><p>este san Valentín</p><strong>todos quieren algo que les recuerde a mí</strong>",
            textTwo: 'B) PORQUE VAS A ANTOJARTE DE MORDER MI CROCANTE CHOCOLATE BELGA CUANDO TE LA PONGÁS',
            textThree: 'D) PORQUE VAS A VERTE TAN SEDUCTOR COMO MI CHOCOLATE 100% REAL CUANDO LA USÉS'
        },
        header: {
            deseo: 'HOLA, ¿YA HICISTE TU LISTA? algunos le dejan deseos a santa pero esta navidad  vos dejámelos a mí.'
        },
        preguntas: {
            cuartaPregunta: 'Elegí tu razón favorita para robarme mi suéter'
        },
        deseoPregunta: {
            text:  '¡Ahora dejá tu deseo más seductor en mi buzón para quedar participando!'
        },
        formulario: {
            enviar: 'ROBÁTELA AQUÍ',
            compartir: 'Compartime tus datos para contactarte si sos el ganador, y para enviarte sorpresas o nuevas promociones en el futuro.'
        },
        gracias: "<p>Listo, ya estás</p><strong>participando</strong><p>ahora me voy a leer todos los deseos que me han llegado y si tenés suerte... nos estaremos viendo muy pronto debajo del árbol</p>",
        gracias_button: "DESCUBRÍ AQUÍ TU TUTTO PARA NAVIDAD",
        premios_exist: {
            one: false,
            two: true,
            three: false
        },
        premios_text: {
            one: '',
            two: '5 KITS CON TODA MI COLECCIÓN DE TEMPORADA QUE TE DEJARÁ SIN ALIENTO.',
            three: ''
        },
        text: 'Ahora solo completá las preguntas y participá por:'
    }

    return (
        <>
            <Header  header={content.header}/>
            <InscriptionComponent content={content.incription}  existen={content.premios_exist} premiosText={content.premios_text} text={content.text}/>
            <FormularioComponent incription={content.incription} gracias_button={content.gracias_button} gracias={content.gracias} enviar={content.formulario} deseo={content.deseoPregunta}  formulario={content.preguntas}/>
            <Footer/>
        </>
    )

}

export default NI;