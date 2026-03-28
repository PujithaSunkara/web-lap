const decre=document.getElementById("decre");
const reset=document.getElementById("reset");
const incre=document.getElementById("incre");
const countable=document.getElementById("countable");
let count=0;
incre.onclick=function()
{
    count++;
    countable.textContent=count;
}
decre.onclick=function()
{
    count--;
    countable.textContent=count;
}
reset.onclick=function(){
    count=0;
    countable.textContent=count;
    
}
