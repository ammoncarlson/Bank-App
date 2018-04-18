"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const decorators_1 = require("./decorators");
const TransactionOrigin_1 = require("./TransactionOrigin");
const moment = require("moment");
let CheckingAccount = class CheckingAccount {
    constructor() {
        this.balance = 10000;
        this.dateOpened = moment('2017-10-21');
    }
    withdrawMoney(amount, description, transactionOrigin) {
        let currentBalance = this.balance;
        this.accountType = 1;
        if (transactionOrigin == TransactionOrigin_1.TransactionOrigin.branch || TransactionOrigin_1.TransactionOrigin.phone || TransactionOrigin_1.TransactionOrigin.web) {
            this.amount = amount;
            if (amount > currentBalance) {
                this.success = false;
                this.errorMessage = "The amount is too high";
                this.resultBalance = this.balance;
                this.transactionDate = new Date();
                this.description = description;
            }
            else {
                this.success = true;
                this.errorMessage = "";
                this.resultBalance = this.balance -= amount;
                this.transactionDate = new Date();
                this.description = description;
            }
            return;
        }
    }
    depositMoney(amount, description) {
        this.balance += amount;
        this.resultBalance = this.balance;
        this.success = true;
        this.description = description;
        this.errorMessage = "";
        this.transactionDate = new Date();
        return;
    }
    advanceDate(numDays) {
        let dateCount = this.dateOpened;
        for (let i = 0; i <= numDays; i++) {
            dateCount.add(1, 'days');
            if (dateCount.date() === 1) {
                let interest = ((this.balance * 0.1) / 12);
                this.balance + interest;
            }
        }
    }
};
CheckingAccount = __decorate([
    decorators_1.displayClassNameWithPurpose('to prove typescript wrong')
], CheckingAccount);
exports.CheckingAccount = CheckingAccount;
//# sourceMappingURL=CheckingAccount.js.map