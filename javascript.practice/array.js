let fruits=["apple","banana","orange"];
fruits[3]="coconut";
fruits.push("grapes")
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits)
fruits.pop();
console.log(fruits)
fruits.unshift("mango")//adding a element at beginning
console.log(fruits)
fruits.shift();
console.log(fruits)
console.log(fruits.shift())


console.log(fruits.length);
console.log(fruits.indexOf("banana"))
console.log(fruits.indexOf("apple"))

for(let i=0;i<fruits.length;i+=2 )
{
    console.log(fruits[i]);
}
fruits.sort().reverse();
for(let fruit of fruits)
{
    console.log(fruit);
}
