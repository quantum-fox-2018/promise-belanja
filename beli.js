function beli(uang, obj){
  console.log(`Saya pergi membeli ${obj.item}`)

  return new Promise(function(resolve, reject) {
    let kembalian = uang - obj.harga
    if(kembalian >= 0){
      resolve({
        kembalian: kembalian,
        notif: `Saya sudah membeli ${obj.item} seharga ${obj.harga}, uang kembaliannya ${kembalian}`
      })
    } else {
      reject(`Uang gak cukup buat beli ${obj.item} kembaliannya cuma ${kembalian}`)
    }
  })
  
}

module.exports = beli;
