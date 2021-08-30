function processingSeparation() {
    let gettingValueUser = getValue();
    let correctSurname = changeCorrect(gettingValueUser[0]);
    if(!correctSurname)setCorrectSurname(correctSurname);
    let correctName = changeCorrect(gettingValueUser[1]);
    if(!correctName){setCorrectName(correctName)};
    let correctPatronymic = changeCorrect(gettingValueUser[2]);
    if (!correctPatronymic)setCorrectPatronymic(correctPatronymic);
}

function getValue() {
    let user = document.getElementById('user');
    let valueUser = user.value;
    let arrUser = valueUser.trim().replace(/\s+/g, " ").split(" ");
    return arrUser;
}

function changeCorrect(arrUser) {
    if (!arrUser) {
        let rightValue = arrUser[0].toUpperCase() + arrUser.slice(1).toLowerCase();
        return rightValue;
    }
}

function setCorrectSurname(arrUser) {
    let surname = document.getElementById('surname');
    surname.value = arrUser;
}

function setCorrectName(arrUser) {
    let userName = document.getElementById('nameUser');
    nameUser.value = arrUser;
}

function setCorrectPatronymic(arrUser) {
    let patronymic = document.getElementById('patronymic');
    patronymic.value = arrUser;
}

user.addEventListener('input', processingSeparation);

// user.addEventListener('input', function (event) {
//     let valueUser = event.target.value;
//     let arrUser = valueUser.trim().replace(/\s+/g, " ").split(" ")

//     let valueSurname = surname.value = arrUser[0];
//     let valueSurnameRight = valueSurname[0].toUpperCase() + valueSurname.slice(1).toLowerCase();
//     surname.value = valueSurnameRight;

//     let valueName = nameUser.value = arrUser[1];
//     let valueNameRight = valueName[0].toUpperCase() + valueName.slice(1).toLowerCase();
//     nameUser.value = valueNameRight;

//     let valuePatronymic = patronymic.value = arrUser[2];
//     let valuePatronymicRight = valuePatronymic[0].toUpperCase() + valuePatronymic.slice(1).toLowerCase();
//     patronymic.value = valuePatronymicRight;
// })