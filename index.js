// index.js

// Importation des fonctions des différents fichiers utilitaires
const { sumArray, removeDuplicates } = require('./arrayUtils');
const { capitalizeFirstLetter } = require('./stringUtils');
const { factorial } = require('./mathUtils');

// Exportation de toutes les fonctions ensemble
module.exports = {
    sumArray,
    removeDuplicates,
    capitalizeFirstLetter,
    factorial
};
