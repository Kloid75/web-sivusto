function dipdup() {
    tyhj = document.getElementById("dupdip")
    tyhj.innerHTML = ""
    var teksti = document.getElementById("dip").value
    var numero = document.getElementById("dup").value
    var juttu = document.getElementById("dupdip")
    let app = teksti[numero]
    juttu.append(app)
}
function ritrot() {
    tyhj = document.getElementById("rotrit")
    tyhj.innerHTML = ""
    var teksti1 = document.getElementById("rit").value
    var teksti2 = document.getElementById("rot").value
    var juttu = document.getElementById("rotrit")
    let app = teksti1.indexOf(teksti2)
    juttu.append(app)
}
function reshtew() {
    tyhj = document.getElementById("tewshre")
    tyhj.innerHTML = ""
    var teksti = document.getElementById("re").value
    var numero1 = document.getElementById("sh").value
    var numero2 = document.getElementById("tew").value
    var juttu = document.getElementById("tewshre")
    let app = teksti.slice(numero1, numero2)
    juttu.append(app)
}
function dserbb() {
    tyhj = document.getElementById("bberds")
    tyhj.innerHTML = ""
    var teksti1 = document.getElementById("ds").value
    var teksti2 = document.getElementById("er").value
    var teksti3 = document.getElementById("bb").value
    var juttu = document.getElementById("bberds")
    let app = teksti1.replaceAll(teksti2, teksti3)
    juttu.append(app)
}
function lotfms() {
    tyhj = document.getElementById("mslotf")
    tyhj.innerHTML = ""
    var teksti1 = document.getElementById("lotf").value
    var teksti2 = document.getElementById("ms").value
    var juttu = document.getElementById("mslotf")
    let app = teksti1.split(teksti2)
    for (var joku of app) {
        var li = document.createElement("li")
        li.innerHTML = joku
        juttu.append(li)
    }
}