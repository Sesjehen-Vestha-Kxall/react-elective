function print(text) {
    return console.log(text)
}

let wasGood = false;

const res =  print(wasGood? 'it was good' : 'it wasn\'t good');
