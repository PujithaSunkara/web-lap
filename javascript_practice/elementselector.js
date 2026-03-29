//1byid
const myheading=document.getElementById("hello");
myheading.style.backgroundColor="yellow";
myheading.style.textAlign="center";
console.log(myheading)
//2byclassname
const fruits=document.getElementsByClassName("fruits")
//fruits[0].style.backgroundColor="pink"(for one element)
//for loop
//for(let fruit of fruits)
//{
//fruit.style.backgroundColor="blue"
//}
//for each(see notes)
Array.from(fruits).forEach(fruit=>{fruit.style.backgroundColor="pink";})
//3.bytagname
mytags=document.getElementsByTagName("h4")
//mytags[0].style.backgroundColor="orange";to access the single element
for(let mytag of mytags)
{
    mytag.style.backgroundColor="Orange";
}
mylists=document.getElementsByTagName("li")
for(let mylist of mylists)
{
    mylist.style.backgroundColor="Green"
}
// we can also use foreach as like above by converting to array
//4.query selector
const element=document.querySelector(".fruits")//oraange and grapes aslo consists of class fruits but takes only first one
element.style.backgroundColor="red"
const elements=document.querySelector("h4")
elements.style.backgroundColor="red"//there two h4 but it takes first one
//5.queryselectorAll
const vegs=document.querySelectorAll("li")
vegs[5].style.backgroundColor="Yellow";
console.log(vegs);//this give nodelist in console
vegs.forEach(veg=>{veg.style.backgroundColor="Yellow"})