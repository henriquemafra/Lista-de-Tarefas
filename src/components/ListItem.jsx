import React, { useState } from 'react';

const ListItem = ({ tarefa, finalizarTarefa, removerTarefa }) => {
  const [finalizado, setFinalizado] = useState(tarefa.finalizado);

  const handleFinalizarTarefa = () => {
    setFinalizado(!finalizado);
    finalizarTarefa(tarefa.id);
  };

  const handleRemoverTarefa = () => {
    removerTarefa(tarefa);
  };

  return (
    <div>
      <p style={{ textDecoration: finalizado ? 'line-through' : 'none' }}>
        {tarefa.texto}
      </p>
      <button className='adicionar-btn-ul' onClick={handleFinalizarTarefa}>
        {finalizado ? 'Desfazer' : 'Finalizar'}
      </button>
      <button className='adicionar-btn-ul' onClick={handleRemoverTarefa}>Remover</button>
    </div>
  );
};

export default ListItem;
