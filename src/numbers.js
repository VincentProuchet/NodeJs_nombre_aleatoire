/**
 * claas numbers 
 * génére un nombre entre 0 et 100
 * puis compare celui-ci avec un nombre qui lui est donné en entrée
 * incrémente le nombre d'appel au comparateur
 * et répond par un message indiquant le resultat de la comparaison
 * 
 */
class Numbers {

    /** texte si le nombre donnée est trop  petit*/
    static PLUS_GRAND = `Le nombre est plus grand`;
    /** texte si le nombre donnée est trop grand */
    static PLUS_PETIT = `Le nombre est plus petit`;
    /** texte pour le titre du programme */
    static TITRE = `Trouvez le bon nombre`;
    /**texte pour la prompt utilisateur */
    static PROMPT = 'Donnez un nombre ';

    constructor() {
        console.log(Numbers.TITRE);
        this.success = false;
        this.coups = 0;
        // on génére un nombre entre 0 et 100
        this.nombre = parseInt(Math.random() * 100);
    }

    /** compare this.nombre avec l'entrée
    * incrémente le nombre d'appel au comparateur
    * répond par un message d'état   
    * @param {*} pnombre  une entrée
    * @returns un message indiquant le resultat de la comparaison
    */
    compare(pnombre) {
        let nombre = parseInt(pnombre);

        if (nombre < this.nombre) {
            this.coups += 1;
            return Numbers.PLUS_GRAND;
        }
        else if (nombre > this.nombre) {
            this.coups += 1;
            return Numbers.PLUS_PETIT;

        }
        else {
            this.success = true;
            this.coups += 1;
            return this.trouve();
        }
    }
    /**
     *
     * @returns un message de question
     */
    question() {
        return Numbers.PROMPT;
    }
    /**
     * utilisé dans le cas d'une comparaison  gagnante 
     *  
     * @returns le message Trouvé mis à jour avec les propriétées de l'instance
     */
    trouve() {
        return `vous avez trouvé en ${this.coups} coups.`;
    }

}
// donc il faut effectivement  donner un nom à l'export
// export.constructeur pour exporter un constructeur
exports.numbers = new Numbers();