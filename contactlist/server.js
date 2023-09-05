var express = require('express');
var app = express();

var contactList = [
    {
        name: "Mihir",
        email: "email1@gmail.com",
        number: "(123)-123456"
    },
    {
        name: "Prutha",
        email: "email2@gmail.com",
        number: "(213)-123456"
    },
    {
        name: "Dhruv",
        email: "email3@gmail.com",
        number: "(312)-123456"
    }
];

app.get('/api/contacts', (req, res) => {
    res.json(contactList);
});

app.use(express.static(__dirname+"/public"))

app.listen(3000);