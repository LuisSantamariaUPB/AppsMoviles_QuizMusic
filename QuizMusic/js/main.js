var indexArray = 0;
indexIntBar = 0;
var resp = [
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""],
    ["", "", "", ""]
];

var ob1 = "";
var ob2 = "";
var ob3 = "";
var ob4 = "";

var tiempo_splash = 1600;
window.onload = function () {
    setTimeout(toHome, tiempo_splash); //EN DOS SEGUNDOS LLAMARA A LA FUNCION CAMBIAR SPLASH  animated flipInX
    respuestas(); //Call
}


function toHome() {
    document.getElementById("QuizMusic").className = "animated flipInX";
    document.getElementById("primerosBotones").className = "botonImagen animated fadeIn";
    document.getElementById("menu").style.display = "none";
    document.getElementById("home").style.display = "block";
    document.getElementById("categories").style.display = "none";
    document.getElementById("credits").style.display = "none";
    document.getElementById("conf").style.display = "none";
    document.getElementById("dontknow").style.display = "none";
    document.getElementById("juego").style.display = "none";
}

function toCategories() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("home").style.display = "none";
    document.getElementById("categories").style.display = "block";
    document.getElementById("credits").style.display = "none";
    document.getElementById("conf").style.display = "none";
    document.getElementById("dontknow").style.display = "none";
    document.getElementById("juego").style.display = "none";
}

function toCredits() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("home").style.display = "none";
    document.getElementById("categories").style.display = "none";
    document.getElementById("credits").style.display = "block";
    document.getElementById("conf").style.display = "none";
    document.getElementById("dontknow").style.display = "none";
    document.getElementById("juego").style.display = "none";
}

function toInstructions() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("home").style.display = "none";
    document.getElementById("categories").style.display = "none";
    document.getElementById("credits").style.display = "none";
    document.getElementById("conf").style.display = "block";
    document.getElementById("dontknow").style.display = "none";
    document.getElementById("juego").style.display = "none";
}

function toGame(opc) {
    //console.dir(resp[opc]);
    //let preguntas = resp[opc];
    document.getElementById("menu").style.display = "none";
    document.getElementById("home").style.display = "none";
    document.getElementById("categories").style.display = "none";
    document.getElementById("credits").style.display = "none";
    document.getElementById("conf").style.display = "none";
    document.getElementById("dontknow").style.display = "none";
    document.getElementById("juego").style.display = "block";
}





function toSigIns() {
    if (indexIntBar === 5) { //YA HABIENDO LLEGADO AL FINAL, HAY QUE RESETEAR EL INDEX. 
        indexIntBar = 0;
        toHome();
        return;
    }

    var cambioInterfaces = [
        "img/Interfaces y barritas/Asset 124.png",
        "img/Interfaces y barritas/Asset 125.png",
        "img/Interfaces y barritas/Asset 126.png",
        "img/Interfaces y barritas/Asset 127.png",
        "img/Interfaces y barritas/Asset 128.png"
    ];
    var cambioBarritas = [
        "img/Interfaces y barritas/Asset 129.png",
        "img/Interfaces y barritas/Asset 130.png",
        "img/Interfaces y barritas/Asset 131.png",
        "img/Interfaces y barritas/Asset 132.png",
        "img/Interfaces y barritas/Asset 133.png"
    ]

    document.getElementById("interfaz").src = cambioInterfaces[indexIntBar];
    document.getElementById("barrita").src = cambioBarritas[indexIntBar];
    indexIntBar++;

}


