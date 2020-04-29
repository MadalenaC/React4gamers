import React from 'react';
import { TILE_SIZE } from '../../settings/constants';

import './index.css';
import { format } from 'path';

const Hero = () => {
    return (
        <div
        style={{
            position: "absolute",//coloca o heroi dentro do tabuleiro
            bottom: 48 * 8,//movimentação pra cima
            left: 48 * 3,//movimentação para a direita
            width: TILE_SIZE,//como vai ser usado em mais de um lugar, melhor deixar definido a largura do heroi em um só lugar
            height: 100,
            backgroundImage: "url(./Assets/HERO.png)", 
            backgroundRepeat: 'no-repeat',//pra não ficar repetindo a imagem do heroi
            animation: 'hero-animation 0.5s steps(4) infinite'//importa o heroi e ele fica andando infinitamente
        }}//steps vai mudando a imagem a cada 48 pixels, dando a sensação do heroi estar andando
         />
    )
}

export default Hero;
//Exportando o heroi