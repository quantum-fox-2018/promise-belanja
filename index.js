const beli  = require('./beli');
let uang = 25000;

let roti = {
    item: 'roti',
    harga: 2500
};
let permen = {
    item: 'permen',
    harga: 500
};
let kopi = {
    item: 'kopi',
    harga: 3000
};
let nasiRames = {
    item: 'nasi rames',
    harga: 15000
};

beli(uang, roti)
.then(data =>{
    console.log(data.notif)
    beli(data.kembalian, permen)
    .then(data1 =>{
        console.log(data1.notif)
        beli(data1.kembalian, kopi)
        .then(data2 =>{
            console.log(data2.notif)
            beli(data2.kembalian, nasiRames)
            .then(data3 => {
                console.log(data3.notif)
            })
            .catch(err =>{
                console.log(err)
            })
        })
        .catch(err =>{
            console.log(err)
        })
    })
    .catch(err=>{
        console.log(err)
    })
})
.catch(err =>{
    console.log(err)
})
