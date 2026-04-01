//1
 const numbers=[1,2,3,4,5];
const squares=numbers.map(cube);
console.log(squares);
console.log(numbers.map(display))
function square(element)
{
    return Math.pow(element,2)
}
function cube(element)
{
    return Math.pow(element,3)
}
function display(element)
{
    return element;
}
//2
const students=["puji","abhi","divya","lahari"];
const studenupper=students.map(uppercase);
console.log(studenupper);

function uppercase(element)
{
    return element.toUpperCase();
}
//do same for lowercase change above array to upper before changing into to lowercase
//3
const dates=["2024-1-10","2025-2-20","2026-3-30"];
const newdate=dates.map(formatdates);
console.log(newdate);
function formatdates(element)
{
    const parts=element.split("-");
    return`${parts[1]}/${parts[2]}/${parts[0]}`;

}