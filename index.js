const beli = require('./beli.js');

let belanjaan = [{
  item: 'Oreo',
  harga: 5000
},{
  item: 'HappyTos',
  harga: 10000
},{
  item: 'TimTam',
  harga: 10000
},{
  item: 'BengBeng',
  harga: 3000
},{
  item: 'Dynakat',
  harga: 7000
}]

// promise chaining
// beli(50000,belanjaan[0])
// .then(kembalian=>{
//   return beli(kembalian,belanjaan[1])
// })
// .then(kembalian=>{
//   return beli(kembalian,belanjaan[2])
// })
// .then(kembalian=>{
//   return beli(kembalian,belanjaan[3])
// })
// .then(kembalian=>{
//   beli(kembalian,belanjaan[4])
// })
// .catch(err=>{
//   console.log(err)
// })

//nested promise
beli(50000,belanjaan[0])
.then(kembalian=>{
  beli(kembalian,belanjaan[1])
  .then(kembalian2=>{
    beli(kembalian2,belanjaan[2])
    .then(kembalian3=>{
      beli(kembalian3,belanjaan[3])
      .then(kembalian4=>{
        beli(kembalian4,belanjaan[4])
      })
      .catch(err=>{
        console.log(err)
      })
    })
    .catch(err=>{
      console.log(err)
    })
  })
  .catch(err=>{
    console.log(err)
  })
})
.catch(err=>{
  console.log(err)
})
