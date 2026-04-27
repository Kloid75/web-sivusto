var nr1 = document.getElementById('numero1');
var nr2 = document.getElementById('numero2');
console.log(nr1)
console.log(nr2)
function laskin_summa() {
    let eka = Number(nr1.value);
    let toka = Number(nr2.value);
    Summa(eka, toka)
}
function laskin_vahennys() {
    let eka = Number(nr1.value);
    let toka = Number(nr2.value);
    Vahennys(eka, toka)
}
function laskin_kerto() {
    let eka = Number(nr1.value);
    let toka = Number(nr2.value);
    Kerto(eka, toka)
}
function laskin_jako() {
    let eka = Number(nr1.value);
    let toka = Number(nr2.value);
    Jako(eka, toka)
}
function Summa(eka, toka) {
    alert(eka + toka)
}
function Vahennys(eka, toka) {
    alert(eka - toka)
}
function Kerto(eka, toka) {
    alert(eka * toka)
}
function Jako(eka, toka) {
    alert(eka / toka)
}
function time() {
    var paiva = document.getElementById("paivamaara")
    var aika = document.getElementById("aika")
    var paivajaaika = document.getElementById("paivaJaAika")
    var viikonpaiva = document.getElementById("viikonpaiva")
    var kuukausi = document.getElementById("kuukausi")
    var z = new Date();
    var p = z.toLocaleDateString()
    var a = z.toLocaleTimeString()
    var pa = z.toLocaleString()
    var v = z.getDay()
    var k = z.getMonth()
    paiva.innerHTML = p
    aika.innerHTML = a
    paivajaaika.innerHTML = pa
    if(v == 0){
        viikonpaiva.innerHTML = "sunnuntai"
    }
    else if(v == 1){
        viikonpaiva.innerHTML = "maanantai"
    }
    else if(v == 2){
        viikonpaiva.innerHTML = "tiistai"
    }
    else if(v == 3){
        viikonpaiva.innerHTML = "keskiviikko"
    }
    else if(v == 4){
        viikonpaiva.innerHTML = "torstai"
    }
    else if(v == 5){
        viikonpaiva.innerHTML = "perjantai"
    }
    else{
        viikonpaiva.innerHTML = "lauantai"
    }
    if(k == 0){
        kuukausi.innerHTML = "tammikuu"
    }
    else if(k == 1){
        kuukausi.innerHTML = "helmikuu"
    }
    else if(k == 2){
        kuukausi.innerHTML = "maaliskuu"
    }
    else if(k == 3){
        kuukausi.innerHTML = "huhtikuu"
    }
    else if(k == 4){
        kuukausi.innerHTML = "toukokuu"
    }
    else if(k == 5){
        kuukausi.innerHTML = "kesäkuu"
    }
    else if(k == 6){
        kuukausi.innerHTML = "heinäkuu"
    }
    else if(k == 7){
        kuukausi.innerHTML = "elokuu"
    }
    else if(k == 8){
        kuukausi.innerHTML = "syyskuu"
    }
    else if(k == 9){
        kuukausi.innerHTML = "lokakuu"
    }
    else if(k == 10){
        kuukausi.innerHTML = "marraskuu"
    }
    else{
        kuukausi.innerHTML = "joulukuu"
    }
}