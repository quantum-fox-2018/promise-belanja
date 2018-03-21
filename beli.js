function beli(uang, obj){
  return new Promise(function(resolve, reject) {
    console.log(`Saya pergi membeli ${obj.item}`)
    setTimeout(function(){
      let kembalian = uang;
      if (kembalian > 0) {
        kembalian = uang - obj.harga;
        console.log(`Saya sudah membeli ${obj.item} uang kembaliannya ${kembalian}`);
        resolve(kembalian)
      }else{
        console.log(`uang gk cukup nih buat beli ${obj.item} kembaliannya cuma ${kembalian}`);
        resolve(0)
      }
    }, obj.waktu);
  })
}

module.exports = beli;
