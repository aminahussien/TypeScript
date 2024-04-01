var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Q1
var arr1 = [];
arr1.push(2, 2);
//------------------------------------------------------------
//Q2
var arr2 = [];
for (var _i = 0, arr2_1 = arr2; _i < arr2_1.length; _i++) {
    var i = arr2_1[_i];
    console.log(i);
}
//-------------------------------------------------------------
//Q3
var variable;
variable = 10;
variable = true;
//--------------------------------------------------------------
//Q4
function func(x, y) {
    return x + y;
}
func();
var Employee = /** @class */ (function () {
    function Employee(obj) {
        this.id = obj.id;
        this.name = obj.name;
        this._username = obj.username;
        this.email = obj.email;
        this.address = obj.address;
    }
    Object.defineProperty(Employee.prototype, "username", {
        get: function () {
            return this._username;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var employeeData = {
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
var employee = new Employee(employeeData);
//----------------------------------------------------------------------------
//Q6
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(obj) {
        return _super.call(this, obj) || this;
    }
    Manager.prototype.viewEmployeeAddress = function (employee) {
        console.log('Employee Address:');
        console.log(employee.address);
    };
    return Manager;
}(Employee));
var Account = /** @class */ (function () {
    function Account() {
    }
    Account.prototype.debitAmount = function () {
        console.log("debit amount method");
    };
    Account.prototype.creditAmount = function () {
        console.log("credit amount method");
    };
    Account.prototype.getBalance = function () {
        console.log(this.balance);
    };
    Account.prototype.addCustomer = function () {
    };
    Account.prototype.removeCustomer = function () {
    };
    return Account;
}());
var currentAccount = /** @class */ (function (_super) {
    __extends(currentAccount, _super);
    function currentAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //interst_rate : number;
    currentAccount.prototype.addCustomer = function () {
    };
    currentAccount.prototype.removeCustomer = function () {
    };
    return currentAccount;
}(Account));
var savingAccount = /** @class */ (function (_super) {
    __extends(savingAccount, _super);
    function savingAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //interst_rate : number;
    savingAccount.prototype.addCustomer = function () {
    };
    savingAccount.prototype.removeCustomer = function () {
    };
    return savingAccount;
}(Account));
