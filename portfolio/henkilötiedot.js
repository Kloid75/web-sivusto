let henkilot = [
    {
        name: "Merja Meikäläinen",
        age: 20,
        job: "Opiskelija",
        driversLicense: true
    },
    {
        name: "Teppo Teikäläinen",
        age: 25,
        job: "Sähköteknikko",
        driversLicense: true
    },
    {
        name: "Helena Heinäläinen",
        age: 30,
        job: "Ohjelmistokehittäjä",
        driversLicense: false
    },
    {
        name: "Semir Sikäläinen",
        age: 18,
        job: "Opiskelija",
        driversLicense: true
    },
    {
        name: "Tomas Täkäläinen",
        age: 22,
        job: "Linja-autonkuljettaja",
        driversLicense: true
    },
]
function lisaatiedot() {
    var n = document.getElementById("name").value
    var a = document.getElementById("age").value
    var j = document.getElementById("job").value
    var d = document.getElementById("license").checked
    if (a <= 0) {
        alert("Iän pitää olla positiivinen luku")
    }
    else {
    var henk = {
        name: n,
        age: a,
        job: j,
        driversLicense: d,
    }
    henkilot.push(henk)
    luoRivit()
    }
}
var rivit = document.getElementById("rivit")
function luoRivit() {
    rivit.innerHTML = ""
    for (var henkilo of henkilot) {
        var rivi = document.createElement('tr')
        var nimi = document.createElement('td')
        nimi.innerHTML = henkilo.name
        rivi.append(nimi)
        var ika = document.createElement('td')
        if (henkilo.age >= 18) {
            henkilo.age = henkilo.age + "🍺"
        }
        ika.innerHTML = henkilo.age
        rivi.append(ika)
        var tyo = document.createElement('td')
        if (henkilo.job == "Opiskelija") {
            henkilo.job = henkilo.job + "🎓️"
        }
        tyo.innerHTML = henkilo.job
        rivi.append(tyo)
        var ajokortti = document.createElement('td')
        ajokortti.innerHTML = henkilo.driversLicense
        rivi.append(ajokortti)
        rivit.append(rivi)
    }
}
luoRivit()