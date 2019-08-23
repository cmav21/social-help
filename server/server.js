const express = require("express");
const app = express();
const { router } = require("./routes/routes");

const PORT = process.env.PORT || 3000;

app.use(router);

app.listen(PORT, () => {
    console.log("Escuchando en el puerto 3000");
})