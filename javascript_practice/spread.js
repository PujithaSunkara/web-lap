let m=[1,2,3,4,5,6]
let minimum=Math.min(...m);//here...it is spread operator which is used ,when the min and max properties are not applicable directly on arrays
console.log(minimum)


let user="pujitha";
let name=[...user].join("-")
console.log(name);

let fruits=["apple","orange","banana"];
let newfruits = [...fruits];
console.log(newfruits);
let veg=["carrot","beetrrot"]
let food=[...fruits,...veg,"eggs "];
console.log(food);