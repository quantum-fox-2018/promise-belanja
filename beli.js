
function beli(uang, obj){
  return new Promise((resolve, reject)=>{
    console.log(`Saya pergi membeli ${obj.item}`)
    setTimeout(()=>{
      let kembalian = uang - obj.harga
      if(kembalian > 0){
        console.log(`Saya sudah membeli ${obj.item} uang kembaliannya Rp ${kembalian}`);
        resolve(kembalian)
      }else {
        reject(uang)
      }
    });
  }, obj.waktu);
}

module.exports = beli;
