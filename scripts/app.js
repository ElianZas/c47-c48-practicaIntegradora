//CheatSheet DOM (tienen una recopilación de métodos, eventos, etc)
//https://overapi.com/html-dom DOM
//https://overapi.com/javascript JAVASCRIPT
//https://javascript-guessing.netlify.app/ Ejercicio de un compañero que compartió por si quieren verlo

/*Manipulamos Javascript desde HTML y JS.
Ejemplo usando la función desde el evento ONCLICK en HTML boton de la tarjeta cambiar color.
function cambiarColor(){
    const tarjeta = document.getElementById("tarjeta-color");
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    tarjeta.style.backgroundColor = `rgb(${red},${green},${blue})`;
}
*/
//Ejemplo manipulándo javascript NO desde HTML, solo JS.
const btnCambiar = document.getElementById("btnCambiar");
const tarjeta = document.getElementById("tarjeta-color");

function cambiarColor(number){
    return Math.floor(Math.random() * (number + 1));
}

btnCambiar.addEventListener("click", () =>{
    let colores_aleatorios = `rgb(${cambiarColor(255)},${cambiarColor(255)}, ${cambiarColor(255)}`;
    tarjeta.style.backgroundColor = colores_aleatorios;
})




const inputNumero = document.getElementById("inputNumero").value;

function numeroRandom(){
    return Math.floor(Math.random() * 100);
}
/*Consigna escrita: 

El usuario debe poder ingresar un número de hasta DOS CIFRAS.
El número random debe ser entre el 1 y el 99.
Si el usuario ingresa un número MAYOR A TRES CIFRAS entonces tirar mensaje de error.
Si el usuario ingresa todo correctamente entonces que se compare:
-si el usuario ingresa el mismo número que el número aleatorio entonces "ADIVINASTE EL NUMERO"
-si el usuario ingresa un número distinto entonces "NO ACERTASTE:( INTENTA DENUEVO"
-Tiene hasta 3 intentos.
*/

let intentos = 0
while(intentos != 3){
    if (inputNumero == numeroRandom()){
        alert(`lo lograste ${inputNumero}`)
    }else{
        alert("No adivinaste el numero :(");
    }
    intentos += 1
}

/*Para la tarjeta CLARO OSCURO
Consigna:
Cuando el usuario haga click en el botón de la tarjeta entonces
que cambie el color de la tarjeta a "modo oscuro". Si vuelve
a hacer click que cambie al modo original.
Pueden hacer esto con el uso de document.style.backgroundColor, etc, O
con el uso de "classList.add", "classList.remove". Estos dos métodos
se encargan de borrar o agregar una clase que tengamos hecha en css
que no estemos usando por ejemplo.
*/




