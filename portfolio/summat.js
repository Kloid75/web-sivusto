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
function laskin_abs() {
    let eka = Number(nr1.value)
    let toka = Number(nr2.value)
    Absolute(eka, toka)
}
function laskin_sqrt() {
    let eka = Number(nr1.value)
    let toka = Number(nr2.value)
    Squareroot(eka, toka)
}
function laskin_pow() {
    let eka = Number(nr1.value)
    let toka = Number(nr2.value)
    Power(eka, toka)
}
function laskin_max() {
    let eka = Number(nr1.value)
    let toka = Number(nr2.value)
    Maximum(eka, toka)
}
function laskin_min() {
    let eka = Number(nr1.value)
    let toka = Number(nr2.value)
    Minimum(eka, toka)
}
function laskin_round() {
    let eka = Number(nr1.value)
    let toka = Number(nr2.value)
    Roundup(eka, toka)
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
function Absolute(eka, toka) {
    alert(Math.abs(eka))
    alert(Math.abs(toka))
}
function Squareroot(eka, toka) {
    alert(Math.sqrt(eka))
    alert(Math.sqrt(toka))
}
function Power(eka, toka) {
    alert(Math.pow(eka, toka))
}
function Maximum(eka, toka) {
    alert(Math.max(eka, toka))
}
function Minimum(eka, toka) {
    alert(Math.min(eka, toka))
}
function Roundup(eka, toka) {
    alert(Math.round(eka))
    alert(Math.round(toka))
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
var Veijo = new Set(['Luku', 'Poisto'])
var Elvira = new Set(['Luku', 'Kirjoitus', 'Muokkaus'])
var Mehdi = new Set(['Luku', 'Muokkaus', 'Poisto'])
var Tuuli = new Set(['Kirjoitus', 'Poisto'])
var vei = document.getElementById('Veijo')
var ijo = vei.getElementsByTagName('ul')[0]
for (asia of Veijo) {
    var vot = document.createElement('li')
    vot.innerHTML = asia
    ijo.append(vot)
}
var elv = document.getElementById('Elvira')
var ira = elv.getElementsByTagName('ul')[0]
for (asia of Elvira) {
    var erit = document.createElement('li')
    erit.innerHTML = asia
    ira.append(erit)
}
var meh = document.getElementById('Mehdi')
var hdi = meh.getElementsByTagName('ul')[0]
for (asia of Mehdi) {
    var joi = document.createElement('li')
    joi.innerHTML = asia
    hdi.append(joi)
}
var tuu = document.getElementById('Tuuli')
var uli = tuu.getElementsByTagName('ul')[0]
console.log(uli)
for (asia of Tuuli) {
    var juttu = document.createElement('li')
    juttu.innerHTML = asia
    uli.append(juttu)
}
var veituu = document.getElementById('Veijotuuli')
var setone = Veijo.union(Tuuli)
for (asia of setone) {
    var one = document.createElement('li')
    one.innerHTML = asia
    veituu.append(one)
}
var mehelv = document.getElementById('Mehdielvira')
var settwo = Mehdi.intersection(Elvira)
for (asia of settwo) {
    var two = document.createElement('li')
    two.innerHTML = asia
    mehelv.append(two)
}
var elvtuu = document.getElementById('Elviratuuli')
var setthree = Elvira.symmetricDifference(Tuuli)
for (asia of setthree) {
    var three = document.createElement('li')
    three.innerHTML = asia
    elvtuu.append(three)
}