class Numbers {


    static PLUS_GRAND = `Le nombre est plus grand`;
    static PLUS_PETIT = `Le nombre est plus petit`;
    static TITRE = `Trouvez le bon nombre`;
    static PROMPT = 'Donnez un nombre ';

    constructor() {
        console.log(Numbers.TITRE);
        this.success = false;
        this.coups = 0;
        this.nombre = parseInt(Math.random() * 100);



    }

    compare(pnombre) {
        let nombre = parseInt(pnombre);

        if (nombre < this.nombre) {
            this.coups += 1;
            console.log(Numbers.PLUS_GRAND);
        }
        else if (nombre > this.nombre) {
            this.coups += 1;
            console.log(Numbers.PLUS_PETIT);

        }
        else {
            this.success = true;
            this.coups += 1;
            console.log(this.trouve());
        }
    }

    question() {
        return Numbers.PROMPT;
    }
    trouve() {
        return `vous avez trouvé en ${this.coups} coups, c'était le nombre : ${this.nombre}`;
    }

}

exports.numbers = new Numbers();