//Asynchronous using callback
function func1(callback)
{
    setTimeout(()=>{console.log("task1");callback()},3000);
}//asynchrnous function
function func2()
{
    console.log("task 2");
    console.log("task 3");
    console.log("task 4");
}//synchronous function
func1(func2);