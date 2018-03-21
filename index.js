const beli = require('./beli.js')

let permen = {
  item: 'Permen',
  harga: 500,
  waktu: 2000,
}

let jus = {
  item: 'Jus',
  harga: 1000,
  waktu: 1000,
}

let bakso = {
  item: 'Bakso',
  harga: 1500,
  waktu: 1500,
}

let biskuit = {
  item: 'Biskuit',
  harga: 1000,
  waktu: 2000,
}

let coklat = {
  item: 'Coklat',
  harga: 1000,
  waktu: 3000,
}

let uang = 10000

// beli(uang, permen)
// .then(kembalian => {
//   beli(kembalian, jus)
//   .then(kembalian => {
//     beli(kembalian, bakso)
//     .then(kembalian => {
//       beli(kembalian, biskuit)
//       .then(kembalian => {
//         beli(kembalian, coklat)
//         .then(kembalian => {})
//         .catch(err => {})
//       })
//       .catch(err => {})
//     })
//     .catch(err => {})
//   })
//   .catch(err => {})
// })
// .catch(err => {})

beli(uang, permen)
.then(kembalian => {
  return beli(kembalian, jus)
  .then(kembalian => {
    return beli(kembalian, bakso)
    .then(kembalian => {
      return beli(kembalian, biskuit)
      .then(kembalian => {
        return beli(kembalian, coklat)
        .then(kembalian => {})
      })
    })
  })
})
.catch(err => {})
