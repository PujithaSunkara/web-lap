const mybutton=document.getElementById("button");
const myh1=document.getElementById("hi");
//mybutton.classList.add("enabled")
//mybutton.classList.remove("enabled")
//mybutton.addEventListener("mouseover",event=>{
  //  event.target.classList.add("hover");//remove after this
//})
//mybutton.addEventListener("mouseout",event=>{
  //  event.target.classList.remove("hover");//remove after this
//})
//mybutton.addEventListener("mouseover",event=>{
  //  event.target.classList.toggle("hover");//remove after this
//})
//mybutton.addEventListener("mouseout",event=>{
  //  event.target.classList.toggle("hover");//remove after this
//})
myh1.classList.add("enabled");
mybutton.classList.add("enabled");
mybutton.addEventListener("click",event=>
{
    if(event.target.classList.contains("disable"))
    {
        event.target.textContent+="😊";
    }
    else
    {
    event.target.classList.replace("enabled","disable");
    }
}
)
myh1.addEventListener("click",event=>
{
    if(event.target.classList.contains("disable"))
    {
        event.target.textContent+="😊";
    }
    else
    {
    event.target.classList.replace("enabled","disable");
    }
}
)
