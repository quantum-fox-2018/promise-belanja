const beli = require('./beli')

let obj = [{
    item: 'Roti',
    harga: 3000,
    waktu: 800
},{
    item: 'Kopi',
    harga: 2000,
    waktu: 1000
},{
    item: 'Gula',
    harga: 10000,
    waktu: 800
},{
    item: 'Mie',
    harga: 2500,
    waktu: 1000
},{
    item: 'Batagor',
    harga: 5000,
    waktu: 500
}]

beli(20000, obj[0])
.then((kembalian) => {
    return beli(kembalian, obj[1])
})
.then((kembalian) =>{
    return beli(kembalian, obj[2])
})
.then((kembalian) => {
    return beli(kembalian, obj[3])
})
.then((kembalian) => {
    return beli(kembalian, obj[4])
})
.then((kembalian) => {
    return kembalian
})
.catch((gagalbeli) => {
    
})