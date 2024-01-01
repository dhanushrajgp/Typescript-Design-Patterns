interface Shape{
    area():number,
    perimeter():number
}

class Circle implements Shape{
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

class Rectangle implements Shape{
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

function calculateArea(shape:Shape):number{
    return shape.area();
}


//client using only the function without knowing the knowledge of implementation details for the function this is what an abstraction in general.

let circle = new Circle(5);
const areaOfCircle =calculateArea(circle);
console.log("Area of circle: ",areaOfCircle);

//Another example for abstraction can be the Date class we use to get year, month and date using the Date class methods.

//A real world example for abstraction is TYPEORM which is an abstraction layer on top of various Databases.


