function alterarStatus(item){
    let boardgame = document.getElementById(`game-${item}`);
    let imagem = boardgame.querySelector('div');
    let botao = boardgame.querySelector('a');
    
    if(imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';

    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
    }
}