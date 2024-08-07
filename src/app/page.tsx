'use client'
import Link from "next/link";
import s from "./page.module.css"

export default function Home() {
  return (
    <div className={s.page}>
      <h1>te avisando</h1>
      <button className="botao1"><Link href={"/about"}>Nada aqui</Link></button>
    </div>
  );
}
