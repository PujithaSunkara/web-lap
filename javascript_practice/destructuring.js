//swap the value of two variables
let a=1;
let b=2;
[a,b]=[b,a];
console.log(a);
console.log(b);
//swap 2 elements in an array
const colors=["red","green","blue","black","white"];
[colors[0],colors[4]]=[colors[4],colors[0]];
console.log(colors);
//assign array elements to variables
const color=["red","green","blue","black","white"];
const[firstcolor,secondcolor,thirdcolor, ...extracolors]=colors;
console.log(firstcolor);
console.log(secondcolor);
console.log(thirdcolor);
console.log(extracolors);
//extract values from objects
const person1 = {
    firstname:"pujitha",
    lastname:"sunkara",
    age:30,
    job:"Fry cook",
}
const person2 =
{
    fname:"hello",
    lname:"world",
    fage:34,
    
}
const {firstname,lastname,age,job="unemployed"}=person1;
console.log(firstname);
console.log(lastname);
console.log(age);
console.log(job);
const {fname,lname,fage,fjob="unemployed"}=person2;
console.log(fname);
console.log(lname);
console.log(fage);
console.log(fjob);//
// destructure in function paramerters
function displayperson({firstname,lastname,age},job="unemployed")
{
    console.log(`name:${firstname} ${lastname}`);
    console.log(`age:${age}`);
    console.log(job);
}
const person4 = {
    firstname:"pujitha",
    lastname:"sunkara",
    age:30,
    job:"Fry cook",
}
const person6 =
{
    firstname:"hello",
    lastname:"world",
     age:34,
    
}
displayperson(person4);