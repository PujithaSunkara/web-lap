//const mybox=document.getElementById("mybox");
//function changeColor(event)
//{
 //   event.target.style.backgroundColor="tomato";
   // event.target.textContent="OUCH😵"

//}
//mybox.addEventListener("click",changeColor);
//mybox.addEventListener("click",function(event)
//{
//    event.target.style.backgroundColor="tomato";
  //  event.target.textContent="OUCHH 😵"
//});
//with arrow box.addEventListener("click",event=>{remaining same});
//mouseover

const mybox=document.getElementById("mybox");
const mybutton=document.getElementById("mybutton");


//mybox.addEventListener("click",event=>
//{
  //  event.target.style.backgroundColor="tomato";
   //vent.target.textContent="OUCHH 😵"
///});
//mybox.addEventListener("mouseover",event=>
//{
  //  event.target.style.backgroundColor="yellow";
   //event.target.textContent="dont do it🙌"
//});
//mybox.addEventListener("mouseout",event=>
//{
  //  event.target.style.backgroundColor="lightgreen";
    //event.target.textContent="click me😍";
//});


mybutton.addEventListener("click",event=>
{
    mybox.style.backgroundColor="tomato";
    mybox.textContent="OUCHH 😵";
});
mybutton.addEventListener("mouseover",event=>
{
    mybox.style.backgroundColor="yellow";
    mybox.textContent="dont do it🙌";
});
mybutton.addEventListener("mouseout",event=>
{
    mybox.style.backgroundColor="lightgreen";
    mybox.textContent="click me😍";
});


