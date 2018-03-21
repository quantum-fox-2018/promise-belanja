const beli = require('./beli.js');

class Item{
  constructor(item, harga, waktu){
    this.item = item;
    this.harga = harga;
    this.waktu = waktu;
  }
}

let kacang = new Item('kacang', 2000, 200);
let makaroni = new Item('makaroni', 2000, 200);
let bakwan = new Item('bakwan', 2000, 200);
let tempe = new Item('tempe', 2000, 200);
let tahu = new Item('tahu', 2000, 200);
let nasi_goreng = new Item('nasi goreng', 15000, 1500);
let nasi_uduk = new Item('nasi uduk', 7000, 700);
let mie_goreng = new Item('mie goreng', 10000, 1000);
let bihun_goreng = new Item('bihun goreng', 5000, 500);

let items = [nasi_goreng, nasi_uduk, mie_goreng, bihun_goreng,kacang, makaroni, bakwan, tempe, tahu];

let uang = 35000;

beli(uang, items[0])
.then((kembalian)=>{
  return beli(kembalian, items[1])
})
.then(kembalian => {
  return beli(kembalian, items[2]);
})
.then(kembalian => {
  return beli(kembalian, items[3]);
})
.then(kembalian => {
  return beli(kembalian, items[4]);
})
.then(kembalian => {
  return beli(kembalian, items[5]);
})
.catch((kembalian)=>{
  console.log('uang tidak cukup lanjutin belanja, ini kembaliannya Rp ' + kembalian);
});
