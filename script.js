// Variables primer ejercicio
let primerEjercicio = document.getElementById("primerEjercicio")
primerEjercicio.addEventListener("click", timerFirst)
let botonPrimerEjercicio = false
let contador = 0
let resultadoPrimerEjercicio = document.getElementById("resultadoPrimerEjercicio")
//Variables segundo ejercicio
let numerosPrueba = []
let numero1 = document.getElementById("numero1")
let numero2 = document.getElementById("numero2")
let numero3 = document.getElementById("numero3")
let numero4 = document.getElementById("numero4")
let numero5 = document.getElementById("numero5")
let segundoEjercicio = document.getElementById("segundoEjercicio")
segundoEjercicio.addEventListener("click", mayorNumero)
let resultadoSegundoEjercicio = document.getElementById("resultadoSegundoEjercicio")
let acumulador = numerosPrueba[0]
//Variables tercer ejercicio
let word = document.getElementById("word")
let tercerEjercicio = document.getElementById("tercerEjercicio")
tercerEjercicio.addEventListener("click",convertirString)
let resultadoTercerEjercicio = document.getElementById("resultadoTercerEjercicio")
let palabra
let palabraDescompuesta
//Variables cuarto ejercicio
let sucesion = [0,1]
let cuartoEjercicio = document.getElementById("cuartoEjercicio")
cuartoEjercicio.addEventListener("click",fibonacci)
let resultadoCuartoEjercicio = document.getElementById("resultadoCuartoEjercicio")
let identificador=-1
let limiteFibonacci = document.getElementById("limiteFibonacci")
//Variables quinto ejercicio
let quintoEjercicio = document.getElementById("quintoEjercicio")
quintoEjercicio.addEventListener("click", generatePassword)
let resultadoQuintoEjercicio = document.getElementById("resultadoQuintoEjercicio")
let bigData = [
    ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],["0","1","2","3","4","5","6","7","8","9"],["!","#","$","&","/","(",")","*","+","-",".","_",",","?","??"]
]
let bloqueElegido
let contrase??aCompuesta
let caracteresContrase??a = []
//Variables ejercicio extra



let extraEjercicio = document.getElementById("extraEjercicio")
extraEjercicio.addEventListener("click", calcularExtraEjercicio)
let extraNumberArray = document.getElementById("extraNumberArray")
let resultadoExtraEjercicio = document.getElementById("resultadoExtraEjercicio")
let extraNumbers = [5,10,30,9,5]
let primeroMayor = 1
let segundoMayor = 0
let numerosPrueba_extra
let posicionesComas = []
let resultado = []
let NoSense=[]


