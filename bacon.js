function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById("bacon").innerHTML = this.responseText;
    }
    xhttp.open("GET", "https://baconipsum.com/api/?type=all-meat")
    xhttp.send()
}