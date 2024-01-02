interface Shape{
    area():number,
    perimeter():number
}

class Circle1 implements Shape{
    constructor(private radius:number){
        this.radius = radius;
    }

    area():number{
        return Math.PI * this.radius * this.radius;
    }

    perimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle1 implements Shape{
    constructor(private width:number,private height:number){
        this.width = width;
        this.height = height;
    }

    area():number{
        return this.height * this.width;
    }

    perimeter(): number {
        return 2 * (this.width + this.height);
        
    }
}

function calculateArea1(shape:Shape):number{
    return shape.area();
}


let circle1 = new Circle1(5);
const areaOfCircle1 =calculateArea(circle1);
console.log("Area of circle: ",areaOfCircle);

/* the subtype polymorphism in typescript 
Polymorphism enables you to write more generic and reusable code that can work with different types of objects.
for example Circle1 and Rectangle1 are different classes that share some common functionality, but also have their own specific behavior.
Polymorphism means that you can use the same name for different methods or properties in different classes, 
as long as they have the same signature (i.e., the same number and type of parameters) or are compatible with the base class.

There are two main ways to achieve polymorphism with TypeScript: overriding and overloading. 
Overriding means that you can redefine a method or property in a subclass that inherits from a base class.
 Overloading means that you can define multiple methods or properties with the same name but different signatures in the same class or interface.


 in the express framework we can create multiple middlewares with same parameters which is a common real world
 example for a subtype polymorphism.    
*/