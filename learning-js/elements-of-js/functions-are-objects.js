function greeting(name, age) {
    console.log(`Hello, my name is ${name}, I'm ${age}`);
}

greeting('Miguel', 21);// OK
greeting();// oof

//to change undefined in name and age
//function greeting(name = 'unknown', age = 'unknown')