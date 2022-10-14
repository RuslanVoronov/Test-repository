const where = prompt('Куда едешь? Налево, направо или прямо?', '').toLowerCase();

switch (where) {
    case "налево":
        console.log('Быть тебе женатым'); // если ответ "налево",
        break;

    case "прямо":
        console.log('Живым не бывать'); // если "прямо",
        break;

    case "направо":
        console.log('Быть тебе богатым'); // если "направо".
};