 let timerid;
function starttimer(){
timerid=setTimeout(()=>window.alert("hello"),3000);
console.log("stater")
}
function cleartimer()
{
clearTimeout(timerid);
console.log("cleared")
}