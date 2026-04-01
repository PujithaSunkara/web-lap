class Animal
{
 constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
    move(speed){
        console.log(`the ${this.name} moves at a speed of${speed}mph`);
    }
}
class Rabbit extends Animal{
    constructor(name,age,runSpeed)
    {
        super(name,age);
        this.runSpeed=runSpeed;
    }
    run(){
        console.log(`this ${this.name} can run`)
        super.move(this.runSpeed);
    }

}
class Fish extends Animal{
constructor(name,age,swimspeed)
    {
       super(name,age);
        this.swimspeed=swimspeed;
    }
     swim(){
        console.log(`this ${this.name} can swim`)
    }
}
class hawk extends Animal{
    constructor(name,age,flyspeed)
    {
       super(name,age);
        this.flyspeed=flyspeed;
    }
     fly(){
        console.log(`this ${this.name} can swim`)
    }
}


const rabbit=new Rabbit("rabbit",1,25);
const fish=new Fish("fish",2,12);
const hawk1=new hawk("hawk",3,50);
console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);
rabbit.run();
