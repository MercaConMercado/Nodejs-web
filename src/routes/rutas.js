const express = require('express');
const router = express.Router();

/******************
 * ROUTES
 *****************/
router.get('/', function (req, res) {
    //console.log(path.join(__dirname + '/views/index.html'));
    // res.sendFile(path.join(__dirname + '/views/index.html')); * SE TRAE ES LA RUTA
    res.render('inicio.ejs', { title: "INICIO | MercaConMercado" ,  brand: "MercaConMercado"  }); // llama el archivo

});

router.get('/contacto', function (req, res) {
    res.render('contacto.ejs', { title: "CONTACTO | MercaConMercado" ,  brand: "MercaConMercado"}); // llama el archivo

});

module.exports = router;