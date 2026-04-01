const names=["pujitha","divya","sandhya","pravalika"]
const people=[{
    "name":"pujitha",
    "age":18,
    "isemploye":true
},

{
    "name":"puji",
    "age":34,
    "isemploye":true
},
{
    "name":"lahari",
    "age":20,
    "isemploye":false
},
{
    "name":"divya",
    "age":30,
    "isemploye":true
}
]
const person={
    "name":"pujitha",
    "age":30,
    "isemploye":true,
    "hobbies":["jellyfish","cooking","danching"]
};
const result=JSON.stringify(people);//use this line and below line for all like names,people,person
console.log(result);
//parse reverse operation of json
const name=`["pujitha","divya","sandhya","pravalika"]`
const peoples=`{"name":"pujitha","age":18,"isemploye":true}`
const persons=`[{"name":"pujitha","age":18,"isemploye":true},
                {"name":"puji","age":34,"isemploye":true},
                {"name":"lahari","age":20,"isemploye":false},
                {"name":"divya", "age":30, "isemploye":true}
]`;

const parseresult=JSON.parse(persons);
console.log(parseresult)
//fetching
fetch("people.json")
.then(response=>response.json())
.then(values=>values.forEach(value=>console.log(value.name)))//for entire file place value only like .then(value=>console.log(value))
 