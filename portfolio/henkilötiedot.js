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
var rivit = document.getElementById("rivit")
function luoRivit() {
    rivit.value = ""
    for (var henkilo of henkilot) {
        var rivi = document.createElement('tr')
        var nimi = document.createElement('td')
        nimi.innerHTML = henkilo.name
        rivi.append(nimi)
        var ika = document.createElement('td')
        ika.innerHTML = henkilo.age
        rivi.append(ika)
        var tyo = document.createElement('td')
        tyo.innerHTML = henkilo.job
        rivi.append(tyo)
        var ajokortti = document.createElement('td')
        ajokortti.innerHTML = henkilo.driversLicense
        rivi.append(ajokortti)
        rivit.append(rivi)
    }
}
luoRivit()