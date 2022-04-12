var jugador1 = document.getElementById("jugador1");
    var jugador2 = document.getElementById("jugador2");
    var mano1 = document.getElementById("manojugador1");
    var mano2 = document.getElementById("manojugador2");
    var resultado = document.getElementById("resultado");
    var boton = document.getElementById("btn");
    var imagen1 = document.getElementById("image1");
    var imagen2 = document.getElementById("image2");
    var nombre1 = document.getElementById("nombre1");
    var nombre2 = document.getElementById("nombre2");


    boton.addEventListener("click", () => {
        imagen1.src = "img/loading.gif";
        imagen2.src = "img/loading.gif";
        mano1.innerHTML = "";
        mano2.innerHTML = "";
        setTimeout(function () {
        var numeroRandom = Math.round(Math.random() * (2-0)+1);

        if (numeroRandom == 1){
            nombre1.innerHTML = jugador1.value
            mano1.innerHTML = "Piedra"
            image1.src = "img/piedra1.png"
        } else if (numeroRandom == 2){
            nombre1.innerHTML = jugador1.value
            mano1.innerHTML = "Papel"
            image1.src = "img/papel1.png"
        } else if (numeroRandom == 3){
            nombre1.innerHTML = jugador1.value
            mano1.innerHTML = "Tijera"
            image1.src = "img/tijera1.png"
        }

        var numeroRandom2 = Math.round(Math.random() * (2-0)+1);
        if (numeroRandom2 == 1){
            nombre2.innerHTML = jugador2.value
            mano2.innerHTML = "Piedra"
            image2.src = "img/piedra2.png"
        } else if (numeroRandom2 == 2){
            nombre2.innerHTML = jugador2.value
            mano2.innerHTML = "Papel"
            image2.src = "img/papel2.png"
        } else if (numeroRandom2 == 3){
            nombre2.innerHTML = jugador2.value
            mano2.innerHTML = "Tijera"
            image2.src = "img/tijera2.png"
        }
    }, 1000);
    });