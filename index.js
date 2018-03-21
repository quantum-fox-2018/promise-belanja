const beli = require('./beli')

let uang = 10000
let obj = [{
          item : 'teh tarik abu eva',
          harga : 5000,
          waktu : 1000
          },
          {
            item : 'kapal api',
            harga : 2000,
            waktu : 1000
          },
          {
            item : 'super ketengan',
            harga : 1000,
            waktu : 1000
          },
          {
            item : 'makaroooney',
            harga : 2000,
            waktu : 1000
          },
          {
            item : "fisherman's friend",
            harga : 13000,
            waktu : 1000
          }
          ]

beli(uang,obj[0]).then((uang)=>{
  beli(uang,obj[1]).then((uang)=>{
    beli(uang,obj[2]).then((uang)=>{
      beli(uang,obj[3]).then((uang)=>{
        beli(uang,obj[4]).then((uang)=>{
        }).catch((err)=>{
          console.log(err);
        })
      }).catch((err)=>{
        console.log(err);
      })
    }).catch((err)=>{
      console.log(err);
    })
  }).catch((err)=>{
    console.log(err);
  })
}).catch((err)=>{
  console.log(err);
})
