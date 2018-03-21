var beli = require('./beli.js');

class Item{
  constructor(item, harga, waktu) {
    this.item = item;
    this.harga = harga;
    this.waktu = waktu;
  }
}

var item1 = new Item('permen', 500, 100);
var item2 = new Item('roti', 5000, 250);
var item3 = new Item('sabun', 4000, 150);
var item4 = new Item('kaos Supreme', 500000, 500);

beli(10000, item1)
.then(function(kembalian) {
 return beli(kembalian, item2)
 .then(function(kembalian){
   return kembalian;
 })
})
.then(function(kembalian) {
  return beli(kembalian, item3)
  .then(function(kembalian) {
    return kembalian;
  })
})
.then(function(kembalian) {
  return beli(kembalian, item4)
  .then(function(kembalian) {
    return kembalian;
  })
})
.catch(function(err) {
  console.log(err);
})
