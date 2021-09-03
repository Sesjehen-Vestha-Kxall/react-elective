function getValues(idA = 'number-a', idB = 'number-b') {
    return [
        parseFloat(document.getElementById(idA)?.value),
        parseFloat(document.getElementById(idB)?.value)
    ]
}

function operate(op) {
    let r;
    let [a, b] = getValues();
    switch (op) {
        case '+': r = a + b; break;
        case '-': r = a - b; break;
        case '*': r = a * b; break;
        case '/': r = a / b;
    }
    document.getElementById('result').textContent = `result: ${r !== 0? r || 'something went wrong!' : 0}`; 
    // Q: Is this last line crap?
    // A: Probably... 
    // A: controller.js has a better way to do this :)
}

document.getElementById('sum').onclick = () => operate('+');
document.getElementById('sub').onclick = () => operate('-');
document.getElementById('mul').onclick = () => operate('*');
document.getElementById('div').onclick = () => operate('/');
