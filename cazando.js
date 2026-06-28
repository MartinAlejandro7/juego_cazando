let canvas = document.getElementById("areaJuego");
let ctx = canvas.getContext("2d");

function graficarGato(){
    ctx.fillStyle=("yellow");
    ctx.fillRect((canvas.width/2)-10,(canvas.height/2)-20, 20, 45)
}