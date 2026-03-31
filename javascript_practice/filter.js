let numbers=[1,2,3,4,5,6,7];
let evennum=numbers.filter(iseven);
let oddnum=numbers.filter(isodd);
console.log(evennum);
function iseven(element)
{
    return element%2===0;
}
function isodd(element)
{
    return element%2!==0;
}
//2
const ages=[16,17,18,19,20,60];
const adults=ages.filter(isAdult);
const children=ages.filter(ischild)
console.log(children);
function isAdult(element){
return element>=18;
}
function ischild(element){
return element<18;
}
//3
const words=["apple","orange","banana","kiwi","coconut"];
const result=words.filter(getShortwords);
const result1=words.filter(getLongwords);
console.log(result1);
function getShortwords(element){
    return element.length<=6;
}
function getLongwords(element){
    return element.length>6;
}
