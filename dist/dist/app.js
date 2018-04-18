"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RetiermentAccount_1 = require("./RetiermentAccount");
const SavingsAccount_1 = require("./SavingsAccount");
const CheckingAccount_1 = require("./CheckingAccount");
let checking = new CheckingAccount_1.CheckingAccount();
let savings = new SavingsAccount_1.SavingsAccount();
let retirment = new RetiermentAccount_1.RetiermentAccount();
console.log(savings.advanceDate(200));
//# sourceMappingURL=app.js.map