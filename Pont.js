class Pont {
    #x;
    #y;
    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }
    getX(){
        return this.#x;
    }
    getY(){
        return this.#y;
    }
    setX(x){
        if (x < 0) {
            alert("Csak a számtengely jobb felső részében lévő pontokat tudjuk tárolni.")
        } else{
            this.#x = x;
        }
    }
    setY(y){
        if (y < 0) {
            alert("Csak a számtengely jobb felső részében lévő pontokat tudjuk tárolni.")
        } else {
            this.#y = y;
        }
    }

    //Szöveges megfeleltése
    toString(){
        return `Pont: x = ${this.#x}, y = ${this.#y}`;
    }

     // Feladat

    tavolsagAzOrigotol(){
        var d = Math.sqrt((this.#x * this.#x) + (this.#y * this.#y)) 
        return d
    }
    static tavolsag(p1,p2){
        var d = Math.sqrt(Math.pow(( p2.#x - p1.#x),2) + Math.pow((p2.#y - p1.#y),2))
        return d
    }

    
}
