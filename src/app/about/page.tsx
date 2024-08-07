'use client';
import Link from "next/link";
import s from "./about.module.css"

export default function about(){
    return(
        <div className={s.about}>
            <h1 className={s.tittle}>Título aqui</h1>
            <a href={"/home"}>Te falei</a>
        </div>
    )
}