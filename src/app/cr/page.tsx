import Header from '@/components/header';
import InscriptionComponent from '@/components/inscription';
import FormularioComponent from '@/components/formulario';

function CR(){

    const content = {
        incription : {
            textOne: '¡Respondé mi formulario de los deseos y descubrí cuál de mis versiones no puede faltar en​',
            textTwo: 'tu lista de Navidad!'
        },
        header: {
            deseo: 'HOLA, ¿YA HICISTE TU LISTA? algunos le dejan deseos a santa pero esta navidad  vos dejámelos a mí.'
        },
        preguntas: {
            cuartaPregunta: '4. si nos encontráramos a solas en tu casa esta Navidad, vos desearías...'
        },
        deseoPregunta: {
            text:  '¡Ahora dejá tu deseo más seductor en mi buzón para quedar participando!'
        },
        formulario: {
            enviar: 'ENVIÁ TU DESEO AQUÍ',
            compartir: 'Compartime tus datos para contactarte si sos el ganador, y para enviarte sorpresas o nuevas promociones en el futuro.'
        },
        gracias: "<p>Listo, ya estás</p><strong>participando</strong><p>ahora me voy a leer todos los deseos que me han llegado y si tenés suerte... nos estaremos viendo muy pronto debajo del árbol</p>",
        gracias_button: "DESCUBRÍ AQUÍ TU TUTTO PARA NAVIDAD",
        premios_exist: {
            one: true,
            two: true,
            three: true
        },
        premios_text: {
            one: '1 CENA PARA DOS PERSONAS',
            two: '1 MASAJE PARA DOS PERSONAS',
            three: '5 KITS CON TODA MI COLECCIÓN DE TEMPORADA QUE TE DEJARÁ SIN ALIENTO.'
        },
        text: 'Ahora solo completá las preguntas y participá por:'
    }

    return (
        <>
            <Header header={content.header}/>
            <InscriptionComponent content={content.incription}  existen={content.premios_exist} premiosText={content.premios_text} text={content.text}/>
            <FormularioComponent gracias_button={content.gracias_button} gracias={content.gracias} enviar={content.formulario} deseo={content.deseoPregunta}  formulario={content.preguntas}/>

        </>
    )

}

export default CR;