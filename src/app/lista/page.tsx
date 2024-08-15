'use client';
import s from "./lista.module.css";
import "./globals.css";
import React, { FormEvent, useState } from 'react';

export default function Listadetarefas() {
  const [tarefas, setTarefas] = useState(["Estudar CSS", "Estudar JS", "Estudar HTML", "Estudar React"]);
  const [nova, setNova] = useState("");
  const [edicao, setEdicao] = useState({ index: -1, texto: "" });

  function adicionar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (nova.trim() !== "") {
      setTarefas([...tarefas, nova]);
      setNova("");
    }
  }

  function editar(index: number) {
    const novasTarefas = [...tarefas];
    novasTarefas[index] = edicao.texto;
    setTarefas(novasTarefas);
    setEdicao({ index: -1, texto: "" });
  }

  function deletar(i: number) {
    const novasTarefas = [...tarefas];
    novasTarefas.splice(i, 1);
    setTarefas(novasTarefas);
  }

  function subir(i: number) {
    if (i > 0) {
      const novasTarefas = [...tarefas];
      [novasTarefas[i], novasTarefas[i - 1]] = [novasTarefas[i - 1], novasTarefas[i]];
      setTarefas(novasTarefas);
    }
  }

  function descer(i: number) {
    if (i < tarefas.length - 1) {
      const novasTarefas = [...tarefas];
      [novasTarefas[i], novasTarefas[i + 1]] = [novasTarefas[i + 1], novasTarefas[i]];
      setTarefas(novasTarefas);
    }
  }

  function handleKeyPress(e: React.KeyboardEvent<HTMLInputElement>, index: number) {
    if (e.key === 'Enter') {
      editar(index);
    }
  }

  return (
    <div className={s.listadetarefas}>
      <header>
        <h1>Lista de tarefas</h1>
      </header>
      <form onSubmit={adicionar}>
        <input
          type='text'
          placeholder='nome da tarefa...'
          value={nova}
          onChange={e => setNova(e.target.value)} 
        />
        <button className={s.adicionar}>
          Add
        </button>
      </form>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>
            {index === edicao.index ? (
              <div>
                <input
                  id={s.edição}
                  type='text'
                  value={edicao.texto}
                  onChange={e => setEdicao({ ...edicao, texto: e.target.value })}
                  onKeyDown={e => handleKeyPress(e, index)}
                />
                <button onClick={() => editar(index)}>Salvar</button>
              </div>
            ) : (
              <div className={s.lis}>
                <div className={s.texto}>
                  {tarefa}
                </div>
                <div>
                  <button onClick={() => setEdicao({ index, texto: tarefa })}>Editar</button>
                  <button className={s.botaodeletar} onClick={() => deletar(index)}>Deletar</button>
                  <button className={s.botaomover} onClick={() => subir(index)}>⬆️</button>
                  <button className={s.botaomover} onClick={() => descer(index)}>⬇️</button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
