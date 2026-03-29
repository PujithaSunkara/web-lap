
//Fisher yates algorithm
const cards=['A',2,3,4,5,6,7,8,10,'J','Q','K']
Suffle(cards);
console.log(cards);
function Suffle(array)
{
    for(let i=array.length-1;i>0;i--)
    {
        const random=Math.floor(Math.random()*(i+1));
        [array[i],array[random]]=[array[random],array[i]]

    }
}