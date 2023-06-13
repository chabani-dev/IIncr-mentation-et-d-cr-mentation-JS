//  Une solution possible un peu plus propre qui factorise
//   le code commun.

const boutonPlus = document.querySelector("#bouton-plus");
const boutonMoins = document.querySelector("#bouton-moins");
const boutonReset = document.querySelector("#bouton-reset");
const compteur = document.querySelector("#compteur");
const zoneDeClic = document.querySelector("#zone-de-clic");
const inputValeurDec = document.querySelector("#valeur-dec");
const inputValeurInc = document.querySelector("#valeur-inc");

let compteurDeClics = 0;

// Fonction d'incrémentation
function incrementerCompteur() {
  compteurDeClics += Number(inputValeurInc.value);
  compteur.textContent = compteurDeClics;
}

// Fonction de décrémentation
function decrementerCompteur() {
  compteurDeClics -= inputValeurDec.value;
  compteur.textContent = compteurDeClics;
}

/* Fonctionnalité d'incrémentation */
boutonPlus.addEventListener("click", incrementerCompteur);

/* Fonctionnalité de décrémentation */
boutonMoins.addEventListener("click", decrementerCompteur);

/* Bouton reset (remise à zéro) */
boutonReset.addEventListener("click", function () {
  compteurDeClics = 0;
  compteur.textContent = compteurDeClics;
});

/* Incrémentation depuis la zone de clic */
zoneDeClic.addEventListener("click", incrementerCompteur);

/* Décrémentation depuis la zone de clic */
zoneDeClic.addEventListener("contextmenu", function (evenement) {
  // Désactivation du menu contextuel
  evenement.preventDefault();

  decrementerCompteur();
});
