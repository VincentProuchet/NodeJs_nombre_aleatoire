const Numbers = require('./src/numbers');
const { exit, rawListeners } = require('process');
const readline = require('readline');
const { log } = require('console');

const lineReader = readline.createInterface(process.stdin, process.stdout);


const numbers = Numbers.numbers;

lineReader.setPrompt(numbers.question());
lineReader.prompt();
lineReader.on('line', (saisie) => {
    numbers.compare(saisie);
    if (numbers.success) {
        lineReader.close()
        exit(0);
    }
});
//numbers.success = true;


