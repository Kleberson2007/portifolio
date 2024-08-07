'use client';
import Link from "next/link";
import s from "./home.module.css"

export default function home(){
    return(
        <div className={s.home}>
        <h1 className={s.titulo}>Para</h1>
        </div>
    )
}