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