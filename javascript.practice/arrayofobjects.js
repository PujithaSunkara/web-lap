const fruits=[{name:"apple",color:"red",calories:95},//object 1
              {name:"orrange",color:"orange",calories:45},//object2
              {name:"banana",color:"green",calories:105},//3
              {name:"coconut",color:"yellow",calories:405},//4
                {name:"goa",color:"yellow",calories:49},//5
   
];//array of objects
console.log(fruits[0].name)
console.log(fruits[2].name)
console.log(fruits[4].calories)
fruits.push({name:"grapes",color:"purple",calories:90}); 
console.log(fruits)
fruits.pop();
console.log(fruits)
fruits.splice(1,2)
console.log(fruits)
//for each
fruits.forEach(fruit =>console.log(fruit));
fruits.forEach(fruit =>console.log(fruit.name));
fruits.forEach(fruit =>console.log(fruit.color));
//map
const fruitsNames=fruits.map(fruit=>fruit.name);
const fruitscolor=fruits.map(fruit=>fruit.color);
const fruitscalories=fruits.map(fruit=>fruit.calories);
console.log(fruitsNames);
console.log(fruitscolor);
console.log(fruitscalories);
//filter()
const yellowfruits=fruits.filter(fruit=>fruit.color==="yellow");
const lowcalfruits=fruits.filter(fruit=>fruit.calories<100);
console.log(lowcalfruits);
console.log(yellowfruits);
//reduce
const maxfruit=fruits.reduce((max,fruit)=>fruit.calories>max.calories?fruit:max);
console.log(maxfruit)
console.log(maxfruit.calories)//same for minimum also