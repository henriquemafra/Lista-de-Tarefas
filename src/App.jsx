import React, { useState } from 'react';
import CardAdicionar from './components/CardAdicionar';

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

  return (
    <div>
      <h1>Suas Tarefas</h1>
      <CardAdicionar adicionarTarefa={criarTarefa} />
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>{tarefa.texto}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
