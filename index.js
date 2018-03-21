const beli = require('./beli.js');

class ObjItem {
  constructor(item, harga, waktu){
    this.item   = item;
    this.harga  = harga;
    this.waktu  = waktu;
  }
}

let permen  = new ObjItem('permen', 5000, 1000);
let roti    = new ObjItem('roti', 15000, 2000);
let kopi    = new ObjItem('kopi', 10000, 3000);
let kue     = new ObjItem('kue', 8000, 4000);
let kacang  = new ObjItem('kacang', 12000, 5000)

let uang    = 55000;

beli(uang , permen)
  .then (function(kembalianPermen){
    return kembalianPermen
  })
  .then (function(kembalianPermen){
    return beli(kembalianPermen, roti)
    .then (function(kembalianRoti){
      return kembalianRoti
    })
  })
  .then (function(kembalianRoti){
    return beli(kembalianRoti, kopi)
    .then (function(kembalianKopi){
      return kembalianKopi
    })
  })
  .then (function(kembalianKopi){
    return beli(kembalianKopi, kue)
    .then (function(kembalianKue){
      return kembalianKue
    })
  })
  .then (function(kembalianKue){
    return beli(kembalianKue, kacang)
    .then (function(kembalianKacang){
      return kembalianKacang
    })
  })
  .catch(function(error){
    console.log(error);
  })
