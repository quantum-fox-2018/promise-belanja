const beli = require('./beli.js');

const argv = process.argv;

let uang = argv[2];
let namaBarang = argv[3];

class Barang{
    constructor(item, harga){
        this.item = item;
        this.harga = harga
    }

    getNama(){
        return this.item;
    }

    getHarga(){
        return this.harga;
    }
}

class Telor extends Barang{
    constructor(){
        super('telor', '8000');
    }
}

if(namaBarang == 'telor'){
    let telor = new Telor;

    beli(uang, telor)
    .then(function(kembalian){
        return beli(kembalian, telor);
    })
    .then(function(kembalian){
        return beli(kembalian, telor);
    })
    .then(function(kembalian){
        return beli(kembalian, telor);
    })
    .then(function(kembalian){
        return beli(kembalian, telor);
    })
    .catch(function(message){
        console.log(message);
    })
}