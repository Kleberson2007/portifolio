'use client';
import Link from "next/link";
import "./blog.module.css"

export default function Pagina2(){
    return(
        <>
        <button><Link href={"/home"}>Te falei</Link></button>
        </>
    )
}