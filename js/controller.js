'use strict';

function init() {
    var cards = loadCardsFromStorage();
    var strHTML = cards.map(function(card) {
        return `<section class="card flex">
        <img class="card-image" src=${card.imgUrl} />
        <div class="card-content flex space-between">
            <h2 class="card-title">${card.header}</h2>
            <div class="card-text">${card.txt}</div>
            <button class="card-btn round-btn">Continue Reading</button>
        </section>`;
    });
    strHTML = strHTML.join('');
    $('.cards').html(strHTML);
}

function toggleMenu() {
    $('body').toggleClass('open-menu');
}

function onAddNewCard() {
    $('.add-card-modal').toggleClass('shown');
}

function onAddCard() {
    var newHeader = $('.new-header').val();
    var newTxt = $('.new-txt').val();
    var newImgUrl = $('.new-img').val();
    addCard(newImgUrl, newHeader, newTxt);
    $('.new-header').val('');
    $('.new-txt').val('');
    $('.new-img').val('');
    onAddNewCard();
    init();
}