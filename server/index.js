const express = require('express'); // common js format
// import 'express' from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send({hi: 'there'});
});

app.listen(5001);
