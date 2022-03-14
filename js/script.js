// const lecturaYEscritura = require("./lecturaEscritura");
// const preguntas = lecturaYEscritura.leerJson('preguntas');
const preguntaP = document.getElementById("pregunta");



// let generales = {
//     preguntas,
//     llamarPregunta: function(arr) {
//         arr.forEach(pregunta => {
//             // console.log(`id:${pregunta.id}, pregunta ${pregunta.desripcion}, "Fuente": " ${pregunta.fuente}`)
//             preguntaP.innerHTML = `<p>${pregunta}</p>`

//         });
//     },
//     BuscarPorID: function(id) {
//         return this.pregunta.find(pregunta => pregunta.id === id)
//     }
// };

// generales.llamarPregunta(preguntas);
// // preguntaP.innerHTML = `<p>${generales.llamarPregunta(preguntas)}</p>`
// preguntaP.innerHTML = `laaaaaaaaaaaaaaaaaaaa`



// import jsonData from './preguntas.json' ; 
// console.log(jsonData);


fetch('./js/preguntas.json')
.then(results=>results.json())
// .then(console.log)

let pregunta1 = fetch('./js/preguntas.json')
.then(results=>results.json())



preguntaP.innerHTML = pregunta1[0]

console.log(pregunta1.catch(0)) 

for (const key in pregunta1) {
    console.log(pregunta1[key]) 
} 