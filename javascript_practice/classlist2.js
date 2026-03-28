let mybuttons=document.querySelectorAll(".buttons");
mybuttons.forEach(button=>
{
    button.classList.add("enabled");
}
)
//mybuttons.forEach(button=>
//{
  //  button.addEventListener("mouseover",event=>
   // {
     //   event.target.classList.add("hover");
    //}
    //);
//}
//);
mybuttons.forEach(button=>
{
    button.addEventListener("mouseover",event=>
    {
        event.target.classList.toggle("hover");
    }
    );
}
);
mybuttons.forEach(button=>
{
    button.addEventListener("mouseout",event=>
    {
        event.target.classList.toggle("hover");
    }
    );
}
);
mybuttons.forEach(button=>
{
    button.addEventListener("click",event=>
    {
        event.target.classList.toggle("disable");
    }
    );
}
);

