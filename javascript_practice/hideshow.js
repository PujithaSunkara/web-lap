const  button=document.getElementById("btn");
const img=document.getElementById("img");
button.addEventListener("click",event=>{
    if(img.style.display==="none")
    {
        img.style.display="block";
        button.textContent="hide";
    }
    else
    {

        img.style.display="none";
        button.textContent="show";

    }

});
//if we declare a button after the img then we need use visibility instead of display  and hidden instaed of none and visible instead of block
//so it creates reserve a place for image above the button
