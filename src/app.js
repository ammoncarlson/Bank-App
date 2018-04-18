"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RetiermentAccount_1 = require("./RetiermentAccount");
var SavingsAccount_1 = require("./SavingsAccount");
var CheckingAccount_1 = require("./CheckingAccount");
var checking = new CheckingAccount_1.CheckingAccount();
var savings = new SavingsAccount_1.SavingsAccount();
var retirment = new RetiermentAccount_1.RetiermentAccount();
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
