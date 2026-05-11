class Person {
    constructor(name, age, job, driversLicense) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.driversLicense = driversLicense
    }
    isUnderage() {
        if (this.age < 18) {
            return true
        }
        else {
            return false
        }
    }
    isStudent() {
        if (this.job == "Student") {
            return true
        }
        else if (this.job == "Opiskelija") {
            return true
        }
        else {
            return false
        }
    }
}
let Persons = [
        new Person('Merja Meikäläinen', 17, 'Opiskelija', true),
        new Person('Teppo Teikäläinen', 25, 'Sähköteknikko', true ),
        new Person('Helena Heikäläinen', 30, 'Ohjelmistokehittäjä', false),
        new Person('Semir Sikäläinen', 18, 'Opiskelija', true),
        new Person('Tomas Täkäläinen', 22, 'Linja-autonkuljettaja', true)
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
    var user = new Person(n, a, j, d)
    Persons.push(user)
    luoRivit()
    }
}
var rivit = document.getElementById("rivit")
function luoRivit() {
    rivit.innerHTML = ""
    for (var person of Persons) {
        var rivi = document.createElement('tr')
        var nimi = document.createElement('td')
        nimi.innerHTML = person.name
        rivi.append(nimi)
        var ika = document.createElement('td')
        if (person.isUnderage() == false) {
            ika.innerHTML = person.age + "🍺"
        }
        else {
            ika.innerHTML = person.age
        }
        rivi.append(ika)
        var tyo = document.createElement('td')
        if (person.isStudent() == true) {
            tyo.innerHTML = person.job + "🎓️"
        }
        else {
            tyo.innerHTML = person.job
        }
        rivi.append(tyo)
        var ajokortti = document.createElement('td')
        ajokortti.innerHTML = person.driversLicense
        rivi.append(ajokortti)
        rivit.append(rivi)
    }
}
luoRivit()