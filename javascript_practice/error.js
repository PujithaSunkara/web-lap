try{
    console.log(x);
}
catch(error)
{
    console.log(error)//to hilight error we need to use console.error(error)
}
finally{
    console.log("this always executes");
}
console.log("you have reached the end");
//2 zero division error
try{

    const dividend=Number(window.prompt("enter the dividend"))
    const divisor=Number(window.prompt("enter the divisor"));
    if(divisor==0)
    {
        throw new Error("you cant divide by zero");
    }
    if(isNaN(dividend)||isNaN(divisor))
    {
        throw new Error("values must be a number");
    }
    result=dividend/divisor;
    console.log(result);
    
}
catch(error)
{
    console.error(error);
}
console.log("you have reached end");