console.log("Carregant arxiu...")
function prova (){
    console.log("hola")
}
function mostraInformacio(laVariable){
    console.log ('Contingut:', laVariable)
    console.log('Tipus', typeof laVariable)
    console.log('És array:',Array.isArray(laVariable))
}
console.log("Arxiu carregat")

function primeraPart(){
//Això és un comentari curt
console.log('Abans del body')
/*    Comentari llarg 
  més d'una línea */

  var elMenuNom ="Jordi"
  console.log ("El contingut de la variable és:", elMenuNom, "i el tipus de la variable és", typeof elMenuNom )


var laMevaEdat ="42"
var elTipusdeVariableDeLaMevaEdat = typeof laMevaEdat
console.log ("Contingut: ", laMevaEdat)
console.log ("Tipus: ",elTipusdeVariableDeLaMevaEdat )

var edat = 42
console.log(edat, typeof edat)

var edat2030 = edat + 8
console.log('El 2030 tindrè', edat2030)
function suma(a,b){
  return a + b
}
suma(10,20)

var resultat = suma(10,20)
console.log(resultat)

// aquest funció no torna res, sols fa algo
// alert (suma(12,3))
// si fem "aceptar" mostra la següent alert
// alert ("Hola")

// function mostraInformacio(laVariable){
//     console.log ('Contingut:', laVariable)
//     console.log('Tipus', typeof laVariable)
//     console.log('És array:',Array.isArray(laVariable))
// }
var variable1 ="Jordi"
var variable2 = 13
var variable3 =false

mostraInformacio(variable1)
mostraInformacio(variable2)
mostraInformacio(variable3)

// pots definir una variable que és una funció

var suma2 =function(a,b){
  return a+b
}
// console.clear()
mostraInformacio(suma2)

}

function segonaPart(){
    console.log('Després del body')

    // pots definir una variable que és una array
    var noms = ['jordi', 'pere', 'laura', 32]
    // pots definir una variable que és un objecte
    var pers ={
        nom: "Jordi",
        dni: "2333333P"
    
    }
    
    mostraInformacio(noms)
    mostraInformacio(pers)
}