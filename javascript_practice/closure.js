function outer()
{
    let message="hello everyone"
    function inner()
    {
        console.log(message)
    }
    inner();
}
outer();

//if we declare a count outside the function then we can able to change that like below but if it is inside a function then we can change it outside
let count=0
count=100000;
function increment()
{
    count++;
    console.log(`count is incremented to ${count}`);
}
increment();
increment();
increment();
//example
function createcount()
{
    let count=0;
    function increment()
   {
    count++;
    console.log(`count is incremented to ${count}`);
    }
    function getcount()
    {
    return count;
   }
 return{increment,getcount};
}
const counter= createcount();
counter.increment();
counter.increment();
counter.increment();
console.log(`The current is ${counter.getcount()}`)
//example
function hello()
{
let score=0;
function increscore(points)
{
    score+=points;
    console.log(`+${points}pts`)
}
function decrescore(points)
{
    score-=points;
    console.log(`-${points}pts`)
}
function getscore()
{
    return score;
}
return {increscore,decrescore,getscore}
}
const obj3=hello();
obj3.increscore(5);
obj3.increscore(6);
obj3.decrescore(7);
console.log(`current score is ${obj3.getscore()}`)

