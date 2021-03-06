"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorators_1 = require("./decorators");
var TransactionOrigin_1 = require("./TransactionOrigin");
var moment = require("moment");
var CheckingAccount = (function () {
    function CheckingAccount() {
        this.balance = 10000;
        this.dateOpened = moment('2017-10-21');
    }
    CheckingAccount.prototype.withdrawMoney = function (amount, description, transactionOrigin) {
        var currentBalance = this.balance;
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
    };
    CheckingAccount.prototype.depositMoney = function (amount, description) {
        this.balance += amount;
        this.resultBalance = this.balance;
        this.success = true;
        this.description = description;
        this.errorMessage = "";
        this.transactionDate = new Date();
        return;
    };
    CheckingAccount.prototype.advanceDate = function (numDays) {
        var dateCount = this.dateOpened;
        for (var i = 0; i <= numDays; i++) {
            dateCount.add(1, 'days');
            if (dateCount.date() === 1) {
                var interest = ((this.balance * 0.1) / 12);
                this.balance + interest;
            }
        }
    };
    CheckingAccount = __decorate([
        decorators_1.displayClassNameWithPurpose('to prove typescript wrong')
    ], CheckingAccount);
    return CheckingAccount;
}());
exports.CheckingAccount = CheckingAccount;
