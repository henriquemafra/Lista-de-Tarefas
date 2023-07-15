import React, { useState } from 'react';

const CardAdicionar = ({ adicionarTarefa }) => {
    const [textoTarefa, setTextoTarefa] = useState('');

    const handleAdicionarTarefa = () => {
        adicionarTarefa(textoTarefa);
        setTextoTarefa('');
    };

    return (
        <div>
            <input
                placeholder="adicionar tarefa"
                type="text"
                value={textoTarefa}
                onChange={(e) => setTextoTarefa(e.target.value)}
            />

            <button onClick={handleAdicionarTarefa}>Adicionar Tarefa</button>
        </div>
    );
};

export default CardAdicionar