//Funciones primer ejercicio
function timerFirst(){
    if(botonPrimerEjercicio == false){
        botonPrimerEjercicio = true
        primerEjercicio.value = "Detener"
        prenderContador()
    }else if(botonPrimerEjercicio == true){
        botonPrimerEjercicio = false
        primerEjercicio.value = "Iniciar"
    }
}   
function prenderContador(){
    if(botonPrimerEjercicio == true){
        setTimeout(prenderContador, 3000)
        contador += 3
        resultadoPrimerEjercicio.innerHTML = contador
    }
}
//Funciones segundo ejercicio
function mayorNumero(){
    componerArray()
    calcularMayorNumero()
}
function componerArray(){
    numerosPrueba.push(numero1.valueAsNumber)
    numerosPrueba.push(numero2.valueAsNumber)
    numerosPrueba.push(numero3.valueAsNumber)
    numerosPrueba.push(numero4.valueAsNumber)
    numerosPrueba.push(numero5.valueAsNumber)
    console.log(numerosPrueba)
}
function calcularMayorNumero(){
    if(numerosPrueba.length!=0){
        if(acumulador >= numerosPrueba[0]){
            acumulador = acumulador
            console.log(acumulador)
        } else {
            acumulador = numerosPrueba[0]
            console.log(acumulador)
        }
        numerosPrueba.shift()
        // console.log(numerosPrueba)
        if(numerosPrueba.length==0){
            resultadoSegundoEjercicio.innerHTML = acumulador
            acumulador = 0
        } else {
            calcularMayorNumero()
        }
    }
}
//Funciones tercer ejercicio
function convertirString(){
    palabra = word.value
    palabraDescompuesta = palabra.split("")
    inicio = palabraDescompuesta[0].toLocaleUpperCase()
    final = palabraDescompuesta[palabra.length-1].toLocaleUpperCase()
    palabra = `${inicio}${palabra.slice(1,palabra.length-1)}${final}`
    resultadoTercerEjercicio.innerHTML = palabra
}
//Funcion cuarto ejercicio
function fibonacci(){
    identificador++
    console.log(identificador)
    if(identificador<=limiteFibonacci.valueAsNumber-3){
        sucesion.push(sucesion[identificador]+sucesion[identificador+1])
        fibonacci()
    }else {
        resultadoCuartoEjercicio.innerHTML = sucesion
        sucesion = [0,1]
        identificador = -1
    }   
}
//Funciones quinto ejercicio
function generatePassword(){
    escogerGranBloque()
    mostrarContrase??a()
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function escogerGranBloque(){
    x = random(0,3)
    console.log(x)
    bloqueElegido = bigData[x]
    escogerElementoDelBloque()
}

function escogerElementoDelBloque(){
    switch (bloqueElegido) {
        case bigData[0]:
            y=random(0,53)
            caracterElegido = bloqueElegido[y]
            console.log("Primer bloque")
        break;
        case bigData[1]:
            y=random(0,11)
            caracterElegido = bloqueElegido[y]
            console.log("Segundo bloque")
        break;
        case bigData[2]:
            y=random(0,16)
            caracterElegido = bloqueElegido[y]
            console.log("Tercer bloque")
        break;
        default:
            console.log("Error")
        break;
    }
    if(caracteresContrase??a.length < 20){
        caracteresContrase??a.push(caracterElegido)
        escogerGranBloque()
    } else {
        contrase??aCompuesta = caracteresContrase??a.join("")
    }
}

function mostrarContrase??a(){
    resultadoQuintoEjercicio.innerHTML = contrase??aCompuesta
    bloqueElegido = []
    contrase??aCompuesta = []
    caracteresContrase??a = []
}

// funciones extra ejercicio
//extraNumbers

function calcularExtraEjercicio(){
    componerArrayExtra()
    extraCalcular()
    reiniciarExtra()
}

function componerArrayExtra() {
    numerosPrueba_extra = extraNumberArray.value
    obtenerComas()
    transfornarStringArray()
    obtenerArrayResultado()
}

function extraCalcular(){
    for (let i = 0; i < resultado.length; i++) {
        if (resultado[i]>primeroMayor) {
            let temporalNumnero = primeroMayor
            primeroMayor = resultado[i]
            segundoMayor = temporalNumnero
        }else{
            if (primeroMayor>resultado[i] && resultado[i]>segundoMayor ) {
                segundoMayor = resultado[i]
                console.log("el valor segundo cambio a " + resultado[i])
            } 
        }
    }
    resultadoExtraEjercicio.innerHTML = `El mayor valor es ${primeroMayor} y el segundo mayor es ${segundoMayor}`
}

function reiniciarExtra(){
    primeroMayor = 1
    segundoMayor = 0
}


function obtenerComas(){
    posicionesComas=[]
    for(let i=0;i<numerosPrueba_extra.length;i++){
        if(numerosPrueba_extra[i] === ","){
            posicionesComas.push(i)
        }
    }
    posicionesComas.reverse()
}

function transfornarStringArray(){
    NoSense = []
    NoSense = numerosPrueba_extra.split("")
    NoSense.push(",")
}

function obtenerArrayResultado(){
    resultado=[]
    for(i=0;i<=posicionesComas.length;i++){
        let x = NoSense.slice(posicionesComas[i]+1,NoSense.length-1)
        // console.log(x)
        // console.log(NoSense)
        NoSense.splice(posicionesComas[i]+1)
        resultado.push(parseInt(x.join("")))
        // console.log(i)
    }
    resultado.reverse()
    // console.log(resultado)
}