//Declaraciones
const express = require('express');  //Servidor
const hbs = require('hbs');  //HTML - Dinamicos
const bodyParser = require('body-parser');   //Body - POST
const port = process.env.PORT || 3000;  //Puerto de ejecucion

const app = express();

//Motor para generar las vistas
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/view/partials',()=>{});

//Use - MidleWare
app.use(express.static('public'));  //parte publica de la app
app.use(bodyParser.urlencoded({ extended: true })); //Procesar body en las solicitudes de tipo POST
app.use(bodyParser.json()); //Manejar datos em formato {}

//Procesar solicitudes de tipo GET y POST
//GET - dashboard y 404
//POST - login
//Ruta para el dashboard
app.post('/dashboard',(req,res)=>{
    res.render('dashboard');
})
app.get('/login',(req,res)=>{
    res.render('login');
})
app.get('*',(req,res)=>{
    //res.send('Aqui va el 404 por GET')
    res.render('404', {
    nombre:"Cesarin",
    edad:"39"
    })
})

app.listen(port,()=>{
    console.log('servidor en express corriendo en el puerto', port)
})