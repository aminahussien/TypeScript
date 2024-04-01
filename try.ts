//Q1
let arr1 : number[]=[] ;
arr1.push(2,2);
//------------------------------------------------------------
//Q2
let arr2 : (string|number)[]=[];
for (let i of arr2) {
    console.log(i);
}
//-------------------------------------------------------------
//Q3
let variable : number| boolean;
variable=10;
variable= true;
//--------------------------------------------------------------
//Q4
function func (x?,y?)
{
    return x+y;
}
func();
//---------------------------------------------------------------
//Q5
interface IEmployee {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
}
class Employee implements IEmployee{
    id: number;
    name: string;
    private _username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    constructor(obj:IEmployee){
        this.id =obj.id;
        this.name = obj.name;
        this._username = obj.username;
        this.email = obj.email;
        this.address = obj.address;
    }
    get username(): string {
        return this._username;
    }
}
const employeeData = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
            lat: "-37.3159",
            lng: "81.1496"
        }
    }
};
const employee = new Employee(employeeData);
//----------------------------------------------------------------------------
//Q6
class Manager extends Employee {
    constructor(obj: IEmployee) {
        super(obj);
    }

    viewEmployeeAddress(employee: Employee): void {
        console.log('Employee Address:');
        console.log(employee.address);
    }
}
//----------------------------------------------------------------------------
//Q7 
interface IAccount{
    date_of_openinig:Date;

    addCustomer():void ;
    removeCustomer():void; 
}


class Account implements IAccount {
    acc_no: number;
    balance: number;

    date_of_openinig:Date;

    debitAmount():void{
        console.log("debit amount method");
    }
    creditAmount():void{
        console.log("credit amount method");
    }
    getBalance():void{
        console.log(this.balance);
    }

    addCustomer():void {

    }
    removeCustomer():void{

    }
}

class currentAccount extends Account{
    //interst_rate : number;
    addCustomer():void {

    }
    removeCustomer():void{

    }
}
class savingAccount extends Account{
    //interst_rate : number;
    addCustomer():void {

    }
    removeCustomer():void{

    }
}