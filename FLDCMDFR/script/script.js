// primero voy a capturar todos los objetos
var body = document.querySelector('.body')
var cuerpo = document.querySelector('.cuerpo')
var r_adelante = document.querySelector('.r_adelante')
var r_atras = document.querySelector('.r_atras')
var fuego = document.querySelector('.fuego')
var tiempo = document.querySelector('.tiempo')

// ahora voy a crear el nombre y reactor de una función

body.addEventListener('click', mover )
cuerpo.addEventListener('click', vibrar)
r_adelante.addEventListener('click', girar1)
r_atras.addEventListener('click', girar2)
fuego.addEventListener('click', animar)
tiempo.addEventListener('click', aclarar)
// ahora voy a crear una funcion que añada o cambie la clase para que haga una animación

function mover(){
    body.classList.add('body1')
}
function vibrar(){
    cuerpo.classList.add('cuerpo1')
}
function girar1(){
    r_adelante.classList.add('r_adelante1')
}
function girar2(){
    r_atras.classList.add('r_atras1')
}
function animar(){
    fuego.classList.add('fuego1')
}
function aclarar(){
    tiempo.classList.add('tiempo1')
}