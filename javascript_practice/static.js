class hello{
    static pi=3.14159;
    static getdiameter(radius)
    {
        return 2*radius;
    }
    static getcircumference(radius)
    {
        return  this.pi*2*radius;
    }
    static area(radius)
    {
        return this.pi*radius*radius;
    }
   
}
console.log(hello.pi)
console.log(hello.getdiameter(10));
console.log(hello.getcircumference(10))
console.log(hello.area(10))
//example 2
class user{
    static usercount=0;
    constructor(username)
    {
        this.username=username;
        user.usercount++;
    }
    static getusercount()
    {
        console.log(`there are${user.usercount} users`)
    }
    sayhello()
    {
        console.log(`hello ,my username is ${this.username}`)
    }
}
const user1=new user("pujitha")
const user2=new user("lahari")
console.log(user1.username);
console.log(user2.username);
console.log(user.usercount)
user1.sayhello();
user2.sayhello();
user.getusercount();
