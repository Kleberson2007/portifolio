'use client'
import "./globals.css";

export default function Home() {
  return (
    <div className="page">
      <div className="tittle">
        <h1>meus projetos</h1>
      </div>
      <div id="projetos-area">
        <div id="projetos">
          <a className="projeto" id="lista" href={"/lista"}>lista de tarefas</a>
          <a className="projeto" id="contador" href={"/contador"}>Contador</a>
          <a className="projeto" id="previsor" href={"./previsor"}>previsor do futuro</a>
          <p className="projeto" id="">...</p>
          <p className="projeto" id="">...</p>
          <p className="projeto" id="">...</p>
          <p className="projeto" id="">...</p>
          <p className="projeto" id="">...</p>
          <p className="projeto" id="">...</p>
          <p className="projeto" id="">...</p>
          <p className="projeto" id="">...</p>
          <p className="projeto" id="">...</p>
        </div>
      </div>
    </div>
  );
}
