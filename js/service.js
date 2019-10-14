'use strict';

const CARDS_KEY = 'cards';
var gCards;

createCards()

function createCards() {
    gCards = loadCardsFromStorage();
    if (!gCards) {
        gCards = [];
        var defultTitle = 'Duis aute irure dolor in henderit in voluptate.';
        var defultTxt = '<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo doconsequat, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...</p>';
        gCards.push(createCard('img/main/1.jpg', defultTitle, defultTxt));
        gCards.push(createCard('img/main/2.jpg', defultTitle, defultTxt));
        gCards.push(createCard('img/main/3.jpg', defultTitle, defultTxt));
    }
    saveCardsToStorage();
}

function createCard(imgUrl, header, txt) {
    return {
        imgUrl, header, txt
    }
}

function addCard(imgUrl, header, txt) {
    if (!imgUrl && !header && !txt) return;
    if (!imgUrl) imgUrl = 'https://www.delightplus.co.th/img/tile-empty.png';
    var card = createCard(imgUrl, header, txt);
    gCards.unshift(card);
    saveCardsToStorage();
}

function loadCardsFromStorage() {
    return loadFromStorage(CARDS_KEY);
}

function saveCardsToStorage() {
    return saveToStorage(CARDS_KEY, gCards);
}


