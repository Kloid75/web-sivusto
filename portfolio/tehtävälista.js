document.createElement('lista')
var lista = ["Tehtävä 1", "Tehtävä 2"]
function paivitalista() {
    var tyhjennä = document.getElementById("Ulista");
    tyhjennä.innerHTML = "";
    for (var tehtävä of lista) {
        var list = document.createElement('li');
        list.innerHTML = tehtävä;
        tyhjennä.append(list);
    }
}
function lisaa() {
    var teksti = document.getElementById("tyhjä");
    lista.push(teksti.value);
    paivitalista();
}