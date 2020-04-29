import React from 'react';
import Hero from '../Hero';
import { GAME_SIZE } from '../../settings/constants';

const Board = () => {
    return (
        <div>
        <Hero />
        <img src="./Assets/tileset.gif" alt="" width={GAME_SIZE} height={GAME_SIZE}/>
        </div>//game_size define o tamanho do tabuleiro
    );
}

export default Board;
//exportar o campo de batalha