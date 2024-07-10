class BankAccount{
    private _balance : number;
    private _accountNumber: string;
    private _transactions: string[];

    constructor(initialBalance: number, AccountNumber: string){
        this._balance = initialBalance;
        this._accountNumber = AccountNumber;
        this._transactions = [];
    }
    private _addTransaction(description: string):void{
        this._transactions.push(`${new Date().toISOString}:${description}`);
    }
    public deposit(amount: number): void{
        if(amount> 0){
           this._balance += amount;
           this._addTransaction(`Deposit:${amount}`)
        }
    }
    public getBalance():number{
        return this._balance;
    }

}

const account = new BankAccount(4000,'2345');

console.log(account.deposit(3000));
console.log(account.getBalance());