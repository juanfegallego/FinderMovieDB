const express = require("express");
const app = express();
const port = 3001;

const router = require("./router");

//Middleware
app.use(express.json());
app.use(router);

//Iniciamos el servidor

app.listen(port, () => console.log(`Node server up runing at http://localhost:${port}`));
