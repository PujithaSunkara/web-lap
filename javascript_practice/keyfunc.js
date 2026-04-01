//document.addEventListener("keydown",event=>{
  //  console.log(event);//console.log(event.key)
//});

//document.addEventListener("keydown",event=>{
 //   console.log(`key down=${event.key}`);//console.log(event.key)
//});
//document.addEventListener("keyup",event=>{
  // console.log(`key up=${event.key}`);
//});
//const box=document.getElementById("box");
//document.addEventListener("keydown",event=>{
   // box.textContent="😵";
    //box.style.backgroundColor="pink"

//});
//document.addEventListener("keyup",event=>{
   //  box.textContent="❤️";
    //box.style.backgroundColor="white"
//});
const box=document.getElementById("box")
movelen=100;
x=0;
y=0;
document.addEventListener("keydown",event=>{
    box.textContent="😂";
    box.style.backgroundColor="pink";
})
document.addEventListener("keyup",event=>{
    box.textContent="😒";
    box.style.backgroundColor="lightgreen";
})
document.addEventListener("keydown",event=>{
event.preventDefault();

if(event.key.startsWith("Arrow")){

    switch(event.key)
    {
        case "ArrowUp":
            y-=movelen;
            break;
        case "ArrowDown":
            y+=movelen;
            break;
        case "ArrowLeft":
            x-=movelen;
            break;
        case "ArrowRight":
            x+=movelen;
            break;

    }


    box.style.top=`${y}px`;
    box.style.left=`${x}px`;
}


});