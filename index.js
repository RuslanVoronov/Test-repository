const buttonFortune = document.querySelector('.button-fortune');
const buttonAge = document.querySelector('.button-age');
const buttonCredit = document.querySelector('.button-credit');

function checkFortune() {

    const where = prompt('Куда едешь? Налево, направо или прямо?', '').toLowerCase();

    switch (where) {
        case "налево":
            alert('Быть тебе женатым'); // если ответ "налево",
            break;

        case "прямо":
            alert('Живым не бывать'); // если "прямо",
            break;

        case "направо":
            alert('Быть тебе богатым'); // если "направо".
    };
};

function checkAge() {

    const age = parseInt(prompt('Ваш возраст?'), 10);
    // допишите строчку кода здесь
    alert(age < 18 ? 'Вам нельзя на выборы' : 'Голосуйте за Сурайкина');
};

function checkCredit() {
    const yourage = parseInt(prompt('Ваш возраст?'), 10);
    const nat = prompt('Откуда будешь?').toLowerCase();
    const arr = parseInt(prompt('Что по долгам?'), 10);
    console.log((yourage > 21) && (arr === 0) && (nat === 'рф' || 'россия') ? 'Бабки будут' : 'Пошёл отсюда');

};

buttonFortune.addEventListener('click', checkFortune);
buttonAge.addEventListener('click', checkAge);
buttonCredit.addEventListener('click', checkCredit);