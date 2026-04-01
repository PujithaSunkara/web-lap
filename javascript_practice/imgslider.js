const slides=document.querySelectorAll(".slides img")
let slideindex=0;
let intervalId=null;
document.addEventListener("DOMContentLoaded",initialize)
function initialize()
{
    if(slides.length>0)
    {
    slides[slideindex].classList.add("displayfun")
  
    }   
}
function showslide(index)
{
    if(index>=slides.length)
    {
        slideindex=0;
    }
    else if(index<0)

    {
        slideindex=slides.length-1;
    }
    slides.forEach(slide=>
    {
        slide.classList.remove("displayfun")
    }
    );
    slides[slideindex].classList.add("displayfun")
}
function prevslide()
{
    slideindex--;
    showslide(slideindex);
}
function nxtslide()
{
    slideindex++;
    showslide(slideindex);
}