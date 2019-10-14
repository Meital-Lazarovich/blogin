'use strict';

function init() {
    var cards = loadCardsFromStorage();
    console.log('cards', cards);
    console.log('cards[0]', cards[0].header);
    var strHTML = cards.map(function(card) {
        return `<section class="card flex space-between">
        <img class="card-image" src=${card.imgUrl} />
        <div class="card-content flex space-between">
            <h2 class="card-title">${card.header}</h2>
            <div class="card-text">${card.txt}</div>
            <button class="card-btn">Continue Reading</button>
        </section>`;
    });
    strHTML = strHTML.join('');
    $('.cards').html(strHTML);
}


function toggleMenu() {
    document.body.classList.toggle('open-menu');            
}

