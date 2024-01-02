class Animal{
    constructor(protected name:string){ }
    move(distance:number):void{
        console.log(`the ${this.name} moved ${distance} meters.`);
    }
}


class Dog extends Animal{
    constructor(protected name:string){
        super(name);
    }
}

let dog = new Dog("Dog");
dog.move(5);

/* 
this is an example of inheritance 
the child class dog inherits all the methods and properties from the parent class 
which can be accessed by creating an object of the child class this is a
concept of inheritance.
in the above example even though there's no method named move is defined in dog class
we are able to use the move method due to the method inherited from it's parent class.
Animal
*/
