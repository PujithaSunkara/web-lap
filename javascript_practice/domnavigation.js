const element=document.getElementById("fruits")
const firstelement=element.firstElementChild;
firstelement.style.backgroundColor="yellow"//same vegs and dessersts also
//to select all unorder list
const lists=document.querySelectorAll("ul")
lists.forEach(list=>{const first=list.firstElementChild;
    first.style.backgroundColor="yellow"
})

// the entire above thing same for 2. lastelementchild //end
//3.nextelementsibling
const next=document.getElementById("apple")
const nextsibling=next.nextElementSibling;
nextsibling.style.backgroundColor="yellow"
//for fruits ul ,the vegs ul is the nxt sibling and for vegs, fruits is the previous sibling
//4.previouselementsibling
const previous=document.getElementById("ice")
const prevsibling=previous.previousElementSibling;
prevsibling.style.backgroundColor="yellow";
//5.parent (whatever u select a child its represents its parent with all its child)
const elements=document.getElementById("ice")
const parent=elements.parentElement;
parent.style.backgroundColor="yellow";//its represents entire icecream parent and childs
//6.children its represents all children when u give a parent name but we need to typecast to array for children
const child=document.getElementById("fruits");
const children=child.children;
Array.from(children).forEach(child=>{child.style.backgroundColor="yelloW";});