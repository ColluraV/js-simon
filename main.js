const risultato = document.querySelector(`#risultato`);
const btnActivate = document.querySelector(".conferma");

/*const timeOver = new Date(`2023-07-14T09:30:00`).getTime();*/

let timeOver;
let now;
let varClock;

    //bottone START

btnActivate.addEventListener("click", function () {
    clearInterval(varClock);
    //input data

    const iY = document.querySelector(`#YearSelect`).value;
    const iM = document.querySelector(`#MounthSelect`).value;
    const iD = document.querySelector(`#DaySelect`).value;
    const iH = document.querySelector(`#input-ore`).value;
    const iMin = document.querySelector(`#input-minuti`).value;

    console.log(iY);
    console.log(iM);
    console.log(iD);
    console.log(iH);
    console.log(iMin);

    //dichiarazione scadenza
    timeOver = new Date(iY, (iM - 1), iD, iH, iMin);

    console.log(timeOver);

 

    //Funzione intervallo + funzione Stampa     
    varClock = setInterval(stampaHTML, 1000);

})

//calcolatore tempo residuo
function timer() {

    now = new Date().getTime();
    let countdown = timeOver - now;

    console.log(now);
    console.log(countdown);
    return countdown;

}
//stampa valori su documento
function stampaHTML() {
    let result = timer();

    console.log(result);
    console.log(timeOver);

    const seconds = Math.floor(result / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor((result % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const days = Math.floor(result / (1000 * 60 * 60 * 24));

    console.log(seconds);
    console.log(minutes);
    console.log(hours);
    console.log(days);

    risultato.innerHTML = `${days} giorni ${hours} ore ${minutes % 60} minuti ${seconds % 60} secondi`;

    if (result<=0){
        risultato.innerHTML = "Tempo Scaduto";
    }
}