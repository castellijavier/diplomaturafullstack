// let data = [1,2,3,4,5,6,7,8,9,10];
// console.log(data);

let hora = require('moment');
hora.locale('es');
console.log(hora("19840105", "YYYYMMDD").fromNow());