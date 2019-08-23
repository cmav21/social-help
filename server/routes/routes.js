const { Router } = require("express");
const router = Router();

router.get('/', (req, res)=>{
    res.send('<html><h1>Hola mundo</h1></html>')
});

module.exports = {
    router
}
