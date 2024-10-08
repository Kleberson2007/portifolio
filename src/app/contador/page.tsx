'use client';
import s from "./contador.module.css"
import "./globals.css";
import React, { useEffect, useState, useTransition } from 'react';

export default function Contador(){
    console.log("renderizando App()...")
    let [numero, setNumero] = useState(0);

    const limiteMinimo = -100000;
    const limiteMaximo = 100000;

        if (numero < limiteMinimo) {
            numero = limiteMinimo;
        } 
        else
        if (numero > limiteMaximo) {
            numero = limiteMaximo;
        }

        function numeroaleatorio() {
            const numeroaleatorio = Math.floor(Math.random() * 200000) - 100000;
            setNumero(numeroaleatorio)
        }

        function menos10000() {
            setNumero(numero - 10000)
            console.log(numero)
        }

        function menos1000() {
            setNumero(numero - 1000)
            console.log(numero)
        }
    
        function menos100() {
            setNumero(numero - 100)
            console.log(numero)
        }
    
        function menos10() {
            setNumero(numero - 10)
            console.log(numero)
        }
        
        function menos1() {
            setNumero(numero - 1)
            console.log(numero)
        }
        
        function mais1() {
            setNumero(numero + 1)
            console.log(numero)
        }

        function mais10() {
            setNumero(numero + 10)
            console.log(numero)
        }

        function mais100() {
            setNumero(numero + 100)
            console.log(numero)
        }

        function mais1000() {
            setNumero(numero + 1000)
            console.log(numero)
        }

        function mais10000() {
            setNumero(numero + 10000)
            console.log(numero)
        }

        function zerar() {
            setNumero(numero - numero)
        }

    return (
        <body className={s.body}>
            <section className={s.section}>
                <h1>Contador</h1>
                <button className={s.aleatorio} onClick={numeroaleatorio}>aleatório (-100.00 a 100.000)</button>
                <p className={s.animated}>{numero}</p>
                <div className={s.botoes}>
                    <button className={s.negativos} onClick={menos10000}>-10000</button>
                    <button className={s.negativos} onClick={menos1000}>-1000</button>
                    <button className={s.negativos} onClick={menos100}>-100</button>
                    <button className={s.negativos} onClick={menos10}>-10</button>
                    <button className={s.negativos} onClick={menos1}>-1</button>
                    <button className={s.positivos} onClick={mais1}>+1</button>
                    <button className={s.positivos} onClick={mais10}>+10</button>
                    <button className={s.positivos} onClick={mais100}>+100</button>
                    <button className={s.positivos} onClick={mais1000}>+1000</button>
                    <button className={s.positivos} onClick={mais10000}>+10000</button>
                </div>
                <button className={s.zerar} onClick={zerar}>zerar</button>
            </section>
        </body>
    )
}