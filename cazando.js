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
let puntaje = 0;



function graficarGato(){
    graficarRectangulo(gatoX,gatoY,ANCHO_GATO,ALTO_GATO,"yellow");
    
}

function graficarComida(){
   graficarRectangulo(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA,"RED")
    
}
function iniciarJuego(){
    graficarGato();
    graficarComida();

}

function graficarRectangulo(x, y, ancho, alto,color){
    ctx.fillStyle=(color);
    ctx.fillRect(x, y, ancho, alto);

}
function limpiarCanva(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}
function moverIzquierda (){
    gatoX = gatoX - 10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectorColision();
}

function moverDerecha (){
    gatoX = gatoX + 10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectorColision();
}

function moverArriba (){
    gatoY = gatoY - 10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectorColision();
}

function moverAbajo (){
    gatoY = gatoY + 10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectorColision();
}
function detectorColision (){
    if(gatoX + ANCHO_GATO > comidaX &&
        gatoX < comidaX + ANCHO_COMIDA &&
        gatoY + ALTO_GATO > comidaY &&
        gatoY < comidaY + ALTO_COMIDA
    ){
        comidaX=generarAleatorio(0,canvas.width-ANCHO_COMIDA)
        comidaY=generarAleatorio(0,canvas.height-ALTO_COMIDA)
        puntaje=puntaje+1
        mostrarEnSpam("puntos",puntaje)
        
    }
}


