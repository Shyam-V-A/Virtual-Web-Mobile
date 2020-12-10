function calc() {
    var i = document.getElementById("input").value;
    var p = document.getElementById("percent").value;
    var o = (i / 100) * p;
    document.getElementById("output").value = o;
}