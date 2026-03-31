//array.forEach(callback)
 // element,index,array are provided to perform operation with foreach
let numbers=[1,2,3,4,5]
numbers.forEach(double);
numbers.forEach(square);
numbers.forEach(display);
function double(element,index,array)
{
    array[index]=element*2;
}
function square(element,index,array)
{
    array[index]=Math.pow(element,2)
}
function display(element)
{
console.log(element)
}
console.log(numbers)



let fruits=["apple","orange","banana","coconut"];
fruits.forEach(capital);
fruits.forEach(display);

function uppercase(element,index,array)
{
    array[index]=element.toUpperCase();
}
//do same for lowercase change above array to upper before changing into to lowercase
function capital(element,index,array)
{
    array[index]=element.charAt(0).toUpperCase()+element.slice(1);
}

function display(element)
{
    console.log(element);
}