// mathUtils.js

/**
 * Calcul de la factorielle d'un nombre.
 * @param {number} n - Le nombre pour lequel calculer la factorielle.
 * @return {number} La factorielle du nombre.
 */
function factorial(n) {
    // La factorielle de 0 est 1
    if (n === 0) return 1;
    // Utilisation de la récursion pour calculer la factorielle
    return n * factorial(n - 1);
}

// Exportation des fonctions pour les rendre disponibles dans d'autres fichiers
module.exports = {
    factorial
};
