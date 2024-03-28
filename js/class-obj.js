class Person {
    firstName = 'John';
    lastName = 'Due';
    age = 32;
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const PersonObj = new Person();

console.log(PersonObj.firstName);
console.log(PersonObj.lastName);
console.log(PersonObj.getFullName());
console.log(PersonObj)