class Etel{
    #nev;  
    #ar;
    #kategoria;
    constructor(nev,ar,kategoria){
        this.#nev = nev;
        this.#ar = ar;
        this.#kategoria = kategoria;
    }

    toString(){
        return `Az étel neve: ${this.#nev}\n
                Az étel ára: ${this.#ar}\n
                Az étel kategóriája: ${this.#kategoria}`;
    }
}

var etelek = [];

function hozzaAd(){
    let nev = document.getElementById('nev').value;
    let ar = parseFloat(document.getElementById('ar').value);
    let kategoria = document.getElementById("kategoria").value;
    let etel = new Etel(nev, ar, kategoria);
    etelek.push(etel);
    console.table(etelek);
}