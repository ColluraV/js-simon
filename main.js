const risultato = document.querySelector(`#risultato`);
const btnActivate = document.querySelector(".conferma");

const timeOver = new Date(`2023-07-14T09:30:0`).getTime();

let now;
btnActivate.addEventListener("click",function(){
 
    const result = idInterval();

    /*console.log(result)
    console.log(timeOver)*/
 
})


function idInterval (/*da_testare*/){
    
   now = new Date().getTime(); 
    let countdown = timeOver - now;
    



    console.log(now);
    console.log(countdown);
   /* console.log(seconds);
    console.log(minutes);
    console.log(hours);*/


    return countdown;

}