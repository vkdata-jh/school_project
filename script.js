
document.addEventListener("DOMContentLoaded",()=>{
    const car=document.querySelector("#znacka");
    const color=document.querySelectorAll(".color");
    const vybava=document.querySelectorAll(".vybava");
    const maxCastka=document.querySelector("#max");
    const refresh=document.querySelector("#refresh");
    const email=document.querySelector("#email");
    const send=document.querySelector("#send")
    let message=document.getElementById("message");    
    let suma;

    send.addEventListener("click",sender);

    refresh.addEventListener("click",()=>{
        suma=0;
        try{
        vybava.forEach(element => {
            if (element.checked){
                if(element.id==="tunning"){
                    suma+=(Number(element.value)/100)*Number(car.value);
                }else{
            suma+=Number(element.value); 
                }
            } 
                      
        });
        }catch(e){
            console.error();
        }
        try{
        color.forEach(element => {            
            if(element.checked){
                suma+=(Number(element.value)/100)*Number(car.value);
            }            
        });
        }catch(e){
            console.error();
        }
        suma+=Number(car.value)
        Number(maxCastka.value) < suma ? message.innerHTML=`celkem cena: ${suma} Kč - objednávka je vyšší než maximální částka` : message.innerHTML=`celkem cena: ${suma} Kč - auto si můžete dovolit!`
        console.log(suma);
    });
    
    function sender(){
        email.value==="" ? alert("zadejte email!"):console.log('ok');
    }
})
