require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./router');

const PORT = process.env.PORT;

app.use(router);

app.listen(PORT, () => {
    console.log("Houston, vous êtes sur le port: ", PORT);
})