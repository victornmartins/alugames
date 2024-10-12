let boardgame;

function alterarStatus(item){
    boardgame = document.getElementById(`game-${item}`);
    
    if(boardgame.querySelector('div').classList.contains('dashboard__item__img--rented')) {
        boardgame.querySelector('div').classList.remove('dashboard__item__img--rented');
        boardgame.querySelector('a').classList.remove('dashboard__item__button--return');
        boardgame.querySelector('a').textContent = 'Alugar';

    } else {
        boardgame.querySelector('div').classList.add('dashboard__item__img--rented');
        boardgame.querySelector('a').classList.add('dashboard__item__button--return');
        boardgame.querySelector('a').textContent = 'Devolver';
    }


}