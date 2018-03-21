const beli = require('./beli.js');

let objItem = [
  { item:"Baju", harga:50000, waktu:5000},
  { item:"Baju Batik", harga:100000, waktu:2000},
  { item:"Sepatu Vans", harga:500000, waktu:3000},
  { item:"Celana", harga:120000, waktu:7000},
  { item:"Kemeja", harga:70000, waktu:1000}
]

beli(500000, objItem[0])
.then((kembalian) =>{
  return beli(kembalian, objItem[1])
  .then((kembalian) =>{
    return kembalian
  })
})
.then((kembalian) =>{
  return beli(kembalian, objItem[2])
  .then((kembalian) =>{
    return kembalian
  })
})
.then((kembalian) =>{
  return beli(kembalian, objItem[3])
  .then((kembalian) =>{
    return kembalian
  })
})
.then((kembalian) =>{
  return beli(kembalian, objItem[4])
  .then((kembalian) =>{
    return kembalian
  })
})
.then((kembalian) =>{
  return beli(kembalian, objItem[2])
  .then((kembalian) =>{
    return kembalian
  })
})
.catch((result) =>{
  console.log(`uang anda ${result}`);
})
