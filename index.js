const beli = require('./beli.js');

let uang = 50000;

let obj1 = {item: 'Mie Ayam', harga: 5000, waktu: 500};
let obj2 = {item: 'Burung', harga: 10000, waktu: 200};
let obj3 = {item: 'Mobil Mewah', harga: 20000, waktu: 600};
let obj4 = {item: 'Kuota Internet', harga: 10000, waktu: 300};
let obj5 = {item: 'Bakso', harga: 6000, waktu: 200};

beli(uang, obj1)
.then(function(kembalian) {
  return uang = kembalian;
})
.then(function(uang) {
  return beli(uang, obj2)
  .then(function(kembalian) {
    return uang = kembalian;
  })
})
.then(function(uang) {
  return beli(uang, obj3)
  .then(function(kembalian) {
    return uang = kembalian;
  })
})
.then(function(uang) {
  return beli(uang, obj4)
  .then(function(kembalian) {
    return uang = kembalian;
  })
})
.then(function(uang) {
  return beli(uang, obj5)
  .then(function(kembalian) {
    return uang = kembalian;
  })
})
.catch(function(kembalian) {
  uang = kembalian;
})
