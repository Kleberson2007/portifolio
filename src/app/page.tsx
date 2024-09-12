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
          <p className="projeto" id="previsor">previsor do futuro</p>
          <p className="projeto" id="previsor">4</p>
          <p className="projeto" id="previsor">5</p>
          <p className="projeto" id="previsor">6</p>
          <p className="projeto" id="previsor">7</p>
          <p className="projeto" id="previsor">8</p>
          <p className="projeto" id="previsor">9</p>
          <p className="projeto" id="previsor">10</p>
          <p className="projeto" id="previsor">11</p>
          <p className="projeto" id="previsor">12</p>
        </div>
      </div>
    </div>
  );
}
