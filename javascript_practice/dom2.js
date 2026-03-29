//step 1 create the element

const newh1=document.createElement("h1")



//step2 add attributes
newh1.textContent="I like pizza";
newh1.style.color="blue";
newh1.id="myhi";
newh1.style.textAlign="center"


//step3 append element to dom
//document.body.append(newh1);
//document.body.prepend(newh1);
document.getElementById("box1").append(newh1);
//document.getElementById("box1").prepend(newh1)(last child)
 //const box2=document.getElementById("box2");
 //document.body.insertBefore(newh1,box2);
 //const boxes=document.querySelectorAll(".box");
 //document.body.insertBefore(newh1,boxes[3])

//remove html element
//document.body.removeChild(newh1)
document.getElementById("box1").removeChild(newh1);