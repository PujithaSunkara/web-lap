const person1={
    name:"pujitha",
    age:18,
    SAYHELLO:function(){console.log(`hi i am ${this.name}`)}
}
person1.SAYHELLO();
//2
console.log(this)