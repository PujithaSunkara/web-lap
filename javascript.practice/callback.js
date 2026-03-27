
hello(leave)
function hello(callback)
{
    console.log("hello");
    callback();
}
function wait()
{
    console.log("wait");
}
function goodbye()
{
    console.log("bye");
}
function leave()
{
    console.log("leave")
}


  
sum(page,1,2);
function sum(callback,x,y)
{
    let result=x+y;
    callback(result);

}
function display(result)
{
    console.log(result);
}
function page(result)
{
    document.getElementById("myh1").textContent=result;
}