const checkbox=document.getElementById("hello");
 const rad=document.getElementById("rad");
const phone=document.getElementById("phone");
const google=document.getElementById("google");
const submit=document.getElementById("submit");
const sub=document.getElementById("sub");
const radio=document.getElementById("radio")
submit.onclick=function(){
    if(hello.checked)
    {
       sub.textContent="subscribed";
    }
    else
    {
sub.textContent="not subscribed";
    }

    if(rad.checked)
    {
       result.textContent="visa";
    }
    else if(phone.checked)
    {
          result.textContent="phonepay";
    }
    else if (google.checked)
    {
        
        result.textContent="googlepay";
    }
    else 
    {
         result.textContent="you need to select";
    }
}