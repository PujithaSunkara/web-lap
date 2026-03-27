// (parameters)=>somecode

const hello=()=>console.log("Hello");
hello();
//2
const hi=(name,age)=>{console.log(`Hello ${name}`);
                  console.log(`you are ${age}years old`);
}
hi("puji",18);
//3
setTimeout( () => console.log("Hello",3000));
//4
const numbers=[1,2,3,4,5,6];
const squares=numbers.map((element)=>Math.pow(element,2));
const cubes=numbers.map((element)=>Math.pow(element,3));
const even=numbers.filter((element)=>element%2===0);
const odd=numbers.filter((element)=>element%2!==0);
const total=numbers.reduce((accumulator,element)=>accumulator+element);
console.log(even);
console.log(odd);
console.log(squares);
console.log(cubes);
console.log(total);
