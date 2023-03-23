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


*/

const btn = document.querySelector("button");

const ulList = document.querySelector("#ul-list");
let contInput = document.querySelector("#container-input");
let resultOutPut = document.querySelector("#result-outPut");
let inputALL = document.querySelectorAll(".form-control");



let min = 1;
let numNumber = 5
let maxRange = 100

btn.addEventListener("click", ValidationNumbers)


// Funzione creazione array con num random
function createArrRandom(){
let arrRandomNum = [];
while(arrRandomNum.length < numNumber){
    let random = getRandomInt(min, maxRange)
    if(!arrRandomNum.includes(random)){
        arrRandomNum.push(random)
    }
}
for(let j = 0; j < arrRandomNum.length; j++){
        let listRandom = document.createElement("span")
        listRandom.classList.add("p-2")
        listRandom.innerHTML = arrRandomNum[j];
        ulList.appendChild(listRandom)
        Timer(listRandom)
    }
return arrRandomNum
 
}
 
let arrRandom = createArrRandom();
console.log("arrRandom", arrRandom)



// Funzione per stampare a video la lista con numeri random
function createArrInput(){
    let arrInputNum = [];
    let correctInputValue;
    for(let i = 0; i < inputALL.length; i++){
        if(!arrInputNum.includes(inputALL[i].value) && inputALL[i].value !== "" && parseInt(inputALL[i].value)){
            arrInputNum.push(inputALL[i].value)
            correctInputValue = true
            
        }
    }
    if(!correctInputValue){
        alert("campi vuoti")
        correctInputValue = false
        return correctInputValue;
    }else{
        return arrInputNum;    
    }
}

 
// creazine elemento Dom da appendere al risultato
function createElemResults(arrCorrectNum, levelResuts){
    let elem = document.createElement("li")
    elem.innerHTML = "";
    elem.classList.add("list-group-item")
    if(levelResuts === "null"){
        elem.innerHTML = `
                            <li>Hai indovitato i numeri: ${arrCorrectNum}</li>
                            <li>Punteggio: ${arrCorrectNum.length}</li>
                         ` 
        resultOutPut.appendChild(elem)
    } else{
        if(levelResuts == 1){
            elem.innerHTML = `
                                <li class="list-group-item">Mi spiace, non ne hai indovinata mezza</li>
                                
                             ` 
            resultOutPut.appendChild(elem)
    
        } else if(levelResuts == 2){
            elem.innerHTML = `
                                <li>Hai indovitato i numeri: ${arrCorrectNum}</li>
                                <li>Punteggio: ${arrCorrectNum.length}</li>
                                
                             ` 
            resultOutPut.appendChild(elem)
    
        } else{
            elem.innerHTML = `
                                <li>O ma sei un fenomeno!</li>
                                <li>Hai indovitato i numeri: ${arrCorrectNum}</li>
                                <li>Punteggio: ${arrCorrectNum.length}</li>
                                
                             ` 
            resultOutPut.appendChild(elem)
        }
    }


}






// Funzione per stampare a video la lista con numeri random
function ValidationNumbers(){
    
    let arrinput = createArrInput();
    let arrCorrectNum = [];
    let levelResuts;
    let showResult = false;
    for(let x = 0; x <arrinput.length; x++){
        if(arrRandom.includes(parseInt(arrinput[x]))){
            arrCorrectNum.push(arrinput[x])
            showResult = true;
    
        }  
    } 

    if(!arrinput){
        levelResuts = "null";
        elemResult = createElemResults(arrCorrectNum, levelResuts);
        
    }
    if(showResult){ 
        if(arrCorrectNum.length == 1){
            levelResuts = 2;
            elemResult = createElemResults(arrCorrectNum, levelResuts);
        }else if(arrCorrectNum.length == 2){
            levelResuts = 2;
            elemResult = createElemResults(arrCorrectNum, levelResuts);
        } else if(arrCorrectNum.length == 3){
            levelResuts = 2;
            elemResult = createElemResults(arrCorrectNum, levelResuts);
        }else if(arrCorrectNum.length == 4){
            levelResuts = 2;
            elemResult = createElemResults(arrCorrectNum, levelResuts);
        } else if(arrCorrectNum.length == 5){
            levelResuts = 3;
            elemResult = createElemResults(arrCorrectNum, levelResuts);
        }  
    } else{
        levelResuts =  1;
        elemResult = createElemResults(arrCorrectNum, levelResuts);

    }

}
 



function Timer(listRandom){
    setTimeout(function() { 
        contInput.classList.remove("d-none")
        listRandom.remove(); 
      }, 2000 );
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }