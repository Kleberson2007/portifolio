'use client'
import Link from "next/link";
import "./globals.css";
import s from "./page.module.css"

export default function Home() {
  return (
    <div className={s.page}>
      <div className={s.tittle}>
        <h1>meus projetos</h1>
      </div>
        <a href={"/lista"}>lista de tarefas</a>
        <a href={"/contador"}>Contador</a>
      </div>
  );
}
