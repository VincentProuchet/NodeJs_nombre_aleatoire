// importations
const Numbers = require('./src/numbers');
const { exit, rawListeners } = require('process');
const readline = require('readline');
const { log } = require('console');

// le line reader pour les entrés utilisateur
const lineReader = readline.createInterface(process.stdin, process.stdout);
// instantiation d'un nouveau nombre
let numbers = Numbers.numbers;
// on définit la question
lineReader.setPrompt(numbers.question());
// on affiche la question
lineReader.prompt();
// on demande une entrée utilisateur
lineReader.on('line', (saisie) => {
    // on envoie l'entrée a la fonction de comparaison
    // et on affiche le résultat
    console.log(numbers.compare(saisie));
    // si l'état de l'instance à changée en ...
    if (numbers.success) {
        // on ferme le lineReader
        lineReader.close()
        // et on quitte le programme
        exit(0);
        // on pourrait pour créer une boucle 
        /**
         *  placer tout le lineReader.on ... dans une fonction
         * et ici polacer un nouveau prompt utilisateur pour lui 
         * demander s'il souhaite continuer 
         * - le cas échéant la fonction s'appellerais elle-même 
         *  -à l'inverse  le close() et le exit(0) seraient éxecutés.
         */

    }
});


