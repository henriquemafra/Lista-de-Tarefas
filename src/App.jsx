import React, { useState } from 'react';
import CardAdicionar from './components/CardAdicionar';
import ListItem from './components/ListItem';
import './App.css';

const App = () => {
  const [tarefas, setTarefas] = useState([]);

  const criarTarefa = (texto) => {
    const novaTarefa = {
      id: Date.now(),
      texto: texto,
      finalizado: false
    };
    setTarefas([...tarefas, novaTarefa]);
  };

  const finalizarTarefa = (id) => {
    const novasTarefas = tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        return { ...tarefa, finalizado: !tarefa.finalizado };
      }
      return tarefa;
    });
    setTarefas(novasTarefas);
  };

  const removerTarefa = (tarefaRemover) => {
    const novasTarefas = tarefas.filter((tarefa) => tarefa.id !== tarefaRemover.id);
    setTarefas(novasTarefas);
  };

  return (
    <div>
      <div> <h1 className="app-title">Minhas tarefas</h1></div>
    <div className="app">   
      <CardAdicionar adicionarTarefa={criarTarefa} />
      <ul className="tarefas-lista">
        {tarefas.map((tarefa) => (
          <ListItem
            key={tarefa.id}
            tarefa={tarefa}
            finalizarTarefa={finalizarTarefa}
            removerTarefa={removerTarefa}
          />
        ))}
      </ul>
    </div>
    </div>
    
  );
};

export default App;
