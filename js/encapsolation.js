/*
function Profile() {
    let Details = "Profile Details"

    return {
        Update: function () {
            console.log('Profile Update Process');
        },
        PhotoUpload: function () {
            console.log('Photo Update Process');
        },
        PassReset: function() {
            console.log('Password Reset Process');
        }
    }
}

const learer = Profile();

learer.Update();
learer.PhotoUpload();
learer.PassReset();
*/

class BankAccount {
    #balance = 100;

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        this.#balance -= amount;
    }

    checkBalance() {
        return this.#balance;
    }
}

const account = new BankAccount();

account.deposit(300);
account.withdraw(50);
console.log(account.checkBalance());