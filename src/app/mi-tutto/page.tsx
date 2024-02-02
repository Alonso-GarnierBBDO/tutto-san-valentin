"use client"
import { useEffect, useState } from "react";
import Image from "next/image";

// Background

import BackgroundOne from '@/assets/img/background_one.png';
import BackgroundTwo from '@/assets/img/background_two.png';
import BackgroundThree from '@/assets/img/background_three.png';
import BackgroundFour from '@/assets/img/background_four.png';
import BackgroundTutto from '@/assets/img/background_tutto.png';

const MiTutto = () => {

    const [background, setBackground] = useState(0);
    const [text, setText] = useState('');
    const [title, setTitlte] = useState('');

    useEffect( () => {

        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const points_string : string | null = urlParams.get('points');
        const country_string : string | null = urlParams.get('country');

        if(points_string){

            const point_number : number = parseFloat(points_string);

            if(point_number <= 1){
                setBackground(1);
                setText('en tu lista de deseos no pueden faltar mis latas navideñas porque las sorpresas');
                setTitlte('te llenan de placer');
            }else if(point_number <= 2){
                setBackground(2);
                if(country_string == '/ni'){
                    setText('en tu lista de deseos no pueden faltar mi colección bailey’s porque lo tuyo es dejarte seducir por');
                }else{
                    setText('en tu lista de deseos no puede faltar mi colección bailey’s porque lo tuyo es dejarte seducir por');
                }
                setTitlte('mi versión más especial');
            }else if(point_number <= 3){
                setBackground(3);
                setText('en tu lista de deseos no pueden faltar mis muñecos coleccionables porque no podrás resistirte');
                setTitlte('a mi lado más tierno');
            }else if(point_number <= 4){
                setBackground(4);
                if(country_string == '/ni'){
                    setText('en tu lista de deseos no pueden faltar mi chocolate real porque se nota que mis cuadritos');
                }else{
                    setText('en tu lista de deseos no puede faltar mi chocolate real porque se nota que mis cuadritos');
                }
                setTitlte('te pondrán a soñar');
            }

        }

    }, []);

    console.log(background);

    return (
        <>
            <section className="mi_tutto">

                <section className="container">
                    <p>{ text }​</p>
                    <h3>{ title }</h3>
                </section>
                <div className="base"></div>


                {
                    background == 1 ? (
                        <Image className="image_background" src={BackgroundOne.src} width={BackgroundOne.width} height={BackgroundOne.height} alt="Image tutto" priority />
                    ) : ''
                }

                {
                    background == 2 ? (
                        <Image className="image_background" src={BackgroundTwo.src} width={BackgroundTwo.width} height={BackgroundTwo.height} alt="Image tutto" priority />
                    ) : ''
                }
                
                {
                    background == 3 ? (
                        <Image className="image_background" src={BackgroundThree.src} width={BackgroundThree.width} height={BackgroundThree.height} alt="Image tutto" priority />
                    ) : ''
                }

                {
                    background == 4 ? (
                        <Image className="image_background" src={BackgroundFour.src} width={BackgroundFour.width} height={BackgroundFour.height} alt="Image tutto" priority />
                    ) : ''
                }


            </section>
        </>
    )

}

export default MiTutto;