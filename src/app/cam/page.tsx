import Header from '@/components/header';
import InscriptionComponent from '@/components/inscription';
import FormularioComponent from '@/components/formulario';
import Footer from '@/components/footer';

function CAM(){

    const content = {
        incription : {
            textOne: "<span>no te culpo,</span><p>este san Valentín</p><strong>todos quieren algo que les recuerde a mí</strong>",
            textTwo: 'tu lista de Navidad!'
        },
        header: {
            deseo: 'HOLA, ¿YA HICISTE TU LISTA? algunos le dejan deseos a santa pero esta navidad tu déjamelos a mí.'
        },
        preguntas: {
            cuartaPregunta: '4. si nos encontráramos a solas en tu casa esta Navidad, tú desearías…'
        },
        deseoPregunta: {
            text:  '¡Ahora deja tu deseo más seductor en mi buzón para quedar participando!'
        },
        formulario: {
            enviar: 'RÓBATELA AQUÍ',
            compartir: 'Compárteme TUS DATOS PARA CONTACTARTE SI ERES EL GANADOR, Y PARA ENVIARTE SORPRESAS O NUEVAS PROMOCIONES EN EL FUTURO.'
        },
        gracias: "<p>Listo, ya estás</p><strong>participando</strong><p>ahora me voy a leer todos los deseos que me han llegado y si tienes suerte... nos estaremos viendo muy pronto debajo del árbol</p>",
        gracias_button: "DESCUBRE AQUÍ TU TUTTO PARA NAVIDAD",
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
        text: 'Ahora solo completa las preguntas y participa por:'
    }

    return (
        <>
            <Header header={content.header}/>
            <InscriptionComponent content={content.incription} existen={content.premios_exist} premiosText={content.premios_text} text={content.text}/>
            <FormularioComponent gracias_button={content.gracias_button} gracias={content.gracias} enviar={content.formulario} deseo={content.deseoPregunta} formulario={content.preguntas}/>
            <Footer/>
        </>
    )

}

export default CAM;