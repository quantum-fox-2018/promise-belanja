const beli = require('./beli.js');

let objListItem = [{
        item: 'kacang',
        harga: 5000,
        waktu: 300
    },
    {
        item: 'coklat',
        harga: 2000,
        waktu: 300
    },
    {
        item: 'martabak',
        harga: 20000,
        waktu: 300
    },
    {
        item: 'susu',
        harga: 6000,
        waktu: 300
    },
    {
        item: 'ice cream',
        harga: 10000,
        waktu: 300
    }
];

let uang = 40000;

beli(uang, objListItem[0])
.then((kembalian1) => {
    return beli(kembalian1, objListItem[1])
    .then((kembalian2) => {
        return kembalian2
    })
})
.then((kembalian2) => {
    return beli(kembalian2, objListItem[2])
    .then((kembalian3) => {
        return kembalian3;
    })
})
.then((kembalian3) => {
    return beli(kembalian3, objListItem[3])
    .then((kembalian4) => {
        return kembalian4;
    })
})
.then((kembalian4) => {
    return beli(kembalian4, objListItem[4])
    .then((kembalian5) => {
        return kembalian5;
    })
})
.catch((statusMessage) => {
    console.log(statusMessage);
})