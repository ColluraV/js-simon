const risultato = document.querySelector(`#risultato`);
const btnActivate = document.querySelector(".conferma");

const timeOver = new Date(`2023-07-14T09:30:00`).getTime();
/*const iTimeOver = new Date(`${iY}-${iM}-${iD}T${iH}:${iMin}:${iS}`).getTime();*/

let now;
btnActivate.addEventListener("click",function(){


setInterval(function () {

     
    let result = timer();


    console.log(result);
    console.log(timeOver);
    
    const seconds = Math.floor(result / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    console.log(seconds);
    console.log(minutes);
    console.log(hours);

    risultato.innerHTML = `${hours} ore ${minutes % 60} minuti ${seconds % 60} secondi`;
  
      }, 500);
})

//calcolatore tempo residuo
function timer (){
    
   now = new Date().getTime(); 
    let countdown = timeOver - now;

    console.log(now);
    console.log(countdown);

    return countdown;

}