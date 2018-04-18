"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RetiermentAccount_1 = require("./RetiermentAccount");
const SavingsAccount_1 = require("./SavingsAccount");
const CheckingAccount_1 = require("./CheckingAccount");
let checking = new CheckingAccount_1.CheckingAccount();
let savings = new SavingsAccount_1.SavingsAccount();
let retirment = new RetiermentAccount_1.RetiermentAccount();
console.log(savings.advanceDate(200));
/*
console.log(savings.withdrawMoney(100,"Games",2));
console.log(savings.success);
console.log(savings.errorMessage);
console.log(savings.transactionDate);
console.log(savings.balance);
console.log(savings.description);
console.log(savings.monthlyTransactions);

console.log(checking.withdrawMoney(300,"Xbox One X",1));
console.log(checking.success);
console.log(checking.errorMessage);
console.log(checking.transactionDate);
console.log(checking.balance);
console.log(checking.description);

console.log(retirment.withdrawMoney(4500,"Car",2));
console.log(retirment.success);
console.log(retirment.errorMessage);
console.log(retirment.transactionDate);
console.log(retirment.balance);
console.log(retirment.description);
console.log(retirment.monthlyTransactions);*/
//# sourceMappingURL=app.js.map