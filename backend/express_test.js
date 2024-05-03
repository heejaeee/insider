const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.status(200);
    res.send('Hello World!');
});

app.get("/contacts", (req, res) => {
    res.status(200).send("Contact Page");
});

app.post("/contacts", (req, res) => {
    res.status(201).send("Create Contacts");
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
