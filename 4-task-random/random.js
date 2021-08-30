const startRandom = document.getElementById('startRandom');
const resultRandom = document.getElementById('resultRandom');

function startScript() {
    let randomNumberArr = createRandomNumber();
    setRandomNumber(randomNumberArr);
    setMaxNumber(randomNumberArr);
    setMinNumber(randomNumberArr);
    setSumNumber(randomNumberArr);
    setAverage(randomNumberArr);
    multiplicationEachNumberArr(randomNumberArr);
}

function createRandomNumber() {
    let listRandomNumber = [];
    for (let i = 0; i < 10; i++) {
        let randomNumber = Math.ceil(Math.random() * 10) * (Math.round(Math.random()) ? 1 : -1);
        let arrListRandomNumber = listRandomNumber.push(randomNumber);
    }
    return listRandomNumber;
}

function setRandomNumber(listRandomNumber) {
    resultRandom.innerHTML = "Сгенерировали " + listRandomNumber + "<br/>";
}

function setMaxNumber(listRandomNumber) {
    let maxNumber = Math.max.apply(null, listRandomNumber);
    resultRandom.innerHTML += "Максимальное число равно " + maxNumber.toString() + "<br/>";
}

function setMinNumber(listRandomNumber) {
    let minNumber = Math.min.apply(null, listRandomNumber);
    resultRandom.innerHTML += "Минимальное число равно " + minNumber.toString() + "<br/>";
}

function setSumNumber(listRandomNumber) {
    let sumNumberResult = listRandomNumber.reduce((a, b) => a + b);
    resultRandom.innerHTML += "Сумма чисел равна " + sumNumberResult + "<br/>";
}

function setAverage(listRandomNumber) {
    let resultAverage = listRandomNumber.reduce((a, b) => a + b) / listRandomNumber.length;
    resultRandom.innerHTML += "Среднеарифметическое равно " + resultAverage + "<br/>";
}

function multiplicationEachNumberArr(listRandomNumber) {
    let resultMultiplication = listRandomNumber.reduce((a, b) => a * b);
    resultRandom.innerHTML += "Произведение чисел " + resultMultiplication + "<br/>";
}


startRandom.addEventListener('click', startScript);