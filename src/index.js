console.log('server MercaConMercado OKEY');
/******************
 * Moduls
 *****************/
const path = require('path'); // TRABAJAR CON DIRECTORIOS
const morgan = require('morgan'); // LOG REGISTRO
const express = require('express'); // SERVIDOR
const app = express(); // CONSTANTE DE SERVIDOR

/******************
 * Settings
 *****************/
app.set('AppName', 'Web MercaConMercado'); // parametros primer lugar nombre de variable, segundo parametro de la variable
app.set('port', process.env.PORT || 5000); // configuracion del puerto si detecta puerto usarlo si no , usar el 5000
app.set('views', path.join(__dirname, 'views')); // nombra la carpeta de la ruta que vamos a usar
app.engine('html', require('ejs').renderFile);
app.set('view engin', 'ejs'); // motor de vista plantilla HTML

/******************
 * MILDDLEWARES
 *****************/
app.use(morgan('tiny'));

/******************
 * GET ROUTES
 *****************/
app.use(require('./routes/rutas.js')); // lamo ruta INICIO
/******************
* STATIC FILES
*****************/
app.use(express.static(path.join(__dirname, 'public'))) ; // archivos para que el navegador pueda acceder

/******************
 * RUN AND INFO SERVER
 *****************/
app.listen(app.get('port'), function () {
    console.log(app.get('AppName'));
    console.log('Server in port: ', app.get('port'));
});

