let username;
document.getElementById("btn").onclick=function()
{
    username=document.getElementById("mytext").value;
    console.log(username);
    document.getElementById("hi").textContent="Hello Everyone";
}