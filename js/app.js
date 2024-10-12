function alterarStatus(item){
    let boardgame = document.getElementById(`game-${item}`);
    let imagem = boardgame.querySelector('div');
    let botao = boardgame.querySelector('a');
    let nomeBoardgame = boardgame.querySelector('p');

    
    if(imagem.classList.contains('dashboard__item__img--rented')) {

         if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeBoardgame.textContent}?`)) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
        }

    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
    }
}