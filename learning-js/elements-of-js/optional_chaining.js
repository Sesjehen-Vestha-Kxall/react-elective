const adventurer = {
    name: 'Alice',
    cat: {
        name: 'Dinah'
    }
};

const dogName = adventurer.dog?.name;
console.log(dogName);
// prints: undefined

console.log(adventurer.someNonExistentMethod?.());
// prints: undefined
