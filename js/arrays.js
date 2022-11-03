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

for(i; i<100;i++){
    console.log("posicio", i)
}

// for (i; i < lletres.length; i++){s
//     console.log("Posició", i)
//     console.log("Valor",lletres[i])
// }

//posicio++ es igual posicio = posicio + 1
for(var posicio=0;posicio<lletres.length; posicio++){
    console.log(lletres[posicio])
}

};