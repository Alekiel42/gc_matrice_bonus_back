require('dotenv').config();
const express = require('express');
const app = express();
const multer = require('multer');
const bodyParser = multer();

const router = require('./router');

const PORT = process.env.PORT;

app.use(bodyParser.none());

app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(PORT, () => {
    console.log("Houston, vous êtes sur le port: ", PORT);
})
