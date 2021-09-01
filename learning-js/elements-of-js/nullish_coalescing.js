
console.log(null ?? 'default string');


console.log('' ?? 'not null');


console.log(0 ?? 42);


console.log(undefined ?? 42);

// The nullish operator only works returing the rsvalue
// when the lsvalue is null or undefined, else it returns the lsvalue

// (lsvalue = left side value)
// (rsvalue = right side value)
