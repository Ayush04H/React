const bankAccount = {
  owner: "John Doe",
  balance: 1000,
  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited: $${amount}. New balance: $${this.balance}`);
  },
  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds");
    } else {
      this.balance -= amount;
      console.log(`Withdrew: $${amount}. New balance: $${this.balance}`);
    }
  },
  showBalance() {
    console.log(`Current balance: $${this.balance}`);
  },
};
bankAccount.showBalance();
bankAccount.deposit(500);
bankAccount.withdraw(200);
bankAccount.withdraw(1500);
