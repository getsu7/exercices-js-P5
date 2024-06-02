//Votre code ici
function add(a, b) {
 if (isFloat(a) && isFloat(b)) {
  return parseInt(a) + parseInt(b);
 } else {
  return parseFloat(a) + parseFloat(b)
 }
}

function isFloat(n){
 return Number(n) === n && n % 1 !== 0;
}

 export default add;
