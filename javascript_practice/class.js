class product{
    constructor(name,price)
    {
        this.name=name;
        this.price=price;
    }
    displayproduct()
    {
     console.log(`product:${this.name}`);
     console.log(`price:${this.price.toFixed(2)}`);
    }
    total(salary)
    {
        return this.price +(this.price*salary)
    }
}
const salary=0.05
const  product1=new product("shirt",999);
product1.displayproduct();
const  product2=new product("pant",998);
product2.displayproduct();
product1.total(0.05);