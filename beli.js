function beli(uang, obj){
  return new Promise((resolve,reject) => {
    console.log(`Saya pergi membeli ${obj.item}`)
    setTimeout(function(){
      let kembalian = uang - obj.harga
      if (kembalian > 0) {
        console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
        resolve(kembalian);
      }else{
        console.log(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${kembalian}`);
        reject(0);
      }
    }, obj.waktu);
  })
}


let obj1 = {
  item: 'cireng',
  harga: 1000,
  waktu: 1000
}

let obj2 = {
  item: 'risol kentang',
  harga: 2000,
  waktu: 1000
}

let obj3 = {
  item: 'tempe',
  harga: 1500,
  waktu: 1000
}

let obj4 = {
  item: 'tahu isi',
  harga: 1500,
  waktu: 1000
}

let obj5 = {
  item: 'permen',
  harga: 2000,
  waktu: 1000
}


// NESTED PROMISE
beli(10000,obj1)
.then(kembalian1 => {
  // console.log('test',success)
  beli(kembalian1,obj2)
  .then(kembalian2 => {
    
    beli(kembalian2,obj3)
    .then(kembalian3 => {

      beli(kembalian3, obj4)
      .then(kembalian4 => {

        beli(kembalian4,obj5)
        .then(kembalian5 => {

        })
        .catch(err => {
          console.log(err);
        })
        
      })
      .catch(err => {
        console.log(err);
      }) 

    })
    .catch(err => {
      console.log(err);
    })

  })
  .catch(err => {
    console.log(err);
  })
  
})
.catch(err => {
  console.log(err)
})




module.exports = beli;