function respuestas() {

    if (indexArray === 4) { //YA HABIENDO LLEGADO AL FINAL, HAY QUE RESETEAR EL INDEX. 
        indexArray = 0;
        toCategories();
        return;
    }

ob1 = document.getElementById("reg").onclick;
ob2 = document.getElementById("pop").onclick;
ob3 = document.getElementById("rock").onclick;
ob4 = document.getElementById("punk").onclick;

console.log(ob1);

  resp = [
        [{pregunta:"Blanco",imagen:"",puntaje:20}, "Lovely", "Carnaval", "4 babys"]
        ["11PM", "Más de ti", "Hace mucho tiempo", "Bien loco"],
        ["Tusa", "Sin pijama", "Runaway", "Me estás matando"],
        ["Ateo", "La botella", "Me pones en tensión", "Encantadora"],
        [  "Lo que pasó, pasó", "Amuleto", "Ayer la vi", "Salió el sol"]
    ];



    resp = [
        ["God save the queen", "Life is good", "The london", "Highest in the room"],
        ["Blitzkrieg Bob", "Saint-Tropez", "Money in the grave", "Collard greens"],
        ["All the small things", "0 of 100", "Fustal shuffle", "Sicko mode"],
        ["Basket case", "Valentino", "Micke Mouse is death", "Marquee moon"],
        ["Where eagles dare", "Damaged gods", "Straigth edge", "Viet nam"]
    ];



    resp = [
        ["Let it be", "Hotel California", "Wicked game", "Take on me"],
        ["Hey Joe", "What's up?", "Black in black", "Breake my stride"],
        ["We will rock you", "Every breath you take", "Paradise city", "Under the bridge"],
        ["Adios", "Agua", "Maldito duende", "Sweet dreams"],
        ["Gimme Shelter", "Summer of 69", "November rain", "Inmigrant song"]
    ];


    resp = [
        ["Young and beautiful", "Like i love you", "The bad touch", "Kiss me"],
        ["Mirrors", "Sugar", "When i was your man", "Locked out heaven"],
        ["Bad romance", "Material girl", "Womanizer", "La isla bonita"],
        ["Blank space", "Lose you to love me", "Party in the U.S.A", "Cut you off"],
        ["La mordidita", "Humanos a marte", "La bicicleta", "La invitación"]
    ];




    var casillas = [];
    var correcta = aleatorio();
    casillas[correcta] = resp[indexArray][0]; //Posicionar respuesta CORRECTA

    var count = 1;
    for (let i = 0; i < 4; i++) { //Posicionar respuestas INCORRECTA
        if (casillas[i] == undefined) {
            casillas[i] = resp[indexArray][count];
            count++;
        }
    }
    indexArray = indexArray + 1;

    document.getElementById("casilla1").innerHTML = casillas[0];
    document.getElementById("casilla2").innerHTML = casillas[1];
    document.getElementById("casilla3").innerHTML = casillas[2];
    document.getElementById("casilla4").innerHTML = casillas[3];
    var holamundo = document.getElementById("casilla1");

}

function aleatorio() {
    return Math.floor(Math.random() * (4));
}


/*
 var secciones = [];//en este array creare una funcion que me va a inicializar 
  var tiempo_splash=2000;
  window.onload = function (){
      inicializarReferencias();
      setTimeout(cambiarSplash, tiempo_splash);   //EN DOS SEGUNDOS LLAMARA A LA FUNCION CAMBIAR SPLASH
  }


  function inicializarReferencias(){ //solo una vez buscar esas referencias
      secciones[1] = document.getElementById("seccion1");
      secciones[2] = document.getElementById("seccion2");
      secciones[3] = document.getElementById("seccion3");
      secciones[4] = document.getElementById("seccion4");
      secciones[5] = document.getElementById("seccion5");
  }

  function cambiarSplash(){//en la seccion 1 
      secciones[1].className = "splash  oculto"; //propiedad que permite acceder al class splash
      //ocultare la seccion 1 que es splash
      secciones[2].className = "home";
  }
  
  function cambiarSeccion(id_seccion){ 
      for(var i in secciones){//coge todas las secciones y las oculta
          secciones[i].classList.add("oculto");
      }
      secciones[id_seccion].classList.remove("oculto");
  }
  */