class BankAccount{

    private _balance:number;

    constructor(initialBalance : number){
        this._balance = initialBalance;
    }

    public Deposit(amount:number){
        if(amount < 0){
            console.log("Amount cannot be negative");
            return;
        }
        this._balance += amount;
    }

    public withDraw(amount:number){
        if(this._balance <= 0 || amount > this._balance){
            console.log("insufficient balance");
            return;
        }
        this._balance -= amount;  
    }

    public getBalance():number{
        return this._balance;
    }
}

let balance = new BankAccount(1500);
balance.Deposit(50);
console.log(balance.getBalance());
balance.withDraw(2000);
console.log(balance.getBalance());


/*
The Encapsulation is basically a data hiding. that bundles the data and methods that operate on data within a single unit.
in the above example the balance is a property that should not be modified by accessing it
the balance should only be modified either by deposit or by withdraw. it cannot be accessed directly like this._balance = 3000 this prevents the balance being modified directly by external class

*/