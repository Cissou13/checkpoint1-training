/*
 Ecrire une fonction qui reçoit un tableau de strings
 et renvoie un tableau contenant chaque string préfixée
 par sa position (donnée par l'index + 1)
 */

function addItemsPosition(strArray) {
const newArray = strArray.map((string,index) => `${index + 1}. ${string}`);
return newArray;
}



// Exemples d'appel pour vérifier
// le bon fonctionnement de ton code
// Ne pas modifier
console.log(
  addItemsPosition(['apple', 'kiwi', 'pear'])
); // doit afficher [ '1. apple', '2. kiwi', '3. pear' ]
console.log(
  addItemsPosition(['cat', 'koala', 'bear', 'lion'])
); // doit afficher [ '1. cat', '2. koala', '3. bear', '4. lion' ]