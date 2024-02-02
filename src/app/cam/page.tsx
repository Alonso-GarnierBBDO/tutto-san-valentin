import Header from '@/components/header';
import InscriptionComponent from '@/components/inscription';
import FormularioComponent from '@/components/formulario';

function CAM(){

    const content = {
        incription : {
            textOne: '¡RespondE mi formulario de los deseos y descubrE cuál de mis versiones no puede faltar en',
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
            enviar: 'Envia TU DESEO AQUÍ',
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
        </>
    )

}

export default CAM;