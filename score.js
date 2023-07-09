const p1Display=document.querySelector("#p1Display");
const p2Display=document.querySelector("#p2Display");
const p1Button=document.querySelector("#p1Button");
const p2Button=document.querySelector("#p2Button");
const resetButton=document.querySelector("#resetButton");
const winningPlayTo=document.querySelector("#playUpto");




let p1Score=0;
let p2Score=0;
let isGameOver=false;
let winningScore=3;

p1Button.addEventListener("click",function(){
    if(!isGameOver){
        p1Score += 1;
        if(p1Score===winningScore){
            isGameOver=true;
            p1Display.classList.add("has-text-primary");
            p2Display.classList.add("has-text-danger");
            p1Button.disabled=true;
            p2Button.disabled=true;
        } 
        p1Display.innerText=p1Score;
        
    }
})


p2Button.addEventListener("click",function(){
    if(!isGameOver){
        p2Score += 1;
        if(p2Score===winningScore){
            isGameOver=true;
            p2Display.classList.add("has-text-primary");
            p1Display.classList.add("has-text-danger");
            p1Button.disabled=true;
            p2Button.disabled=true;
        } 
        p2Display.innerText=p2Score;
    }
})

winningPlayTo.addEventListener("change",function(){
    winningScore=parseInt(this.value);
    isGameOver=false;
    p1Score=0;
    p2Score=0;
    p1Display.innerText=0;
    p2Display.innerText=0;
    p2Display.classList.remove("has-text-primary","has-text-danger");
    p1Display.classList.remove("has-text-danger","has-text-primary");
    p1Button.disabled=false;
    p2Button.disabled=false;
})

resetButton.addEventListener("click",function(){
    isGameOver=false;
    p1Score=0;
    p2Score=0;
    p1Display.innerText=0;
    p2Display.innerText=0;
    p2Display.classList.remove("has-text-primary","has-text-danger");
    p1Display.classList.remove("has-text-danger","has-text-primary");
    p1Button.disabled=false;
    p2Button.disabled=false;
})