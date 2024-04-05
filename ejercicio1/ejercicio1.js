console.log("2024-04-04");

const dataFromConsole = process.argv;

/*
    npm run ejercicio1 5 10
    dataFromConsole[0] -> node ...
    dataFromConsole[1] -> ...ejercicio1/ejercicio1.js
    dataFromConsole[2]
    dataFromConsole[3]
*/

const number1 = +dataFromConsole[2];
const number2 = +dataFromConsole[3];
console.log(number1 + number2);
