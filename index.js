const buttonFortune = document.querySelector('.button-fortune');
const buttonAge = document.querySelector('.button-age');
const buttonCredit = document.querySelector('.button-credit');
const buttonPassword = document.querySelector('.button-pasword');

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

function ckeckPassword() {

    const password = prompt('Введите пароль:', '');
    const passed = password.includes('?')

    if (passed) {
        for (let i = 0; i <= password.length; i = i + 1) {
            if (password[i] === '?') {
                alert('"?" есть в пароле на позиции ' + (i + 1));
            }
        }
    } else {
        alert('"?" в пароле нет')
    }
};

buttonFortune.addEventListener('click', checkFortune);
buttonAge.addEventListener('click', checkAge);
buttonCredit.addEventListener('click', checkCredit);
buttonPassword.addEventListener('click', ckeckPassword);