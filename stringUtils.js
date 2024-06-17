// stringUtils.js

/**
 * Met en majuscule la première lettre d'une chaîne de caractères.
 * @param {string} str - La chaîne de caractères à transformer.
 * @return {string} La chaîne avec la première lettre en majuscule.
 */
function capitalizeFirstLetter(str) {
    // Vérification si la chaîne est vide pour éviter les erreurs
    if (str.length === 0) return str;
    // Transformation de la première lettre en majuscule et ajout du reste de la chaîne
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Exportation des fonctions pour les rendre disponibles dans d'autres fichiers
module.exports = {
    capitalizeFirstLetter
};


// Voici quelques exemples d'utilisation des fonctions disponibles :

const { capitalizeFirstLetter } = require('ma-bibliotheque/stringUtils');

const greeting = 'hello';
console.log(capitalizeFirstLetter(greeting)); // 'Hello'


