var BankAccount = /** @class */ (function () {
    function BankAccount(initialBalance, AccountNumber) {
        this._balance = initialBalance;
        this._accountNumber = AccountNumber;
        this._transactions = [];
    }
    BankAccount.prototype._addTransaction = function (description) {
        this._transactions.push("".concat(new Date().toISOString, ":").concat(description));
    };
    BankAccount.prototype.deposit = function (amount) {
        if (amount > 0) {
            this._balance += amount;
            this._addTransaction("Deposit:".concat(amount));
        }
    };
    BankAccount.prototype.getBalance = function () {
        return this._balance;
    };
    return BankAccount;
}());
var account = new BankAccount(4000, '2345');
console.log(account.deposit(3000));
console.log(account.getBalance());
