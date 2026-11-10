const minuJson = [
    {
        Car: {
            Colour: "Roosi roosa",
            "Tinted Windows": false,
            Seats: 2,
            Wheels: 4,
            "Baggage size": 400,
            Extras: {
                Medkit: true,
                "Fire extinguisher": true,
                "Seat warmer": "Esiistmed"
            },
            Mark: "Toyota",
            Licenceplate: "123 ABC"
        }
    }
]
document.getElementById("app").innerHTML = ` 
<div id="json">
<h1> Auto omadused NYOMM</h1>
<p>Värv: ${minuJson[0].Car.Colour}</p>
<p>Tumendatud aknad: ${minuJson[0].Car["Tinted Windows"]}</p>
<p>Istmete arv: ${minuJson[0].Car.Seats}</p>
<p>Rattaid: ${minuJson[0].Car.Wheels}</p>
<p>Pakiruumi suurus: ${minuJson[0].Car["Baggage size"]}</p>
<p>Lisavarustus:</p>
<ul>
    <li>Esmaabi komplekt: ${minuJson[0].Car.Extras.Medkit}</li>
    <li>Tulekustuti: ${minuJson[0].Car.Extras["Fire extinguisher"]}</li>
    <li>Istmesoojendus: ${minuJson[0].Car.Extras["Seat warmer"]}</li>
</ul>
<p>Mark: ${minuJson[0].Car.Mark}</p>
<p>Numbrimärk: ${minuJson[0].Car.Licenceplate}</p>
`

