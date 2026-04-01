let buttons=document.querySelectorAll(".mybutton");
//add html/css properties
//buttons.forEach(button=>{
  //  button.style.backgroundColor="green";
    //button.textContent+="😊";
//});
//click event listener
//buttons.forEach(button=>{
 //   button.addEventListener("click",event =>{
   //     event.target.style.backgroundColor="yellow";
    //});
//});
//mouseover+mouseout event listener

//buttons.forEach(button=>{
  //  button.addEventListener("mouseover",event =>{
    //    event.target.style.backgroundColor="pink";
    //});
//});

//buttons.forEach(button=>{
  //  button.addEventListener("mouseout",event =>{
    //    event.target.style.backgroundColor="violet";
    //});
//});
// add an element
//const newbutton=document.createElement("button");//step1
//newbutton.textContent="Button 5";//step2
//newbutton.classList.add("mybutton");
//step3
//document.body.appendChild(newbutton);
//buttons=document.querySelectorAll(".mybutton");//to update the button in nodelist in console
//console.log(buttons);
//remove an element
buttons.forEach(button=>{
    button.addEventListener("click",event=>
    {
        event.target.remove();
        buttons=document.querySelectorAll(".mybutton");//to remove buttons in a node list
        console.log(buttons);
    }
    );
})