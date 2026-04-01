const person={//object
    fullname:"pujitha sunkara",
    age:18,
    isstudent:true,
    hobbies:["reading","writing","singing"],
    address:{//nested object
        street:"1234",
        city:"rajahmundry",
        country:"india"
    }


}
console.log(person.fullname)
console.log(person.address.city)
console.log(person.hobbies[2])
//loops for nested object
for(const property in person.address)
{
    console.log(person.address[property]);
}
//2
class men{
    constructor(name,age,...address)
    {
        this.name=name;
        this.age=age;
        this.address=new Address1(...address)
    }
}
class Address1
{
    constructor(street,country,city)
    {
        this.street=street;
        this.country=country;
        this.city=city;
    }
}
const obj=new men("pujitha",18,"1234","rajmundry","india");
const obj1=new men("puji",18,"1234","rajmundry","india");
const obj2=new men("puja",18,"1234","rajmundry","india");
console.log(obj.name);
console.log(obj.address)
console.log(obj.address)