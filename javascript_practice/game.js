const choices=["rock","paper","scissor"];
const playerdisplay=document.getElementById("playerdisplay");
const computerdisplay=document.getElementById("computerdisplay");
const resultdisplay=document.getElementById("resultdisplay");
const playerscore=document.getElementById("playerscore");
const computerscore=document.getElementById("computerscore");
let player=0;
let computer=0;




function playgame(playerchoice)
{
    const computerchoice=choices[Math.floor(Math.random()*3)];
    let result="";
    if(playerchoice===computerchoice)
    {
        result="its a tie"
    }
    else
    {
        switch(playerchoice)
        {
            case "rock":
               result= (computerchoice==="scissor") ? "YOU WON":"YOU LOSE";
               break;
            case "paper":
               result= (computerchoice==="rock") ? "YOU WON":"YOU LOSE";
               break;
            case "scissor":
               result= (computerchoice==="paper") ? "YOU WON":"YOU LOSE";
               break;
        }
    }
    playerdisplay.textContent=`PLAYER:${playerchoice}`;
    computerdisplay.textContent=`computer:${computerchoice}`;
    resultdisplay.textContent=result;
    resultdisplay.classList.remove("greentext","redtext");
    switch(result)
    {
        case "YOU WON":
            resultdisplay.classList.add("greentext");
            player++;
            playerscore.textContent=player;

            break;
        case "YOU LOSE":
            resultdisplay.classList.add("redtext");
            computer++
            computerscore.textContent=computer;

            break;
            


    }

}
