class Rectangle
{
    constructor(width,height)
    {
        this.width=width;
        this.height=height;
    }
    set width(newwidth)
    {
        if(newwidth>0)
        {
            this._width=newwidth;//private property
        }
        else
        
            {
                console.error(" width must be a positive number");
            }
    }
    set height(newheight)
    {
        if(newheight>0)
        {
            this._height=newheight;//private property
        }
        else
        
            {
                console.error(" height must be a positive number");
            }
    }
    get width()
    {
        return this._width;
    }
     get height()
    {
        return this._height;
    }
    get area()//area is additiional property which is not in the costructor as width and height but with get and set we can access additinal propeerties like this
    {
        return this._width*this._height;
    }
}
const rectangle=new Rectangle(3,4);
rectangle.width=1;//we can modify like this even the values are given in the object creation below ,  with get and set
rectangle.height=6;//same as above
console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);
