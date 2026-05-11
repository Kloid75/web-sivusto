var numerot = [8, 3, 55, 420, 1, -5, 69, -999, 0, 321];
var sanat = ["skibidi", "rizz", "gyat", "sigma", "sus", "cap", "yeet", "lit", "simp", "cringe"];
function numberos() {
    tyhj = document.getElementById("divius")
    tyhj.innerHTML = ""
    var plin = document.getElementById("divius")
    var plon = document.getElementById("numro").value - 1
    plin.append(sanat[plon])
}
function plingamos() {
    tyhj = document.getElementById("divius2")
    tyhj.innerHTML = ""
    var gam = document.getElementById("divius2")
    var os = document.getElementById("tksti").value
    let position = sanat.indexOf(os)
    gam.append(position)
}
function ringaring() {
    tyhj = document.getElementById("ulolista")
    tyhj.innerHTML = ""
    var mortal = document.getElementById("slic1").value
    var shell = document.getElementById("slic2").value
    var damn = document.getElementById("ulolista")
    let slice = sanat.slice(mortal, shell)
    for (var sana of slice) {
        var li = document.createElement("li")
        li.innerHTML = sana
        damn.append(li)
    }
}
function tt() {
    tyhj = document.getElementById("helpme")
    tyhj.innerHTML = ""
    var tulostuspaikka = document.getElementById("helpme")
    for (var sana of sanat) {
        var li = document.createElement("li")
        li.innerHTML = sana
        tulostuspaikka.append(li)
    }
}
function jt() {
    tyhj = document.getElementById("helpme")
    tyhj.innerHTML = ""
    tulostuspaikka = document.getElementById("helpme")
    var alphabet = sanat.sort()
    for (var sana of alphabet) {
        var li = document.createElement("li")
        li.innerHTML = sana
        tulostuspaikka.append(li)
    }
}
function ktj() {
    tyhj = document.getElementById("helpme")
    tyhj.innerHTML = ""
    var tulostuspaikka = document.getElementById("helpme")
    var alphabet = sanat.sort()
    var tebahpla = alphabet.reverse()
    for (var sana of tebahpla) {
        var li = document.createElement("li")
        li.innerHTML = sana
        tulostuspaikka.append(li)
    }
}
function tn() {
    tyhj = document.getElementById("helpme")
    tyhj.innerHTML = ""
    var tulostuspaikka = document.getElementById("helpme")
    for (var numero of numerot) {
        var li = document.createElement("li")
        li.innerHTML = numero
        tulostuspaikka.append(li)
    }
}
function jn() {
    tyhj = document.getElementById("helpme")
    tyhj.innerHTML = ""
    var tulostuspaikka = document.getElementById("helpme")
    var numbers = numerot.sort(function(x, z){return x - z})
    for (var number of numbers) {
        var li = document.createElement("li")
        li.innerHTML = number
        tulostuspaikka.append(li)
    }
}
function knj() {
    tyhj = document.getElementById("helpme")
    tyhj.innerHTML = ""
    var tulostuspaikka = document.getElementById("helpme")
    var numbers = numerot.sort(function(x, z){return z - x})
    for (var numero of numbers) {
        var li = document.createElement("li")
        li.innerHTML = numero
        tulostuspaikka.append(li)
    }
}
function Tulosta() {
    tyhj = document.getElementById("iguessbro")
    tyhj.innerHTML = ""
    var tpaikka = document.getElementById("iguessbro")
    for (var numero of numerot) {
        var li = document.createElement("li")
        li.innerHTML = numero
        tpaikka.append(li)
    }
}
function Pien() {
    tyhj = document.getElementById("iguessbro")
    tyhj.innerHTML = ""
    var tpaikka = document.getElementById("iguessbro")
    var pienkuin = numerot.filter(jokufunktio)
    for (var numero of pienkuin) {
        var li = document.createElement("li")
        li.innerHTML = numero
        tpaikka.append(li)
    }
}
function jokufunktio(numero) {
    var z = document.getElementById("pienempi").value
    return numero < z
}
function Suur() {
    tyhj = document.getElementById("iguessbro")
    tyhj.innerHTML = ""
    var tpaikka = document.getElementById("iguessbro")
    var suurkuin = numerot.filter(funktiojoku)
    for (var numero of suurkuin) {
        var li = document.createElement("li")
        li.innerHTML = numero
        tpaikka.append(li)
    }
}
function funktiojoku(numero) {
    var x = document.getElementById("suurempi").value
    return numero > x
}