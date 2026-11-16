function getData() {
    let xmlhttp = new XMLHttpRequest();
    let XMLContent;
    xmlhttp.open("GET", "./data.xml", false);
    xmlhttp.send();
    XMLContent = xmlhttp.responseXML;
    let tableRows = `
    <tr>
        <th>Tegija</th>
        <th>Konsoolinimi</th>
        <th>Hind</th>
    </tr>
    `
    let consoleElements = XMLContent.getElementsByTagName("console")

    for (let i = 0; i < consoleElements.length; i++) {
        tableRows += `
        <tr>
            <td>${consoleElements[i].getElementsByTagName("company")[0].childNodes[0].nodeValue}</td>
            <td>${consoleElements[i].getElementsByTagName("name")[0].childNodes[0].nodeValue}</td>
            <td>${consoleElements[i].getElementsByTagName("price")[0].childNodes[0].nodeValue}</td>
        </tr>
        `
    }
    document.getElementById("xmlTable").innerHTML = tableRows;
}
document.getElementById("consoleContent").innerHTML = `
<table id="xmlTable"></table>
`
getData()