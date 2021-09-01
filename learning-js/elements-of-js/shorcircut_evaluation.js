let a;             // undefined (false value)
let b = null;      // null (false value)
let c = undefined; // undefined (false value)
let d = 4;         // number (NOT false)
let e = 'five';    // string (NOT false)

let or = a || b || c || d || e;

console.log(or);


let and = a && b && c && d && e;

console.log(and);
