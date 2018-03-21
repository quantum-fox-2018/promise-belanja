// const beli = require('./beli.js')
//
// let pastaGigi = {item:"pasta gigi",harga:3000, waktu:1000}
// let sikatGigi = {item:"sikat gigi",harga:5000, waktu:1000}
// let rinso = {item:"rinso",harga:12500, waktu:1000}
// let mieInstan = {item:"mie instan",harga:2500, waktu:1000}
// let nuvo = {item:"nuvo",harga:10000, waktu:1000}
//
// beli(50000, sikatGigi, function(kembalian){
//   beli(kembalian, pastaGigi, function(kembalian){
//     beli(kembalian, rinso, function(kembalian){
//       beli(kembalian, mieInstan, function(kembalian){
//         beli(kembalian, nuvo, function(kembalian){
//           console.log("sisa uang", kembalian)
//         })
//       })
//     })
//   })
// })

const beli = require('./beli.js')

let pastaGigi = {item:"pasta gigi",harga:3000, waktu:1000}
let sikatGigi = {item:"sikat gigi",harga:5000, waktu:1000}
let rinso = {item:"rinso",harga:12500, waktu:1000}
let mieInstan = {item:"mie instan",harga:2500, waktu:1000}
let nuvo = {item:"nuvo",harga:10000, waktu:1000}
let uang= 50000

beli(50000, pastaGigi)
.then(function(sisa){
  return sisa
})
.then(function(sisa){
  return beli(sisa, sikatGigi)
  .then(function(sisa){
    return sisa
  })
})
.then(function(sisa){
  return beli(sisa, rinso)
  .then(function(sisa){
    return sisa
  })
})
.then(function(sisa){
  return beli(sisa, mieInstan)
  .then(function(sisa){
    return sisa
  })
})
.then(function(sisa){
  return beli(sisa, nuvo)
  .then(function(sisa){
    return sisa
  })
})
.catch(function(sisa){
  
})
