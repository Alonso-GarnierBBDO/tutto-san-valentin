'use client';

import Image from "next/image";
import BuzonImage from '@/assets/img/buzon.png';
import ThanksComponent from '@/components/thanks';
import { useEffect, useState, useRef, FormEvent, ChangeEvent, ChangeEventHandler } from "react";
import { createClient } from '@supabase/supabase-js';

type Content =  {
    formulario: {
        cuartaPregunta: string,
    },
    deseo: {
        text: string
    },
    enviar: {
        enviar: string,
        compartir: string,
    },
    gracias: string,
    gracias_button: string
}

const FormularioComponent = ({formulario, deseo, enviar, gracias, gracias_button} : Content ) => {

    const partOne = useRef<HTMLElement | null>(null);
    const partTwo = useRef<HTMLElement | null>(null);
    const contentForm = useRef<HTMLElement | null>(null);
    let questions = true;
    let quiz = true;
    let [viewData, setViewData] = useState<boolean>(true);
    let [viewQuestion, setViewQuestion] = useState<boolean>(false);
    let [viewDeseo, setViewDeseo] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');
    const [textSend, setTextSend] = useState<string>(enviar.enviar);
    const [disable, setDisabled] = useState<boolean>(false);
    const [countryCode, setCountryCode] = useState<string>('');
    const [openmodal, setOpenModal] = useState<boolean>(false);
    const [puntosUser, setPuntosUser] = useState<number>(0);
    const [viewState, setViewState] = useState<boolean>(false)
    const [openProvincia, setOpenProvincia] = useState<boolean>(true)
    const [preguntaDos, setPreguntaDos] = useState<string>('2. la nochebuena que deseás más sería en...');
    // const [preguntaCuatro, setPreguntaCuatro ] = useState<string>('4. SI NOS ENCONTRÁRAMOS A SOLAS EN TU CASA ESTA NAVIDAD, TU DESEARÍAS…');
    const [respuestaCPreguntaDos, setRespuestaCPreguntaDos] = useState<string>('c. en tu casa con quien más querés');
    const [phonePlaceholder, setPhonePlaceholder] = useState<string>('Teléfono:');

    // Registramos supabase
    const supabaseUrl = 'https://jkuwgrxanzpagiydglaz.supabase.co'
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImprdXdncnhhbnpwYWdpeWRnbGF6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMDg2ODAwNCwiZXhwIjoyMDE2NDQ0MDA0fQ.CPz7_wYbBhqYBrJJqxbYrRi2fgvS7vQuinV-5bvrnEI';
    const supabase = createClient(supabaseUrl, supabaseKey);

    


    useEffect( () => {

        setCountryCode(window.location.pathname);

        const country_string : string | null = window.location.pathname;

        if(country_string == '/cam'){
            setPreguntaDos('2. la nochebuena que deseas más sería en...');
            setRespuestaCPreguntaDos('c. en tu casa con quien más quieres');
            setPhonePlaceholder('Teléfono (Ingresar con el código del país):');
        }




    }, [])

    const next = () => {

        const htmlPartOne : HTMLElement | null = partOne.current;
        const htmlPartTwo : HTMLElement | null = partTwo.current;
    
        questions = true;
        quiz = true;
        
        if(htmlPartOne){

            const childElement = htmlPartOne.querySelectorAll('input, select');

            childElement.forEach((e: Element) => {

                validateForm(e)

                if (e instanceof HTMLInputElement || e instanceof HTMLSelectElement) {
                    e.oninput = () => {

                        validateForm(e);

                    }
                }

            });

            if(viewQuestion){

                if(htmlPartTwo){

                    const childElementTwo = htmlPartTwo.querySelectorAll('input');

                    childElementTwo.forEach((e: Element) => {
                        validateForm(e)
                    });

                    if(!quiz){
                        setMessage('Responde todas las preguntas.');
                    }else{
                        setViewData(false);
                        setViewQuestion(false);
                        setViewDeseo(true);
                        setMessage('');
                    }


                }


            }else if(questions){
                setViewData(false);
                setViewQuestion(true);
                setMessage('');
            }else{
                setViewData(true);
                setViewQuestion(false);
                setMessage('Por favor verifique que los campos estén completados correctamente.');
            }

        }

        moveTop();

    }

    const prev = () => {

        if(viewQuestion){
            setViewData(true);
            setViewQuestion(false);
        }else if(viewDeseo){
            setViewData(false);
            setViewQuestion(true);
            setViewDeseo(false);
        }

        setMessage('');

        moveTop();

    }


    const validateForm = (e : Element) => {


        if (e instanceof HTMLInputElement || e instanceof HTMLSelectElement) {


            if (!e.checkValidity()) {
                e.classList.add('err');
                questions = false;
                quiz = false;
            } else {
                e.classList.remove('err');
            }

            if(window.location.pathname == '/cam'){

                const patron = /^(\+502|502|504|\+504|507|\+507|503|\+503)/;
                const regex = /^\+\d{1,3}\s?\d{8,}$/;

                if(e.name == 'phone'){
                    if(regex.test(e.value) || patron.test(e.value)){
                        e.classList.remove('err');
                    }else {
                        e.classList.add('err');
                        questions = false;
                        quiz = false;
                    }
                }
            }

        } else if (e instanceof HTMLSelectElement) {
            // Validación para select
            if (e.selectedIndex < 0) {
                e.classList.add('err');
                questions = false;
                quiz = false;
            } else {
                e.classList.remove('err');
            }
        }

    }

    const sendForm  = async (e : FormEvent) => {

        e.preventDefault();

        const textareaText = document.querySelector('textarea');

        if(textareaText?.value.length){

            setMessage('');
            const tagForm : any = e.target;

            if(tagForm){

                // Contacto

                const nameInput: HTMLInputElement | undefined = document.getElementsByName('name')[0] as HTMLInputElement | undefined;
                const lastNameInput : HTMLInputElement | undefined = document.getElementsByName('lastName')[0] as HTMLInputElement | undefined;
                const generoInput : HTMLSelectElement | undefined = document.getElementsByName('genero')[0] as HTMLSelectElement | undefined;
                const emailInput : HTMLInputElement | undefined = document.getElementsByName('email')[0] as HTMLInputElement | undefined;
                const phoneInput : HTMLInputElement | undefined = document.getElementsByName('phone')[0] as HTMLInputElement | undefined;
                const yearInput : HTMLInputElement | undefined = document.getElementsByName('year')[0] as HTMLInputElement | undefined;
                const paisInput : HTMLInputElement | undefined = document.getElementsByName('pais')[0] as HTMLInputElement | undefined;
                const provinciaInput : HTMLInputElement | undefined = document.getElementsByName('provincia')[0] as HTMLInputElement | undefined;
                const departamentosInput : HTMLInputElement | undefined = document.getElementsByName('departamentos')[0] as HTMLInputElement | undefined;

                // Preguntas

                const questionOneInput: HTMLInputElement | undefined = document.querySelectorAll('input[name="option_one"]:checked')[0] as HTMLInputElement | undefined;
                const questionTwoInput: HTMLInputElement | undefined = document.querySelectorAll('input[name="option_two"]:checked')[0] as HTMLInputElement | undefined;
                const questionThreeInput: HTMLInputElement | undefined = document.querySelectorAll('input[name="option_three"]:checked')[0] as HTMLInputElement | undefined;
                const questionFourInput: HTMLInputElement | undefined = document.querySelectorAll('input[name="option_four"]:checked')[0] as HTMLInputElement | undefined;

                // Deseos

                const deseoInput : HTMLInputElement | undefined = document.getElementsByName('message')[0] as HTMLInputElement | undefined;

                if (
                    nameInput && 
                    lastNameInput && 
                    generoInput && 
                    emailInput && 
                    phoneInput && 
                    yearInput && 
                    questionOneInput &&
                    questionTwoInput &&
                    questionThreeInput &&
                    questionFourInput &&
                    deseoInput) {

                    const name: string = nameInput.value;
                    const lastName: string = lastNameInput.value;
                    const genero : string = generoInput.value;
                    const email : string = emailInput.value;
                    const phone : string = phoneInput.value;
                    const year : string = yearInput.value;
                    const provincia : string | undefined = provinciaInput?.value;
                    const pais : string | undefined = paisInput?.value;
                    const departamentos : string | undefined = departamentosInput?.value;


                    // Preguntas

                    const questionOne : string = questionOneInput.value;
                    const questionTwo : string = questionTwoInput.value;
                    const questionThree : string = questionThreeInput.value;
                    const questionFour : string = questionFourInput.value;
                    let saveInfo = {}

                    // Deseo

                    const deseo : string = deseoInput.value;

                    // Country

                    let country : string | undefined = '';
                    let countryTable : string = 'centroamerica';

                    if(countryCode == '/cr'){
                        country = 'Costa Rica'
                        countryTable = 'costa_rica';
                    }else if(countryCode == '/ni'){
                        country = 'Nicaragua'
                        countryTable = 'nicaragua';
                    }else if(countryCode == '/cam'){
                        country = pais;
                        countryTable = 'centroamerica';
                    }



                    deseoInput.disabled = true;
                    setTextSend('Enviando...')
                    setDisabled(true);

                    if(countryCode == '/cam'){

                        saveInfo = {
                            nombre: name,
                            apellido: lastName,
                            genero: genero,
                            correo: email,
                            telefono: phone,
                            edad: year,
                            pais: country,
                            provincia: provincia ? provincia : null,
                            departamentos: departamentos ? departamentos : null,
                            pregunta_uno: questionOne,
                            pregunta_dos: questionTwo,
                            pregunta_tres: questionThree,
                            pregunta_cuatro: questionFour,
                            mensaje: deseo
                        }

                    }else{
                        saveInfo = {
                            nombre: name,
                            apellido: lastName,
                            genero: genero,
                            correo: email,
                            telefono: phone,
                            edad: year,
                            pais: country,
                            provincia: provincia ? provincia : null,
                            pregunta_uno: questionOne,
                            pregunta_dos: questionTwo,
                            pregunta_tres: questionThree,
                            pregunta_cuatro: questionFour,
                            mensaje: deseo
    
                        }
                    }


                    const { data, error } = await supabase.from(countryTable).insert([saveInfo]).select();

                    if(data){
                        setOpenModal(true);

                        const document_main : HTMLElement | null = document.body;

                        if(document_main){
                            document_main.style.overflow = 'hidden';
                        }


                    }

                    if(error){
                        alert("Ocurrió un error al enviar el formulario, por favor inténtelo más tarde.")
                        console.error(error);
                    }

                    deseoInput.disabled = false;
                    setTextSend('ENVIÁ TU DESEO AQUÍ')
                    setDisabled(false);

                    const numberQuestionOne = parseInt(questionOne);
                    const numberQuestionTwo = parseInt(questionTwo);
                    const numberQuestionThree = parseInt(questionThree);
                    const numberQuestionFour = parseInt(questionFour);

                    puntos([numberQuestionOne, numberQuestionTwo, numberQuestionThree, numberQuestionFour]);



                }

            }


        }else{
            setMessage('Completa tu deseo')
        }

    }

    const puntos = ( numbers : number[]) => {

        let sumaPuntos : number[] =  [];
        let suma : number = 0;

        numbers.forEach( e => {

            if(e == 1){
                sumaPuntos.push(0.25);
            }else if(e == 2){
                sumaPuntos.push(0.50);
            }else if(e == 3){
                sumaPuntos.push(0.75);
            }else if(e == 4){
                sumaPuntos.push(1);
            }else{
                sumaPuntos.push(0);
            }
            
        });

        suma = sumaPuntos.reduce( (acumular, actual) => acumular + actual );


        setPuntosUser(suma);

    }


    const moveTop = () => {

        const tag = contentForm.current;

        if(tag){
            tag.scrollIntoView();
        }

    }

    const viewItems = ( e : any ) => {

        setViewState(true);
        const tag = e.target;

        if(tag){

            const value = tag.value;

            if(value == 'Panamá'){
                setOpenProvincia(true)
            }else{
                setOpenProvincia(false)
            }

        }
    }



    return (
        <>
            <section className="formulario_sections">
                <section className="content" ref={contentForm}>
                    <p className={`subtitleForm ${viewData ? 'view' : ''}`}>{ enviar.compartir }</p>
                    {/* <span className="subtitle">*disclaimer sobre uso de datos</span> */}
                    <form onSubmit={ e => sendForm(e) } className={`${viewQuestion || viewDeseo ? 'view' : ''}`} >

                        <section className={`part_one content_item ${viewData ? 'view' : ''}`} ref={partOne}>
                            <label htmlFor="name">
                                <input type="text" placeholder="Nombre" name="name" id="name" required/>
                            </label>
                            <label htmlFor="lastName">
                                <input type="text" name="lastName" placeholder="Apellidos:" id="lastName" required/>
                            </label>
                            <label htmlFor="genero">
                                <select name="genero" id="genero" required>
                                    <option value="">Genéro:</option>
                                    <option value="masculino">Masculino</option>
                                    <option value="femenino">Femenino</option>
                                    <option value="otro">Otro</option>
                                </select>
                            </label>
                            <label htmlFor="email">
                                <input type="email" placeholder="Correo electrónico:" name="email" id="email" required/>
                            </label>
                            <label htmlFor="phone">
                                <input type="text" placeholder={phonePlaceholder} id="phone" name="phone" required/>
                            </label>
                            <label htmlFor="year">
                                <input type="number" max="100" min="5" id="year" name="year" placeholder="Edad:" required/>
                            </label>
                            {
                                countryCode == '/cam' ? (
                                    <label htmlFor="pais">
                                        <select name="pais" id="pais" required onChange={ viewItems }>
                                            <option value="">País:</option>
                                            <option value="Guatemala">Guatemala</option>
                                            <option value="Honduras">Honduras</option>
                                            <option value="Panamá">Panamá</option>
                                            <option value="El Salvador">El Salvador</option>
                                        </select>
                                    </label>
                                ) : ''
                            }

                            {
                                countryCode == '/cam' ? (
                                    <>
                                        {
                                            viewState ? (
                                                <>
                                                    {
                                                        openProvincia ? (
                                                            <label htmlFor="provincia">
                                                                <input type="text" placeholder="Provincia:" name="provincia" id="provincia" required/>
                                                            </label>
                                                        ) : (
                                                            <label htmlFor="departamentos">
                                                                <input type="text" placeholder="Departamento:" name="departamentos" id="departamentos" required/>
                                                            </label>
                                                        )
                                                    }
                                                </>
                                            ) : ''
                                        }
                                    </>
                                ) : (
                                    <label htmlFor="provincia">
                                        <input type="text" name="provincia" placeholder="Provincia:" id="provincia" required/>
                                    </label>
                                )
                            }

                        </section>


                        <section className={`quiz content_item ${viewQuestion ? 'view' : ''}`} ref={partTwo}>

                            <section>

                                {/* Pregunta 1 */}

                                <section className="question">
                                    <span className="item_question">1. ¿qué desearías ver bajo tu árbol esta navidad?</span>
                                    <label htmlFor="option_uno">
                                        <input type="radio" name="option_one" id="option_uno" value="1. El regalo más especial de todos" required/>
                                        <span>A. el regalo más especial de todos</span>
                                    </label>
                                    <label htmlFor="option_dos">
                                        <input type="radio" name="option_one" id="option_dos" value="2. Algo que te seduzca a primera vista" required/>
                                        <span>b. algo que te seduzca a primera vista</span>
                                    </label>
                                    <label htmlFor="option_tres">
                                        <input type="radio" name="option_one" id="option_tres" value="3. Un detalle de alguien especial" required/>
                                        <span>c. un detalle de alguien especial</span>
                                    </label>
                                    <label htmlFor="option_cuatro">
                                        <input type="radio" name="option_one" id="option_cuatro" value="4. Un regalo que despierte tus sentidos" required/>
                                        <span>d. un regalo que despierte tus sentidos</span>
                                    </label>
                                </section>

                                {/* Pregunta 2 */}

                                <section className="question">
                                    <span className="item_question">{preguntaDos}</span>
                                    <label htmlFor="question_two_option_uno">
                                        <input type="radio" name="option_two" id="question_two_option_uno" value="1. Una cabaña secreta y especial" required/>
                                        <span>A. una cabaña secreta y especial</span>
                                    </label>
                                    <label htmlFor="question_two_option_dos">
                                        <input type="radio" name="option_two" id="question_two_option_dos" value="2. Un mirador lleno de seducción" required/>
                                        <span>b. un mirador lleno de seducción</span>
                                    </label>
                                    <label htmlFor="question_two_option_tres">
                                        <input type="radio" name="option_two" id="question_two_option_tres" value="3. En tu casa con quien más querés" required/>
                                        <span>{respuestaCPreguntaDos}</span>
                                    </label>
                                    <label htmlFor="question_two_option_cuatro">
                                        <input type="radio" name="option_two" id="question_two_option_cuatro" value="4. En un lugar exótico que te sorprenda" required/>
                                        <span>d. en un lugar exótico que te sorprenda</span>
                                    </label>
                                </section>


                                {/* Pregunta 3 */}

                                <section className="question">
                                    <span className="item_question">3. ¿Qué es lo que más desearías morder después de la cena navideña?</span>
                                    <label htmlFor="question_three_option_uno">
                                        <input type="radio" name="option_three" id="question_three_option_uno" value="1. Algo cremoso y único" required/>
                                        <span>A. algo cremoso y único</span>
                                    </label>
                                    <label htmlFor="question_three_option_dos">
                                        <input type="radio" name="option_three" id="question_three_option_dos" value="2. Un cuadrito con chocolate 100% real" required/>
                                        <span>b. un cuadrito con chocolate 100% real</span>
                                    </label>
                                    <label htmlFor="question_three_option_tres">
                                        <input type="radio" name="option_three" id="question_three_option_tres" value="3. Algo navideño por fuera y seductor por dentro" required/>
                                        <span>c. algo navideño por fuera y seductor por dentro</span>
                                    </label>
                                    <label htmlFor="question_three_option_cuatro">
                                        <input type="radio" name="option_three" id="question_three_option_cuatro" value="4. Algo que te llene de placer en todo sentido" required/>
                                        <span>d. algo que te llene de placer en todo sentido</span>
                                    </label>
                                </section>


                                {/* Pregunta 4 */}

                                <section className="question">
                                    <span className="item_question">{ formulario.cuartaPregunta }</span>
                                    <label htmlFor="question_four_option_uno">
                                        <input type="radio" name="option_four" id="question_four_option_uno" value="1. Guardarme para un momento especial" required/>
                                        <span>A. guardarme para un momento especial</span>
                                    </label>
                                    <label htmlFor="question_four_option_dos">
                                        <input type="radio" name="option_four" id="question_four_option_dos" value="2. Morder mis cuadritos en secreto" required/>
                                        <span>b. morder mis cuadritos en secreto</span>
                                    </label>
                                    <label htmlFor="question_four_option_tres">
                                        <input type="radio" name="option_four" id="question_four_option_tres" value="3. Compartirme con tus personas favoritas" required/>
                                        <span>c. compartirme con tus personas favoritas</span>
                                    </label>
                                    <label htmlFor="question_four_option_cuatro">
                                        <input type="radio" name="option_four" id="question_four_option_cuatro" value="4. Darme un mordisco y dejarte llevar" required/>
                                        <span>d. darme un mordisco y dejarte llevar</span>
                                    </label>
                                </section>

                            </section>
                        </section>

                        <section className={`quiz content_item ${viewDeseo ? 'view' : ''}`}>
                            <section>

                                {/* Message */}

                                <label htmlFor="message" className="message">
                                    <span dangerouslySetInnerHTML={{__html: deseo.text}} ></span>
                                    <textarea name="message" id="message"></textarea>
                                </label>

                            </section>
                        </section>

                        <span className="error">{message}</span>

                        <section className="group">

                            {
                                viewQuestion || viewDeseo ? (
                                    <button onClick={prev} type="button" disabled={disable}>
                                        <span>
                                            Anterior
                                        </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
                                        </svg>
                                    </button>
                                ) : ''
                            }
                            
                            {
                                !viewDeseo ? (
                                    <button onClick={next} type="button" disabled={disable}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                                        </svg>
                                        <span>
                                            Siguiente
                                        </span>
                                    </button>
                                ) : ''
                            }

                            {
                                viewDeseo ? (
                                    <button className="send" type="submit" disabled={disable}>{textSend}</button>
                                ) : ''
                            }


                        </section>

                    </form>
                </section>

                {/* <section className="ilustracion">
                    <Image className="buzon" src={BuzonImage.src} alt="Ilustración de buzón" width={BuzonImage.width} height={BuzonImage.height} priority />
                </section> */}

            </section>
            {
                openmodal ? ( 
                    <section className="view_modal">
                        <ThanksComponent gracias_button={gracias_button} gracias={gracias} puntos={puntosUser} country={countryCode}/>
                    </section>
                ) : ''
            }
        </>
    )

}

export default FormularioComponent;