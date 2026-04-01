let username = "";
while(username === "" || username === null)
{
    username=window.prompt("Enter your name");

}
console.log(`Hello ${username}`);
//do while
let name;
do
{
    name=window.prompt("Enter your name");

}while(name === "" || name === null);
console.log(`hello ${name}`)
