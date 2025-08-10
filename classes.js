// Bank Account Transactions
class BankAccount {
    #balance = 0;
    #transactionHistory = [];

    constructor(ownerName) {
        this.name = ownerName;
    }

    withdraw(amount) {
        if (amount <= 0) {
            console.log(`Invalid amount to withdraw: ${amount}`);
            return;
        }

        if (amount > this.#balance) {
            console.log(`You don't have enough balance to withdraw ${amount}`);
            return;
        }

        this.#balance -= amount;

        this.#transactionHistory.push({
            type: 'withdraw',
            amount: amount,
            date: new Date()
        });
    }

    getBalance() {
        return this.#balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
        this.#transactionHistory.push({
            type: 'deposit',
            amount: amount,
            date: new Date()
        });
    }

    getTransactionHistory() {
        return [...this.#transactionHistory];
    }
}

const acc = new BankAccount('Jenna');
acc.deposit(5000);
acc.withdraw(500);
console.log(acc.getBalance());

console.log(acc.getTransactionHistory());

class SavingsAccount extends BankAccount {
    interestRate;

    constructor(ownerName, interestRate) {
        super(ownerName);
        this.interestRate = interestRate;
    }

    addInterest() {
        const balance = this.getBalance();
        const interest = parseFloat((balance * this.interestRate).toFixed(2));
        this.deposit(interest);
        console.log(`Interest of ${interest} added to account`);
    }

    withdraw(amount) {
        if (amount > 10000) {
            console.log('Withdraw limit exceeded.Max per transaction is 10,000');
            return;
        }
        super.withdraw(amount);
    }
}

const savings = new SavingsAccount("Jenna", 0.02);
savings.deposit(50000);
savings.addInterest(); 
savings.withdraw(8000);
console.log(savings.getTransactionHistory());



// Todo List with Categories and Status
class TodoList {
    #tasks = [];
    #nextId = 1;
    addTask(title, category) {
        this.#tasks.push({
            id: this.#nextId++,
            title: title,
            category: category,
            status: "pending",
            dateAdded: new Date()
        })
    }

    markAsDone(id) {
        const task = this.#tasks.find(task => task.id === id);
        if (task) {
            task.status = "done";
            console.log(`Task ${id} marked as done`);
        }
    }

    getTasksByCategory(category) {
        return this.#tasks.filter(task => task.category === category);
    }

    getPendingTasks() {
        return this.#tasks.filter(task => task.status === 'pending');
    }

    deleteTask(id) {
        const index = this.#tasks.findIndex(task => task.id === id);
        if(index !== -1) {
            this.#tasks.splice(index, 1);
            console.log(`Task ${id} deleted`);
        } else {
            console.log(`Task with ID ${id} not found`);
        }
    }

    getAllTasks () {
        return [...this.#tasks];
    }
}

const todos = new TodoList();

todos.addTask("Buy groceries", "Personal");
todos.addTask("Finish project report", "Work");
todos.addTask("Pay electricity bill", "Personal");

todos.markAsDone(2);

console.log("Personal tasks:", todos.getTasksByCategory("Personal"));
console.log("Pending tasks:", todos.getPendingTasks());

todos.deleteTask(2);
console.log("All tasks after deletion:", todos.getAllTasks()); 