function beli(uang, obj){
  console.log(`Saya pergi membeli ${obj.itemsName}`)
  return new Promise( function (resolve,reject){
    setTimeout(function(){
      let kembalian = uang - obj.priceItems
      if (kembalian > 0) {
        console.log(`Saya sudah membeli ${obj.itemsName} uang kembaliannya ${kembalian}`);
        resolve(kembalian)
      }else{
        console.log(`uang gk cukup nih buat beli ${obj.itemsName} kembaliannya cuma ${kembalian}`);
        reject(0)
      }
    }, obj.times);
  });
}

module.exports = beli;
