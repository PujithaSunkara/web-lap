const min=1;
const max=100;
const ans=Math.floor(Math.random()*(min - max + 1)) + min;
let attempts=0;
let guess;
let running=true
while(running)
{
    guess=window.prompt(`enter a number between ${max}-${min}`);
    guess=Number(guess);
    if(isNaN(guess))
    {
        window.alert("Enter the valid number");
    }
    else if(guess<min||guess>max)
    {
         window.alert("Enter the valid number");
    }
    else
    {
        attempts++;
        if(guess<ans)
        {
            window.alert("its too low");
        }
        else if(guess>ans)
        {
           window.alert("its too high");
        }
        else
        {
            window.alert(`CORRECT The answer was ${ans}.It took you ${attempts} attempts`);
            running=false;
        }
    }
}