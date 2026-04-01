let loggedin=false;
let username;
let password;
while(!loggedin)
{
    username=window.prompt("Enter the username");
    password=window.prompt("Enter the password");
    if(username==="puji" && password==="puji123")
    {
        loggedin=true;
        console.log("you are logged in");
    }
    else
    {
        console.log("your not logged in")
    }
}
//do while
let logged=false;
let user;
let pass;
do
{
    user=window.prompt("Enter the username");
    pass=window.prompt("Enter the password");
    if(user==="puji" && pass==="puji123")
    {
        loggedin=true;
        console.log("you are logged in");
    }
    else
    {
        console.log("your not logged in")
    }
}while(!loggedin);
