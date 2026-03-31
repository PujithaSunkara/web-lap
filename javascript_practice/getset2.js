class person1{
    constructor(firstname,lastname,age)
    {
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
    }
    set firstname(newfirstname)
    {
        if(typeof newfirstname==="string"&&newfirstname.length>0)
        {
            this._firstname=newfirstname;
        }
        else
        {
            console.error("first name should not be empty");
        }
    }
}
const obj = new person1(420,67,"pizza");
console.log(obj.firstname);
console.log(obj.lastname);
console.log(obj.age)