//CheatSheet DOM (tienen una recopilación de métodos, eventos, etc)
//https://overapi.com/html-dom DOM
//https://overapi.com/javascript JAVASCRIPT

/*
let buttonCambiar_color = document.getElementById("buttonCambiar_color");
console.log(buttonCambiar_color);

buttonCambiar_color.addEventListener("click", ()=>{
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let randomColor = `rgb(${red}, ${green}, ${blue})`;
  
    let cardCambiar_color = document.getElementById("cambiar-color");
  
    cardCambiar_color.style.backgroundColor = randomColor;
});

*/
function claroOscuro() {
    let checkbox = document.getElementById("btn-switch");
    let cardClaro_oscuro = document.getElementById("claro-oscuro");
    console.log(checkbox.checked);
    if (checkbox.checked) {
        cardClaro_oscuro.classList.remove("claro"); 
        cardClaro_oscuro.classList.add("oscuro");
    }else{
        cardClaro_oscuro.classList.remove("oscuro");
        cardClaro_oscuro.classList.add("claro");
    }
}

/*
function claroOscuro() {
    let cardClaro_oscuro = document.getElementById("claro-oscuro");
    let checkbox = document.getElementById("btn-switch");
    checkbox.addEventListener("cambiar", () => {
        if (checkbox.checked) {
            cardClaro_oscuro.classList.remove("claro");
            cardClaro_oscuro.classList.add("oscuro");
        } else {
            cardClaro_oscuro.classList.remove("oscuro");
            cardClaro_oscuro.classList.add("claro");
        }
    });
}

*/

function cambiarcolor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let randomColor = `rgb(${red}, ${green}, ${blue})`; 
  
    let cardCambiar_color = document.getElementById("cambiar-color");
  
    cardCambiar_color.style.backgroundColor = randomColor;
    console.log(randomColor);
}



function validar(){
    let entradaDato = document.getElementById("input").value;
    console.log(entradaDato);
    console.log(entradaDato.length);
    if((entradaDato.length <=2 ) && (entradaDato.length!=0)){
        console.log("El numero ingresado es de una o dos cifras, correcto");
        console.log(entradaDato.length);
        adivinar();
    }else{
        console.log("No es válido. Tiene que ser de dos o una cifra. No debe ingresar 0");
        console.log(entradaDato.length);
    }
}

function adivinar(){
    let entradaDato = document.getElementById("input").value;
    let numeroSecreto = Math.floor(Math.random() * 20) + 10;
    console.log("El numero secreto es: " + numeroSecreto);
    if (entradaDato == numeroSecreto){
        console.log("Adivino el numero");
    }else {
        console.log("No adivino el numero");
    }
}

/*
if(entradaDato.length <=2){
    console.log("El numero ingresado es de una o dos cifras, correcto");
}else{
    console.log("No es válido. Tiene que ser de dos o una cifra");
}
*/


