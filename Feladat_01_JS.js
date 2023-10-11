class szemely{
    constructor(vnev,knev,kor,hobby){
        this.vnev = vnev;
        this.knev = knev;
        this. kor = kor;
        this.hobby = hobby;
    }
    setHobby(str) {
        
        this.hobby=str;
    }
    getHobby(){
        return this.hobby;
    }
    teljesnev(){
        return this.vnev + " " + this.knev
    }
    eletkor(){
        return this.kor
    }
}
function UjSzemely(){

let kisskati = new szemely("Kiss","Katalin",28,""); 
kisskati.setHobby("futás"); 
document.getElementById("teljesnev").innerHTML = "Teljes neve: " + kisskati.teljesnev(); 
document.getElementById("eletkor").innerHTML ="Életkora: " + kisskati.eletkor(); 
document.getElementById("hobby").innerHTML = "Kedvenc elfoglaltsága: " + kisskati.getHobby();

}
