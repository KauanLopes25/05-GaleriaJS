'use strict'

const imagens= [
    {
        nome: 'Pôr do Sol',
        url: './img/imagem1.jpeg'
    },
    {
        nome: 'Pôr da Lua',
        url: './img/imagem2.jpeg'
    },
    {
        nome: 'Volei de Praia',
        url: './img/imagem3.jpeg'
    },
    {
        nome: 'Musculação',
        url: './img/imagem4.jpeg'
    },
    {
        nome: 'Setup Gamer',
        url: './img/imagem5.jpg'
    },
    {
        nome: 'Ursinho Triste',
        url: './img/imagem6.jpg'
    },
    {
        nome: 'Tapir',
        url: './img/imagem7.avif'
    },
    {
        nome: 'Sussuarana',
        url: './img/imagem8.jpg'
    },
    {
        nome: 'Capivara',
        url: './img/imagem9.jpg'
    }


]

function criarImagem(scrImagem){
    const galeria = document.getElementById('galeria')
    const container = document.createElement('div')
    const legenda = document.createElement('p')
    const imagem = document.createElement('img')
    legenda.textContent = scrImagem.nome
    imagem.src = scrImagem.url
    galeria.appendChild(container)
    container.appendChild(legenda)
    container.appendChild(imagem)
    
}


function carregarImagens (){
   // const galeria = document.getElementById('galeria')
    
    // let contador = 0
    // const limite = imagens.length - 1
    // while(contador <= limite){
    //     const imagem = document.createElement('img')
    //     imagem.src = imagens[contador]
        
    //     galeria.appendChild(imagem)
    //     contador++
    // }

    imagens.forEach(criarImagem)
}

carregarImagens()