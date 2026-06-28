let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

const ALTO_GATO = 55;
const ANCHO_GATO = 40;
const ALTO_COMIDA = 40;
const ANCHO_COMIDA = 50;

let gatoX = (canvas.width/2)-10;
let gatoY = (canvas.height/2)-2;
let comidaX= canvas.width - ANCHO_COMIDA;
let comidaY = canvas.height - ALTO_COMIDA;



function graficarGato(){
    ctx.fillStyle=("yellow");
    ctx.fillRect(gatoX, gatoY, ANCHO_GATO, ALTO_GATO)
}

function graficarComida(){
    ctx.fillStyle=("red");
    ctx.fillRect(comidaX,comidaY
        ,ANCHO_COMIDA,ALTO_COMIDA)
}
function iniciarJuego(){
    graficarGato();
    graficarComida();
}