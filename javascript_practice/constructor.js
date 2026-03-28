function Car(make,model,year,color){       //car is the 
    this.make=make,
    this.model=model,
    this.year=year,
    this.color=color
    this.drive=function(){console.log(`you drive the${this.model}`)}
}
const Car1=new Car("Ford","Mustang",2024,"red");//object
const Car2=new Car("Ford","bullet",2024,"red");//object
console.log(Car1.make);
console.log(Car1.model);
console.log(Car1.year);
console.log(Car1.color);

console.log(Car2.make);
console.log(Car2.model);
console.log(Car2.year);
console.log(Car2.color);
Car1.drive();
Car2.drive();