const mytext=document.getElementById("mytext");
  const mysubmit=document.getElementById("mysubmit");
  const result=document.getElementById("result");
  let age;
mysubmit.onclick=function(){
    age=mytext.value;
    age=Number(age);
if(age>=18)
{
   result.textContent="yes";
}
else if(age<0)
{
    result.textContent="your age cant be less than 0";
}
else
{
   result.textContent="your age must be 18+";
}
  }