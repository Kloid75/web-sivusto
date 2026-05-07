function gamble1() {
    var t = document.getElementById("noppa")
    t.innerHTML = ""
    var n = document.getElementById("noppa")
    var rand1 = Math.floor(Math.random() * 6) + 1
    n.append(rand1 + " ")
}
function gamble2() {
    var y = document.getElementById("lotto")
    y.innerHTML = ""
    var l = document.getElementById("lotto")
    i = 0
    while (i < 7) {
    var rand2 = Math.floor(Math.random() * 40) + 1
    l.append(rand2 + " ")
    i ++
    }
}