'use client';
import Link from "next/link";
import s from "./about.module.css"

export default function Pagina2(){
    return(
        <div className={s.about}>
            <h1 id='title'>Título aqui</h1>
            <button><Link href={"/home"}>Te falei</Link></button>
        </div>
    )
}