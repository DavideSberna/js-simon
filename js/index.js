/*

Descrizione:

Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.

Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da
indovinare sono stati individuati.
Consigli del giorno:


* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.

COSTRUZIONE PROGRAMMA:

1. Creare funzione math.random per numeri random.
2. Creare array di numeri random,
3. Creare elemento input 
4. verificare i valori random con quelli inseriti nell'input.value
*/

const btn = document.querySelector("button");
const ulList = document.querySelector("#ul-list");

// let inputALL = document.querySelectorAll("#num-1");


let input1 = document.querySelector("#num-1");
let input2 = document.querySelector("#num-2");
let input3 = document.querySelector("#num-3");
let input4 = document.querySelector("#num-4");
let input5 = document.querySelector("#num-5");

let numNumber = 5
let maxRange = 100
 
btn.addEventListener("click", checkValueInput)



function randomNumberArray(){
    let arrayNum = []
    while(arrayNum.length < numNumber){
        let random = getRandomInt(1, maxRange)
        if(!arrayNum.includes(random)){
            arrayNum.push(random)
        }
    }
    return arrayNum
}
 
 

// const showNumber = setInterval(showNumbers, 3000)
function showNumbers(){
    const randomF = randomNumberArray()
    for(let i = 0; i < randomF.length; i++){
        let element = document.createElement("li")
        element.innerHTML = randomF[i];
        ulList.appendChild(element)
        Timer(element)
        
        checkValueInput(randomF[i])
         
    }
     
}
showNumbers()

function Timer(element){
    setTimeout(function() { 
        element.remove(); 
      }, 10000 );
      

}


function checkValueInput(randomF){
    
   
 
}
// function checkValueInput(){
//     for(let j= 0; j < inputALL.length; j++){
//         let indexInput = inputALL[j].value
//         console.log(indexInput)
//     }
// }


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }