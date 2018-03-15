/*jshint esversion:6*/
const beli = require('./beli.js');

let obj = [{
    item: 'kopiItem',
    harga: 50000,
    waktu: 1000
  },
  {
    item: 'permen',
    harga: 5000,
    waktu: 1000
  }, {
    item: 'roti',
    harga: 10000,
    waktu: 2000
  }, {
    item: 'susu',
    harga: 7500,
    waktu: 2000
  }, {
    item: 'kacang',
    harga: 3000,
    waktu: 250
  }
];

let uang = 75000;


  beli(uang, obj[0], function(kembalian) {
    beli(kembalian, obj[1], function(kembalian) {
      beli(kembalian, obj[2], function(kembalian) {
        beli(kembalian, obj[3], function(kembalian) {
          beli(kembalian, obj[4], function(kembalian) {
          });
        });
      });
    });
  });
