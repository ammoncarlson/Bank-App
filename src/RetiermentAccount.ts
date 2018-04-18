import {Account} from "./Account";
import { displayClassName, displayClassNameWithPurpose } from "./decorators";
import {TransactionOrigin} from "./TransactionOrigin";
import {Transaction} from "./Transaction";
import {AccountType} from "./AccountType";
import * as moment from 'moment'


@displayClassNameWithPurpose('to prove typescript wrong')
export class RetiermentAccount implements Account {


    constructor(){
        this.dateOpened = moment('2017-10-21');
    }

    accountHolderName: string;
    accountHolderBirthDate: Date;
    balance: number = 1000000;
    accountType: AccountType;
    accountHistory: Transaction[];
    success: boolean;
    resultBalance: number;
    amount: number;
    description: string;
    transactionDate: Date;
    errorMessage: string;
    dateOpened: any;
    monthlyTransactions: number = 6;
    userAge: number = 64;
    earlyWithdrawal: number = (this.balance * .1);


    withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction {
        let currentBalance = this.balance;
        this.accountType = 3;
        this.amount = amount;
        if (transactionOrigin == 1 || transactionOrigin == 2) {
            if(this.monthlyTransactions >=1){
                if(amount > currentBalance){
                    this.success = false;
                    this.errorMessage = "Nope";
                    this.resultBalance = this.balance;
                    this.transactionDate = new Date();
                    this.description = description;
                }
                else {
                    if(this.userAge <65){
                        this.balance-= this.earlyWithdrawal;
                        this.success = true;
                        this.errorMessage = '';
                        this.resultBalance = this.balance -= amount;
                        this.transactionDate = new Date();
                        this.description = description;
                        this.monthlyTransactions--
                    }
                    else {
                        this.success = true;
                        this.errorMessage = '';
                        this.resultBalance = this.balance -= amount;
                        this.transactionDate = new Date();
                        this.description = description;
                        this.monthlyTransactions--;
                    }
                }
            }
            else {
                this.errorMessage = "number of transactions is too much"
            }
        }
        else {
            this.amount = amount;
            if(amount > currentBalance){
                this.success = false;
                this.errorMessage = "Can't";
                this.resultBalance = this.balance;
                this.transactionDate = new Date;
                this.description = description;
            }
            else {
                this.success = true;
                this.errorMessage = "";
                this.resultBalance = this.balance-= amount;
                this.transactionDate = new Date();
                this.description = description;
            }
        }
        return;
    }

    depositMoney(amount: number, description: string): Transaction {
        this.balance += amount;
        this.resultBalance = this.balance;
        this.success = true;
        this.description = description;
        this.errorMessage = "";
        this.transactionDate= new Date();

        return;
    }

    currendtDate: Date;

    advanceDate(numDays: number){
        let dateCount = this.dateOpened;
        for(let i = 0; i <= numDays; i++){
            dateCount.add(1,'days');
            if (dateCount.date() === 1){
                let interest = ((this.balance * 0.3)/12);
                this.balance + interest;

            }
        }
    }
}