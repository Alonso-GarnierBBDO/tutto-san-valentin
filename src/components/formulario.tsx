'use client';

import Image from 'next/image';
import ThanksComponent from '@/components/thanks';
import { useEffect, useState, useRef, FormEvent, ChangeEvent, ChangeEventHandler } from "react";
import RecuerdeBackground from '@/assets/img/background_item.png';


type Content =  {
    incription : {
        textOne: string,
        textTwo: string,
        textThree: string
    },
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

const FormularioComponent = ({formulario, deseo, enviar, gracias, gracias_button, incription} : Content ) => {

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
            const titleElement : HTMLElement | null = document.querySelector('.premios .menu h3');

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

                        if(titleElement){
                            titleElement.style.display = 'none';
                        }

                    }


                }


            }else if(questions){
                setViewData(false);
                setViewQuestion(true);
                setMessage('');
                if(titleElement){
                    titleElement.style.display = 'block';
                }
            }else{
                setViewData(true);
                setViewQuestion(false);
                setMessage('Por favor verifique que los campos estén completados correctamente.');
                if(titleElement){
                    titleElement.style.display = 'block';
                }
            }

        }

        moveTop();

    }

    const prev = () => {

        const titleElement : HTMLElement | null = document.querySelector('.premios .menu h3');

        if(viewQuestion){
            setViewData(true);
            setViewQuestion(false);

            if(titleElement){
                titleElement.style.display = 'block';
            }

        }else if(viewDeseo){
            setViewData(false);
            setViewQuestion(true);
            setViewDeseo(false);

            if(titleElement){
                titleElement.style.display = 'block';
            }
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

        const textareaText : HTMLInputElement | null = document.querySelector('input[name="sueta"]:checked');

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

                // Deseos

                const deseoInput : HTMLInputElement | undefined = document.querySelector('input[name="sueta"]:checked') as HTMLInputElement | undefined;


                if (
                    nameInput && 
                    lastNameInput && 
                    generoInput && 
                    emailInput && 
                    phoneInput && 
                    yearInput && 
                    questionOneInput &&
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

                    const form = new FormData();

                    form.append('name', name);
                    form.append('last_name', lastName);
                    form.append('gender', genero);
                    form.append('email', email);
                    form.append('phone', phone);
                    form.append('year', year);
                    form.append('country', country ? country : (pais ? pais : ''));
                    form.append('favorite_reason', questionOne);
                    form.append('sueter', deseo);

                    if(provincia){
                        form.append('province', provincia ? provincia : '');
                    }else if(departamentos){
                        form.append('state', departamentos ? departamentos : '');
                    }


                    const saveData = await fetch('https://api.chocolatetutto.com/api/save.php', {
                        method: 'POST',
                        body: form
                    }).then( res => {

                        console.log(res);

                        return res.status;

                    });

                    if(saveData == 201){
                        setOpenModal(true);

                        const document_main : HTMLElement | null = document.body;

                        if(document_main){
                            document_main.style.overflow = 'hidden';
                        }
                    }else{
                        alert("Ocurrió un error al enviar el formulario, por favor inténtelo más tarde.")
                    }



                    deseoInput.disabled = false;
                    setTextSend('ROBÁTELA AQUÍ')
                    setDisabled(false);

                    const numberQuestionOne = parseInt(questionOne);

                    puntos([numberQuestionOne]);



                }

            }


        }else{
            setMessage('Selecciona la camiseta.')
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



                                <section className="question">
                                    <section className='recuerde'>
                                        <Image src={ RecuerdeBackground.src } width={RecuerdeBackground.width} height={RecuerdeBackground.height} alt="Imagen de recordar" />
                                        <section className='text'>
                                            <p className="title_box">{ formulario.cuartaPregunta }</p>
                                            {/*<p className="title_box">este san Valentín</p>*/}
                                        </section>
                                    </section>
                                    <label htmlFor="option_uno">
                                        <input type="radio" name="option_one" id="option_uno" value="A) PORQUE TE VA A RECORDAR mi cremosa combinación de chocolate y bailey" required/>
                                        <span>A&#41; PORQUE TE VA A RECORDAR mi cremosa combinación de chocolate y bailey&#96;s</span>
                                    </label>
                                    <label htmlFor="option_dos">
                                        <input type="radio" name="option_one" id="option_dos" value="B) PORQUE VAS A ANTOJARTE de morder mi crocante chocolate belga cuando te la pongás" required/>
                                        <span>{ incription.textTwo }</span>
                                    </label>
                                    <label htmlFor="option_tres">
                                        <input type="radio" name="option_one" id="option_tres" value="C) Porque es perfecta para acurrucarnos con uno de mis bombones" required/>
                                        <span>C&#41; Porque es perfecta para acurrucarnos con uno de mis bombones</span>
                                    </label>
                                    <label htmlFor="option_cuatro">
                                        <input type="radio" name="option_one" id="option_cuatro" value="d) Porque vas a verte tan seductor como mi chocolate 100% real cuando la usés" required/>
                                        <span>{ incription.textThree }</span>
                                    </label>
                                </section>

                            </section>
                        </section>

                        <section className={`quiz content_item ${viewDeseo ? 'view' : ''}`}>
                            <section>

                                {/* Message */}

                                <section className="message">
                                    {/*<span dangerouslySetInnerHTML={{__html: deseo.text}} ></span>*/}
                                    <section className="items">
                                        <label htmlFor="sueta_1">
                                            <input type="radio" value="Sueta #1" name="sueta" id="sueta_1"/>
                                            <div className="sueta">
                                                
                                            </div>
                                            <button>Esta es la mía</button>
                                        </label>
                                        <label htmlFor="sueta_2">
                                            <input type="radio" value="Sueta #2" name="sueta" id="sueta_2"/>
                                            <div className="sueta">
                                                
                                            </div>
                                            <button>Esta es la mía</button>
                                        </label>
                                        <label htmlFor="sueta_3">
                                            <input type="radio" value="Sueta #3" name="sueta" id="sueta_3"/>
                                            <div className="sueta">
                                            
                                            </div>
                                            <button>Esta es la mía</button>
                                        </label>
                                        <label htmlFor="sueta_4">
                                            <input type="radio" value="Sueta #4" name="sueta" id="sueta_4"/>
                                            <div className="sueta">
                                            
                                            </div>
                                            <button>Esta es la mía</button>
                                        </label>
                                        <label htmlFor="sueta_4">
                                            <input type="radio" value="Sueta #4" name="sueta" id="sueta_4"/>
                                            <div className="sueta">
                                            
                                            </div>
                                            <button>Esta es la mía</button>
                                        </label>
                                    </section>
                                </section>

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