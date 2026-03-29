//step 1 create the element

const newlist=document.createElement("li")



//step2 add attributes
newlist.textContent="coconut";
newlist.style.backgroundColor="blue";
newlist.id="myhi";
newlist.style.fontSize="bold"


//step3 append element to dom
//document.body.append(newlist);
//document.body.prepend(newlist);
document.getElementById("fruits").append(newlist);
//document.getElementById("fruits").prepend(newlist)(last child)


 //const orange=document.getElementById("orange");
 //document.getElementById("fruits").insertBefore(newlist,orange);
 //const listitems=document.querySelectorAll("#fruits li");
 //document.getElementById("fruits").insertBefore(newlist,listitems[0]);

//remove html element
//document.body.removeChild(newlist)
document.getElementById("fruits").removeChild(newlist);