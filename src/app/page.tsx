'use client'
import Link from "next/link";
import s from "./page.module.css"

export default function Home() {
  return (
    <div className={s.page}>
      <div className={s.tittle}>
        <h1>meus projetos</h1>
      </div>
        <a href={"/about"}>Nada aqui</a>
      </div>
  );
}
