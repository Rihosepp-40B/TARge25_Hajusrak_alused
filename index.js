const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json()); // !exp5 error, body not defined by default

const vidinad = [
    {
        id: 1,
        name: "laadija",
        price: 19.99
    },
    {
        id: 2,
        name: "mobla kest",
        price: 15.99
    },
    {
        id: 3,
        name: "kõnepakett",
        price: 4.99
    },
]

app.get('/vidinad', (req, res) => {
    res.send(vidinad)
})

app.get('/vidinad/:id', (req, res) => {
    if (typeof vidinad[req.params.id-1] === 'undefined') {
        return res.status(404).send({error: "Vidinat pole"})
    }
    res.send(vidinad[req.params.id-1])
})

app.post('/vidinad', (req, res) => {
    if (!req.body.name || !req.body.price) {
        return req.status(400).send({error: "Midagi puudub sul, kontrolli andmed"})
    }
    let newVidin = {
        id: vidinad.length +1,
        price: req.body.price,
        name: req.body.name
    }
    vidinad.push(newVidin)
    return res.status(201).location('localhost:8080/vidinad/' + (vidinad.length - 1)).send(newVidin)
})

app.put('/vidinad/:id', (req, res) => {
    var reqid = req.params.id-1
    if (typeof vidinad[reqid] === 'undefined') {
        return res.status(404).send({error: "Vidinat idga ${req.params.id} pole"})
    }
    if (!req.body.name || !req.body.price) {
        return res.status(400).send({error: "Andmed on sisestamata, palun kontrolli andmete õigsust."})
    }

    let muudetudVidin = {
        id: req.params.id,
        name: req.body.name,
        price: req.body.price
    }
    vidinad[reqid].name = muudetudVidin.name
    vidinad[reqid].price = muudetudVidin.price    
    return res.status(201).location('localhost:8080/vidinad/'+(muudetudVidin.id)).send(muudetudVidin)
})

app.delete('/vidinad/:id', (req, res) => {
    if (typeof vidinad[req.params.id-1] === 'undefined') {
        return res.status(404).send({error: "Vidinat pole"})
    }
    vidinad.splice(req.params.id-1, 1)
    res.status(204).send({error: "No Content"})
})

app.listen(8080, () => {
    console.log('API töötab aadressil: http://localhost:8080')
})