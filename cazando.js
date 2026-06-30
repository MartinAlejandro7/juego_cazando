let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

const ALTO_GATO = 70;
const ANCHO_GATO = 60;
const ALTO_COMIDA = 50;
const ANCHO_COMIDA = 60;

let gatoX = (canvas.width/2)-10;
let gatoY = (canvas.height/2)-2;
let comidaX= canvas.width - ANCHO_COMIDA;
let comidaY = canvas.height - ALTO_COMIDA;
let puntaje = 0;
let tiempo = 50;
let intervalo 

// Cargamos las imágenes
let imgGato1 = new Image();
let imgComida1 = new Image();


imgGato1.src = "gato.png";
imgComida1.src = "comida.png";
// --- FIN DE LO AGREGADO ---



// Reemplaza tu función graficarGato
function graficarGato(){
    ctx.drawImage(imgGato1, gatoX, gatoY, ANCHO_GATO, ALTO_GATO);
}


function graficarComida(){
    ctx.drawImage(imgComida1, comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA);
}
function iniciarJuego(){
    graficarGato();
    graficarComida();
    intervalo=setInterval(restarTiempo,1000)

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
        if(puntaje == 6){
            alert("GANADOR")
            
            reiniciar();
        }
    }
}

function restarTiempo (){
    tiempo = tiempo - 1
    mostrarEnSpam("tiempo" ,tiempo)
    if(tiempo == 0){
        alert("gameOver")
        
        reiniciar();
    }
}
 
function reiniciar (){
    tiempo=50
    mostrarEnSpam("tiempo",tiempo)
    puntaje=0
    mostrarEnSpam("puntos",puntaje)
    clearInterval(intervalo)
    comidaX= canvas.width - ANCHO_COMIDA;
    comidaY = canvas.height - ALTO_COMIDA;
    gatoX = (canvas.width/2)-10;
    gatoY = (canvas.height/2)-2;
    limpiarCanva();
    graficarGato();
    graficarComida();

    
    iniciarJuego()
}



