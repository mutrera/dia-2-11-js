console.log ("Proves amb arrays")
function demoArrays(){
    //Creem un array buid(llista)
    var persones = []
    //afegir elements (al final)
    persones.push("Anna")
    persones.push("Eva")
    //Creem un array i l'inicialitzem
   
    var alumnes =["Pere","Laura", "Dani", '<p style="color:blue>L\'altra</p>'];
    /*  console.log ha d'estar a dins de la funció, perque sino 
    dirá que les variables no estan creades, ja que aquestes estan solament disponibles
    a dins de la funció */

    //afegeix al final
    alumnes.push("Sara")

    // esborra el primer
    alumnes.shift()

// treiem l'ultim
    alumnes.pop()

//afegir nous elements a certa posició
   alumnes.splice(2,0,"José")

// mira tipus de variable i els ordena
   alumnes.sort()

// ordenar amb el sort i amb el reverse els posa al revés
   alumnes.reverse()


    console.log(persones, alumnes)

console.clear()

console.log("hola")

var lletres =["a","b","c", "d"]
var i = 0

for(i; i<100;i =i + 2){
    console.log("posicio", i)
}

// for (i; i < lletres.length; i++){s
//     console.log("Posició", i)
//     console.log("Valor",lletres[i])
// }

//posicio++ es igual posicio = posicio + 1
for(var posicio=0;posicio<lletres.length; posicio++){
    //posicions
    console.log (posicio)
    //valor de l'element que esta a la posicio
    console.log(lletres[posicio])
}

console.clear()
//altra manera de fer-ho
function informacio(valor, posicio, arrayOriginal){
console.log(posicio)
console.log(valor)
    
}

//sense paramentres exemple
function senseRes(){
    console.log("hola")
}

function ambElValor(elValor){
    console.log(elValor)
}

function ambElVAlorIlaPosicio(elVal, laPos){
    console.log(elVal,laPos)
}



lletres.forEach(informacio)
lletres.forEach(senseRes)
lletres.forEach(ambElValor)
lletres.forEach(ambElVAlorIlaPosicio)

lletres.forEach(function(val){
    console.log(val)
})

var lletres2=[
    "a",
    "b",
    "c"
]


var excel = [
    ["Nom", "Edat","es soci", "telefon"],
    ["Jordi",42,true, "86846546854"],
    ["Sandra",34,true, "86846533444"],
    ["Laura",34,true, "511398056854"]
]

function mostriNFOExcel(fila, pos, original){
    // console.log(fila, pos)
    // console.log("Nom soci:", fila[0])
    // console.log("Edat:", fila[1])
     //la primera fila titols no ens interessa creem una variable 
    //  pos i fen servir un if/else 
    if(pos == 0){
        console.log("Estem a la fila 0")

    }else{
        console.log("No estem a la fila 0")
        console.log(fila, pos)
        console.log("Nom soci:", fila[0])
        console.log("Edat:", fila[1])
        console.log(original[0][0],fila[0])
    }

}

excel.forEach(mostriNFOExcel)








};