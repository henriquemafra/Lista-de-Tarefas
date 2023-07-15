import React, { useState } from 'react';

const CardAdicionar = ({ adicionarTarefa }) => {
  const [textoTarefa, setTextoTarefa] = useState('');
  const [erro, setErro] = useState('');

  const handleAdicionarTarefa = () => {
    if (textoTarefa.trim() !== '') {
      adicionarTarefa(textoTarefa);
      setTextoTarefa('');
      setErro('');
    } else {
      setErro('Por favor, digite uma tarefa válida.');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAdicionarTarefa();
    }
  };

  return (
    <div>
      <input
        className='adicionar-input'
        placeholder="Digite uma tarefa, clique no botão ou aperte Enter"
        type="text"
        value={textoTarefa}
        onChange={(e) => setTextoTarefa(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button className='adicionar-btn' onClick={handleAdicionarTarefa}>
        Adicionar Tarefa
      </button>

      {erro && <p className='erro-msg'>{erro}</p>}
    </div>
  );
};

export default CardAdicionar;
