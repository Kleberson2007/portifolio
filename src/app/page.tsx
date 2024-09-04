'use client'
import "./globals.css";

export default function Home() {
  return (
    <div className="page">
      <div className="tittle">
        <h1>meus projetos</h1>
      </div>
      <div id="projetos">
        <a id="lista" href={"/lista"}>lista de tarefas</a>
        <a id="contador" href={"/contador"}>Contador</a>
      </div>
    </div>
  );
}
