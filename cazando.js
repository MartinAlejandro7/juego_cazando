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
    graficarRectangulo(gatoX,gatoY,ANCHO_GATO,ALTO_GATO,"yellow");
    
}

function graficarComida(){
   graficarRectangulo(comidaX,comidaY,ANCHO_COMIDA,ANCHO_COMIDA,"RED")
}
function iniciarJuego(){
    graficarGato();
    graficarComida();
}

function graficarRectangulo(x, y, ancho, alto,color){
    ctx.fillStyle=(color);
    ctx.fillRect(x, y, ancho, alto)

}