// alert("Ceci vient de monfichier JS !");
// let reponse = prompt('Quelle est ta série préférée ?');
// console.log(reponse);

let isHiver = true;

let joursDeLaSemaine = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimance"];
let moisDeLAnnee = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

let maDateV1 = {
    "jour" : "Mercredi",
    "mois" : "Février"
};

let maDateV2 = {
    "jour" : joursDeLaSemaine[2],
    "mois" : moisDeLAnnee[1]
};

console.log(maDateV1);
console.log(maDateV2);

let nbr1, nbr2, nbr3, nbr4;
nbr1 = 3;
nbr2 = 7;
nbr3 = 8;
nbr4 = 21;

// console.log(nbr1 + nbr2);
// console.log(nbr4 - nbr3);
// console.log(nbr2 = nbr2 * nbr1);
// console.log(nbr2 += 1);
// console.log(nbr4 /= nbr1);
// console.log(nbr4 % nbr1);

let nomSerie, nomPerso;
nomSerie = prompt("Quelle est ta série préféré ?");
nomPerso = prompt("Quel est ton personnage favori ?")
alert(`Ma série préféré est ${nomSerie} et mon personnage favori est ${nomPerso}.`);