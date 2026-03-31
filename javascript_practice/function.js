function hello(name,age)
{
    console.log(`hppy bdy ${name}`);
    console.log(`you are ${age} years old`);
}
hello("puja",18);



function  add(x,y)
{
  return x+y;
}
console.log(add(2,3))


function is(number)
{
    if(number%2===0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log(is(10));

function valid(email)
{
    if(email.includes("@"))//includes is built in function
    {
        return true;
    }
    else
    {
        return false;
    }
}

console.log(valid("pujitha@16.com"));
console.log(valid("pujitha.123"));