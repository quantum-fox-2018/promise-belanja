const beli = require('./beli.js')

class ObjItems {
  constructor(itemsName,priceItems,times){
    this.itemsName = itemsName;
    this.priceItems = priceItems;
    this.times = times;
  }
}

let apple = new ObjItems("Apple",20000,50);
let roti = new ObjItems("Roti Bakar",5000,40);
let air = new ObjItems("Air Putih",3000,5);
let martabak = new ObjItems("Martabak Oriens",25000,200);
let tissue = new ObjItems("Tissue",7500,5);


let uang = 500000;

beli(uang,apple)
.then(function (kembalian) {
  return beli(kembalian,roti)
        .then(function (kembalian) {
          return kembalian
        })
})
.then(function (kembalian){
  return beli(kembalian,martabak)
  .then(function (kembalian){
    return kembalian
  })
})
.then(function(kembalian){
  return beli(kembalian,air)
  .then(function(kembalian) {
    return kembalian
  })
})
.then(kembalian =>{
  return beli(kembalian,tissue)
  .then(kembalian=>{
    return kembalian
  })
})
.catch(error=>{
  console.log(error);
})
