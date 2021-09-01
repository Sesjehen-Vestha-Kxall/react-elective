let a;             // undefined (false value)
let b = null;      // null (false value)
let c = undefined; // undefined (false value)
let d = 4;         // number (NOT false)
let e = 'five';    // string (NOT false)

let or = a || b || c || d || e;

// console.log(or);


let and = a && b && c && d && e;

// console.log(and);


function sum(a, b) {
    a = a || 0;
    b = b || 0;

    return a + b;
    //return a && b? a + b : 0;
    //return a && b? a + b : (a? a : (b? b : 0));
}

function sum2(a, b) {
    return (a && b && a + b) || a || b || 0;
}

console.log(sum(4));
console.log(sum2(4));
console.log(sum2());
