const preguntaP = document.getElementById("pregunta");
const numero = document.getElementById("numero");
const fuente = document.getElementById("fuente");

const myRequest = new Request('./js/preguntas.json');



fetch(myRequest)
.then(response => response.json())
.then(data => {

    console.log(data.preguntas[0].descripcion)
    console.log(data.preguntas[0].id)
    
    // for (const pregunta of data.preguntas){
    //     let listItem = document.createElement("p");
    //     listItem.textContent = pregunta.descripcion;
    //     preguntaP.appendChild(listItem);
        
    // }

    preguntaP.innerHTML =data.preguntas[0].descripcion;
    numero.innerText =data.preguntas[0].id;
    fuente.innerText =data.preguntas[0].fuente;
})
.catch(console.error);