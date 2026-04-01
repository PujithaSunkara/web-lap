function fridge(...foods)//rest
{
    console.log(...foods);//spread0-0000000g6x
    // when we combine both the output like this
}
function getfood(...foods)
{
    return foods;
}
const food1="pizza";
const food2="burger";
const food3="haleem";
//fridge(food1,food2,food3);

const foods=getfood(food1,food2,food3);
console.log(foods);



function sum(...numbers)
{
    let result=0;
    for(let number of numbers)
    {
        result+=number;
    }
    return result;
}
const total=sum(1,2,3);
console.log(`your total is ${total}`);


function getavg(...numbers)
{
    let result=0;
    for(let number of numbers)
    {
        result+=number;
    }
    return result/numbers.length;
}
const avg=getavg(78,89,90);
console.log(avg);


function combine(...strings)

{
    return strings.join(" ");
}
 const output=combine("Ms","pujitha");
 console.log(output);