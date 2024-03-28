class Parent{
    static msg() {
        console.log('Message from parent');
    }
}

class Child extends Parent{

}

// Child.msg();
Parent.msg();