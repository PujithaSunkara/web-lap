setTimeout(function(){
    console.log("hello");
},3000);

//2
const numbers=[1,2,3,4,5,6];
const squares=numbers.map(square);
console.log(squares);
function square(element)
{
    return Math.pow(element,2);
}
// using the function expression for the above  2 example
const number=[1,2,3,4,5,6];
const squar=number.map(function(element)
{
    return Math.pow(element,2);
});
console.log(squar);
//for cube
const num=[1,2,3,4,5,6];
const cube=num.map(function(element){
return Math.pow(element,3);
});
console.log(cube);
//even nummber using  function expression
const digits=[1,2,3,4,5,6];
const even=digits.filter(function(element)
{
    return element%2===0;//return element%2!==0
});
console.log(even);
//reduce with function expression
const values=[1,2,3,4,5,6];
const total=values.reduce(function(accumulator,element){
    return accumulator+element;
}
);
console.log(total)