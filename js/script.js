var jugador1 = document.getElementById("jugador1");
var jugador2 = document.getElementById("jugador2");
var nombre_figura_player_1 = document.getElementById("nombre_figura_player_1");
var nombre_figura_player_2 = document.getElementById("nombre_figura_player_2");
var resultado = document.getElementById("resultado");
var boton = document.getElementById("btn");
var figura_player_1 = document.getElementById("figura_player_1");
var figura_player_2 = document.getElementById("figura_player_2");
var player_1 = document.getElementById("player_1");
var player_2 = document.getElementById("player_2");
var reiniciar = document.getElementById("reiniciar")
var guion = document.getElementById("guion")

let puntajeJugador1 = 0;
let puntajeJugador2 = 0;

boton.addEventListener("click", () => {

  if(jugador1.value | jugador2.value == ""){
    alert("Ingresa los nombres de ambos jugadores")
  } else {
  figura_player_1.src = "img/loading.gif";
  figura_player_2.src = "img/loading.gif";

    setTimeout(function () {
    var numeroRandom = Math.round(Math.random() * (2-0)+1);
    if (numeroRandom == 1){
      player_1.innerHTML = jugador1.value
      nombre_figura_player_1.innerHTML = "Piedra"
      figura_player_1.src = "img/piedra1.png"
    } else if (numeroRandom == 2){
      player_1.innerHTML = jugador1.value
      nombre_figura_player_1.innerHTML = "Papel"
      figura_player_1.src = "img/papel1.png"
    } else if (numeroRandom == 3){
      player_1.innerHTML = jugador1.value
      nombre_figura_player_1.innerHTML = "Tijera"
      figura_player_1.src = "img/tijera1.png"
    }

    var numeroRandom2 = Math.round(Math.random() * (2-0)+1);
    if (numeroRandom2 == 1){
      player_2.innerHTML = jugador2.value
      nombre_figura_player_2.innerHTML = "Piedra"
      figura_player_2.src = "img/piedra2.png"
    } else if (numeroRandom2 == 2){
      player_2.innerHTML = jugador2.value
      nombre_figura_player_2.innerHTML = "Papel"
      figura_player_2.src = "img/papel2.png"
    } else if (numeroRandom2 == 3){
      player_2.innerHTML = jugador2.value
      nombre_figura_player_2.innerHTML = "Tijera"
      figura_player_2.src = "img/tijera2.png"
    }

    if (numeroRandom == 1 & numeroRandom2 == 3 |
      numeroRandom == 2 & numeroRandom2 == 1 |
      numeroRandom == 3 & numeroRandom2 == 2){
      puntajeJugador1 ++
    } else if (numeroRandom2 == 1 & numeroRandom == 3 |
      numeroRandom2 == 2 & numeroRandom == 1 |
      numeroRandom2 == 3 & numeroRandom == 2){
      puntajeJugador2 ++
    }   

    scoreplayer1.innerHTML = puntajeJugador1
    scoreplayer2.innerHTML = puntajeJugador2

    if (puntajeJugador1 | puntajeJugador2 != -1){
      guion.classList.remove("display-none")
      scoreplayer1.classList.remove("display-none")
      scoreplayer2.classList.remove("display-none")
    }
    }, 1000);
  }
  });


  reiniciar.addEventListener("click", () => {
    puntajeJugador1 = 0
    puntajeJugador2 = 0
    scoreplayer1.classList.add("display-none")
    scoreplayer2.classList.add("display-none")
    nombre_figura_player_1.innerHTML = ""
    nombre_figura_player_2.innerHTML = ""
    figura_player_1.src = ""
    figura_player_2.src = ""
    player_1.innerHTML = ""
    player_2.innerHTML = ""
    jugador1.value = "";
    jugador2.value = "";
    guion.classList.add("display-none")
  });