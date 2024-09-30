/* 
Example 4 - Complex tasks

Write a script for managing a personal account of an Internet bank. 

There is an account object in which it is necessary to implement methods for working with balance and transaction history.
*/

/*
 * There are only two types of transaction.
 * You can deposit or withdraw money from your account.
 */

const Transaction = {
	DEPOSIT: 'deposit',
	WITHDRAW: 'withdraw',
};

const account = {
	balance: 0,
	transactions: [
		{
			id: 1,
			type: 'deposit',
			amount: 1000,
		},
	],

	createTransaction(amount, type) {
		const transaction = {
			id: Date.now(), //  returns the number of milliseconds elapsed since the epoch (January 1, 1970)
			type,
			amount,
		};

		return transaction;
	},

	/* Task 1: ====================================================
    This deposit() method is responsible for adding the amount to the balance.
      a. Calls createTransaction to create a transaction object using 'DEPOSIT' type
      b. ADDS transaction object to the END of transactions history
      c. ADDS the amount to the current account balance */

	deposit(amount) {
		const transaction = this.createTransaction(amount, Transaction.DEPOSIT);

		this.transactions.push(transaction);

		this.balance += amount;
	},

	withdraw(amount) {
		const transaction = this.createTransaction(amount, Transaction.WITHDRAW);

		this.transactions.push(transaction);

		this.balance -= amount;
	},
};
console.log(account);

account.deposit(3000);
account.withdraw(1000);
account.withdraw(100);
